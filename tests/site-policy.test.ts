import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { canIndex, pageMetadata, site } from "../src/lib/site";
import robots from "../src/app/robots";
import sitemap from "../src/app/sitemap";

const originalEnvironment = process.env.VERCEL_ENV;
afterEach(() => {
  if (originalEnvironment === undefined) delete process.env.VERCEL_ENV;
  else process.env.VERCEL_ENV = originalEnvironment;
});

test("indexing requires an explicit production deployment", () => {
  assert.equal(canIndex("production"), true);
  for (const environment of ["preview", "development", "", "prod"]) {
    assert.equal(canIndex(environment), false);
  }
  delete process.env.VERCEL_ENV;
  assert.equal(canIndex(), false);
});

test("previews block crawling, indexing and sitemap disclosure", () => {
  process.env.VERCEL_ENV = "preview";
  assert.deepEqual(robots(), { rules: { userAgent: "*", disallow: "/" } });
  assert.deepEqual(sitemap(), []);
  assert.deepEqual(pageMetadata("/projects", "Projetos", "Resumo").robots, { index: false, follow: false });
});

test("production sitemap contains only the six public section entry points", () => {
  process.env.VERCEL_ENV = "production";
  const urls = sitemap().map((entry) => entry.url);
  assert.equal(urls.length, 6);
  assert.ok(urls.includes(site.url));
  assert.ok(urls.includes(`${site.url}/contact`));
  assert.ok(urls.every((url) => new URL(url).origin === site.url));
  assert.ok(!urls.some((url) => /admin|draft|\[slug\]/.test(url)));
  assert.equal(robots().sitemap, `${site.url}/sitemap.xml`);
});

test("published page metadata keeps canonical and sharing URLs consistent", () => {
  process.env.VERCEL_ENV = "production";
  const metadata = pageMetadata("/journal/example", "Nota", "Resumo da nota");
  assert.deepEqual(metadata.alternates, { canonical: "/journal/example" });
  assert.equal(metadata.openGraph?.url, "/journal/example");
  assert.equal(metadata.openGraph?.title, "Nota");
  assert.equal(metadata.twitter?.title, "Nota");
  assert.deepEqual(metadata.twitter?.images, ["/opengraph-image"]);
  assert.ok(metadata.openGraph?.images);
  assert.deepEqual(metadata.robots, { index: true, follow: true });
});
