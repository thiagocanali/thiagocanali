import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-sm text-accent">404 / not found</p>
        <h1 className="mt-4 text-3xl font-semibold">Página não encontrada.</h1>
        <p className="mt-4 text-text-muted">
          O endereço solicitado não corresponde a uma página disponível.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md border border-accent px-4 py-2 text-sm text-accent hover:bg-accent/10"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
