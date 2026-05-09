import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { PROJECTS } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Lista de projetos e estudos de caso.",
};

export default function ProjetosPage() {
  return (
    <section className="relative pb-32 pt-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="label-uppercase text-[var(--color-fg-muted)]">
            Selected Work
          </p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
            Projetos
          </h1>
          <p className="mt-6 max-w-xl text-base text-[var(--color-fg-muted)]">
            Coleção de produtos, ferramentas e experimentos. {/* PREENCHER */}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
