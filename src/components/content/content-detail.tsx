import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getContent } from "@/lib/content/queries";
import { contentSections, type ContentKind } from "@/lib/content/types";
import { ContentState } from "./content-state";

export async function contentMetadata(kind: ContentKind, slug: string): Promise<Metadata> {
  const result = await getContent(kind, slug);
  if (result.status !== "ready" || !result.data) {
    return { title: "Conteúdo indisponível", robots: { index: false, follow: false } };
  }
  return { title: result.data.title, description: result.data.summary };
}

export async function ContentDetail({ kind, slug }: { kind: ContentKind; slug: string }) {
  const section = contentSections[kind];
  const result = await getContent(kind, slug);
  if (result.status === "unconfigured" || (result.status === "ready" && !result.data)) notFound();
  const entry = result.status === "ready" ? result.data : null;
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
      <Link href={section.path} className="inline-flex min-h-11 items-center text-sm text-accent underline underline-offset-4">← {section.title}</Link>
      {entry ? (
        <article className="mt-6 max-w-3xl">
          <h1 className="break-words text-4xl font-semibold tracking-tight">{entry.title}</h1>
          <p className="mt-5 break-words text-lg leading-8 text-text-muted">{entry.summary}</p>
          {entry.technologies.length > 0 ? <ul aria-label="Tecnologias" className="mt-6 flex flex-wrap gap-2">
            {entry.technologies.map((tag, i) => <li key={`${tag}-${i}`} className="break-all rounded border border-border px-3 py-1 font-mono text-xs text-text-muted">{tag}</li>)}
          </ul> : null}
          <div className="mt-8 whitespace-pre-wrap break-words leading-8">{entry.body}</div>
          <div className="mt-8 flex flex-wrap gap-6">
            {entry.repository_url ? <a href={entry.repository_url} className="inline-flex min-h-11 items-center text-accent underline underline-offset-4">Repositório</a> : null}
            {entry.external_url ? <a href={entry.external_url} className="inline-flex min-h-11 items-center text-accent underline underline-offset-4">Visitar projeto</a> : null}
          </div>
        </article>
      ) : <><h1 className="mt-6 text-3xl font-semibold">Conteúdo indisponível</h1><ContentState unavailable empty="" /></>}
    </main>
  );
}
