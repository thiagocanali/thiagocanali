export const metadata = {
  title: "Journal",
  description: "Notas técnicas e aprendizados.",
};

export default function JournalPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
      <p className="font-mono text-sm text-accent">/journal</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Journal</h1>
      <p className="mt-5 max-w-2xl text-text-muted">
        A publicação editorial será habilitada depois que persistência,
        rascunhos e publicação explícita forem implementados.
      </p>
    </main>
  );
}
