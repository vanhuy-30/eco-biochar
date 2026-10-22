import { NextResponse, type NextRequest } from "next/server";

/**
 * Sends "/" to "/vi" or "/en". Vietnamese is the default; English is chosen
 * only when the browser ranks English above Vietnamese.
 */
export function proxy(request: NextRequest) {
  const accepted = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((part) => part.trim().slice(0, 2).toLowerCase());
  const en = accepted.indexOf("en");
  const vi = accepted.indexOf("vi");
  const locale = en !== -1 && (vi === -1 || en < vi) ? "en" : "vi";
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: "/",
};
