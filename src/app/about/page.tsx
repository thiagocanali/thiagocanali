export const metadata = {
  title: "Sobre",
  description: "Sobre Thiago Canali e o propósito deste hub digital.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
      <p className="font-mono text-sm text-accent">/about</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Sobre</h1>
      <p className="mt-5 max-w-2xl text-text-muted">
        Esta página ficará responsável pela apresentação profissional factual.
        O conteúdo definitivo será preenchido somente após revisão das
        informações biográficas e de trajetória.
      </p>
    </main>
  );
}
