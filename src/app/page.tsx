import { HomeContent } from "@/components/home-content";
import { db } from "@/db";
import { blogPosts, testimonials } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let testimonialRows: { id: number; fullName: string; country: string; category: string; quote: string; rating: number }[] = [];
  let blogRows: { id: number; title: string; excerpt: string; slug: string; category: string; createdAt: Date }[] = [];

  try {
    testimonialRows = await db
      .select({
        id: testimonials.id,
        fullName: testimonials.fullName,
        country: testimonials.country,
        category: testimonials.category,
        quote: testimonials.quote,
        rating: testimonials.rating,
      })
      .from(testimonials)
      .where(eq(testimonials.approved, true))
      .orderBy(desc(testimonials.createdAt))
      .limit(6);

    blogRows = await db
      .select({
        id: blogPosts.id,
        title: blogPosts.title,
        excerpt: blogPosts.excerpt,
        slug: blogPosts.slug,
        category: blogPosts.category,
        createdAt: blogPosts.createdAt,
      })
      .from(blogPosts)
      .where(eq(blogPosts.published, true))
      .orderBy(desc(blogPosts.createdAt))
      .limit(6);
  } catch {
    testimonialRows = [];
    blogRows = [];
  }

  const fallbackTestimonials = [
    {
      id: 1,
      fullName: "Nadine M.",
      country: "France",
      category: "Student Success",
      quote: "Grace Travel guided me from admission to visa approval with exceptional professionalism.",
      rating: 5,
    },
    {
      id: 2,
      fullName: "Joel T.",
      country: "Canada",
      category: "Visa Success",
      quote: "Their document preparation and interview coaching made all the difference.",
      rating: 5,
    },
  ];

  const fallbackPosts = [
    {
      id: 1,
      title: "Canada Study Permit: Updated Checklist",
      excerpt: "Latest key documents and processing guidance for Cameroonian applicants.",
      slug: "canada-study-permit-updated-checklist",
      category: "Visa Updates",
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Top Scholarships for International Students in Europe",
      excerpt: "Explore funding opportunities in France, Germany, Poland, and Lithuania.",
      slug: "top-scholarships-europe",
      category: "Scholarships",
      createdAt: new Date().toISOString(),
    },
  ];

  return (
    <main>
      <HomeContent
        testimonials={testimonialRows.length ? testimonialRows : fallbackTestimonials}
        blogPosts={
          blogRows.length
            ? blogRows.map((row) => ({ ...row, createdAt: row.createdAt.toISOString() }))
            : fallbackPosts
        }
      />
    </main>
  );
}
