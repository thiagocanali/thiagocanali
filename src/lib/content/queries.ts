import "server-only";

import { cache } from "react";
import { createPublicContentClient } from "@/lib/supabase/public";
import type { ContentEntry, ContentKind, ContentResult, ContentSummary } from "./types";

const summaryFields = "id,kind,slug,title,summary,technologies,repository_url,external_url,published_at";
const fields = `${summaryFields},body` as const;
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function safeUrl(value: unknown): value is string | null {
  if (value === null) return true;
  if (typeof value !== "string") return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password;
  } catch { return false; }
}

function isSummary(value: unknown): value is ContentSummary {
  if (!value || typeof value !== "object") return false;
  const row = value as Record<string, unknown>;
  return typeof row.id === "string"
    && ["project", "experiment", "article"].includes(String(row.kind))
    && typeof row.slug === "string" && slugPattern.test(row.slug)
    && typeof row.title === "string" && typeof row.summary === "string"
    && Array.isArray(row.technologies) && row.technologies.every((tag) => typeof tag === "string")
    && safeUrl(row.repository_url) && safeUrl(row.external_url)
    && typeof row.published_at === "string" && Number.isFinite(Date.parse(row.published_at));
}

function isEntry(value: unknown): value is ContentEntry {
  return isSummary(value) && "body" in value && typeof value.body === "string";
}

// Request-scoped deduplication also shares detail lookup with generateMetadata.
export const listContent = cache(async (kind: ContentKind): Promise<ContentResult<ContentSummary[]>> => {
  try {
    const client = createPublicContentClient();
    if (!client) return { status: "unconfigured" };
    const { data, error } = await client.from("content_entries").select(summaryFields)
      .eq("kind", kind).eq("status", "published").lte("published_at", new Date().toISOString())
      .order("published_at", { ascending: false }).order("id", { ascending: false })
      .limit(100).abortSignal(AbortSignal.timeout(5000));
    if (error || !Array.isArray(data) || !data.every(isSummary)) return { status: "unavailable" };
    return { status: "ready", data };
  } catch {
    // Do not log provider responses, credentials, or editorial content.
    return { status: "unavailable" };
  }
});

export const getContent = cache(async (kind: ContentKind, slug: string): Promise<ContentResult<ContentEntry | null>> => {
  if (slug.length > 120 || !slugPattern.test(slug)) return { status: "ready", data: null };
  try {
    const client = createPublicContentClient();
    if (!client) return { status: "unconfigured" };
    const { data, error } = await client.from("content_entries").select(fields)
      .eq("kind", kind).eq("slug", slug).eq("status", "published")
      .lte("published_at", new Date().toISOString())
      .abortSignal(AbortSignal.timeout(5000)).maybeSingle();
    if (error || (data !== null && !isEntry(data))) return { status: "unavailable" };
    return { status: "ready", data };
  } catch { return { status: "unavailable" }; }
});
