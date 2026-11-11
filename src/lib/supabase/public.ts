import "server-only";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

// This reader never receives cookies, a user's session, or a service-role key.
export function createPublicContentClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url && !key) return null;
  if (!url || !key || !key.startsWith("sb_publishable_")) {
    throw new Error("Invalid public content configuration");
  }
  const parsed = new URL(url);
  if (parsed.protocol !== "https:" || parsed.username || parsed.password) {
    throw new Error("Invalid public content URL");
  }
  return createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
    global: { fetch: (input, init) => fetch(input, { ...init, cache: "no-store" }) },
  });
}
