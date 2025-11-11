import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // Allow api and static
  const { pathname } = req.nextUrl;
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  // If visiting auth pages and already has session cookie redirect to dashboard
  const isAuthPage = pathname.startsWith("/signin") || pathname.startsWith("/signup");
  const hasSession =
    req.cookies.has("better-auth.session_token") ||
    req.cookies.has("session_token") ||
    req.cookies.get("better-auth.session") !== undefined;

  if (isAuthPage && hasSession) {
    const url = req.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  // Protect dashboard routes
  const isDashboard =
    pathname.startsWith("/dashboard") || pathname.startsWith("/test-analysis");

  if (isDashboard && !hasSession) {
    const url = req.nextUrl.clone();
    url.pathname = "/signin";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};


