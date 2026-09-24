import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ServiceSubpageFAQs } from '@/components/services/ServiceSubpageFAQs'
import {
  PricingHero,
  PricingStats,
  PricingModelsGrid,
  PricingComparison,
  pricingFaqs,
} from '@/components/pricing'

import { JsonLd } from '@/components/seo/JsonLd'
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo-schema'

export const metadata: Metadata = {
  title: 'Pricing & Engagement Models | Xylozen Technologies',
  description:
    'Transparent, predictable engagement models tailored for high-velocity software engineering. Explore Fixed-Scope MVP builds, Dedicated Engineering Pods, and AI Modernization Audits.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Pricing & Engagement Models | Xylozen Technologies',
    description:
      'Transparent, predictable engagement models tailored for high-velocity software engineering. Fixed-Scope MVPs, Dedicated Pods, and AI Audits.',
    url: 'https://xylozen.com/pricing',
    siteName: 'Xylozen Technologies',
    images: [
      {
        url: '/opengraph.webp',
        width: 1200,
        height: 630,
        alt: 'Xylozen Pricing & Engagement Models',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing & Engagement Models | Xylozen Technologies',
    description:
      'Transparent, predictable engagement models tailored for high-velocity software engineering. Fixed-Scope MVPs, Dedicated Pods, and AI Audits.',
    images: ['/opengraph.webp'],
  },
}

export default function PricingPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Pricing & Models', url: '/pricing' },
  ])

  const faqSchema = getFAQSchema(
    pricingFaqs.map((f) => ({ question: f.question, answer: f.answer }))
  )

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <Header />
      <main className="min-h-screen pt-32 sm:pt-36 lg:pt-40 bg-white">
        {/* Pricing Sub-Hero with Breadcrumb and Commercial Guarantees */}
        <PricingHero />

        {/* Commercial Trust & Telemetry Strip */}
        <PricingStats />

        {/* 3 Core Engagement Model Cards */}
        <PricingModelsGrid />

        {/* Detailed Feature & Governance Comparison Matrix */}
        <PricingComparison />

        {/* Commercial & Contractual FAQs */}
        <ServiceSubpageFAQs faqs={pricingFaqs} />

        {/* Final Conversion Section */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
