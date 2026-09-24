import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ServiceSubpageFAQs } from '@/components/services/ServiceSubpageFAQs'
import {
  AboutHero,
  AboutStats,
  AboutWhyUs,
  AboutCommitment,
  aboutFaqs,
} from '@/components/about'

import { JsonLd } from '@/components/seo/JsonLd'
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo-schema'

export const metadata: Metadata = {
  title: 'About Us & Delivery Framework | Xylozen Technologies',
  description:
    'Engineering Intelligence. Creating Business Value. Discover our AI-native product studio, core engineering pillars, and 8-stage disciplined delivery process from Chennai to global enterprises.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us & Delivery Framework | Xylozen Technologies',
    description:
      'Discover our AI-native product studio, core engineering pillars, and 8-stage disciplined delivery process from Chennai to global enterprises.',
    url: 'https://xylozen.com/about',
    siteName: 'Xylozen Technologies',
    images: [
      {
        url: '/opengraph.webp',
        width: 1200,
        height: 630,
        alt: 'About Xylozen Product Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us & Delivery Framework | Xylozen Technologies',
    description:
      'Discover our AI-native product studio, core engineering pillars, and 8-stage disciplined delivery process from Chennai to global enterprises.',
    images: ['/opengraph.webp'],
  },
}

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ])

  const faqSchema = getFAQSchema(
    aboutFaqs.map((f) => ({ question: f.question, answer: f.answer }))
  )

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <Header />
      <main className="min-h-screen pt-32 sm:pt-36 lg:pt-40 bg-white">
        {/* Studio Hero with Breadcrumbs & 3D Interactive Lead Visual */}
        <AboutHero />

        {/* Studio Telemetry Benchmarks Strip */}
        <AboutStats />

        {/* Why Xylozen: 5 Core Pillars in Signature Industries Showcase UI format */}
        <AboutWhyUs />

        {/* Core Studio Commitment & Philosophy */}
        <AboutCommitment />

        {/* Studio Architecture & Delivery Process FAQs */}
        <ServiceSubpageFAQs faqs={aboutFaqs} />

        {/* Final Conversion CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
