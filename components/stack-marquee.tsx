"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const STACK = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
  "Tailwind",
  "Framer Motion",
  "PyTorch",
  "LangChain",
  "Postgres",
  "Vercel",
];

export function StackMarquee() {
  const [paused, setPaused] = useState(false);
  const items = [...STACK, ...STACK];

  return (
    <div
      className="relative overflow-hidden py-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[var(--color-bg-deep)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[var(--color-bg-deep)] to-transparent" />

      <motion.div
        className="flex gap-3 whitespace-nowrap"
        animate={{ x: paused ? undefined : ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {items.map((s, i) => (
          <Pill key={`${s}-${i}`} label={s} />
        ))}
      </motion.div>
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span
      className={cn(
        "group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-[var(--color-fg)]",
        "transition-colors hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-accent-glow)]"
      )}
      data-cursor="hover"
      title={label}
    >
      <span className="size-1.5 rounded-full bg-[var(--color-accent)]/70 transition-colors group-hover:bg-[var(--color-accent)]" />
      {label}
    </span>
  );
}
