import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebSiteSchema,
} from '@/lib/seo-schema'

export const metadata: Metadata = {
  metadataBase: new URL('https://xylozen.com'),
  title: {
    default: 'Xylozen Technologies | Precision Operationalized',
    template: '%s | Xylozen Technologies',
  },
  description:
    'From your first website to a fully automated business, designed, built, integrated, and maintained by one team. International-standard engineering for web, commerce, and AI automation.',
  keywords: [
    'web development',
    'software engineering',
    'ecommerce',
    'AI automation',
    'business software',
    'Agentic AI',
    'custom software',
    'Chennai',
    'India',
  ],
  authors: [{ name: 'Xylozen Technologies', url: 'https://xylozen.com' }],
  creator: 'Xylozen Technologies',
  publisher: 'Xylozen Technologies',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/opengraph.webp', type: 'image/webp' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/opengraph.webp', sizes: '180x180', type: 'image/webp' },
    ],
  },
  openGraph: {
    title: 'Xylozen Technologies | Precision Operationalized',
    description:
      'From your first website to a fully automated business, designed, built, integrated, and maintained by one team.',
    url: 'https://xylozen.com',
    siteName: 'Xylozen Technologies',
    images: [
      {
        url: '/opengraph.webp',
        width: 1200,
        height: 630,
        alt: 'Xylozen Technologies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xylozen Technologies | Precision Operationalized',
    description:
      'From your first website to a fully automated business, designed, built, integrated, and maintained by one team.',
    images: ['/opengraph.webp'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = getOrganizationSchema()
  const localBusinessSchema = getLocalBusinessSchema()
  const websiteSchema = getWebSiteSchema()

  return (
    <html lang="en" className={cn(inter.variable, "font-sans")}>
      <body className="font-sans antialiased text-ink-900 bg-white selection:bg-brand-500/15 selection:text-brand-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
