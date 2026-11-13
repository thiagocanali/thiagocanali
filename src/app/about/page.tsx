import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "/about",
  "Sobre",
  "Conheça Thiago Canali, seus projetos de software e o propósito do Personal Digital Hub.",
);

const focusAreas = [
  {
    title: "Produtos web",
    description: "Aplicações e experiências digitais com atenção à interface, à integração e à manutenção.",
  },
  {
    title: "Engenharia e operação",
    description: "Interesse em confiabilidade, observabilidade e na conexão entre desenvolvimento e infraestrutura.",
  },
  {
    title: "Aprendizado em público",
    description: "Experimentos, estudos e decisões técnicas documentados ao longo da evolução dos projetos.",
  },
] as const;

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
      <p className="font-mono text-sm text-accent">/about</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Sobre</h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <section aria-labelledby="intro-heading" className="max-w-2xl">
          <h2 id="intro-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Software, operação e ideias que saem do papel.
          </h2>
          <p className="mt-5 leading-8 text-text-muted">
            Sou Thiago Canali. Desenvolvo aplicações web e evoluo projetos próprios para
            explorar problemas reais, aprender novas abordagens e compartilhar o processo.
          </p>
          <p className="mt-4 leading-8 text-text-muted">
            Minha trajetória reúne desenvolvimento de software e atuação em infraestrutura
            e operações de TI. Neste espaço, quero conectar essas experiências com
            projetos, experimentos e registros técnicos — sem tratar trabalhos em
            construção como produtos finalizados.
          </p>
          <p className="mt-4 leading-8 text-text-muted">
            O Personal Digital Hub está em evolução. As seções de projetos, laboratório
            e publicações serão preenchidas com conteúdo revisado e verificável.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/projects" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-accent bg-accent px-4 py-2 text-sm font-semibold text-background hover:opacity-90">
              Explorar projetos <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
            <Link href="/contact" className="inline-flex min-h-11 items-center rounded-md border border-border px-4 py-2 text-sm font-medium hover:border-accent">
              Entrar em contato
            </Link>
          </div>
        </section>
        <section aria-labelledby="focus-heading" className="rounded-lg border border-border bg-surface p-6 sm:p-8">
          <h2 id="focus-heading" className="text-xl font-semibold">Áreas de interesse</h2>
          <ul className="mt-5 space-y-5">
            {focusAreas.map((area) => (
              <li key={area.title}>
                <h3 className="font-medium text-text">{area.title}</h3>
                <p className="mt-1 text-sm leading-6 text-text-muted">{area.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section aria-labelledby="links-heading" className="mt-12 border-t border-border pt-8">
        <h2 id="links-heading" className="text-xl font-semibold">Outros canais</h2>
        <div className="mt-4 flex flex-wrap gap-5">
          <a href="https://github.com/thiagocanali" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-accent underline underline-offset-4">
            <Github aria-hidden="true" className="size-4" /> GitHub <span className="sr-only">(abre em nova aba)</span>
          </a>
          <a href="https://www.linkedin.com/in/thiagocanali" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-accent underline underline-offset-4">
            <Linkedin aria-hidden="true" className="size-4" /> LinkedIn <span className="sr-only">(abre em nova aba)</span>
          </a>
        </div>
      </section>
    </main>
  );
}
