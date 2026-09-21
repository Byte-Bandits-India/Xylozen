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

export const metadata: Metadata = {
  title: 'Industries We Serve — Xylozen Technologies',
  description:
    'Technology built around your industry. Custom web applications, AI platforms, and automated workflows engineered for Retail, Real Estate, Healthcare, Logistics, and Manufacturing.',
}

export default function IndustriesPage() {
  return (
    <>
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
