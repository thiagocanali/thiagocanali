import type { Metadata } from "next";

export const site = {
  name: "Thiago Canali",
  title: "Thiago Canali — Personal Digital Hub",
  description: "Hub digital pessoal para projetos, experimentos técnicos, publicações e contato.",
  // Verified production domain; never derive canonical URLs from request headers.
  url: "https://thiagocanali.vercel.app",
  publicPaths: ["/", "/projects", "/lab", "/journal", "/about", "/contact"],
} as const;

export function canIndex(environment = process.env.VERCEL_ENV) {
  return environment === "production";
}

export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: site.title,
      url: path,
      title,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.title }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
    robots: { index: canIndex(), follow: canIndex() },
  };
}
