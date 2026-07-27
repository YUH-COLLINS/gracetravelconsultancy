import { NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { blogPosts } from "@/db/schema";
import { isAdminAuthenticated } from "@/lib/auth";
import { blogSchema } from "@/lib/validation";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const admin = url.searchParams.get("admin") === "1";

  if (admin && !(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rows = await db
    .select()
    .from(blogPosts)
    .where(admin ? undefined : eq(blogPosts.published, true))
    .orderBy(desc(blogPosts.createdAt));

  return NextResponse.json(rows);
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = blogSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const [existing] = await db.select().from(blogPosts).where(eq(blogPosts.slug, parsed.data.slug));
  if (existing) return NextResponse.json({ error: "Slug already exists" }, { status: 409 });

  const [inserted] = await db
    .insert(blogPosts)
    .values({ ...parsed.data, imageUrl: parsed.data.imageUrl || null })
    .returning();

  return NextResponse.json(inserted, { status: 201 });
}
