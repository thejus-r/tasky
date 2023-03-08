import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  console.log(data.get("title"));
  return NextResponse.json({ name: "Thejus R" });
}
