import { Suspense } from "react";
import { ContentLoading } from "./content-loading";
import Link from "next/link";
import { listContent } from "@/lib/content/queries";
import { contentSections, type ContentKind } from "@/lib/content/types";
import { ContentState } from "./content-state";

export async function ContentIndex({ kind }: { kind: ContentKind }) {
  const section = contentSections[kind];
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
      <p className="font-mono text-sm text-accent">{section.path}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">{section.title}</h1>
      <Suspense fallback={<ContentLoading />}>
        <ContentCollection kind={kind} />
      </Suspense>
    </main>
  );
}

async function ContentCollection({ kind }: { kind: ContentKind }) {
  const section = contentSections[kind];
  const result = await listContent(kind);
  return (
    <>
      {result.status !== "ready" || result.data.length === 0 ? (
        <ContentState empty={section.empty} unavailable={result.status === "unavailable"} />
      ) : (
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {result.data.map((entry) => (
            <li key={entry.id}>
              <Link href={`${section.path}/${entry.slug}`} className="block h-full rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent">
                <h2 className="break-words text-xl font-medium">{entry.title}</h2>
                <p className="mt-3 break-words leading-7 text-text-muted">{entry.summary}</p>
                <span className="mt-5 inline-flex min-h-11 items-center text-sm text-accent">Ler {kind === "article" ? "nota" : "detalhes"} →</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
