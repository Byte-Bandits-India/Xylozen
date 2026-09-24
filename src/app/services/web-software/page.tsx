import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ServiceBadge } from '@/components/ui/ServiceBadge'
import { servicePillars } from '@/lib/services-data'
import { WebSoftwareArchitectureVisual } from '@/components/services/WebSoftwareArchitectureVisual'
import { WebSoftwareHeroVisual } from '@/components/services/WebSoftwareHeroVisual'
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
  title: 'Web & Software Engineering | Xylozen Technologies',
  description:
    'Software that runs your business the way an enterprise runs theirs. Custom web applications, internal systems, and scalable API infrastructure built in Chennai for global scale.',
  alternates: {
    canonical: '/services/web-software',
  },
  openGraph: {
    title: 'Web & Software Engineering | Xylozen Technologies',
    description:
      'Custom web applications, internal systems, and scalable cloud architectures purpose-built for operational scale and high concurrency.',
    url: 'https://xylozen.com/services/web-software',
    siteName: 'Xylozen Technologies',
    images: [
      {
        url: '/opengraph.webp',
        width: 1200,
        height: 630,
        alt: 'Web & Software Engineering Architecture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web & Software Engineering | Xylozen Technologies',
    description:
      'Custom web applications, internal systems, and scalable cloud architectures purpose-built for operational scale and high concurrency.',
    images: ['/opengraph.webp'],
  },
}

const webSoftwareFaqs: FAQItem[] = [
  {
    question: 'Do we get 100% ownership of the codebase and intellectual property?',
    answer:
      'Yes, absolutely. You receive complete intellectual property rights, code repository ownership, design systems, and deployment configurations. Nothing is locked or proprietary.',
  },
  {
    question: 'What is your typical turnaround timeline for web applications?',
    answer:
      'Our structured Fixed-Scope MVP builds are designed, engineered, tested, and released to production in 3 to 6 weeks. For larger, evolving enterprise platforms, we operate via dedicated 2-week sprint cycles with transparent bi-weekly demo milestones.',
  },
  {
    question: 'How do you engineer for high concurrency and zero-downtime deployments?',
    answer:
      'We structure systems with stateless microservice containers, database read-replicas with connection pooling (PgBouncer), Redis in-memory caching, and edge routing via Cloudflare CDN. Deployments follow automated blue/green or canary rollout scripts with automatic health checks and rollback triggers.',
  },
  {
    question: 'Can our internal engineering team easily maintain and extend the code?',
    answer:
      'Yes. Every project is written in strict TypeScript with comprehensive type safety, standard design patterns, modular directories, and thorough test suites. We conduct complete engineering handoffs with architecture runbooks, API OpenAPI/Swagger specs, and deployment walkthroughs.',
  },
]

const webSoftwareDeliverableTiers: DeliverableStackTier[] = [
  {
    number: '01',
    title: 'Frontend & Reactive UI Architecture',
    description:
      'Server-side streaming, component-driven design systems, and zero-waterfall page hydration delivering sub-second load times and 100/100 Core Web Vitals.',
    logos: [
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    number: '02',
    title: 'Backend & Scalable API Services',
    description:
      'Stateless microservice clustering, asynchronous task queues, and resilient REST & gRPC endpoints handling 10,000+ requests per second.',
    logos: [
      { name: 'FastAPI' },
      { name: 'Node.js' },
      { name: 'Python' },
      { name: 'TypeScript' },
    ],
  },
  {
    number: '03',
    title: 'Database & In-Memory Caching',
    description:
      'PostgreSQL read-replica pooling with PgBouncer, row-level security, and sub-millisecond Redis caching for high-concurrency throughput.',
    logos: [
      { name: 'PostgreSQL' },
      { name: 'Redis' },
      { name: 'Docker' },
      { name: 'TypeScript' },
    ],
  },
  {
    number: '04',
    title: 'Cloud Infrastructure & DevOps',
    description:
      'Automated zero-downtime blue/green deployments, Cloudflare Anycast edge CDN routing, and comprehensive 24/7 telemetry monitoring.',
    logos: [
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'Cloudflare' },
      { name: 'Next.js' },
    ],
  },
]

export default function WebSoftwarePage() {
  const data = servicePillars.find((p) => p.id === 'web-software')!

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Web & Software', url: '/services/web-software' },
  ]

  const serviceSchema = getServiceSchema({
    name: 'Web & Custom Software Engineering',
    description: data.summary,
    serviceType: 'SoftwareEngineering',
    url: '/services/web-software',
    deliverables: data.deliverables,
  })

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs)
  const faqSchema = getFAQSchema(webSoftwareFaqs)

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
                  <Link href="/services" className="hover:text-brand-500 transition-colors">
                    Services
                  </Link>
                  <span>/</span>
                  <span className="text-brand-900 font-semibold">Web &amp; Software</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <ServiceBadge service="web-software" label={data.badgeLabel} />
                  <span className="text-caption font-mono text-ink-500 uppercase font-semibold">
                    Service Pillar 01
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
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 min-h-[44px] px-6 py-2.5 text-btn rounded-button bg-cta text-white hover:bg-[#C13010] active:bg-[#C13010] shadow-sm shadow-cta/20 hover:shadow-md gap-2"
                  >
                    <span className="text-white font-medium">Schedule Technical Scoping</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Architectural Visual Card */}
              <div className="lg:col-span-6 xl:col-span-5 flex items-center justify-center">
                <WebSoftwareHeroVisual />
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
                TECHNICAL BLUEPRINT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight">
                Architectural topology &amp; high-concurrency design
              </h2>
            </div>

            <WebSoftwareArchitectureVisual />
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
          headline="Engineered for Enterprise Scale & Speed"
          tiers={webSoftwareDeliverableTiers}
        />

        {/* Technical FAQs Section */}
        <ServiceSubpageFAQs faqs={webSoftwareFaqs} />


        {/* Final Conversion Section */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

