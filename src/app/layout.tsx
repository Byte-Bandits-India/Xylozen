import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const GTM_ID = 'GTM-TVNM6KT5'
// Analytics only loads when the site is served from these hostnames
const ANALYTICS_HOSTS = ['xylozentech.com', 'www.xylozentech.com']

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebSiteSchema,
} from '@/lib/seo-schema'

export const metadata: Metadata = {
  metadataBase: new URL('https://xylozentech.com'),
  title: {
    default: 'Xylozen Technologies | Precision Operationalized',
    template: '%s | Xylozen Technologies',
  },
  description:
    'From your first website to a fully automated business, designed, built, integrated, and maintained by one team. International-standard engineering for web, commerce, and AI automation.',
  applicationName: 'Xylozen Technologies',
  category: 'technology',
  formatDetection: { telephone: false, email: false, address: false },
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
  authors: [{ name: 'Xylozen Technologies', url: 'https://xylozentech.com' }],
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
  openGraph: {
    title: 'Xylozen Technologies | Precision Operationalized',
    description:
      'From your first website to a fully automated business, designed, built, integrated, and maintained by one team.',
    url: 'https://xylozentech.com',
    siteName: 'Xylozen Technologies',
    images: [
      {
        url: '/opengraph.jpg',
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
    images: ['/opengraph.jpg'],
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
    <html lang="en" className={cn(inter.variable, "font-sans")} suppressHydrationWarning>
      <body className="font-sans antialiased text-ink-900 bg-white selection:bg-brand-500/15 selection:text-brand-900" suppressHydrationWarning>
        <Script id="gtm" strategy="beforeInteractive">
          {`if(${JSON.stringify(ANALYTICS_HOSTS)}.indexOf(window.location.hostname)!==-1){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');}`}
        </Script>
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
