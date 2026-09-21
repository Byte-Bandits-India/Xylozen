import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ServiceSubpageFAQs } from '@/components/services/ServiceSubpageFAQs'
import {
  AboutHero,
  AboutStats,
  AboutWhyUs,
  AboutHowWeWork,
  AboutCommitment,
  aboutFaqs,
} from '@/components/about'

export const metadata: Metadata = {
  title: 'About Us & Delivery Framework — Xylozen Technologies',
  description:
    'Engineering Intelligence. Creating Business Value. Discover our AI-native product studio, core engineering pillars, and 8-stage disciplined delivery process from Chennai to global enterprises.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 sm:pt-36 lg:pt-40 bg-white">
        {/* Studio Hero with Breadcrumbs & 3D Interactive Lead Visual */}
        <AboutHero />

        {/* Studio Telemetry Benchmarks Strip */}
        <AboutStats />

        {/* Why Xylozen: 5 Core Pillars in Signature Industries Showcase UI format */}
        <AboutWhyUs />

        {/* 8-Stage Disciplined Delivery Framework in Editorial Horizontal Carousel */}
        <AboutHowWeWork />

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
