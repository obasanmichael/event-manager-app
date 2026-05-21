import { NextRequest, NextResponse } from "next/server";
import { parseSessionCookie, SESSION_COOKIE } from "./lib/session";

export async function middleware(req: NextRequest) {
  const sessionValue = req.cookies.get(SESSION_COOKIE)?.value;
  const session = parseSessionCookie(sessionValue);

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/app/:path*"],
};
