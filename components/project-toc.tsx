"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "problema", label: "Problema" },
  { id: "solucao", label: "Solução" },
  { id: "stack", label: "Stack" },
  { id: "highlights", label: "Highlights" },
  { id: "arquitetura", label: "Arquitetura" },
  { id: "snippet", label: "Snippet" },
];

export function ProjectToc() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (e): e is HTMLElement => Boolean(e)
    );
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0.01 }
    );
    els.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, []);

  return (
    <aside className="sticky top-28 hidden self-start lg:block">
      <p className="label-uppercase mb-4 text-[var(--color-fg-muted)]">
        Sumário
      </p>
      <ul className="space-y-1.5 border-l border-white/[0.08] pl-4">
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              data-cursor="hover"
              className={cn(
                "block py-1 text-sm transition-colors",
                active === s.id
                  ? "text-white"
                  : "text-[var(--color-fg-muted)] hover:text-white"
              )}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
