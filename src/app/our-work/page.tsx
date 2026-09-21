import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ServiceSubpageFAQs } from '@/components/services/ServiceSubpageFAQs'
import {
  OurWorkHero,
  OurWorkStats,
  OurWorkCaseStudies,
  OurWorkGuarantees,
  ourWorkFaqs,
} from '@/components/our-work'

export const metadata: Metadata = {
  title: 'Our Work & Case Studies — Xylozen Technologies',
  description:
    'Real products. Complex challenges. Measurable outcomes. Explore production case studies for Titan × Tata, HireAI, and AI-powered vision safety systems built by Xylozen.',
}

export default function OurWorkPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 sm:pt-36 lg:pt-40 bg-white">
        {/* Sub-Hero with CountUp Production Benchmarks */}
        <OurWorkHero />

        {/* Telemetry Strip with CountUp Key Metrics */}
        <OurWorkStats />

        {/* Flagship Case Studies Deep Dive */}
        <OurWorkCaseStudies />

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
