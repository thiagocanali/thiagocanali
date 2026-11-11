import type { ContentEntry } from "@/lib/content/types";

// Mirrors the versioned initial migration. Regenerate from the hosted schema
// once the dedicated project has been provisioned.
type ContentRow = Omit<ContentEntry, "published_at"> & {
  published_at: string | null;
  status: "draft" | "published" | "archived";
  created_at: string;
  updated_at: string;
};

export type Database = {
  public: {
    Tables: {
      content_entries: {
        Row: ContentRow;
        Insert: Pick<ContentRow, "kind" | "slug" | "title" | "summary"> & Partial<ContentRow>;
        Update: Partial<ContentRow>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
