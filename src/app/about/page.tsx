import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/about", "Sobre", "Sobre Thiago Canali e o propósito deste hub digital.");

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
      <p className="font-mono text-sm text-accent">/about</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Sobre</h1>
      <section className="mt-8 max-w-2xl rounded-lg border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-medium">Um espaço para conectar trabalho, ideias e conhecimento.</h2>
        <p className="mt-3 leading-7 text-text-muted">Sou Thiago Canali. Este hub reúne meus canais públicos e terá projetos, experimentos e notas técnicas. A apresentação profissional completa será adicionada após revisão.</p>
        <a href="https://github.com/thiagocanali" className="mt-5 inline-flex min-h-11 items-center text-sm text-accent underline underline-offset-4">Visitar GitHub</a>
      </section>
    </main>
  );
}
