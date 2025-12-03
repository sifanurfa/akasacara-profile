import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // const url = req.nextUrl.clone();
  // const hostname = req.headers.get("host") || "";

  // // Tentukan host saat lokal atau production
  // const currentHost =
  //   process.env.NODE_ENV === "production"
  //     ? hostname.replace(".akasacara.web.id", "")
  //     : hostname.replace(".localhost:3000", "").replace(".localhost", "");

  // return NextResponse.rewrite(url);
  return NextResponse.next();
}

// export const config = {
//   matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
// };
