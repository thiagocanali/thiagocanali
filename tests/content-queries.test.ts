import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { listContent, getContent } from "../src/lib/content/queries";
import { createPublicContentClient } from "../src/lib/supabase/public";

const originalFetch = globalThis.fetch;
const originalUrl = process.env.SUPABASE_URL;
const originalKey = process.env.SUPABASE_PUBLISHABLE_KEY;
const fixture = {
  id: "00000000-0000-4000-8000-000000000001", kind: "project", slug: "test-entry",
  title: "Test fixture", summary: "Not real editorial content", body: "<script>test</script>",
  technologies: ["TypeScript"], repository_url: "https://github.com/example/example",
  external_url: null, published_at: "2026-01-01T00:00:00Z",
};

function configure() {
  process.env.SUPABASE_URL = "https://test-project.supabase.co";
  process.env.SUPABASE_PUBLISHABLE_KEY = "sb_publishable_test_placeholder";
}

afterEach(() => {
  globalThis.fetch = originalFetch;
  if (originalUrl === undefined) delete process.env.SUPABASE_URL;
  else process.env.SUPABASE_URL = originalUrl;
  if (originalKey === undefined) delete process.env.SUPABASE_PUBLISHABLE_KEY;
  else process.env.SUPABASE_PUBLISHABLE_KEY = originalKey;
});

test("missing configuration avoids all network calls", async () => {
  delete process.env.SUPABASE_URL;
  delete process.env.SUPABASE_PUBLISHABLE_KEY;
  globalThis.fetch = async () => { throw new Error("Unexpected request"); };
  assert.deepEqual(await listContent("project"), { status: "unconfigured" });
});

test("service keys and partial configuration fail closed", async () => {
  configure();
  process.env.SUPABASE_PUBLISHABLE_KEY = "sb_secret_test_placeholder";
  assert.throws(() => createPublicContentClient());
  assert.deepEqual(await listContent("article"), { status: "unavailable" });
  delete process.env.SUPABASE_PUBLISHABLE_KEY;
  assert.deepEqual(await listContent("article"), { status: "unavailable" });
});

test("public query applies visibility filters, timeout, and no-store", async () => {
  configure();
  let calls = 0;
  globalThis.fetch = async (input, init) => {
    calls++;
    const url = new URL(String(input));
    assert.equal(url.pathname, "/rest/v1/content_entries");
    assert.equal(url.searchParams.get("kind"), "eq.project");
    assert.equal(url.searchParams.get("status"), "eq.published");
    assert.ok(url.searchParams.get("published_at")?.startsWith("lte."));
    assert.equal(url.searchParams.get("limit"), "100");
    assert.ok(!url.searchParams.get("select")?.split(",").includes("body"));
    assert.equal(init?.cache, "no-store");
    assert.ok(init?.signal);
    assert.equal(new Headers(init?.headers).get("apikey"), "sb_publishable_test_placeholder");
    return Response.json([fixture]);
  };
  assert.deepEqual(await listContent("project"), { status: "ready", data: [fixture] });
  assert.equal(calls, 1);
});

test("unpublished or missing detail is represented by null", async () => {
  configure();
  globalThis.fetch = async () => Response.json([]);
  assert.deepEqual(await getContent("project", "missing"), { status: "ready", data: null });
});

test("malformed slugs do not query the provider", async () => {
  configure();
  globalThis.fetch = async () => { throw new Error("Unexpected request"); };
  assert.deepEqual(await getContent("project", "bad/slug"), { status: "ready", data: null });
});

test("provider failures are distinct from an empty collection", async () => {
  configure();
  globalThis.fetch = async () => Response.json({ message: "Unavailable" }, { status: 503 });
  assert.deepEqual(await listContent("project"), { status: "unavailable" });
});

test("unsafe editorial URLs and malformed rows are never rendered", async () => {
  configure();
  globalThis.fetch = async () => Response.json([{ ...fixture, external_url: "javascript:alert(1)" }]);
  assert.deepEqual(await listContent("project"), { status: "unavailable" });
  globalThis.fetch = async () => Response.json([{ ...fixture, published_at: null }]);
  assert.deepEqual(await listContent("project"), { status: "unavailable" });
});
