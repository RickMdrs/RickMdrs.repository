import { codeToHtml } from "shiki";

export async function Snippet({
  code,
  language = "ts",
  filename,
}: {
  code: string;
  language?: string;
  filename?: string;
}) {
  const html = await codeToHtml(code.trim(), {
    lang: language,
    theme: "github-dark-default",
  });

  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0c]">
      {filename && (
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2 font-mono text-xs text-[var(--color-fg-muted)]">
          <span>{filename}</span>
          <span className="rounded bg-white/[0.04] px-2 py-0.5 text-[10px] uppercase tracking-wider">
            {language}
          </span>
        </div>
      )}
      <div
        className="overflow-x-auto px-4 py-4 text-sm [&_pre]:!bg-transparent"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
