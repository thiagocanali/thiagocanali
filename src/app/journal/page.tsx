import { pageMetadata } from "@/lib/site";
import { ContentIndex } from "@/components/content/content-index";

export const dynamic = "force-dynamic";
export const metadata = pageMetadata("/journal", "Journal", "Notas técnicas e aprendizados.");

export default function Page() {
  return <ContentIndex kind="article" />;
}
