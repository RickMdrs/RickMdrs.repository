import type { MDXComponents } from "mdx/types";
import { Stack } from "./stack";
import { Highlight } from "./highlight";
import { Snippet } from "./snippet";
import { Mermaid } from "./mermaid";

export const mdxComponents: MDXComponents = {
  h2: (p) => (
    <h2
      className="mt-16 scroll-mt-24 text-3xl font-semibold tracking-tight md:text-4xl"
      {...p}
    />
  ),
  h3: (p) => (
    <h3
      className="mt-10 scroll-mt-24 text-xl font-semibold tracking-tight md:text-2xl"
      {...p}
    />
  ),
  p: (p) => (
    <p className="mt-5 text-base leading-relaxed text-[var(--color-fg-muted)]" {...p} />
  ),
  a: (p) => (
    <a
      className="text-[var(--color-accent)] underline-offset-4 hover:underline"
      target={p.href?.startsWith("http") ? "_blank" : undefined}
      rel={p.href?.startsWith("http") ? "noreferrer noopener" : undefined}
      {...p}
    />
  ),
  ul: (p) => <ul className="mt-5 list-disc space-y-2 pl-5 text-[var(--color-fg-muted)]" {...p} />,
  ol: (p) => <ol className="mt-5 list-decimal space-y-2 pl-5 text-[var(--color-fg-muted)]" {...p} />,
  li: (p) => <li className="leading-relaxed" {...p} />,
  blockquote: (p) => (
    <blockquote
      className="my-8 border-l-2 border-[var(--color-accent)] bg-white/[0.02] px-6 py-4 italic text-white"
      {...p}
    />
  ),
  code: (p) => (
    <code
      className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[0.9em] text-white"
      {...p}
    />
  ),
  hr: () => <hr className="my-12 border-white/[0.08]" />,
  Stack,
  Highlight,
  Snippet,
  Mermaid,
};
