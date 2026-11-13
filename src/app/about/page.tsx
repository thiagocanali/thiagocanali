import type { Metadata } from "next"
import { PageIntro } from "@/components/page-intro"
import { profileLinks } from "@/lib/site"

export const metadata: Metadata = {
  title: "Sobre",
  description: "Sobre o hub digital pessoal de Thiago Canali.",
}

export default function AboutPage() {
  return (
    <main id="conteudo" className="site-container content-page">
      <PageIntro
        eyebrow="SOBRE"
        title="Um espaço para conectar ideias e trabalho."
        description="Este hub está sendo construído para reunir identidade profissional, projetos e aprendizados em um só lugar."
      />
      <section className="about-panel" aria-labelledby="about-panel-title">
        <p className="mono-label">PERFIL / EM REVISÃO</p>
        <h2 id="about-panel-title">Uma apresentação melhor merece fatos bem cuidados.</h2>
        <p>
          A biografia completa, a experiência e a formação ainda serão confirmadas antes de serem publicadas aqui. Enquanto isso, você pode acompanhar os perfis públicos existentes.
        </p>
        <div className="inline-links">
          <a href={profileLinks.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  )
}
