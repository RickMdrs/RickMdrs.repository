export function Stack({ items }: { items: string[] }) {
  return (
    <div className="my-8 flex flex-wrap gap-2 not-prose">
      {items.map((s) => (
        <span
          key={s}
          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-[var(--color-fg-muted)]"
        >
          {s}
        </span>
      ))}
    </div>
  );
}
