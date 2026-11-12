export type ContentKind = "project" | "experiment" | "article";

export type ContentEntry = {
  id: string;
  kind: ContentKind;
  slug: string;
  title: string;
  summary: string;
  body: string;
  technologies: string[];
  repository_url: string | null;
  external_url: string | null;
  published_at: string;
};

export type ContentSummary = Omit<ContentEntry, "body">;

export type ContentResult<T> =
  | { status: "ready"; data: T }
  | { status: "unconfigured" }
  | { status: "unavailable" };

export const contentSections = {
  project: { path: "/projects", title: "Projetos", empty: "Nenhum projeto publicado por aqui ainda." },
  experiment: { path: "/lab", title: "Lab", empty: "Novos experimentos em breve." },
  article: { path: "/journal", title: "Journal", empty: "As primeiras notas estão a caminho." },
} as const;
