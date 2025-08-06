import { prisma } from '@/utils/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const uniqueOrderId = `Pedido-${Date.now()}-${Math.floor(Math.random() * 10000)}`

    await prisma.order.create({
      data: {
        name: data.billing.name,
        email: data.billing.email,
        document: data.billing.document,
        totalPrice: data.products.reduce((sum: number, p: Product) => sum + p.price, 0),
        orderId: uniqueOrderId,
        paymentInfo: {
          create: {
            paymentType: data.payment.card.active ? 'credit_card' : 'boleto',
            status: 'pending',
            transactionId: data.payment.card.active ? data.payment.card.number : undefined
          }
        },
        orderItems: {
          create: data.products.map((product: Product) => ({
            game: { connect: { id: product.id } }
          }))
        }
      },
      include: {
        orderItems: true
      }
    })

    return NextResponse.json({ message: 'Pedido recebido com sucesso!', orderId: uniqueOrderId })
  } catch (err) {
    console.error('Erro ao salvar pedido:', err)
    return NextResponse.json({ message: 'Erro ao processar pedido' }, { status: 500 })
  }
}
