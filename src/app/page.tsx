import { pageMetadata, site } from "@/lib/site";
import Link from "next/link";
import { ArrowUpRight, Code2, FlaskConical, Terminal } from "lucide-react";

export const metadata = {
  ...pageMetadata("/", site.title, site.description),
  title: { absolute: site.title },
};

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

const featuredProjects = [
  {
    title: "Me Aprovaê",
    description: "Plataforma de estudos para concursos públicos; núcleo de estudos em validação.",
    stack: "Nuxt · Vue · TypeScript · PostgreSQL",
    href: "https://github.com/thiagocanali/MeAprovae",
  },
  {
    title: "taskDesk",
    description: "Organização de tarefas; ativação hospedada e integrações ainda pendentes.",
    stack: "Vue · TypeScript · Node.js · Prisma",
    href: "https://github.com/thiagocanali/taskDesk",
  },
  {
    title: "AcolheMente",
    description: "Projeto para presença profissional em Psicologia; administração em preparação.",
    stack: "Vue · TypeScript · Vite",
    href: "https://github.com/thiagocanali/AcolheMente",
  },
] as const;

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <section className="flex flex-col justify-center py-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 font-mono text-sm text-accent">
              {"// personal digital hub"}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-text sm:text-6xl lg:text-7xl">
              Engenharia, projetos e ideias em construção.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
              Um espaço para reunir projetos, explorar ideias e compartilhar
              conhecimento técnico. Conheça as áreas do hub ou entre em contato.
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
        <section aria-labelledby="featured-projects-heading" className="border-t border-border/70 py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-sm text-accent">/selected-work</p>
              <h2 id="featured-projects-heading" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Projetos em construção
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-text-muted">
                Uma seleção de repositórios públicos. O estágio de cada trabalho é indicado
                para não confundir desenvolvimento ativo com produto concluído.
              </p>
            </div>
            <Link href="/projects" className="inline-flex min-h-11 items-center gap-2 text-sm text-accent underline underline-offset-4">
              Ver área de projetos <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <li key={project.href} className="flex flex-col rounded-lg border border-border bg-surface p-6">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-text-muted">{project.description}</p>
                <p className="mt-5 font-mono text-xs leading-5 text-text-muted">{project.stack}</p>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm text-accent underline underline-offset-4">
                  Ver repositório <ArrowUpRight aria-hidden="true" className="size-4" />
                  <span className="sr-only">de {project.title} (abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
