import { NextResponse } from "next/server";
import { db } from "@/db";
import { consultations } from "@/db/schema";
import { isAdminAuthenticated } from "@/lib/auth";
import { consultationSchema } from "@/lib/validation";
import { desc } from "drizzle-orm";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = consultationSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const [inserted] = await db.insert(consultations).values(parsed.data).returning();
  return NextResponse.json(inserted, { status: 201 });
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rows = await db.select().from(consultations).orderBy(desc(consultations.createdAt));
  return NextResponse.json(rows);
}
