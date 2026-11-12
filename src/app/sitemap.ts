import type { MetadataRoute } from "next";
import { canIndex, site } from "@/lib/site";

export const dynamic = "force-dynamic";

// Section routes are stable entry points. Editorial detail pages are discovered
// through their published listings; private/unavailable slugs are never emitted.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!canIndex()) return [];
  return site.publicPaths.map((path) => ({ url: `${site.url}${path === "/" ? "" : path}` }));
}
