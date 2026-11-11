import { ContentIndex } from "@/components/content/content-index";

export const dynamic = "force-dynamic";
export const metadata = { title: "Journal", description: "Notas técnicas e aprendizados." };

export default function Page() {
  return <ContentIndex kind="article" />;
}
