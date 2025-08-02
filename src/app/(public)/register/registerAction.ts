'use server'

import { prisma } from '@/utils/prisma'
import { hashSync } from 'bcrypt-ts'

export default async function registerAction(formData: FormData) {
  const entries = Array.from(formData.entries())
  const data = Object.fromEntries(entries) as {
    name: string
    email: string
    password: string
  }

  console.log('Dados do formulário:', data)

  if (!data.name || !data.email || !data.password) {
    throw new Error('Todos os campos são obrigatórios.')
  }

  const userExists = await prisma.user.findUnique({
    where: {
      email: data.email
    }
  })

  if (userExists) {
    throw new Error('Usuário ja cadastrado.')
  }

  //se não existir cria novo usuario
  await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashSync(data.password) // hash da senha
    }
  })
  console.log('Usuário criado com sucesso:', data.name)
}
