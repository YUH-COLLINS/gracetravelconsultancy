import type { Metadata } from "next";
import { db } from "@/db";
import { blogPosts } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { BlogContent } from "@/components/pages/blog-content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Visa updates, scholarship opportunities, travel guides, and immigration news from Grace Travel Consultancy.",
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  let posts: { id: number; title: string; excerpt: string; category: string; createdAt: Date }[] = [];
  try {
    posts = await db
      .select({
        id: blogPosts.id,
        title: blogPosts.title,
        excerpt: blogPosts.excerpt,
        category: blogPosts.category,
        createdAt: blogPosts.createdAt,
      })
      .from(blogPosts)
      .where(eq(blogPosts.published, true))
      .orderBy(desc(blogPosts.createdAt));
  } catch {
    posts = [];
  }

  return <BlogContent posts={posts.map((post) => ({ ...post, createdAt: post.createdAt.toISOString() }))} />;
}
