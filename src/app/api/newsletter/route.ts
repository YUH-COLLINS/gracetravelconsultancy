import { NextResponse } from "next/server";
import { db } from "@/db";
import { newsletterSubscribers } from "@/db/schema";
import { newsletterSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const [inserted] = await db
    .insert(newsletterSubscribers)
    .values(parsed.data)
    .onConflictDoNothing()
    .returning();

  return NextResponse.json({ success: true, subscriber: inserted ?? null });
}
