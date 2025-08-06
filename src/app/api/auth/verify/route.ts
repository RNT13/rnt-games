import { prisma } from '@/utils/prisma'
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const secret = process.env.JWT_SECRET!
    const decoded = jwt.verify(token, secret) as { id: number }

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { id: true, name: true, email: true }
    })

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user, { status: 200 })
  } catch (error) {
    console.error('Erro na verificação do token:', error)
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }
}
