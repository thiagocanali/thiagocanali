import { pageMetadata } from "@/lib/site";
import { ContentIndex } from "@/components/content/content-index";

export const dynamic = "force-dynamic";
export const metadata = pageMetadata("/projects", "Projetos", "Projetos selecionados de Thiago Canali.");

export default function Page() {
  return <ContentIndex kind="project" />;
}
