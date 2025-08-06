import { serialize } from 'cookie'
import { NextResponse } from 'next/server'

export async function POST() {
  const response = new NextResponse(JSON.stringify({ message: 'Logout realizado com sucesso' }), { status: 200 })

  // Invalida o cookie removendo-o
  response.headers.set(
    'Set-Cookie',
    serialize('token', '', {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      expires: new Date(0)
    })
  )

  return response
}
