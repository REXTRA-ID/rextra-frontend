// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function parseJwt(token: string) {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch {
    return null
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const token = req.cookies.get('@rextra/access_token')?.value

  const user = token ? parseJwt(token) : null
  const role = user?.role?.toLowerCase()

  // Protected routes
  const protectedRoutes = ['/dashboard', '/events', '/admin']
  const requiresAuth = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  )

  if (requiresAuth && !token) {
    const loginUrl = req.nextUrl.clone()
    loginUrl.pathname = '/login'
    return NextResponse.redirect(loginUrl)
  }

  // Admin only
  if (pathname.startsWith('/admin') && role !== 'admin') {
    const dashboardUrl = req.nextUrl.clone()
    dashboardUrl.pathname = '/dashboard'
    return NextResponse.redirect(dashboardUrl)
  }

  // already login
  if ((pathname === '/login' || pathname === '/register') && token) {
    const homeUrl = req.nextUrl.clone()
    homeUrl.pathname = role === 'admin' ? '/admin' : '/dashboard'
    return NextResponse.redirect(homeUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/events/:path*',
    '/admin/:path*',
    '/login',
    '/register',
  ],
}
