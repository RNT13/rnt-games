import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'

const publicRoutes = ['/', '/sign-in', '/register', '/pricing', '/allGames', '/gameDetails', '/checkout']

const JWT_SECRET = process.env.JWT_SECRET!
const REDIRECT_WHEN_NOT_AUTHENTICATED = '/sign-in'

function redirectTo(path: string, request: NextRequest) {
  const url = request.nextUrl.clone()
  url.pathname = path
  return NextResponse.redirect(url)
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isPublic = publicRoutes.includes(path)
  const token = request.cookies.get('token')?.value

  let isAuthenticated = false

  if (token) {
    try {
      jwt.verify(token, JWT_SECRET)
      isAuthenticated = true
    } catch (err) {
      console.error('Token inválido:', err)
    }
  }

  if (!isAuthenticated && !isPublic) {
    return redirectTo(REDIRECT_WHEN_NOT_AUTHENTICATED, request)
  }

  if (isAuthenticated && (path === '/sign-in' || path === '/register')) {
    return redirectTo('/', request)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|api/).*)']
}
