import { prisma } from '@/utils/prisma'
import { compareSync } from 'bcrypt-ts'
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()

  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user || !compareSync(password, user.password)) {
    return NextResponse.json({ message: 'Credenciais inválidas' }, { status: 401 })
  }

  // Gera token JWT
  const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.JWT_SECRET!, { expiresIn: '7d' })

  return NextResponse.json({ token, user: { id: user.id, name: user.name, email: user.email } })
}
