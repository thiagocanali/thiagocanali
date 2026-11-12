import { pageMetadata } from "@/lib/site";
import { ContentIndex } from "@/components/content/content-index";

export const dynamic = "force-dynamic";
export const metadata = pageMetadata("/lab", "Lab", "Experimentos e estudos técnicos.");

export default function Page() {
  return <ContentIndex kind="experiment" />;
}
