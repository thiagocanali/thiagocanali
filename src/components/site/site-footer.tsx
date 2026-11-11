import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-text-muted sm:px-8 lg:px-10">
        <p>Thiago Canali <span aria-hidden="true">/</span> Personal Digital Hub</p>
        <Link href="/contact" className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-accent">Vamos conversar</Link>
      </div>
    </footer>
  );
}
