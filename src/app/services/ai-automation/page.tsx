import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ServiceBadge } from '@/components/ui/ServiceBadge'
import { Button } from '@/components/ui/Button'
import { servicePillars } from '@/lib/services-data'
import { AiAutomationArchitectureVisual } from '@/components/services/AiAutomationArchitectureVisual'
import { AiAutomationHeroVisual } from '@/components/services/AiAutomationHeroVisual'
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
  title: 'Agentic AI & Workflow Automation | Xylozen Technologies',
  description:
    "A digital team that works while you sleep. Agents that don't just answer, they complete the work. Autonomous agentic systems, document NLP, and computer vision built in Chennai.",
  alternates: {
    canonical: '/services/ai-automation',
  },
  openGraph: {
    title: 'Agentic AI & Workflow Automation | Xylozen Technologies',
    description:
      'Autonomous agentic workflows, computer vision systems, and intelligent document NLP that execute tasks end-to-end within your business systems.',
    url: 'https://xylozen.com/services/ai-automation',
    siteName: 'Xylozen Technologies',
    images: [
      {
        url: '/opengraph.webp',
        width: 1200,
        height: 630,
        alt: 'AI Agent Orchestration Architecture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic AI & Workflow Automation | Xylozen Technologies',
    description:
      'Autonomous agentic workflows, computer vision systems, and intelligent document NLP that execute tasks end-to-end within your business systems.',
    images: ['/opengraph.webp'],
  },
}

const aiAutomationFaqs: FAQItem[] = [
  {
    question: 'Do you train public AI models on our proprietary business data?',
    answer:
      'Never. We deploy zero-retention enterprise API endpoints, private vector databases (Qdrant/Pinecone), and isolated VPC or on-premise container environments. Your internal documentation, customer records, and commercial IP are strictly protected under confidentiality agreements and never leak to public model training.',
  },
  {
    question: 'What accuracy thresholds do you guarantee for document extraction & vision?',
    answer:
      'We engineer deterministic confidence-scoring guardrails. Extraction results scoring above your established threshold (typically 95%+) execute autonomously. Any irregular or low-confidence anomaly is routed instantly to a human-in-the-loop review queue before any permanent database write occurs.',
  },
  {
    question: 'How do autonomous agentic workflows differ from basic AI chatbots?',
    answer:
      'Basic chatbots merely generate conversational text. Autonomous agents possess goal-directed execution loops, persistent memory, and API tool integration, enabling them to parse incoming attachments, validate schemas, cross-reference ERP databases, execute multi-step reconciliation, and trigger operational webhooks without human intervention.',
  },
  {
    question: 'Can AI systems be deployed completely on-premise or in private clouds?',
    answer:
      'Yes. For clients in healthcare, finance, or regulated industries with strict data residency mandates, we deploy self-hosted open-weights models (such as Llama 3 and Mistral) along with edge computer vision models (YOLO) directly within your private AWS, GCP, Azure, or air-gapped bare-metal servers.',
  },
]

const aiAutomationDeliverableTiers: DeliverableStackTier[] = [
  {
    number: '01',
    title: 'Multimodal Ingestion & Perception Engine',
    description:
      'Asynchronous intake of unstructured PDFs, vision feeds, audio streams, and enterprise webhook events with schema normalization.',
    logos: [
      { name: 'FastAPI' },
      { name: 'Python' },
      { name: 'Docker' },
      { name: 'TypeScript' },
    ],
  },
  {
    number: '02',
    title: 'Foundation Models & Reasoning Runtime',
    description:
      'Goal-driven agent runtimes with dynamic planning, tool calling, and multi-turn reasoning powered by Claude 3.5 Sonnet and GPT-4o.',
    logos: [
      { name: 'Claude' },
      { name: 'GPT' },
      { name: 'LangChain' },
      { name: 'Python' },
    ],
  },
  {
    number: '03',
    title: 'Private Vector Memory & Hybrid RAG',
    description:
      'Sub-50ms hybrid semantic search over private enterprise documentation with Qdrant and Pinecone, ensuring zero data leakage.',
    logos: [
      { name: 'Qdrant' },
      { name: 'Pinecone' },
      { name: 'Redis' },
      { name: 'PostgreSQL' },
    ],
  },
  {
    number: '04',
    title: 'Autonomous Action Mesh & Guardrails',
    description:
      'Confidence scoring thresholds, human-in-the-loop escalation, cryptographic audit logs, and sandboxed Docker tool execution.',
    logos: [
      { name: 'Docker' },
      { name: 'FastAPI' },
      { name: 'PostgreSQL' },
      { name: 'Cloudflare' },
    ],
  },
]

export default function AiAutomationPage() {
  const data = servicePillars.find((p) => p.id === 'ai-automation')!

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#what-we-do' },
    { name: 'Agentic AI & Automation', url: '/services/ai-automation' },
  ]

  const serviceSchema = getServiceSchema({
    name: 'Agentic AI & Workflow Automation',
    description: data.summary,
    serviceType: 'ArtificialIntelligenceDevelopment',
    url: '/services/ai-automation',
    deliverables: data.deliverables,
  })

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs)
  const faqSchema = getFAQSchema(aiAutomationFaqs)

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
                  <span className="text-brand-900 font-semibold">AI &amp; Automation</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <ServiceBadge service="ai-automation" label={data.badgeLabel} />
                  <span className="text-caption font-mono text-ink-500 uppercase font-semibold">
                    Service Pillar 03
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
                <AiAutomationHeroVisual />
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
                AGENTIC LIFECYCLE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight">
                Autonomous workflow &amp; verification architecture
              </h2>
            </div>

            <AiAutomationArchitectureVisual />
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
          headline="Autonomous AI & Agentic Stack"
          tiers={aiAutomationDeliverableTiers}
        />

        {/* Technical FAQs Section */}
        <ServiceSubpageFAQs faqs={aiAutomationFaqs} />


        {/* Final Conversion Section */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
