import Link from "next/link";
import { ArrowUpRight, Code2, FlaskConical, Terminal } from "lucide-react";

const areas = [
  {
    href: "/projects",
    icon: Code2,
    title: "Projetos",
    description: "Produtos, aplicações e trabalhos técnicos selecionados.",
  },
  {
    href: "/lab",
    icon: FlaskConical,
    title: "Lab",
    description: "Experimentos, estudos e ideias em construção.",
  },
  {
    href: "/journal",
    icon: Terminal,
    title: "Journal",
    description: "Notas técnicas, aprendizados e registros de engenharia.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-border/70 pb-6">
          <Link
            href="/"
            className="font-mono text-sm tracking-tight text-text-muted transition-colors hover:text-accent"
          >
            thiagocanali.dev
          </Link>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-text-muted">
            digital hub / v0.1
          </span>
        </header>

        <section className="flex flex-1 flex-col justify-center py-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 font-mono text-sm text-accent">
              {"// personal digital hub"}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-text sm:text-6xl lg:text-7xl">
              Engenharia, projetos e ideias em construção.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
              Este é o ponto de partida da nova plataforma pessoal. A aplicação
              será construída de forma incremental, com conteúdo factual,
              documentação e experimentação técnica no centro.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-md border border-accent bg-accent px-5 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                Explorar projetos
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent/60 hover:text-accent"
              >
                Sobre
              </Link>
            </div>
          </div>

          <div className="mt-20 grid gap-4 border-t border-border/70 pt-8 md:grid-cols-3">
            {areas.map(({ href, icon: Icon, title, description }) => (
              <Link
                key={href}
                href={href}
                className="group rounded-lg border border-border/70 bg-surface/60 p-5 transition-colors hover:border-accent/50"
              >
                <Icon aria-hidden="true" className="mb-8 size-5 text-accent" />
                <h2 className="text-lg font-medium">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-text-muted">
                  {description}
                </p>
                <span className="mt-6 inline-block font-mono text-xs text-text-muted transition-colors group-hover:text-accent">
                  /{href.replace("/", "")}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <footer className="border-t border-border/70 pt-5 font-mono text-xs text-text-muted">
          <p>Construído em etapas verificáveis. Conteúdo profissional será publicado somente após validação.</p>
        </footer>
      </div>
    </main>
  );
}
