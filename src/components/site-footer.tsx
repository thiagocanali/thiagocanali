import Link from "next/link"
import { profileLinks } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <p>© {new Date().getFullYear()} Thiago Canali</p>
        <p className="footer-note">Um espaço digital em construção, com intenção.</p>
        <div className="footer-links" aria-label="Links externos">
          <Link href={profileLinks.github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </Link>
          <Link href={profileLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
