import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { Eyebrow, Section } from "@/components/Heading";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Ludum Blog`,
    description: post.excerpt || undefined,
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="bg-black pt-[72px]">
      <Section>
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-sm text-grey-light transition-colors hover:text-white"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          <div className="mt-8 flex flex-wrap gap-1.5">
            {post.categories.map((cat) => (
              <span key={cat} className="inline-block rounded-full bg-teal/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-teal">
                {cat}
              </span>
            ))}
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-grey-light">
            <span>{post.author}</span>
            <span className="text-grey-mid">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>

          {post.featuredImage && (
            <div className="mt-8 overflow-hidden rounded-xl">
              <Image
                src={post.featuredImage}
                alt={post.title}
                width={768}
                height={432}
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          <div className="blog-content mt-12">{renderMarkdown(post.content)}</div>
        </div>
      </Section>
    </article>
  );
}

function renderMarkdown(content: string): React.ReactNode {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Headings (including empty headings like "## " or "#####")
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].replace(/\*+/g, "").trim();
      const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
      elements.push(<Tag key={key++}>{renderInline(text)}</Tag>);
      i++;
      continue;
    }
    // Skip empty heading lines (e.g. "##### " with no text)
    if (/^#{1,6}\s*$/.test(line)) {
      i++;
      continue;
    }

    // Image (standalone line)
    const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
    if (imgMatch) {
      const alt = imgMatch[1] || "";
      const src = imgMatch[2];
      elements.push(
        <figure key={key++} className="my-6">
          <img src={src} alt={alt} className="h-auto w-full rounded-lg" loading="lazy" />
          {alt && <figcaption className="mt-2 text-center text-sm text-grey">{alt}</figcaption>}
        </figure>
      );
      i++;
      continue;
    }

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      elements.push(<hr key={key++} />);
      i++;
      continue;
    }

    // Unordered list
    if (line.match(/^[-*]\s+/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^[-*]\s+/)) {
        items.push(lines[i].replace(/^[-*]\s+/, ""));
        i++;
      }
      elements.push(
        <ul key={key++}>
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (line.match(/^\d+\.\s+/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\.\s+/)) {
        items.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      elements.push(
        <ol key={key++}>
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      elements.push(
        <blockquote key={key++}>
          <p>{renderInline(quoteLines.join(" "))}</p>
        </blockquote>
      );
      continue;
    }

    // Paragraph — collect consecutive non-empty, non-special lines
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].match(/^#{1,6}\s/) &&
      !lines[i].match(/^[-*]\s+/) &&
      !lines[i].match(/^\d+\.\s+/) &&
      !lines[i].startsWith("> ") &&
      !lines[i].match(/^---+$/) &&
      !lines[i].match(/^!\[/)
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      elements.push(<p key={key++}>{renderInline(paraLines.join(" "))}</p>);
    }
  }

  return <>{elements}</>;
}

function renderInline(text: string): React.ReactNode {
  // Split on markdown inline patterns and convert to React nodes
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let partKey = 0;

  while (remaining.length > 0) {
    // Bold
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    // Link
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    // Italic
    const italicMatch = remaining.match(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/);

    // Find the earliest match
    const matches = [
      boldMatch ? { type: "bold", match: boldMatch } : null,
      linkMatch ? { type: "link", match: linkMatch } : null,
      italicMatch ? { type: "italic", match: italicMatch } : null,
    ]
      .filter(Boolean)
      .sort((a, b) => a!.match.index! - b!.match.index!);

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    const first = matches[0]!;
    const idx = first.match.index!;

    // Text before match
    if (idx > 0) {
      parts.push(remaining.slice(0, idx));
    }

    if (first.type === "bold") {
      parts.push(<strong key={partKey++}>{first.match[1]}</strong>);
      remaining = remaining.slice(idx + first.match[0].length);
    } else if (first.type === "link") {
      parts.push(
        <a
          key={partKey++}
          href={first.match[2]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {first.match[1]}
        </a>
      );
      remaining = remaining.slice(idx + first.match[0].length);
    } else if (first.type === "italic") {
      parts.push(<em key={partKey++}>{first.match[1]}</em>);
      remaining = remaining.slice(idx + first.match[0].length);
    }
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}
