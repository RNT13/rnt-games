import { MiddlewareConfig, NextRequest, NextResponse } from 'next/server'

const publicRoutes = [
  { path: '/', whenAuthenticated: 'next' },
  { path: '/sign-in', whenAuthenticated: 'redirect' },
  { path: '/register', whenAuthenticated: 'redirect' },
  { path: '/pricing', whenAuthenticated: 'next' }
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/sign-in'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const matchedPublicRoute = publicRoutes.find(route => route.path === path)
  const authToken = request.cookies.get('token')

  //1 - Se o usuário não estiver autenticado e o caminho da rota não for público, redireciona para a página de login
  if (!authToken && matchedPublicRoute) {
    return NextResponse.next()
  }

  //2 - se o usuario não estiver autenticado e o caminho da rota não for público, redireciona para a página de login
  if (!authToken && !matchedPublicRoute) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE
    return NextResponse.redirect(redirectUrl)
  }

  //3 - Se o usuário estiver autenticado e o caminho da rota não for público, redireciona para a página inicial
  if (authToken && matchedPublicRoute?.whenAuthenticated === 'redirect') {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/'
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}

export const config: MiddlewareConfig = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico, sitemap.xml, robots.txt (metadata files)
   */
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)']
}
