import { NextResponse } from "next/server";
import { db } from "@/db";
import { applications, blogPosts, consultations, inquiries, testimonials } from "@/db/schema";
import { isAdminAuthenticated } from "@/lib/auth";
import { count } from "drizzle-orm";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [consultationsCount] = await db.select({ value: count() }).from(consultations);
  const [applicationsCount] = await db.select({ value: count() }).from(applications);
  const [inquiriesCount] = await db.select({ value: count() }).from(inquiries);
  const [testimonialsCount] = await db.select({ value: count() }).from(testimonials);
  const [blogCount] = await db.select({ value: count() }).from(blogPosts);

  return NextResponse.json({
    consultations: consultationsCount?.value ?? 0,
    applications: applicationsCount?.value ?? 0,
    inquiries: inquiriesCount?.value ?? 0,
    testimonials: testimonialsCount?.value ?? 0,
    blogPosts: blogCount?.value ?? 0,
  });
}
