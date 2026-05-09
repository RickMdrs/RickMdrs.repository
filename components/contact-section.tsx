"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import { Reveal } from "./reveal";

export function ContactSection() {
  return (
    <section id="contato" className="relative py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="label-uppercase text-[var(--color-fg-muted)]">Contato</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Vamos construir algo
            <span className="text-[var(--color-accent)]">.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 text-lg text-[var(--color-fg-muted)]">
            Aberto a colaborações, freelas e oportunidades full-time. {/* PREENCHER */}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <form
            className="mt-12 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              // PREENCHER: integrar com endpoint/email
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Seu nome"
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-[var(--color-fg-muted)] focus:border-[var(--color-accent)]/60"
                required
              />
              <input
                type="email"
                placeholder="seu@email.com"
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-[var(--color-fg-muted)] focus:border-[var(--color-accent)]/60"
                required
              />
            </div>
            <textarea
              placeholder="Sobre o que você quer falar?"
              rows={4}
              className="resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-[var(--color-fg-muted)] focus:border-[var(--color-accent)]/60"
              required
            />
            <div className="mt-2 flex justify-center">
              <MagneticButton variant="primary">Enviar mensagem</MagneticButton>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-14 flex items-center justify-center gap-3">
            <SocialLink
              href="mailto:rick.medeiros223@icloud.com" /* PREENCHER */
              icon={<Mail className="size-4" />}
              label="Email"
            />
            <SocialLink
              href="https://github.com/RickMdrs"
              icon={<Github className="size-4" />}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/ryk-medeiros"
              icon={<Linkedin className="size-4" />}
              label="LinkedIn"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      data-cursor="hover"
      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-accent)]/60 hover:text-white"
    >
      {icon}
      {label}
    </a>
  );
}
