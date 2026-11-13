import type { Metadata } from "next"
import { EmptyState } from "@/components/empty-state"
import { PageIntro } from "@/components/page-intro"

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos selecionados de Thiago Canali.",
}

export default function ProjectsPage() {
  return (
    <main id="conteudo" className="site-container content-page">
      <PageIntro
        eyebrow="TRABALHO SELECIONADO"
        title="Projetos com contexto, não só screenshots."
        description="Uma coleção curada de projetos, decisões e aprendizados."
      />
      <EmptyState
        label="PRÓXIMA PUBLICAÇÃO"
        title="Os projetos estão sendo organizados."
        description="Os primeiros itens serão publicados depois da revisão de descrições, imagens e links."
      />
    </main>
  )
}
