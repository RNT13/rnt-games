'use client'

import { store } from '@/redux/store'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { AuthProvider } from './ui/AuthProvider/AuthProvider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <AuthProvider />
      {children}
    </Provider>
  )
}
