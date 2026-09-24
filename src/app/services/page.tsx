import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FinalCTA } from '@/components/sections/FinalCTA'
import {
  ServicesHero,
  ServicesStats,
  ServicesShowcase,
  EngagementModels,
  DeliveryProcess,
  ServiceSubpageFAQs,
} from '@/components/services'
import { FAQItem } from '@/components/services/ServiceSubpageFAQs'
import { JsonLd } from '@/components/seo/JsonLd'
import { getBreadcrumbSchema, getFAQSchema, getServiceSchema } from '@/lib/seo-schema'

export const metadata: Metadata = {
  title: 'Services & Architecture | Xylozen Technologies',
  description:
    'Engineering intelligence. Delivering operational precision. Custom web applications, high-converting ecommerce platforms, and autonomous agentic AI workflows purpose-built for scale.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services & Architecture | Xylozen Technologies',
    description:
      'Explore our core engineering capabilities: Enterprise Web Systems, Headless Commerce Engines, and Autonomous Agentic AI.',
    url: 'https://xylozen.com/services',
    siteName: 'Xylozen Technologies',
    images: [
      {
        url: '/opengraph.webp',
        width: 1200,
        height: 630,
        alt: 'Xylozen Services & Architecture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services & Architecture | Xylozen Technologies',
    description:
      'Explore our core engineering capabilities: Enterprise Web Systems, Headless Commerce Engines, and Autonomous Agentic AI.',
    images: ['/opengraph.webp'],
  },
}

const servicesFaqs: FAQItem[] = [
  {
    question: 'How do your dedicated engineering pods operate?',
    answer:
      'Our dedicated pods consist of senior full-stack architects, specialized AI/backend engineers, and a delivery lead dedicated 100% to your codebase. We work in disciplined 2-week agile sprints with direct Slack/Git communication, daily async standups, and bi-weekly production releases.',
  },
  {
    question: 'Can we engage Xylozen for a Fixed-Scope MVP build?',
    answer:
      'Yes. Our Fixed-Scope MVP model takes validated concepts from architecture to live production within 3 to 6 weeks. It includes complete UI design, resilient cloud infrastructure, automated CI/CD pipelines, and 100% IP handover with zero disposable prototypes.',
  },
  {
    question: 'Do we retain full ownership of the intellectual property and code?',
    answer:
      '100% yes. You receive complete commercial ownership of all code, database schemas, CI/CD scripts, documentation, and infrastructure runbooks upon delivery. We never lock you into proprietary platforms or hold codebase rights.',
  },
  {
    question: 'How do you guarantee uptime, concurrency, and security for enterprise platforms?',
    answer:
      'We design for high concurrency through database connection pooling (PgBouncer), Redis caching, edge CDN distribution, and containerized microservices on AWS/GCP with automated rollbacks and 99.9% uptime SLA monitoring.',
  },
  {
    question: 'Can you modernize our existing legacy software or integrate AI into current workflows?',
    answer:
      'Yes. We conduct Architecture & AI Audits to inspect existing codebases, pinpoint bottlenecks, and build non-disruptive API adapters and AI automation agents that interface seamlessly with your legacy ERPs, CRMs, and databases.',
  },
]

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ])

  const faqSchema = getFAQSchema(servicesFaqs)

  const serviceSchema = getServiceSchema({
    name: 'Xylozen Engineering & Architecture Services',
    description:
      'Enterprise Web Applications, Headless Commerce Systems, and Agentic AI Automation engineered for operational scale.',
    serviceType: 'SoftwareDevelopment',
    url: '/services',
    deliverables: [
      'Full-codebase ownership and commercial IP handover',
      'Automated CI/CD pipelines with zero-downtime deployment',
      'Sub-second headless ecommerce storefronts and payment engines',
      'Autonomous agentic workflows and private vector memory RAG',
      'Production telemetry, error monitoring, and 99.9% uptime architecture',
    ],
  })

  return (
    <>
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <Header />
      <main className="min-h-screen pt-32 sm:pt-36 lg:pt-40 bg-white">
        {/* Sub-Hero with Breadcrumbs and Quick Pillar Jump */}
        <ServicesHero />

        {/* Global Telemetry Metric Strip */}
        <ServicesStats />

        {/* Interactive Engineering Pillars UI (Pill Accordion + 3D Card Carousel) */}
        <ServicesShowcase />

        {/* Structured Partnership & Engagement Models */}
        <EngagementModels />

        {/* 8-Stage Disciplined Delivery Process */}
        <DeliveryProcess />

        {/* Technical FAQs Section */}
        <ServiceSubpageFAQs faqs={servicesFaqs} />

        {/* Final Conversion CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
