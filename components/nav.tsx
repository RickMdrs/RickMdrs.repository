"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-end px-6 py-5">
        <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-black/30 p-1 backdrop-blur-xl">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projetos">Projetos</NavLink>
          <NavLink href="#contato">Contato</NavLink>
        </nav>
      </div>
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      data-cursor="hover"
      className="rounded-full px-4 py-1.5 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}
