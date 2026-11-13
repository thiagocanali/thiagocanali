#!/usr/bin/env bash
set -euo pipefail

# Always create an isolated local database. Never accepts a hosted database URL.
task_container="thiagocanali-content-test-${RANDOM}-${RANDOM}"
trap 'docker rm -f "$task_container" >/dev/null 2>&1 || true' EXIT
docker run --rm -d --name "$task_container" -e POSTGRES_HOST_AUTH_METHOD=trust postgres:17-alpine >/dev/null
# Docker can report ready during temporary startup before its final server restart.
# Retry the first SQL connection too, not just pg_isready.
ready=0
for attempt in {1..45}; do
  if docker exec "$task_container" psql -U postgres -v ON_ERROR_STOP=1 -Atqc 'select 1' >/dev/null 2>&1; then
    ready=1
    break
  fi
  sleep 1
done
if [[ "$ready" -ne 1 ]]; then
  echo 'PostgreSQL did not become ready within 45 seconds.' >&2
  docker logs "$task_container" >&2 || true
  exit 1
fi
# Wait for the final startup to settle, and retry role creation on transient
# local socket disconnects. A failed transaction is retried from scratch.
roles_ready=0
for attempt in {1..10}; do
  if docker exec -i "$task_container" psql -U postgres -v ON_ERROR_STOP=1 -1 <<'SQL'
create role anon nologin;
create role authenticated nologin;
create role service_role nologin bypassrls;
grant usage on schema public to anon, authenticated, service_role;
SQL
  then
    roles_ready=1
    break
  fi
  sleep 1
done
if [[ "$roles_ready" -ne 1 ]]; then
  echo 'Could not initialize PostgreSQL test roles.' >&2
  docker logs "$task_container" >&2 || true
  exit 1
fi
for migration in supabase/migrations/*.sql; do
  docker exec -i "$task_container" psql -U postgres -v ON_ERROR_STOP=1 < "$migration"
done
docker exec -i "$task_container" psql -U postgres -v ON_ERROR_STOP=1 < supabase/tests/content_security.sql
echo 'Editorial schema and access policies passed on PostgreSQL 17.'
