import type { Project } from "@/components/project-card";

export const PROJECTS: Project[] = [
  {
    slug: "pantero-ia",
    title: "Pantero IA",
    summary:
      "Plataforma de automação inteligente com agents que orquestram fluxos de dados em produção.", // PREENCHER
    tags: ["Python", "TypeScript", "Rust", "Tauri", "Next.js", "Selenium"],
    image: "/007.png",
    imageAlt: "Dashboard do Pantero IA",
    featured: true,
    year: "2025",
  },
  {
    slug: "rage-store",
    title: "Rage Store",
    summary: "Motor Automatizado de E-commerce e Provisionamento",
    tags: ["Node.js", "Discord.js", "API do Mercado Pago", "SQLite"],
    image: "/033.png",
    imageAlt: "Painel de compras do Rage Store",
    year: "2025",
  },
  {
    slug: "em-breve",
    title: "Em Breve",
    summary: "",
    tags: [],
    image: "",
    imageAlt: "",
    year: "",
    comingSoon: true,
  },
];
