import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

  if (!token) redirect('/sign-in')

  try {
    jwt.verify(token, process.env.JWT_SECRET!)
    return <>{children}</>
  } catch {
    redirect('/sign-in')
  }
}
