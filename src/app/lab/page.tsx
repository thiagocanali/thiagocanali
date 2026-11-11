export const metadata = {
  title: "Lab",
  description: "Experimentos e estudos técnicos.",
};

export default function LabPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
      <p className="font-mono text-sm text-accent">/lab</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Lab</h1>
      <p className="mt-5 max-w-2xl text-text-muted">
        Espaço reservado para experimentos e estudos. Nenhum experimento é
        apresentado como publicado nesta fase.
      </p>
    </main>
  );
}
