export const runtime = 'edge';
import { ImageResponse } from "next/og";
import { getProjectSource } from "@/lib/mdx";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG({ params }: { params: { slug: string } }) {
  const src = await getProjectSource(params.slug);
  const title = src?.frontmatter.title ?? "Projeto";
  const summary = src?.frontmatter.summary ?? "";
  const year = src?.frontmatter.year ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 80% 90%, rgba(94,106,210,0.35), transparent 50%), linear-gradient(180deg, #0a0a0f 0%, #020203 100%)",
          color: "#ededef",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ fontSize: 24, color: "#8a8f98", display: "flex", gap: 12 }}>
          <span>rick.dev</span>
          <span>/</span>
          <span>{year}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            {title}
          </div>
          <div style={{ fontSize: 28, color: "#8a8f98", maxWidth: 980 }}>
            {summary}
          </div>
        </div>
      </div>
    ),
    size
  );
}
