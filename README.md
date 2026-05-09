# Portfolio — Henrique Medeiros

Next.js 14 (App Router) · TypeScript · Tailwind v4 · Framer Motion · Lenis · MDX.

## Setup

```bash
npm install
npm run dev
```

Abrir <http://localhost:3000>.

## Estrutura

```
app/                     rotas (App Router)
  layout.tsx             fonts, providers, lenis, cursor, ambient bg
  page.tsx               home (hero, sobre, stack, projetos, contato)
  projetos/page.tsx      lista de projetos
  projetos/[slug]/page.tsx detalhe MDX (TOC sticky + componentes custom)
  opengraph-image.tsx    OG dinâmico do site
  projetos/[slug]/opengraph-image.tsx OG por projeto
  sitemap.ts / robots.ts SEO

components/              UI + motion (cursor, ambient, magnetic, etc)
  mdx/                   componentes MDX (Stack, Highlight, Snippet, Mermaid)

content/projetos/*.mdx   um arquivo por projeto (frontmatter + MDX)
content/projects.ts      lista renderizada nos cards da home

lib/                     utilitários (cn, mdx parser)
```

## Onde preencher conteúdo

Procure por `// PREENCHER` no projeto:

- `app/layout.tsx` — domínio final, redes sociais, título
- `app/page.tsx` — texto sobre, frase de approach
- `components/hero.tsx` — selo de disponibilidade
- `components/contact-section.tsx` — email, social, endpoint do form
- `content/projects.ts` — lista da home (título, summary, tags, imagem)
- `content/projetos/*.mdx` — corpo dos estudos de caso
- Imagens em `public/projects/*.jpg`

## Adicionar um projeto

1. Crie `content/projetos/<slug>.mdx` com frontmatter:

```mdx
---
title: Nome
summary: Frase curta.
year: "2025"
status: "Em produção"
cover: /projects/nome-cover.jpg
stack: [Next.js, FastAPI]
---
```

2. Adicione a entrada em `content/projects.ts` para aparecer na home.
3. Coloque a capa em `public/projects/`.

## Performance

- `next/font` para Inter + JetBrains Mono (zero CLS)
- `next/image` com AVIF/WebP
- `prefers-reduced-motion` respeitado
- Lenis desabilita em mobile-touch e em reduced-motion
