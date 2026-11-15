#!/usr/bin/env bash
set -euo pipefail
# Isolated ephemeral PostgreSQL; never connect to a hosted database.
container="thiagocanali-neon-schema-$$-$RANDOM"
trap 'docker rm -f "$container" >/dev/null 2>&1 || true' EXIT
docker run --rm -d --name "$container" -e POSTGRES_HOST_AUTH_METHOD=trust postgres:18-alpine >/dev/null
ready=0
for attempt in {1..45}; do
  if docker exec "$container" psql -U postgres -v ON_ERROR_STOP=1 -Atqc 'select 1' >/dev/null 2>&1; then ready=1; break; fi
  sleep 1
done
if [[ "$ready" -ne 1 ]]; then echo 'PostgreSQL 18 unavailable' >&2; exit 1; fi
# Docker's init process may accept a connection, restart, then briefly close
# the socket. Retry the first real SQL operation after final startup.
migration_ready=0
for attempt in {1..15}; do
  if docker exec -i "$container" psql -U postgres -v ON_ERROR_STOP=1 < neon/migrations/0001_editorial.sql; then
    migration_ready=1
    break
  fi
  sleep 1
done
if [[ "$migration_ready" -ne 1 ]]; then
  echo 'Neon schema migration failed after PostgreSQL startup retries.' >&2
  docker logs "$container" >&2 || true
  exit 1
fi
docker exec -i "$container" psql -U postgres -v ON_ERROR_STOP=1 <<'SQL'
begin;
insert into public.content_entries (kind,slug,title,status,published_at)
values ('project','visible','Visible','published',now()-interval '1 day'),
       ('project','draft','Draft','draft',null),
       ('project','future','Future','published',now()+interval '1 day');
do $$
begin
  if (select count(*) from public.published_content) <> 1 then
    raise exception 'Published-only view exposed drafts or future content';
  end if;
  begin
    insert into public.content_entries (kind,slug,title,status)
    values ('article','invalid','Invalid','published');
    raise exception 'Missing publication timestamp accepted';
  exception when check_violation then null;
  end;
  begin
    insert into public.content_entries (kind,slug,title,status,published_at)
    values ('project','visible','Duplicate','published',now());
    raise exception 'Duplicate kind/slug accepted';
  exception when unique_violation then null;
  end;
  begin
    insert into public.content_entries (kind,slug,title)
    values ('article','invalid slug','Invalid');
    raise exception 'Invalid slug accepted';
  exception when check_violation then null;
  end;
  begin
    insert into public.content_entries (kind,slug,title,external_url)
    values ('article','unsafe','Unsafe','javascript:alert(1)');
    raise exception 'Unsafe URL accepted';
  exception when check_violation then null;
  end;
end $$;
rollback;
SQL
# Test a simulated runtime reader with explicit least-privilege grants.
docker exec "$container" psql -U postgres -v ON_ERROR_STOP=1 -c 'create role editorial_reader nologin'
docker exec -i "$container" psql -U postgres -v ON_ERROR_STOP=1 -v reader_role=editorial_reader < neon/roles/grant_editorial_reader.sql
docker exec -i "$container" psql -U postgres -v ON_ERROR_STOP=1 <<'SQL'
begin;
insert into public.content_entries (kind,slug,title,status,published_at)
values ('project','visible','Visible','published',now()-interval '1 day'),
       ('project','private','Private','draft',null);
set local role editorial_reader;
do $reader$
begin
  if (select count(*) from public.published_content) <> 1 then
    raise exception 'Reader can see unpublished entries';
  end if;
  begin
    perform count(*) from public.content_entries;
    raise exception 'Reader accessed base table';
  exception when insufficient_privilege then null;
  end;
  begin
    update public.published_content set title = 'Tampered' where slug = 'visible';
    raise exception 'Reader modified published view';
  exception when insufficient_privilege then null;
  end;
  begin
    insert into public.content_entries (kind,slug,title) values ('article','intrusion','Denied');
    raise exception 'Reader inserted editorial entry';
  exception when insufficient_privilege then null;
  end;
end $reader$;
rollback;
SQL
echo 'Neon schema and least-privilege reader tests passed on isolated PostgreSQL 18.'
