import type { Metadata } from "next"
import { PageIntro } from "@/components/page-intro"
import { profileLinks } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com Thiago Canali por e-mail ou LinkedIn.",
}

export default function ContactPage() {
  return (
    <main id="conteudo" className="site-container content-page">
      <PageIntro
        eyebrow="CONTATO"
        title="Vamos conversar."
        description="Para uma conversa ou uma pergunta, os canais públicos abaixo são o melhor caminho por enquanto."
      />
      <section className="contact-options" aria-label="Canais de contato">
        <a className="contact-option" href={`mailto:${profileLinks.email}`}>
          <span className="contact-option-label">E-MAIL</span>
          <span className="contact-option-value">{profileLinks.email}</span>
          <span className="contact-option-arrow" aria-hidden="true">↗</span>
        </a>
        <a className="contact-option" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
          <span className="contact-option-label">LINKEDIN</span>
          <span className="contact-option-value">Conectar no LinkedIn</span>
          <span className="contact-option-arrow" aria-hidden="true">↗</span>
        </a>
      </section>
      <p className="contact-note">Este site ainda não recebe mensagens por formulário.</p>
    </main>
  )
}
