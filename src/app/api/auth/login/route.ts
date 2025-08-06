import { prisma } from '@/utils/prisma'
import bcrypt from 'bcryptjs'
import { serialize } from 'cookie'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    const user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      return NextResponse.json({ message: 'Credenciais inválidas' }, { status: 401 })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return NextResponse.json({ message: 'Credenciais inválidas' }, { status: 401 })
    }

    const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.JWT_SECRET!, { expiresIn: '7d' })

    const serialized = serialize('token', token, {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 dias
    })

    const response = new NextResponse(JSON.stringify({ message: 'Login bem-sucedido', user }), {
      status: 200
    })

    response.headers.set('Set-Cookie', serialized)

    return response
  } catch (error) {
    console.error('Erro no login:', error)
    return NextResponse.json({ message: 'Erro interno no servidor' }, { status: 500 })
  }
}
