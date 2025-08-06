'use client'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { login, logout } from '@/redux/slices/authSlice'
import { useEffect } from 'react'

export function AuthProvider() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/auth/verify', {
          credentials: 'include'
        })

        if (res.ok) {
          const data = await res.json()
          dispatch(login(data))
        } else {
          dispatch(logout())
        }
      } catch {
        dispatch(logout())
      }
    }

    fetchUser()
  }, [dispatch])

  return null
}
