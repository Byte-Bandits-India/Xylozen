import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'lenis/dist/lenis.css'
import './globals.css'
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Xylozen Technologies — Precision Operationalized',
  description:
    'From your first website to a fully automated business — designed, built, integrated, and maintained by one team. International-standard engineering for web, commerce, and AI automation.',
  keywords: [
    'web development',
    'software engineering',
    'ecommerce',
    'AI automation',
    'business software',
    'Chennai',
    'India',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/images/logo/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Xylozen Technologies — Precision Operationalized',
    description:
      'From your first website to a fully automated business — designed, built, integrated, and maintained by one team.',
    url: 'https://xylozen.com',
    siteName: 'Xylozen Technologies',
    images: [
      {
        url: '/images/logo/transparent.png',
        width: 2148,
        height: 538,
        alt: 'Xylozen Technologies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xylozen Technologies — Precision Operationalized',
    description:
      'From your first website to a fully automated business — designed, built, integrated, and maintained by one team.',
    images: ['/images/logo/transparent.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(inter.variable, "font-sans")}>
      <body className="font-sans antialiased text-ink-900 bg-white selection:bg-brand-500/15 selection:text-brand-900">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
