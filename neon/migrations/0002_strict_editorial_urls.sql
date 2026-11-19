-- Tighten editorial URL constraints on existing isolated Neon databases.
-- Prevent credential-bearing URLs (https://user@host/path) from being stored.
-- The migration intentionally fails if existing rows violate the new policy.
alter table public.content_entries
  drop constraint if exists content_entries_repository_url_check,
  drop constraint if exists content_entries_external_url_check;

alter table public.content_entries
  add constraint content_entries_repository_url_check
    check (repository_url is null or repository_url ~ '^https://[^/@?#[:space:]]+([/?#][^[:space:]@]*)?$'),
  add constraint content_entries_external_url_check
    check (external_url is null or external_url ~ '^https://[^/@?#[:space:]]+([/?#][^[:space:]@]*)?$');
