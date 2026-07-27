import { NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { testimonials } from "@/db/schema";
import { isAdminAuthenticated } from "@/lib/auth";
import { testimonialSchema } from "@/lib/validation";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const admin = url.searchParams.get("admin") === "1";

  if (admin && !(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rows = admin
    ? await db.select().from(testimonials).orderBy(desc(testimonials.createdAt))
    : await db
        .select()
        .from(testimonials)
        .where(eq(testimonials.approved, true))
        .orderBy(desc(testimonials.createdAt));

  return NextResponse.json(rows);
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const payload = {
    ...body,
    rating: Number(body.rating ?? 5),
    approved: body.approved ?? true,
  };
  const parsed = testimonialSchema.safeParse(payload);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const [inserted] = await db
    .insert(testimonials)
    .values({ ...parsed.data, imageUrl: parsed.data.imageUrl || null })
    .returning();

  return NextResponse.json(inserted, { status: 201 });
}
