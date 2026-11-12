#!/usr/bin/env bash
set -euo pipefail

# Always create an isolated local database. Never accepts a hosted database URL.
task_container="thiagocanali-content-test-${RANDOM}-${RANDOM}"
trap 'docker rm -f "$task_container" >/dev/null 2>&1 || true' EXIT
docker run --rm -d --name "$task_container" -e POSTGRES_HOST_AUTH_METHOD=trust postgres:17-alpine >/dev/null
for attempt in {1..30}; do
  if docker exec "$task_container" pg_isready -U postgres >/dev/null 2>&1; then break; fi
  sleep 1
done
docker exec -i "$task_container" psql -U postgres -v ON_ERROR_STOP=1 <<'SQL'
create role anon nologin;
create role authenticated nologin;
create role service_role nologin bypassrls;
grant usage on schema public to anon, authenticated, service_role;
SQL
for migration in supabase/migrations/*.sql; do
  docker exec -i "$task_container" psql -U postgres -v ON_ERROR_STOP=1 < "$migration"
done
docker exec -i "$task_container" psql -U postgres -v ON_ERROR_STOP=1 < supabase/tests/content_security.sql
echo 'Editorial schema and access policies passed on PostgreSQL 17.'
