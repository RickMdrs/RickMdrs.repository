import type { ReactNode } from "react";

export function Highlight({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="not-prose my-10 rounded-2xl border border-[var(--color-accent)]/30 bg-[var(--color-accent-glow)] p-6">
      {title && (
        <p className="label-uppercase mb-3 text-[var(--color-accent)]">
          {title}
        </p>
      )}
      <div className="text-base leading-relaxed text-white">{children}</div>
    </aside>
  );
}
