"use client";

import { useEffect, useRef, useState } from "react";

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
          primaryColor: "#5e6ad2",
          primaryTextColor: "#ededef",
          primaryBorderColor: "#5e6ad2",
          lineColor: "#8a8f98",
          background: "#0a0a0c",
        },
        fontFamily: "var(--font-jetbrains), monospace",
        securityLevel: "loose",
      });
      const id = `m-${Math.random().toString(36).slice(2)}`;
      try {
        const { svg } = await mermaid.render(id, chart);
        if (!cancelled) setSvg(svg);
      } catch (e) {
        if (!cancelled) setSvg(`<pre>${(e as Error).message}</pre>`);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [chart]);

  return (
    <div
      ref={ref}
      className="not-prose my-10 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] p-6"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
