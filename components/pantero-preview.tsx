"use client";

import { motion } from "framer-motion";

const PLATFORMS = [
  { name: "ML", color: "#FFE600", text: "#000" },
  { name: "MG", color: "#0086FF", text: "#fff" },
  { name: "SH", color: "#EE4D2D", text: "#fff" },
  { name: "AM", color: "#FF9900", text: "#000" },
  { name: "SN", color: "#000", text: "#fff" },
  { name: "DF", color: "#E60082", text: "#fff" },
];

const PROMOS = [
  { tag: "ATIVO", title: "Creamy Skincare Ácido Mandélico 30g", time: "1m" },
  { tag: "ATIVO", title: "Creamy Skincare Ácido Mandélico 30g", time: "3m" },
  { tag: "AVISO", title: "O E-MEDICATIVO BR-A...", time: "8m" },
  { tag: "INFO", title: "DEIXA QUALQUER FOI BONITO...", time: "12m" },
];

const STATS = [
  { label: "Hoje", value: "247" },
  { label: "Semana", value: "1.8k" },
  { label: "Mês", value: "7.2k" },
  { label: "Ativos", value: "12" },
];

export function PanteroPreview() {
  return (
    <div className="relative size-full overflow-hidden bg-[#0a0a14] text-[8px] leading-tight text-white/90">
      {/* glow ambient */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-10 -top-10 size-48 rounded-full bg-[#5e6ad2]/30 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-12 right-0 size-56 rounded-full bg-purple-500/20 blur-3xl"
        animate={{ x: [0, -15, 0], y: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex h-full">
        {/* sidebar */}
        <aside className="flex w-[15%] flex-col gap-[6px] border-r border-white/5 bg-black/30 p-[6px]">
          <div className="flex items-center gap-1">
            <div className="size-2 rounded bg-gradient-to-br from-indigo-400 to-purple-500" />
            <span className="font-semibold">Pantero IA</span>
          </div>
          <div className="mt-1 flex flex-col gap-[3px] text-[7px] text-white/60">
            <div className="rounded bg-white/10 px-1 py-[2px] text-white">Painel</div>
            <div className="px-1 py-[2px]">Configurações</div>
            <div className="px-1 py-[2px]">Contas</div>
            <div className="px-1 py-[2px]">Utilidades</div>
            <div className="px-1 py-[2px]">Relatórios</div>
          </div>
          <div className="mt-auto flex items-center gap-1 border-t border-white/5 pt-1">
            <div className="size-2.5 rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
            <span className="text-[7px]">rick</span>
          </div>
        </aside>

        {/* main */}
        <main className="flex flex-1 flex-col gap-[6px] p-[6px]">
          {/* topbar */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-semibold">
                Olá, <span className="text-indigo-300">rick</span>
              </div>
              <div className="text-[7px] text-white/40">Painel de Controle</div>
            </div>
            <div className="flex items-center gap-1">
              <motion.div
                className="size-1.5 rounded-full bg-emerald-400"
                animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              <span className="text-[7px] text-emerald-400">Operacional</span>
              <span className="ml-1 rounded bg-white/5 px-1 py-[1px] font-mono text-[7px] text-white/50">
                12:31:46
              </span>
            </div>
          </div>

          {/* hero card */}
          <motion.div
            className="relative overflow-hidden rounded bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 px-2 py-[6px]"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              aria-hidden
              className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["0%", "300%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative flex items-center justify-between">
              <span className="text-[8px] font-medium tracking-wide">
                Controle de Sistema
              </span>
              <span className="rounded bg-black/30 px-2 py-[2px] text-[7px] font-bold tracking-widest">
                INICIAR SISTEMA ▸
              </span>
            </div>
          </motion.div>

          {/* two cols */}
          <div className="grid flex-1 grid-cols-3 gap-[6px]">
            {/* promos */}
            <div className="col-span-2 flex flex-col gap-[3px] rounded bg-white/[0.04] p-[6px]">
              <div className="mb-[2px] flex items-center justify-between">
                <span className="text-[8px] font-medium">Últimas Promoções</span>
                <span className="text-[7px] text-white/40">live</span>
              </div>
              {PROMOS.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-1 rounded bg-white/[0.03] px-1 py-[2px]"
                >
                  <span
                    className={`rounded px-1 py-[1px] text-[6px] font-semibold ${
                      p.tag === "ATIVO"
                        ? "bg-emerald-500/20 text-emerald-300"
                        : p.tag === "AVISO"
                        ? "bg-amber-500/20 text-amber-300"
                        : "bg-blue-500/20 text-blue-300"
                    }`}
                  >
                    {p.tag}
                  </span>
                  <span className="flex-1 truncate text-[7px] text-white/70">
                    {p.title}
                  </span>
                  <span className="font-mono text-[6px] text-white/30">
                    {p.time}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* quick control */}
            <div className="flex flex-col gap-[4px] rounded bg-white/[0.04] p-[6px]">
              <span className="text-[8px] font-medium">Controle Rápido</span>
              <div className="grid grid-cols-2 gap-[3px]">
                {PLATFORMS.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.5 + i * 0.06,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="flex items-center gap-1 rounded bg-black/30 p-[2px]"
                  >
                    <div
                      className="grid size-3 place-items-center rounded-full text-[5px] font-bold"
                      style={{ background: p.color, color: p.text }}
                    >
                      {p.name}
                    </div>
                    <motion.div
                      className="size-1 rounded-full bg-emerald-400"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* stats */}
          <div className="grid grid-cols-4 gap-[4px]">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.06, duration: 0.4 }}
                className="rounded bg-white/[0.04] px-1 py-[3px]"
              >
                <div className="text-[6px] uppercase tracking-wider text-white/40">
                  {s.label}
                </div>
                <div className="font-mono text-[10px] font-semibold text-indigo-300">
                  {s.value}
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
