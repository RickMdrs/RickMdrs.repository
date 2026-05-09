import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowRight } from "lucide-react";

import { getProjectSource, listProjectSlugs, listAllProjects } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx/components";
import { ProjectToc } from "@/components/project-toc";
import { MagneticButton } from "@/components/magnetic-button";

export async function generateStaticParams() {
  const slugs = await listProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const src = await getProjectSource(params.slug);
  if (!src) return {};
  const { title, summary, cover } = src.frontmatter;
  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      images: cover ? [cover] : undefined,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const src = await getProjectSource(params.slug);
  if (!src) notFound();
  const { frontmatter, content } = src;

  const all = await listAllProjects();
  const idx = all.findIndex((p) => p.slug === params.slug);
  const next = all[(idx + 1) % all.length];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: frontmatter.title,
    description: frontmatter.summary,
    dateCreated: frontmatter.year,
    image: frontmatter.cover,
    keywords: frontmatter.stack?.join(", "),
    author: { "@type": "Person", name: "Henrique Medeiros" },
  };

  return (
    <article className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero shot */}
      <header className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
        <Image
          src={frontmatter.cover}
          alt={frontmatter.coverAlt ?? frontmatter.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-deep)] via-[var(--color-bg-deep)]/50 to-[var(--color-bg-deep)]/30" />

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-16">
          <div className="flex items-center gap-3 font-mono text-xs text-[var(--color-fg-muted)]">
            <span>{frontmatter.year}</span>
            {frontmatter.status && (
              <>
                <span>·</span>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-emerald-300">
                  {frontmatter.status}
                </span>
              </>
            )}
          </div>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
            {frontmatter.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-[var(--color-fg-muted)]">
            {frontmatter.summary}
          </p>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[200px_1fr]">
        <ProjectToc />

        <div className="prose prose-invert max-w-3xl">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </div>

      {/* Next project */}
      {next && next.slug !== params.slug && (
        <section className="border-t border-white/[0.06] py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="label-uppercase text-[var(--color-fg-muted)]">
              Próximo
            </p>
            <Link
              href={`/projetos/${next.slug}`}
              data-cursor="hover"
              className="group mt-4 flex items-center justify-between gap-6"
            >
              <h3 className="text-balance text-4xl font-semibold tracking-tight transition-colors group-hover:text-[var(--color-accent)] md:text-6xl">
                {next.frontmatter.title}
              </h3>
              <ArrowRight className="size-8 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </section>
      )}

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <MagneticButton href="/projetos" variant="ghost">
          ← Todos os projetos
        </MagneticButton>
      </div>
    </article>
  );
}
