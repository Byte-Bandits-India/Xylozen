import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPin, Briefcase } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Careers — Xylozen Technologies',
  description:
    'Engineering Intelligence. Creating Business Value. Join our AI-native product engineering studio in Chennai.',
}

const coreDisciplines = [
  {
    tag: 'Discipline 01',
    title: 'Web & Software',
    lead: 'Software that runs your business the way an enterprise runs theirs.',
    desc: 'From company websites to internal systems and dashboards — built to hold up under real use.',
  },
  {
    tag: 'Discipline 02',
    title: 'Ecommerce',
    lead: 'Live, selling, and getting paid — without you learning to code.',
    desc: 'Stores built on the platform that fits you, from fast-launch to fully custom.',
  },
  {
    tag: 'Discipline 03',
    title: 'AI & Automation',
    lead: 'A digital team that works while you sleep.',
    desc: 'Agents that don’t just answer — they complete the work.',
  },
]

const openRoles = [
  {
    id: 'ai-automation-engineer',
    title: 'AI & Systems Engineer',
    discipline: 'AI & Automation',
    location: 'Chennai, India (In-House / Hybrid)',
    type: 'Full-time',
    summary:
      'Build autonomous agentic workflows, intelligent automation systems, and connected data pipelines that complete real operational work.',
    responsibilities: [
      'Design and deploy intelligent automation pipelines and agentic reasoning systems',
      'Integrate models with real-world business workflows and microservices',
      'Maintain end-to-end operational reliability, latency, and telemetry',
    ],
  },
  {
    id: 'fullstack-engineer',
    title: 'Full-Stack Software Engineer',
    discipline: 'Web & Software',
    location: 'Chennai, India (In-House / Hybrid)',
    type: 'Full-time',
    summary:
      'Engineer robust web applications, internal systems, and operational dashboards built to hold up under enterprise use.',
    responsibilities: [
      'Build scalable web applications using Next.js, React, Node.js, and TypeScript',
      'Design clean APIs, database schemas, and structured cloud integrations',
      'Ensure high code quality, security, and controlled product development',
    ],
  },
  {
    id: 'ecommerce-engineer',
    title: 'Ecommerce Solutions Engineer',
    discipline: 'Ecommerce',
    location: 'Chennai, India (In-House / Hybrid)',
    type: 'Full-time',
    summary:
      'Develop modern digital commerce platforms, assisted sales kiosks, and seamless retail inventory integrations.',
    responsibilities: [
      'Implement fast, high-converting digital storefronts and custom checkout flows',
      'Integrate retail POS systems, catalog feeds, and payment gateways',
      'Optimize storefront performance, customer journeys, and conversion funnels',
    ],
  },
]

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 sm:pt-36 lg:pt-40 bg-white">
        {/* ===================================================================== */}
        {/* HERO SECTION                                                          */}
        {/* ===================================================================== */}
        <section className="border-b border-line pb-12 sm:pb-16 bg-white">
          <div className="container-section">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-caption text-ink-500 mb-6">
              <Link href="/" className="hover:text-brand-500 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-900 font-semibold">Careers</span>
            </div>

            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
              <span className="font-mono uppercase">CAREERS AT XYLOZEN</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3 max-w-2xl">
              Engineering Intelligence. Creating Business Value.
            </h1>

            {/* Motto */}
            <p className="text-base sm:text-lead font-medium text-brand-700 mb-3 max-w-2xl">
              From workflow to product. From idea to revenue.
            </p>

            {/* Studio Narrative */}
            <p className="text-small sm:text-body text-ink-500 max-w-2xl leading-relaxed mb-6">
              Xylozen is an AI-native product engineering studio headquartered in Chennai. We help startups, growing businesses, and established organizations turn complex ideas and operational challenges into intelligent, scalable digital products.
            </p>

            {/* Direct Action Link */}
            <div>
              <a href="#roles">
                <Button variant="primary-cta">
                  <span>View Open Positions</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 3 CORE DISCIPLINES                                                    */}
        {/* ===================================================================== */}
        <section className="py-14 sm:py-18 bg-white border-b border-line">
          <div className="container-section">
            <div className="max-w-2xl mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-3 font-semibold">
                <span className="w-2 h-2 rounded-full bg-cta" />
                <span className="font-mono uppercase">PRACTICE AREAS</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3">
                One Team, Three Capabilities
              </h2>
              <p className="text-small sm:text-body text-ink-500 leading-relaxed">
                AI, software, and commerce under one roof, not stitched together across vendors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreDisciplines.map((disc, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAFBFD] rounded-2xl border border-line p-6 flex flex-col justify-between hover:border-brand-500/40 hover:shadow-2xs transition-all duration-200"
                >
                  <div>
                    <span className="text-caption font-mono uppercase text-brand-700 font-semibold mb-2 block">
                      {disc.tag}
                    </span>
                    <h3 className="text-lg font-bold text-brand-900 mb-2">
                      {disc.title}
                    </h3>
                    <p className="text-small font-medium text-brand-700 mb-2 leading-snug">
                      {disc.lead}
                    </p>
                    <p className="text-caption text-ink-500 leading-relaxed">
                      {disc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* OPEN ROLES                                                            */}
        {/* ===================================================================== */}
        <section id="roles" className="py-14 sm:py-18 bg-[#FAFBFD] border-b border-line scroll-mt-24">
          <div className="container-section">
            <div className="max-w-2xl mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-3 font-semibold">
                <span className="w-2 h-2 rounded-full bg-cta" />
                <span className="font-mono uppercase">CURRENT OPENINGS</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3">
                Open Engineering Roles
              </h2>
              <p className="text-small sm:text-body text-ink-500 leading-relaxed">
                Join our studio in Chennai. We look for engineers who take end-to-end ownership from discovery to deployment.
              </p>
            </div>

            <div className="space-y-6">
              {openRoles.map((role) => (
                <div
                  key={role.id}
                  className="bg-white rounded-2xl border border-line p-6 sm:p-8 shadow-2xs hover:border-brand-500/40 hover:shadow-xs transition-all duration-200 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3 text-caption text-ink-500 mb-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-100 font-semibold text-brand-900 text-[11px] font-mono">
                        {role.discipline}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {role.location}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                        {role.type}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-brand-900 mb-2">
                      {role.title}
                    </h3>

                    <p className="text-small text-ink-500 leading-relaxed mb-4">
                      {role.summary}
                    </p>

                    <div className="space-y-1.5">
                      {role.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2 text-small text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cta shrink-0 mt-1" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                    <Link href="/#contact">
                      <Button variant="primary-cta" className="w-full sm:w-auto shadow-xs">
                        <span>Apply for Role</span>
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Conversion CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
