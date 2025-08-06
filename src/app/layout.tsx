import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import { Providers } from '@/components/providers'
import StyledComponentsRegistry from '@/lib/styled-components-registry'
import { GlobalStyles } from '@/styles/globalStyles'
import { theme } from '@/styles/theme'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { SkeletonTheme } from 'react-loading-skeleton'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'RNT Next App',
  description: 'Aplicação Next.js criada com RNT CLI',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Providers>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <SkeletonTheme baseColor={theme.colors.baseCyan.light30} highlightColor={theme.colors.baseCyan.dark30} borderRadius={8} duration={1.2}>
              <main>
                <Header />
                {children}
                <Footer />
                <Toaster
                  position="top-center"
                  containerStyle={{
                    top: 85,
                  }}
                  toastOptions={{
                    duration: 2000,
                    style: {
                      background: '#d1fae5',
                      color: '#065f46',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      fontSize: '0.9rem',
                    },
                    iconTheme: {
                      primary: '#065f46',
                      secondary: '#a7f3d0',
                    },
                    error: {
                      style: {
                        background: '#fcd5d5',
                        color: '#b91c1c',
                        borderRadius: '8px',
                        padding: '12px 16px',
                        fontSize: '0.9rem',
                      },
                      iconTheme: {
                        primary: '#b91c1c',
                        secondary: '#fcd5d5',
                      },
                    },
                  }}
                />
              </main>
            </SkeletonTheme>
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  )
}
