import { prisma } from '@/utils/prisma'
import { hashSync } from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.json()

  const userExists = await prisma.user.findUnique({
    where: {
      email: data.email
    }
  })

  if (userExists) {
    return NextResponse.json({ message: 'Usuario ja cadastrado.' }, { status: 400 })
  }

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashSync(data.password)
    }
  })

  return NextResponse.json(user)
}
