-- Run on a disposable database after applying migrations. Rolls fixtures back.
begin;

insert into public.content_entries (kind, slug, title, summary, status, published_at) values
  ('project', 'test-public', 'Public fixture', 'Test only', 'published', now() - interval '1 day'),
  ('project', 'test-draft', 'Private fixture', 'Test only', 'draft', null),
  ('project', 'test-future', 'Future fixture', 'Test only', 'published', now() + interval '1 day'),
  ('project', 'test-archived', 'Archived fixture', 'Test only', 'archived', now() - interval '1 day');

do $$
begin
  if not (select relrowsecurity from pg_class where oid = 'public.content_entries'::regclass) then
    raise exception 'RLS must be enabled';
  end if;
  begin
    insert into public.content_entries (kind, slug, title, summary, status)
      values ('article', 'invalid-publication', 'Invalid', 'Test', 'published');
    raise exception 'Published without timestamp accepted';
  exception when check_violation then null;
  end;
  begin
    insert into public.content_entries (kind, slug, title, summary, external_url)
      values ('article', 'unsafe-url', 'Invalid', 'Test', 'javascript:alert(1)');
    raise exception 'Unsafe URL accepted';
  exception when check_violation then null;
  end;
  begin
    insert into public.content_entries (kind, slug, title, summary)
      values ('project', 'test-public', 'Duplicate', 'Test');
    raise exception 'Duplicate slug accepted';
  exception when unique_violation then null;
  end;
end;
$$;

set local role anon;
do $$
begin
  if (select count(*) from public.content_entries where slug like 'test-%') <> 1 then
    raise exception 'Anonymous reader can see non-public fixtures';
  end if;
  if not exists (select 1 from public.content_entries where slug = 'test-public') then
    raise exception 'Public fixture is inaccessible';
  end if;
  begin
    insert into public.content_entries (kind, slug, title, summary) values ('project', 'anon-write', 'Denied', 'Test');
    raise exception 'Anonymous insert accepted';
  exception when insufficient_privilege then null;
  end;
  begin
    update public.content_entries set title = 'Denied' where slug = 'test-public';
    raise exception 'Anonymous update accepted';
  exception when insufficient_privilege then null;
  end;
  begin
    delete from public.content_entries where slug = 'test-public';
    raise exception 'Anonymous delete accepted';
  exception when insufficient_privilege then null;
  end;
end;
$$;

reset role;
set local role authenticated;
-- Being signed in, even with forged user metadata, grants no editorial privileges.
select set_config('request.jwt.claims', '{"role":"authenticated","user_metadata":{"role":"admin"}}', true);
do $$
begin
  if (select count(*) from public.content_entries where slug like 'test-%') <> 1 then
    raise exception 'Authenticated reader can see non-public fixtures';
  end if;
  begin
    insert into public.content_entries (kind, slug, title, summary) values ('project', 'user-write', 'Denied', 'Test');
    raise exception 'Authenticated insert accepted';
  exception when insufficient_privilege then null;
  end;
  begin
    update public.content_entries set status = 'published', published_at = now() where slug = 'test-draft';
    raise exception 'Authenticated publication accepted';
  exception when insufficient_privilege then null;
  end;
  begin
    delete from public.content_entries where slug = 'test-public';
    raise exception 'Authenticated delete accepted';
  exception when insufficient_privilege then null;
  end;
end;
$$;

reset role;

-- RLS remains a second barrier if a future ACL accidentally grants writes.
grant insert, update, delete on public.content_entries to anon, authenticated;
set local role anon;
do $$
declare affected integer;
begin
  begin
    insert into public.content_entries (kind, slug, title, summary) values ('project', 'rls-write', 'Denied', 'Test');
    raise exception 'RLS allowed insert';
  exception when insufficient_privilege then null;
  end;
  update public.content_entries set title = 'Denied' where slug = 'test-public';
  get diagnostics affected = row_count;
  if affected <> 0 then raise exception 'RLS allowed update'; end if;
  delete from public.content_entries where slug = 'test-public';
  get diagnostics affected = row_count;
  if affected <> 0 then raise exception 'RLS allowed delete'; end if;
end;
$$;
reset role;
set local role service_role;
do $$
begin
  if (select count(*) from public.content_entries where slug like 'test-%') <> 4 then
    raise exception 'Privileged operator cannot manage drafts';
  end if;
  update public.content_entries set title = 'Updated fixture' where slug = 'test-draft';
  if not exists (select 1 from public.content_entries where slug = 'test-draft' and title = 'Updated fixture') then
    raise exception 'Privileged update failed';
  end if;
end;
$$;
reset role;
rollback;
