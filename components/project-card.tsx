"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
  year?: string;
  comingSoon?: boolean;
};

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });

  // Image parallax on scroll
  const { scrollYProgress } = useScroll({
    target: project.comingSoon ? divRef : ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [10, -20]);

  function handleMove(e: MouseEvent<HTMLElement>) {
    const el = (ref.current ?? divRef.current);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 6);
    rx.set(-py * 6);
  }
  function reset() {
    rx.set(0);
    ry.set(0);
  }

  if (project.comingSoon) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        style={{ perspective: 1200 }}
        className="h-full"
      >
        <div
          ref={divRef}
          onMouseMove={handleMove}
          onMouseLeave={reset}
          className="group relative block h-full"
        >
          <motion.div
            style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
            className={cn(
              "relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-dashed border-white/10 bg-white/[0.02]",
              "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              "group-hover:border-[var(--color-accent)]/40"
            )}
          >
            <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-[var(--color-bg-elevated)]">
              {/* drifting blobs */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -left-20 -top-16 size-72 rounded-full bg-[var(--color-accent)]/25 blur-3xl"
                animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -right-16 size-80 rounded-full bg-purple-500/20 blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, -15, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* grid pattern */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              {/* shimmer sweep */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
                animate={{ x: ["0%", "400%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
              />

              {/* content */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 backdrop-blur">
                  <motion.span
                    className="size-1.5 rounded-full bg-[var(--color-accent)]"
                    animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-muted)]">
                    Em desenvolvimento
                  </span>
                </div>
                <h3 className="display-text bg-gradient-to-br from-white via-white to-[var(--color-accent)] bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:text-6xl">
                  Em Breve
                </h3>
                <p className="max-w-xs text-center text-xs text-[var(--color-fg-muted)]">
                  Próximo projeto sendo construído
                </p>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-between gap-4 p-4 pt-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-fg-muted)]">
                // próximo
              </span>
              <span className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="size-1.5 rounded-full bg-[var(--color-accent)]/60"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1200 }}
      className="h-full"
    >
      <Link
        ref={ref}
        href={`/projetos/${project.slug}`}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        data-cursor="hover"
        className="group relative block h-full"
      >
        <motion.div
          style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
          className={cn(
            "relative overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03]",
            "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            "group-hover:border-[var(--color-accent)]/40 group-hover:bg-white/[0.05]",
            "group-hover:shadow-[0_30px_80px_-20px_rgba(94,106,210,0.35)]"
          )}
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-bg-elevated)]">
            <motion.div style={{ y: imgY }} className="relative h-full w-full">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="scale-[1.03] object-cover transition-transform duration-700 group-hover:scale-[1.07]"
              />
            </motion.div>
            {project.featured && (
              <span className="absolute left-4 top-4 rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent-glow)] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur">
                Featured
              </span>
            )}
          </div>

          <div className="flex flex-col gap-3 p-4 pt-5">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <span
                className={cn(
                  "mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10",
                  "transition-all duration-500 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:rotate-[-45deg]"
                )}
              >
                <ArrowUpRight className="size-4" />
              </span>
            </div>

            <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
              {project.summary}
            </p>

            <ul className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-[var(--color-fg-muted)]"
                >
                  {t}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
