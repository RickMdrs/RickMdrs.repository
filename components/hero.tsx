"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import { SplitWords } from "./reveal";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center pt-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="label-uppercase mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[var(--color-fg-muted)]"
        >
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
          Disponível para projetos {/* PREENCHER */}
        </motion.p>

        <h1 className="display-text text-[clamp(3.5rem,9vw,5.5rem)] text-balance">
          <SplitWords text="Henrique Medeiros" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl font-mono text-base leading-relaxed text-[var(--color-fg-muted)] md:text-lg"
        >
          <span className="text-[var(--color-accent)]">/</span> Full-Stack Engineer · Building automation that ships
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <MagneticButton href="/projetos" variant="primary">
            Ver projetos
          </MagneticButton>
          <MagneticButton href="#contato" variant="ghost">
            Contato
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[var(--color-fg-muted)]"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
            scroll
          </span>
          <ArrowDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
