import { NextResponse } from "next/server";
import { setAdminSession, validateAdminCredentials } from "@/lib/auth";

export async function POST(request: Request) {
  const body = (await request.json()) as { username?: string; password?: string };

  if (!body.username || !body.password || !validateAdminCredentials(body.username, body.password)) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  await setAdminSession();
  return NextResponse.json({ success: true });
}
