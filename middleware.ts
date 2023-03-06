import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  console.log(":middleware");
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
