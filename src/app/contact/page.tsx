export const metadata = {
  title: "Contato",
  description: "Canais de contato profissional.",
};

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
      <p className="font-mono text-sm text-accent">/contact</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Contato</h1>
      <p className="mt-5 max-w-2xl text-text-muted">
        Para conversar sobre projetos e ideias, escolha um dos canais abaixo.
      </p>
      <ul className="mt-8 grid max-w-2xl gap-3">
        {[
          ["Email", "thiagocanali@hotmail.com", "mailto:thiagocanali@hotmail.com"],
          ["LinkedIn", "thiagocanali", "https://www.linkedin.com/in/thiagocanali"],
          ["GitHub", "thiagocanali", "https://github.com/thiagocanali"],
        ].map(([label, detail, href]) => (
          <li key={label}>
            <a href={href} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent">
              <span className="font-medium">{label}</span>
              <span className="break-all text-sm text-text-muted">{detail}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
