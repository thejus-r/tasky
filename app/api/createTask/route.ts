import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const data = await req.formData();

  try {
    const task = await prisma.task.create({
      data: {
        title: data.get("title") as string,
        description: data.get("description") as string,
        date: new Date(data.get("date") as string),
      },
    });
    console.log(task);
    return NextResponse.json({ status: "OK" });
  } catch (err) {
    console.log(err);
  }
  return NextResponse.json({ status: "Error" });
}
