"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
      <h1 className="max-w-2xl text-3xl font-semibold">Não foi possível abrir esta página.</h1>
      <p role="alert" className="mt-5 max-w-2xl leading-7 text-text-muted">Tente novamente. Se o problema continuar, você pode voltar ao início ou entrar em contato.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <button type="button" onClick={reset} className="min-h-11 rounded-md bg-accent px-5 py-3 font-medium text-background hover:opacity-90">Tentar novamente</button>
        <Link href="/" className="inline-flex min-h-11 items-center px-3 underline underline-offset-4">Voltar ao início</Link>
        <Link href="/contact" className="inline-flex min-h-11 items-center px-3 underline underline-offset-4">Contato</Link>
      </div>
    </main>
  );
}
