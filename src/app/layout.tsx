import './globals.css'

import type { Metadata } from 'next'

import Providers from '@/app/providers'
import { BASE_METADATA } from '@/contents/metadata'
import { cn } from '@/lib/utils'

import { GoogleAnalytics } from '@next/third-parties/google'
import { Poppins } from '@/lib/font'
import { Montserrat } from '@/lib/font'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  ...BASE_METADATA,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />
      </head>
      <body className={cn(Poppins.variable, Montserrat.variable, 'dark')}>
        <Providers>{children}</Providers>
        <Toaster position="top-center" />
        <GoogleAnalytics gaId="" />
      </body>
    </html>
  )
}
