import { prisma } from '@/utils/prisma'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, email, password } = await request.json()

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Dados incompletos' }, { status: 400 })
  }

  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) {
    return NextResponse.json({ error: 'Usuário já existe' }, { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  return NextResponse.json({ user: { id: newUser.id, name: newUser.name, email: newUser.email } })
}
