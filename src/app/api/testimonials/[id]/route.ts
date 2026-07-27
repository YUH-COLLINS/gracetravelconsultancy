import { NextResponse } from "next/server";
import { db } from "@/db";
import { testimonials } from "@/db/schema";
import { isAdminAuthenticated } from "@/lib/auth";
import { testimonialSchema } from "@/lib/validation";
import { eq } from "drizzle-orm";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const payload = {
    ...body,
    rating: Number(body.rating ?? 5),
    approved: body.approved ?? true,
  };
  const parsed = testimonialSchema.safeParse(payload);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const [updated] = await db
    .update(testimonials)
    .set({ ...parsed.data, imageUrl: parsed.data.imageUrl || null })
    .where(eq(testimonials.id, Number(id)))
    .returning();

  return NextResponse.json(updated);
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  await db.delete(testimonials).where(eq(testimonials.id, Number(id)));
  return NextResponse.json({ success: true });
}
