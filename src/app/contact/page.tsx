import React from 'react'
import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us & Technical Scoping — Xylozen Technologies',
  description:
    'Tell us what you are trying to build. Schedule a technical scoping consultation with our AI-native engineering studio in Chennai.',
  openGraph: {
    title: 'Contact Us & Technical Scoping — Xylozen Technologies',
    description:
      'Turn complex operational challenges into intelligent, scalable digital products. Reach out to our engineering architects in Chennai.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Xylozen Technologies',
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 sm:pt-36 lg:pt-40 bg-white">
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
