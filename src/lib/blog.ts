import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  categories: string[];
  excerpt: string;
  featuredImage: string | null;
  youtubeId: string | null;
  originalUrl: string;
  content: string;
}

function parseMdxFile(filename: string): BlogPost {
  const filePath = path.join(CONTENT_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug: data.slug || filename.replace(/\.mdx$/, ""),
    title: data.title || "",
    date: data.date || "",
    author: data.author || "Adrian Cassidy",
    categories: Array.isArray(data.category)
      ? data.category
      : [data.category || "Uncategorised"],
    excerpt: data.excerpt || "",
    featuredImage: data.featuredImage || null,
    youtubeId: data.youtubeId || null,
    originalUrl: data.originalUrl || "",
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map(parseMdxFile);

  // Sort newest first — same as the old site
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const filename = `${slug}.mdx`;
  const filePath = path.join(CONTENT_DIR, filename);

  if (!fs.existsSync(filePath)) return undefined;

  return parseMdxFile(filename);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.flatMap((p) => p.categories));
  return Array.from(categories).sort();
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
