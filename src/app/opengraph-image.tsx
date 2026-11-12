import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Thiago Canali — projetos, experimentos técnicos e conhecimento";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", background: "#080b0a", color: "#f2f7f4", padding: 72, borderBottom: "8px solid #55f59a", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", color: "#55f59a", fontSize: 26 }}>thiagocanali / personal digital hub</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", fontSize: 82, fontWeight: 700, letterSpacing: -3 }}>{site.name}</div>
        <div style={{ display: "flex", fontSize: 34, color: "#8795a5" }}>Projetos. Experimentos. Conhecimento.</div>
      </div>
      <div style={{ display: "flex", fontSize: 22, color: "#8795a5" }}>thiagocanali.vercel.app</div>
    </div>,
    size,
  );
}
