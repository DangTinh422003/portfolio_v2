import 'react-lazy-load-image-component/src/effects/blur.css'
import '@/common/styles/globals.css'
import '@/common/styles/reset.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import Sidebar from '@/components/Sidebar'
import { ThemeProvider } from '@/components/theme-provider'
import ToggleTheme from '@/components/ToggleTheme'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: "Cao Dang Tinh's Portfolio",
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="cover" />
      </head>
      <body
        className={`
          ${poppins.className}

          h-screen w-screen
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableColorScheme
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar />
          <ToggleTheme />
          <main className="h-screen w-screen overflow-x-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
