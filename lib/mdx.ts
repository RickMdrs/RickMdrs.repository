import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type ProjectFrontmatter = {
  title: string;
  summary: string;
  year: string;
  status?: string;
  cover: string;
  coverAlt?: string;
  stack: string[];
  links?: { label: string; href: string }[];
};

const PROJECTS_DIR = path.join(process.cwd(), "content", "projetos");

export async function listProjectSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(PROJECTS_DIR);
    return files
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => f.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export async function getProjectSource(slug: string): Promise<{
  frontmatter: ProjectFrontmatter;
  content: string;
} | null> {
  const file = path.join(PROJECTS_DIR, `${slug}.mdx`);
  try {
    const raw = await fs.readFile(file, "utf8");
    const { data, content } = matter(raw);
    return {
      frontmatter: data as ProjectFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

export async function listAllProjects(): Promise<
  { slug: string; frontmatter: ProjectFrontmatter }[]
> {
  const slugs = await listProjectSlugs();
  const results = await Promise.all(
    slugs.map(async (slug) => {
      const src = await getProjectSource(slug);
      if (!src) return null;
      return { slug, frontmatter: src.frontmatter };
    })
  );
  return results.filter(Boolean) as {
    slug: string;
    frontmatter: ProjectFrontmatter;
  }[];
}
