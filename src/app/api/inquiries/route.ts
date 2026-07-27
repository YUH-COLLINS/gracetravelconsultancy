import { NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { isAdminAuthenticated } from "@/lib/auth";
import { inquirySchema } from "@/lib/validation";
import { desc } from "drizzle-orm";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const [inserted] = await db.insert(inquiries).values(parsed.data).returning();
  return NextResponse.json(inserted, { status: 201 });
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rows = await db.select().from(inquiries).orderBy(desc(inquiries.createdAt));
  return NextResponse.json(rows);
}
