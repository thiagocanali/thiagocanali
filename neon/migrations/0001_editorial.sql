-- Independent Neon PostgreSQL editorial schema. Apply with a migration-only role.
-- Runtime reader must have SELECT on the published_content view only.
create extension if not exists pgcrypto;

create table if not exists public.content_entries (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('project','experiment','article')),
  slug text not null check (length(slug) <= 120 and slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  title text not null check (length(trim(title)) > 0),
  summary text not null default '',
  body text not null default '',
  technologies text[] not null default '{}',
  repository_url text check (repository_url is null or repository_url ~ '^https://[^/@?#[:space:]]+([/?#][^[:space:]@]*)?$'),
  external_url text check (external_url is null or external_url ~ '^https://[^/@?#[:space:]]+([/?#][^[:space:]@]*)?$'),
  status text not null default 'draft' check (status in ('draft','published','archived')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (kind, slug),
  constraint published_requires_date check (status <> 'published' or published_at is not null)
);

create index if not exists content_entries_public_listing_idx
  on public.content_entries (kind, published_at desc, id desc)
  where status = 'published';

-- Security boundary: the runtime role can only see this view, never the base table.
create or replace view public.published_content
  with (security_barrier = true, security_invoker = false)
as select id, kind, slug, title, summary, body, technologies,
          repository_url, external_url, published_at
   from public.content_entries
   where status = 'published' and published_at <= now();

revoke all on public.content_entries from public;
revoke all on public.published_content from public;
-- Provision a separate least-privilege runtime role and grant SELECT on
-- public.published_content to it via a private, environment-specific migration.
-- Never use the database owner or migration role for application reads.
