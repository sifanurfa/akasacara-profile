import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // const hostname = req.headers.get('host') || ''
  // const url = req.nextUrl.clone()

  // // kalau masih pakai vercel domain
  // if (hostname.includes("akasacara.vercel.app")) {
  //   const sub = req.nextUrl.searchParams.get("domain");
  //   switch (sub) {
  //     case "vfx":
  //       url.pathname = `/vfx${url.pathname}`;
  //       break;
  //     case "interactive":
  //       url.pathname = `/interactive${url.pathname}`;
  //       break;
  //     case "film":
  //       url.pathname = `/main${url.pathname}`;
  //       break;
  //     default:
  //       url.pathname = `/akasacara${url.pathname}`;
  //       break;
  //   }
  // }

  // if (hostname.startsWith('vfx')) {
  //   url.pathname = `/vfx${url.pathname}`
  //   return NextResponse.rewrite(url)
  // }

  // if (hostname.startsWith('interactive')) {
  //   url.pathname = `/interactive${url.pathname}`
  //   return NextResponse.rewrite(url)
  // }

  // if (hostname.startsWith('film')) {
  //   url.pathname = `/main${url.pathname}`
  //   return NextResponse.rewrite(url)
  // }

  // // default ke domain utama (akasacara.com)
  // url.pathname = `/akasacara${url.pathname}`
  // return NextResponse.rewrite(url)
  return NextResponse.next();
}

// export const config = {
//   matcher: [
//     /*
//       Terapkan middleware ke semua route kecuali file statis & API Next.js
//     */
//     "/((?!_next|favicon.ico|.*\\..*).*)",
//   ],
// };
