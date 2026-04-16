import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { H1, Lead, Eyebrow, Section } from "@/components/Heading";
import { BlogGrid } from "./BlogGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Ludum",
  description:
    "Sports news, coaching tips, data analytics insights, and athlete interviews from Ludum.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  // Strip content from posts — BlogGrid only needs metadata
  const gridPosts = posts.map(({ content, ...rest }) => rest);

  return (
    <>
      <section className="bg-black pt-[72px]">
        <Section>
          <Eyebrow>Our Blog</Eyebrow>
          <H1>Sports News for Coaches, Athletes &amp; Data Scientists</H1>
          <div className="mt-6">
            <Lead>
              Coaching tips, performance analytics, athlete interviews, and the
              latest from Ludum.
            </Lead>
          </div>
        </Section>
      </section>

      <section className="bg-black pb-20 lg:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <BlogGrid posts={gridPosts} categories={categories} />
        </div>
      </section>
    </>
  );
}
