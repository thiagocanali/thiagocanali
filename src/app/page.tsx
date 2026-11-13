import Link from "next/link"

const destinations = [
  {
    number: "01",
    label: "Projetos",
    description: "Trabalhos selecionados, com contexto e links úteis.",
    href: "/projects",
  },
  {
    number: "02",
    label: "Lab",
    description: "Experimentos, protótipos e ideias em desenvolvimento.",
    href: "/lab",
  },
  {
    number: "03",
    label: "Journal",
    description: "Notas e aprendizados sobre tecnologia e criação.",
    href: "/journal",
  },
]

export default function HomePage() {
  return (
    <main id="conteudo">
      <section className="hero site-container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" aria-hidden="true" />PERSONAL DIGITAL HUB</p>
          <h1 id="hero-title">Ideias digitais, <span>construídas com intenção.</span></h1>
          <p className="hero-description">
            Um espaço pessoal para reunir projetos, experimentos e notas sobre tecnologia. O hub está em construção; novos conteúdos serão publicados à medida que forem revisados.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">Explorar projetos <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/contact">Entrar em contato <span aria-hidden="true">→</span></Link>
          </div>
        </div>

        <aside className="signal-panel" aria-label="Áreas do hub">
          <div className="panel-topline">
            <span className="panel-dot" aria-hidden="true" />
            <span>HUB / VISÃO GERAL</span>
            <span className="panel-index">TC—01</span>
          </div>
          <div className="panel-title-block">
            <p className="mono-label">STATUS DO PROJETO</p>
            <p className="panel-title">Em construção<span className="cursor" aria-hidden="true">_</span></p>
          </div>
          <div className="signal-list">
            <div><span>Projetos</span><span className="signal-status">CURADORIA</span></div>
            <div><span>Lab</span><span className="signal-status">EM PREPARAÇÃO</span></div>
            <div><span>Journal</span><span className="signal-status">EM PREPARAÇÃO</span></div>
          </div>
          <div className="panel-bottomline"><span>CONTEÚDO PÚBLICO</span><span>01 — 03</span></div>
        </aside>
      </section>

      <section className="destination-section site-container" aria-labelledby="destinations-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" aria-hidden="true" />EXPLORE</p>
            <h2 id="destinations-title">Um espaço para o trabalho em movimento.</h2>
          </div>
          <p className="section-aside">Cada área será preenchida com conteúdo revisado e contexto, não apenas uma lista de links.</p>
        </div>
        <div className="destination-grid">
          {destinations.map((item) => (
            <Link className="destination-card" href={item.href} key={item.number}>
              <span className="card-number">{item.number}</span>
              <span className="card-arrow" aria-hidden="true">↗</span>
              <span className="card-content">
                <span className="card-title">{item.label}</span>
                <span className="card-description">{item.description}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-strip site-container" aria-labelledby="contact-strip-title">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" aria-hidden="true" />CONVERSA ABERTA</p>
          <h2 id="contact-strip-title">Tem algo em mente?</h2>
        </div>
        <Link className="button button-outline" href="/contact">Fale comigo <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  )
}
