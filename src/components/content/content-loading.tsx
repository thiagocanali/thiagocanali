export function ContentLoading() {
  return (
    <section aria-busy="true" aria-label="Carregamento de publicações" className="mt-8">
      <h2 className="text-xl font-semibold">Carregando conteúdo</h2>
      <p role="status" className="mt-5 text-text-muted">Buscando as publicações. Aguarde um instante.</p>
      <div aria-hidden="true" className="mt-8 h-40 max-w-2xl rounded-lg border border-border bg-surface" />
    </section>
  );
}
