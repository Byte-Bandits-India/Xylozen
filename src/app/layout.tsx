import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils";

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(inter.variable, "font-sans")}>
      <body className="font-sans antialiased text-ink-900 bg-white selection:bg-brand-500/15 selection:text-brand-900">
        {children}
      </body>
    </html>
  )
}
