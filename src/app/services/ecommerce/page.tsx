import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ServiceBadge } from '@/components/ui/ServiceBadge'
import { Button } from '@/components/ui/Button'
import { servicePillars } from '@/lib/services-data'
import { EcommerceArchitectureVisual } from '@/components/services/EcommerceArchitectureVisual'
import { EcommerceHeroVisual } from '@/components/services/EcommerceHeroVisual'
import { ServicesStats } from '@/components/services/ServicesStats'
import { ServiceSubpageFAQs, FAQItem } from '@/components/services/ServiceSubpageFAQs'

import { ServiceDeliverablesStack, DeliverableStackTier } from '@/components/services/ServiceDeliverablesStack'

import { JsonLd } from '@/components/seo/JsonLd'
import {
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
} from '@/lib/seo-schema'

export const metadata: Metadata = {
  title: 'Ecommerce Engineering & Checkout Systems | Xylozen Technologies',
  description:
    'Live, selling, and getting paid without you learning to code. Stores built on the platform that fits you, from fast-launch headless Shopify to fully custom high-volume checkout engines.',
  alternates: {
    canonical: '/services/ecommerce',
  },
  openGraph: {
    title: 'Ecommerce Engineering & Checkout Systems | Xylozen Technologies',
    description:
      'High-converting ecommerce platforms engineered for speed, frictionless checkout, and unbroken operation during high-volume traffic surges.',
    url: 'https://xylozen.com/services/ecommerce',
    siteName: 'Xylozen Technologies',
    images: [
      {
        url: '/images/architecture/ecommerce/ecom_checkout.jpg',
        width: 1200,
        height: 630,
        alt: 'Ecommerce Checkout Architecture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Engineering & Checkout Systems | Xylozen Technologies',
    description:
      'High-converting ecommerce platforms engineered for speed, frictionless checkout, and unbroken operation during high-volume traffic surges.',
    images: ['/images/architecture/ecommerce/ecom_checkout.jpg'],
  },
}

const ecommerceFaqs: FAQItem[] = [
  {
    question: 'When should a brand choose Headless Commerce vs standard Shopify?',
    answer:
      'Standard Shopify themes are sufficient for simple stores. We recommend Headless Commerce (Next.js storefront paired with Shopify or MedusaJS) when you need sub-second route transitions, custom purchase funnels, complex multi-region pricing, or when slow theme load times are capping your conversion rate.',
  },
  {
    question: 'How do you protect stores from crashing during flash sales and traffic surges?',
    answer:
      'By decoupling the storefront from backend database writes. Catalog pages, imagery, and product data are cached across global edge CDN networks with zero origin load. High-velocity checkouts are queued asynchronously, allowing the store to effortlessly absorb tens of thousands of concurrent shoppers.',
  },
  {
    question: 'Can you synchronize online inventory with physical retail POS and ERPs?',
    answer:
      'Yes. We engineer bidirectional event-driven pipelines that sync catalog data, inventory counts, and order fulfillment in real-time across physical store POS terminals, warehouse management systems (WMS), and enterprise ERPs (SAP, NetSuite, Odoo), preventing overselling.',
  },
  {
    question: 'Which payment gateways and localized checkout options are supported?',
    answer:
      'We support global and domestic payment rails including Stripe, Razorpay, UPI, Apple Pay, Google Pay, Cash on Delivery (COD) verification workflows, and tiered B2B credit terms, all engineered with strict PCI-DSS Level 1 security standards.',
  },
]

const ecommerceDeliverableTiers: DeliverableStackTier[] = [
  {
    number: '01',
    title: 'Storefront & Headless Core Architecture',
    description:
      'Ultra-fast headless storefronts with Next.js Commerce and edge ISR caching, delivering sub-second TTFB and 100/100 Core Web Vitals.',
    logos: [
      { name: 'Shopify' },
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    number: '02',
    title: 'Payment Gateways & Biometric Checkout',
    description:
      'Frictionless checkout with multi-gateway routing (Stripe, Razorpay, Apple Pay), biometric express pay, and zero drop-off cart recovery.',
    logos: [
      { name: 'Stripe' },
      { name: 'Razorpay' },
      { name: 'FastAPI' },
      { name: 'TypeScript' },
    ],
  },
  {
    number: '03',
    title: 'Real-Time Catalog Search & Index',
    description:
      'Instant typo-tolerant search across 100,000+ SKUs with Algolia and Typesense, faceted filters, and sub-10ms query execution.',
    logos: [
      { name: 'Algolia' },
      { name: 'Redis' },
      { name: 'PostgreSQL' },
      { name: 'TypeScript' },
    ],
  },
  {
    number: '04',
    title: 'Omnichannel ERP & Synchronization',
    description:
      'Real-time bidirectional inventory synchronization connecting physical retail POS, online stores, and warehouse ERPs with zero overselling.',
    logos: [
      { name: 'PostgreSQL' },
      { name: 'Docker' },
      { name: 'Cloudflare' },
      { name: 'AWS' },
    ],
  },
]

export default function EcommercePage() {
  const data = servicePillars.find((p) => p.id === 'ecommerce')!

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#what-we-do' },
    { name: 'Ecommerce', url: '/services/ecommerce' },
  ]

  const serviceSchema = getServiceSchema({
    name: 'Ecommerce Engineering & Headless Checkout Systems',
    description: data.summary,
    serviceType: 'EcommerceDevelopment',
    url: '/services/ecommerce',
    deliverables: data.deliverables,
  })

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs)
  const faqSchema = getFAQSchema(ecommerceFaqs)

  return (
    <>
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <Header />
      <main className="min-h-screen pt-32 sm:pt-36 lg:pt-40">
        {/* Breadcrumb & Sub-Hero */}
        <section className="bg-white pb-14 sm:pb-16 lg:pb-20 border-b border-line">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
              {/* Left Column: Breadcrumb, Heading, Narrative, Actions */}
              <div className="lg:col-span-6 xl:col-span-7">
                <div className="flex items-center gap-2 text-caption text-ink-500 mb-6">
                  <Link href="/" className="hover:text-brand-500 transition-colors">
                    Home
                  </Link>
                  <span>/</span>
                  <span className="text-ink-500">Services</span>
                  <span>/</span>
                  <span className="text-brand-900 font-semibold">Ecommerce</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <ServiceBadge service="ecommerce" label={data.badgeLabel} />
                  <span className="text-caption font-mono text-ink-500 uppercase font-semibold">
                    Service Pillar 02
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3 max-w-2xl">
                  {data.title}
                </h1>

                <p className="text-base sm:text-lead font-medium text-brand-700 mb-3 max-w-2xl">
                  {data.tagline}
                </p>

                <p className="text-small sm:text-body text-ink-500 max-w-2xl mb-8 leading-relaxed">
                  {data.summary}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/contact">
                    <Button variant="primary-cta">
                      <span>Schedule Technical Scoping</span>
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Architectural Visual Card */}
              <div className="lg:col-span-6 xl:col-span-5 flex items-center justify-center">
                <EcommerceHeroVisual />
              </div>
            </div>
          </div>
        </section>

        {/* Global Telemetry Metric Strip */}
        <ServicesStats />

        {/* Interactive Architecture Schematic */}
        <section className="py-16 sm:py-20 bg-surface/30 border-b border-line">
          <div className="container-section">
            <div className="mb-10 max-w-2xl">
              <span className="text-badge font-mono uppercase tracking-wider text-brand-500 mb-2 block">
                COMMERCE PIPELINE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight">
                High-throughput checkout &amp; catalog architecture
              </h2>
            </div>

            <EcommerceArchitectureVisual />
          </div>
        </section>

        {/* 4 Core Capabilities Deep Dive */}
        <section className="py-16 sm:py-20 bg-white border-b border-line">
          <div className="container-section">
            <div className="mb-12 max-w-2xl">
              <span className="text-badge font-mono uppercase tracking-wider text-brand-500 mb-2 block">
                CORE CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight">
                Architectural focus areas &amp; specialized modules
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="bg-surface/30 border border-line rounded-card p-6 sm:p-8 flex flex-col justify-between hover:border-brand-500/40 hover:bg-white transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-caption font-mono text-brand-700 bg-brand-500/10 px-2.5 py-0.5 rounded-full font-semibold">
                        {cap.tag}
                      </span>
                      <span className="font-mono text-small text-ink-500 font-semibold">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="text-h3 font-semibold text-brand-900 mb-2.5 group-hover:text-brand-500 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-small text-ink-500 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables & Evidence Section */}
        <ServiceDeliverablesStack
          headline="High-Velocity Commerce Stack"
          tiers={ecommerceDeliverableTiers}
        />

        {/* Technical FAQs Section */}
        <ServiceSubpageFAQs faqs={ecommerceFaqs} />


        {/* Final Conversion Section */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
