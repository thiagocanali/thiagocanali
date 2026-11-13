import type { Metadata } from "next"
import { EmptyState } from "@/components/empty-state"
import { PageIntro } from "@/components/page-intro"

export const metadata: Metadata = {
  title: "Lab",
  description: "Experimentos e protótipos em desenvolvimento.",
}

export default function LabPage() {
  return (
    <main id="conteudo" className="site-container content-page">
      <PageIntro
        eyebrow="EXPERIMENTOS"
        title="Um lugar para testar ideias."
        description="Protótipos e explorações técnicas, com espaço para compartilhar também o que ainda está em andamento."
      />
      <EmptyState
        label="LAB / EM PREPARAÇÃO"
        title="A bancada está sendo montada."
        description="Experimentos serão adicionados quando houver contexto suficiente para mostrar o que foi testado e aprendido."
      />
    </main>
  )
}
