export const metadata = {
  title: "Lab",
  description: "Experimentos e estudos técnicos.",
};

export default function LabPage() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
      <p className="font-mono text-sm text-accent">/lab</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Lab</h1>
      <section className="mt-8 max-w-2xl rounded-lg border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-medium">Novos experimentos em breve.</h2>
        <p className="mt-3 leading-7 text-text-muted">Este espaço reunirá estudos e protótipos técnicos.</p>
        <a href="https://github.com/thiagocanali" className="mt-5 inline-flex min-h-11 items-center text-sm text-accent underline underline-offset-4">Visitar GitHub</a>
      </section>
    </main>
  );
}
