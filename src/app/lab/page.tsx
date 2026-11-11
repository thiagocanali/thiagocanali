import { ContentIndex } from "@/components/content/content-index";

export const dynamic = "force-dynamic";
export const metadata = { title: "Lab", description: "Experimentos e estudos técnicos." };

export default function Page() {
  return <ContentIndex kind="experiment" />;
}
