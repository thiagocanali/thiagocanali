export const metadata = {
  title: "Contato",
  description: "Canais de contato profissional.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
      <p className="font-mono text-sm text-accent">/contact</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Contato</h1>
      <p className="mt-5 max-w-2xl text-text-muted">
        O fluxo de contato será implementado com proteção contra spam e
        política de retenção definida antes da publicação.
      </p>
    </main>
  );
}
