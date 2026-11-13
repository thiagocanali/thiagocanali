import Link from "next/link"
import { navigation } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link className="brand" href="/" aria-label="Thiago Canali, página inicial">
          <span className="brand-mark" aria-hidden="true">TC</span>
          <span className="brand-name">thiago<span>.canali</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Abrir menu de navegação">Menu <span aria-hidden="true">+</span></summary>
          <nav aria-label="Navegação móvel">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  )
}
