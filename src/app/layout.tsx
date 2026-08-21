import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import Providers from '@/components/Providers'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: 'BuildFlow | Contractor Websites & AI Lead Automation',
    template: '%s',
  },
  description: 'Contractor websites with automated lead follow-up, business phone number, and review funnel to capture every lead from your marketing.',
  openGraph: {
    siteName: 'BuildFlow',
    type: 'website',
    images: [{ url: '/og-default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ScrollToTop />
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  )
}
