import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { setTimeout as delay } from "node:timers/promises";

// Check the built app over HTTP, including Next's real metadata/streaming behavior.
// Run after VERCEL_ENV=production npm run build; no hosted service is required.
const reservation = createServer();
await new Promise((resolve, reject) => {
  reservation.once("error", reject);
  reservation.listen(0, "127.0.0.1", resolve);
});
const port = reservation.address().port;
await new Promise((resolve) => reservation.close(resolve));
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(port)], {
  env: { ...process.env, VERCEL_ENV: "production", SUPABASE_URL: "", SUPABASE_PUBLISHABLE_KEY: "" },
  stdio: "ignore",
});
const base = `http://127.0.0.1:${port}`;
const origin = "https://thiagocanali.vercel.app";

function meta(html, key, attribute = "name") {
  const tag = html.match(/<meta\b[^>]*>/g)?.find((candidate) => candidate.includes(`${attribute}="${key}"`));
  return tag?.match(/content="([^"]*)"/)?.[1];
}

try {
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt++) {
    if (server.exitCode !== null) throw new Error("Next start exited before the HTTP checks");
    try {
      await fetch(`${base}/icon.svg`, { signal: AbortSignal.timeout(1000) });
      ready = true;
      break;
    } catch { await delay(250); }
  }
  assert.ok(ready, "Built app did not start");
  for (const path of ["/", "/projects", "/lab", "/journal", "/about", "/contact"]) {
    const response = await fetch(base + path);
    assert.equal(response.status, 200, path);
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    assert.equal(response.headers.get("x-frame-options"), "DENY");
    assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
    assert.ok(response.headers.get("content-security-policy")?.includes("frame-ancestors 'none'"));
    assert.equal(response.headers.get("permissions-policy"), "camera=(), microphone=(), geolocation=()");
    assert.equal(response.headers.get("x-robots-tag"), null, "Production must not inherit preview noindex");
    assert.equal(response.headers.get("x-powered-by"), null);
    const html = await response.text();
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    assert.equal(canonical?.replace(/\/$/, ""), origin + (path === "/" ? "" : path), path);
    assert.equal(meta(html, "robots"), "index, follow");
    assert.equal(meta(html, "og:url", "property")?.replace(/\/$/, ""), canonical?.replace(/\/$/, ""));
    assert.ok(meta(html, "og:image", "property")?.startsWith(`${origin}/opengraph-image`), `${path}: missing sharing image`);
    assert.equal(meta(html, "twitter:card"), "summary_large_image");
    console.log(`Public metadata and security headers passed: ${path}`);
  }
  for (const path of ["/projects/missing", "/lab/missing", "/journal/missing", "/missing"]) {
    const response = await fetch(base + path);
    assert.equal(response.status, 404, `${path}: streaming must preserve the missing detail status`);
    assert.ok((await response.text()).includes('content="noindex"'));
  }
  const robots = await (await fetch(`${base}/robots.txt`)).text();
  assert.ok(robots.includes("Allow: /"));
  assert.ok(robots.includes("Disallow: /admin"));
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
  const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
  assert.equal(sitemap.match(/<loc>/g)?.length, 6);
  assert.ok(!sitemap.includes("/admin"));
  const image = await fetch(`${base}/opengraph-image`);
  assert.equal(image.status, 200);
  assert.equal(image.headers.get("content-type"), "image/png");
  const png = Buffer.from(await image.arrayBuffer());
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
  console.log("HTTP checks passed: metadata, headers, missing details, robots, sitemap and sharing image.");
} finally {
  server.kill("SIGTERM");
  for (let attempt = 0; attempt < 20 && server.exitCode === null && server.signalCode === null; attempt++) await delay(100);
  if (server.exitCode === null && server.signalCode === null) server.kill("SIGKILL");
}
