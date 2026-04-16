"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const POSTS_PER_PAGE = 12;

interface BlogGridProps {
  posts: BlogPost[];
  categories: string[];
}

export function BlogGrid({ posts, categories }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.categories.includes(activeCategory));

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <>
      {/* Category filters */}
      <div className="mb-12 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            setActiveCategory("All");
            setVisibleCount(POSTS_PER_PAGE);
          }}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeCategory === "All"
              ? "bg-coral text-white"
              : "bg-dark-card text-grey-light hover:bg-dark-border hover:text-white"
          }`}
        >
          All ({posts.length})
        </button>
        {categories.map((cat) => {
          const count = posts.filter((p) => p.categories.includes(cat)).length;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(POSTS_PER_PAGE);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-coral text-white"
                  : "bg-dark-card text-grey-light hover:bg-dark-border hover:text-white"
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Post grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-2xl border border-dark-border bg-dark-card transition-colors hover:border-grey-mid"
          >
            {post.featuredImage && (
              <div className="aspect-[16/9] overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex flex-wrap gap-1.5">
                {post.categories.map((cat) => (
                  <span key={cat} className="inline-block rounded-full bg-teal/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-teal">
                    {cat}
                  </span>
                ))}
              </div>
              <h2 className="mt-4 text-lg font-semibold leading-tight text-white group-hover:text-coral transition-colors">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-grey-light">
                  {post.excerpt}
                </p>
              )}
              <p className="mt-4 text-xs text-grey">{formatDate(post.date)}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
            className="rounded-full border border-dark-border bg-dark-card px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-grey-mid hover:bg-dark-border"
          >
            Load more posts
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <p className="py-12 text-center text-grey-light">
          No posts found in this category.
        </p>
      )}
    </>
  );
}
