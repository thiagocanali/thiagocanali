begin;

create table public.content_entries (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('project', 'experiment', 'article')),
  slug text not null check (length(slug) <= 120 and slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  title text not null check (length(btrim(title)) between 1 and 160),
  summary text not null check (length(btrim(summary)) between 1 and 500),
  body text not null default '' check (length(body) <= 100000),
  technologies text[] not null default '{}' check (cardinality(technologies) <= 30),
  repository_url text check (repository_url is null or (length(repository_url) <= 2048 and repository_url ~ '^https://[^[:space:]@]+$')),
  external_url text check (external_url is null or (length(external_url) <= 2048 and external_url ~ '^https://[^[:space:]@]+$')),
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint content_entries_kind_slug_key unique (kind, slug),
  constraint content_entries_publication_required check (status <> 'published' or published_at is not null)
);

comment on table public.content_entries is 'Editorial content. Only explicitly published, non-future rows are public. No client writes.';
comment on column public.content_entries.body is 'Plain text rendered by React; HTML is never interpreted.';

create index content_entries_public_listing_idx
  on public.content_entries (kind, published_at desc, id desc)
  where status = 'published';

alter table public.content_entries enable row level security;

-- Explicit ACLs override any hosted project's permissive default table grants.
revoke all on public.content_entries from public, anon, authenticated;
grant select on public.content_entries to anon, authenticated;
grant select, insert, update, delete on public.content_entries to service_role;

create policy "Read published editorial content"
  on public.content_entries for select to anon, authenticated
  using (status = 'published' and published_at <= (select now()));

create function public.set_content_updated_at()
returns trigger language plpgsql security invoker set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

revoke all on function public.set_content_updated_at() from public, anon, authenticated;
create trigger content_entries_updated_at before update on public.content_entries
  for each row execute function public.set_content_updated_at();

commit;
