import { ContentDetail, contentMetadata } from "@/components/content/content-detail";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return contentMetadata("project", slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ContentDetail kind="project" slug={slug} />;
}
