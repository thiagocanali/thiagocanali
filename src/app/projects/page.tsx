import { ContentIndex } from "@/components/content/content-index";

export const dynamic = "force-dynamic";
export const metadata = { title: "Projetos", description: "Projetos selecionados de Thiago Canali." };

export default function Page() {
  return <ContentIndex kind="project" />;
}
