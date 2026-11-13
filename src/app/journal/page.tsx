import type { Metadata } from "next"
import { EmptyState } from "@/components/empty-state"
import { PageIntro } from "@/components/page-intro"

export const metadata: Metadata = {
  title: "Journal",
  description: "Notas e aprendizados sobre tecnologia e criação.",
}

export default function JournalPage() {
  return (
    <main id="conteudo" className="site-container content-page">
      <PageIntro
        eyebrow="NOTAS E IDEIAS"
        title="Aprendizados, em público."
        description="Um journal para registrar ideias e compartilhar aprendizados com o contexto que merecem."
      />
      <EmptyState
        label="JOURNAL / EM PREPARAÇÃO"
        title="As primeiras notas estão sendo preparadas."
        description="Quando houver algo pronto para compartilhar, os textos aparecerão aqui com data e referências."
      />
    </main>
  )
}
