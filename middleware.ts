import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host') || ''
  const url = req.nextUrl.clone()

  if (hostname.startsWith('vfx')) {
    url.pathname = `/vfx${url.pathname}`
    return NextResponse.rewrite(url)
  }

  if (hostname.startsWith('interactive')) {
    url.pathname = `/interactive${url.pathname}`
    return NextResponse.rewrite(url)
  }

  // default ke domain utama (akasacara.com)
  url.pathname = `/main${url.pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    /*
      Terapkan middleware ke semua route kecuali file statis & API Next.js
    */
    '/((?!_next|favicon.ico|.*\\..*).*)',
  ],
}
