import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Henrique Medeiros — Full-Stack Engineer";

export default async function OG() {
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
            "radial-gradient(circle at 20% 10%, rgba(94,106,210,0.35), transparent 55%), linear-gradient(180deg, #0a0a0f 0%, #020203 100%)",
          color: "#ededef",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 28 }}>
          <span style={{ width: 12, height: 12, borderRadius: 12, background: "#5e6ad2" }} />
          rick.dev
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            Henrique Medeiros
          </div>
          <div style={{ fontSize: 32, color: "#8a8f98" }}>
            Full-Stack Engineer · Building automation that ships
          </div>
        </div>
      </div>
    ),
    size
  );
}
