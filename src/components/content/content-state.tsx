import Link from "next/link";

export function ContentState({ unavailable = false, empty }: { unavailable?: boolean; empty: string }) {
  return (
    <section className="mt-8 max-w-2xl rounded-lg border border-border bg-surface p-6 sm:p-8">
      <h2 className="text-xl font-medium">{unavailable ? "Não foi possível carregar o conteúdo." : empty}</h2>
      <p className="mt-3 leading-7 text-text-muted">
        {unavailable ? "Tente novamente em alguns instantes. Você também pode entrar em contato." : "Enquanto isso, explore os repositórios no GitHub ou entre em contato."}
      </p>
      <div className="mt-5 flex flex-wrap gap-5">
        <a href="https://github.com/thiagocanali" className="inline-flex min-h-11 items-center text-sm text-accent underline underline-offset-4">Visitar GitHub</a>
        <Link href="/contact" className="inline-flex min-h-11 items-center text-sm text-accent underline underline-offset-4">Contato</Link>
      </div>
    </section>
  );
}
