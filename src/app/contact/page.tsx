import React from 'react'
import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactForm } from '@/components/contact/ContactForm'

import { JsonLd } from '@/components/seo/JsonLd'
import { getBreadcrumbSchema } from '@/lib/seo-schema'

export const metadata: Metadata = {
  title: 'Contact Us & Technical Scoping | Xylozen Technologies',
  description:
    'Tell us what you are trying to build. Schedule a technical scoping consultation with our AI-native engineering studio in Chennai.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us & Technical Scoping | Xylozen Technologies',
    description:
      'Turn complex operational challenges into intelligent, scalable digital products. Reach out to our engineering architects in Chennai.',
    url: 'https://xylozen.com/contact',
    siteName: 'Xylozen Technologies',
    images: [
      {
        url: '/images/contact-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Xylozen Technologies',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us & Technical Scoping | Xylozen Technologies',
    description:
      'Turn complex operational challenges into intelligent, scalable digital products. Reach out to our engineering architects in Chennai.',
    images: ['/images/contact-hero.jpg'],
  },
}

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ])

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <Header />
      <main className="min-h-screen pt-32 sm:pt-36 lg:pt-40 bg-white">
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
