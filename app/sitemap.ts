import type { MetadataRoute } from "next";
import { listProjectSlugs } from "@/lib/mdx";

const SITE_URL = "https://rickmedeiros.dev"; // PREENCHER

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await listProjectSlugs();
  const now = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified: now, priority: 1 },
    { url: `${SITE_URL}/projetos`, lastModified: now, priority: 0.8 },
    ...slugs.map((slug) => ({
      url: `${SITE_URL}/projetos/${slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}
