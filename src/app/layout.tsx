import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Thiago Canali — Digital Hub",
    template: "%s — Thiago Canali",
  },
  description:
    "Um espaço pessoal para reunir projetos, experimentos e notas sobre tecnologia. Em construção.",
  applicationName: "Thiago Canali — Digital Hub",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Thiago Canali — Digital Hub",
    title: "Thiago Canali — Digital Hub",
    description:
      "Um espaço pessoal para reunir projetos, experimentos e notas sobre tecnologia. Em construção.",
  },
}

export const viewport: Viewport = {
  themeColor: "#080b09",
  colorScheme: "dark",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <div className="site-frame">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
