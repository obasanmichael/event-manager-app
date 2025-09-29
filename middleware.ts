import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next({request: {headers: req.headers}});
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name) {
          return req.cookies.get(name)?.value;
        },
        set(name, value, options) {
          res.cookies.set({ name, value, ...options });
        },
        remove(name, options) {
          res.cookies.set({ name, value: "", ...options });
        },
      },
    }
  );

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

   console.log("🔎 Middleware debug");
   console.log("Path:", req.nextUrl.pathname);
   console.log("Cookies in request:", req.cookies.getAll());
   console.log("Supabase session:", session);
   console.log("Supabase error:", error);

   if (!session) {
     console.log("⛔ No session found → redirecting to /login");
     return NextResponse.redirect(new URL("/login", req.url));
   }

   console.log("✅ Session found → allow access");
   return res;
}

export const config = {
  matcher: ["/app/:path*"],
};
