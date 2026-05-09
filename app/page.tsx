import { Hero } from "@/components/hero";
import { StackMarquee } from "@/components/stack-marquee";
import { ProjectCard } from "@/components/project-card";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { ContactSection } from "@/components/contact-section";
import { MagneticButton } from "@/components/magnetic-button";
import { PROJECTS } from "@/content/projects";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Sobre */}
      <section className="relative py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="label-uppercase text-[var(--color-fg-muted)]">Sobre</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              Engenheiro full-stack obcecado por sistemas que rodam sozinhos.
              {/* PREENCHER */}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-fg-muted)]">
              Construo produtos com foco em performance, automação e DX.
              {/* PREENCHER: 2-3 linhas sobre você */}
            </p>
          </Reveal>

          <div className="grid grid-cols-3 gap-6 self-end">
            <Stat number={3} suffix="+" label="anos de exp." />
            <Stat number={20} suffix="+" label="projetos" />
            <Stat number={15} suffix="+" label="techs" />
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="label-uppercase text-[var(--color-fg-muted)]">Stack</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              What I build with
            </h2>
          </Reveal>
        </div>
        <div className="mt-12">
          <StackMarquee />
        </div>
      </section>

      {/* Projetos */}
      <section className="relative py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-6">
            <Reveal>
              <p className="label-uppercase text-[var(--color-fg-muted)]">
                Selected Work
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Projetos em destaque
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="hidden md:block">
              <MagneticButton href="/projetos" variant="ghost">
                Ver todos →
              </MagneticButton>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <div key={p.slug} className={i === 0 ? "md:col-span-2" : ""}>
                <ProjectCard project={p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="relative py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="label-uppercase text-[var(--color-fg-muted)]">
              Approach
            </p>
            <p className="mt-6 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              “Software só é bom quando some no fundo e deixa o trabalho
              acontecer.” {/* PREENCHER */}
            </p>
          </Reveal>
        </div>
      </section>

      <ContactSection />

      <footer className="border-t border-white/[0.06] py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 text-xs text-[var(--color-fg-muted)]">
          <span className="font-mono">© {new Date().getFullYear()} Henrique Medeiros</span>
          <span className="font-mono">Built with care · Next.js + Framer Motion</span>
        </div>
      </footer>
    </>
  );
}

function Stat({
  number,
  suffix,
  label,
}: {
  number: number;
  suffix?: string;
  label: string;
}) {
  return (
    <Reveal>
      <div className="surface-card rounded-2xl p-5">
        <div className="text-3xl font-semibold md:text-4xl">
          <CountUp to={number} suffix={suffix} />
        </div>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
          {label}
        </p>
      </div>
    </Reveal>
  );
}
