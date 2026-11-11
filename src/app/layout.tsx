import type { Metadata } from "next";
import { GeistMono, GeistSans } from "geist/font";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Thiago Canali — Personal Digital Hub",
    template: "%s — Thiago Canali",
  },
  description:
    "Hub digital pessoal para projetos, experimentos técnicos, publicações e contato.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
