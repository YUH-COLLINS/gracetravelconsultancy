import type { Metadata } from "next";
import { db } from "@/db";
import { testimonials } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { TestimonialsContent } from "@/components/pages/testimonials-content";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read success stories from students and travelers supported by Grace Travel Consultancy.",
};

export const dynamic = "force-dynamic";

export default async function TestimonialsPage() {
  let rows: { id: number; fullName: string; country: string; category: string; quote: string; rating: number }[] = [];
  try {
    rows = await db
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
      .orderBy(desc(testimonials.createdAt));
  } catch {
    rows = [];
  }

  return <TestimonialsContent rows={rows} />;
}
