-- Run as database owner only after creating a dedicated runtime login role.
-- Supply the role name via psql variable: psql -v reader_role=... -f ...
-- The runtime password/connection string must be provisioned outside Git.
\if :{?reader_role}
\else
\echo 'Missing -v reader_role=<existing_role>'
\quit 2
\endif

-- Safe identifier quoting: role name is supplied as a psql identifier variable.
revoke all on public.content_entries from :"reader_role";
revoke all on public.published_content from :"reader_role";
grant usage on schema public to :"reader_role";
grant select on public.published_content to :"reader_role";
-- This reader receives no INSERT/UPDATE/DELETE or base table SELECT.
