import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ServiceSubpageFAQs } from '@/components/services/ServiceSubpageFAQs'
import {
  IndustriesHero,
  IndustriesStats,
  IndustriesShowcase,
  IndustryWorkflows,
  IndustryApproach,
  industryFaqs,
} from '@/components/industries'

import { JsonLd } from '@/components/seo/JsonLd'
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo-schema'

export const metadata: Metadata = {
  title: 'Industries We Serve | Xylozen Technologies',
  description:
    'Technology built around your industry. Custom web applications, AI platforms, and automated workflows engineered for Retail, Real Estate, Healthcare, Logistics, and Manufacturing.',
  alternates: {
    canonical: '/industries',
  },
  openGraph: {
    title: 'Industries We Serve | Xylozen Technologies',
    description:
      'Domain-adapted engineering for Retail, Healthcare, Logistics, Real Estate, and Manufacturing.',
    url: 'https://xylozen.com/industries',
    siteName: 'Xylozen Technologies',
    images: [
      {
        url: '/images/industries/retail.jpg',
        width: 1200,
        height: 630,
        alt: 'Industries Served by Xylozen',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve | Xylozen Technologies',
    description:
      'Domain-adapted engineering for Retail, Healthcare, Logistics, Real Estate, and Manufacturing.',
    images: ['/images/industries/retail.jpg'],
  },
}

export default function IndustriesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Industries', url: '/industries' },
  ])

  const faqSchema = getFAQSchema(
    industryFaqs.map((f) => ({ question: f.question, answer: f.answer }))
  )

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <Header />
      <main className="min-h-screen pt-32 sm:pt-36 lg:pt-40 bg-white">
        {/* Sub-Hero with Breadcrumbs and Quick Vertical Jumps */}
        <IndustriesHero />

        {/* Global Sector Telemetry Benchmarks */}
        <IndustriesStats />

        {/* Interactive Industries UI Format (Pill Accordion + 3D Card Carousel) */}
        <IndustriesShowcase />

        {/* Deep-Dive Sector Workflows & Architectural Deliverables */}
        <IndustryWorkflows />

        {/* Core Philosophy & Delivery Outcomes */}
        <IndustryApproach />

        {/* Industry Domain & Technical FAQs */}
        <ServiceSubpageFAQs faqs={industryFaqs} />

        {/* Final Technical Conversion CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
