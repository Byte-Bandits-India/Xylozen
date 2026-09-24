import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ServiceSubpageFAQs } from '@/components/services/ServiceSubpageFAQs'
import { OurWork } from '@/components/sections/OurWork'
import {
  OurWorkHero,
  OurWorkStats,
  OurWorkHowWeWork,
  OurWorkGuarantees,
  ourWorkFaqs,
} from '@/components/our-work'

import { JsonLd } from '@/components/seo/JsonLd'
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo-schema'

export const metadata: Metadata = {
  title: 'Our Work & Case Studies | Xylozen Technologies',
  description:
    'Real products. Complex challenges. Measurable outcomes. Explore production case studies for Titan × Tata, HireAI, and AI-powered vision safety systems built by Xylozen.',
  alternates: {
    canonical: '/our-work',
  },
  openGraph: {
    title: 'Our Work & Case Studies | Xylozen Technologies',
    description:
      'Real products. Complex challenges. Measurable outcomes. Explore production case studies built by Xylozen.',
    url: 'https://xylozen.com/our-work',
    siteName: 'Xylozen Technologies',
    images: [
      {
        url: '/opengraph.webp',
        width: 1200,
        height: 630,
        alt: 'Xylozen Case Studies & Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work & Case Studies | Xylozen Technologies',
    description:
      'Real products. Complex challenges. Measurable outcomes. Explore production case studies built by Xylozen.',
    images: ['/opengraph.webp'],
  },
}

export default function OurWorkPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Our Work', url: '/our-work' },
  ])

  const faqSchema = getFAQSchema(
    ourWorkFaqs.map((f) => ({ question: f.question, answer: f.answer }))
  )

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <Header />
      <main className="min-h-screen pt-32 sm:pt-36 lg:pt-40 bg-white">
        {/* Sub-Hero with CountUp Production Benchmarks */}
        <OurWorkHero />

        {/* Telemetry Strip with CountUp Key Metrics */}
        <OurWorkStats />

        {/* Flagship Case Studies Sticky Stack */}
        <OurWork />

        {/* 8-Stage Disciplined Delivery Framework */}
        <OurWorkHowWeWork />

        {/* Delivery Guarantees & Principles */}
        <OurWorkGuarantees />

        {/* Technical Project FAQs */}
        <ServiceSubpageFAQs faqs={ourWorkFaqs} />

        {/* Final Conversion Section */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
