"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/", "Início"], ["/projects", "Projetos"], ["/lab", "Lab"],
  ["/journal", "Journal"], ["/about", "Sobre"], ["/contact", "Contato"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="border-b border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link href="/" className="inline-flex min-h-11 items-center font-mono text-sm text-accent">thiagocanali<span className="ml-2 text-text-muted" aria-hidden="true">/ hub</span></Link>
        <nav aria-label="Navegação principal" className="flex flex-wrap gap-x-1 gap-y-2">
          {links.map(([href, label]) => (
            <Link key={href} href={href} aria-current={(pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))) ? "page" : undefined}
              className="inline-flex min-h-11 items-center rounded-md px-3 text-sm text-text-muted transition-colors hover:bg-surface hover:text-text aria-[current=page]:bg-surface aria-[current=page]:text-accent aria-[current=page]:underline aria-[current=page]:underline-offset-8">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
