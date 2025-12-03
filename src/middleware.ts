import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get("host") || "";

  // Tentukan host saat lokal atau production
  const currentHost =
    process.env.NODE_ENV === "production"
      ? hostname.replace(".akasacara.web.id", "")
      : hostname.replace(".localhost:3000", "").replace(".localhost", "");

  // Tentukan domain mana
  switch (currentHost) {
    case "vfx":
      url.pathname = `/vfx${url.pathname}`;
      break;
    case "interactive":
      url.pathname = `/interactive${url.pathname}`;
      break;
    case "film":
      url.pathname = `/main${url.pathname}`;
      break;
    case "":
    case "www":
      url.pathname = `/akasacara`;
      break;
    default:
      // kalau domain tidak dikenali
      url.pathname = `/akasacara`;
      break;
  }

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
