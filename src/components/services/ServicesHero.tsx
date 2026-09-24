'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ServicesHeroVisual } from './ServicesHeroVisual'

export function ServicesHero() {
  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const headerOffset = 80
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-white pb-14 sm:pb-16 lg:pb-20 border-b border-line">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Breadcrumb, Pill Eyebrow, Heading, Narrative, Actions */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-caption text-ink-500 mb-6">
              <Link href="/" className="hover:text-brand-500 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-900 font-semibold">Services</span>
            </div>

            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-4">
              <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
              <span className="font-mono uppercase font-semibold">SERVICES &amp; ARCHITECTURE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3 max-w-2xl">
              Engineering Intelligence. Delivering Operational Precision.
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lead font-medium text-brand-700 mb-3 max-w-2xl leading-relaxed">
              We build intelligent digital products, enterprise web systems, and autonomous AI agents adapted around your actual business operations.
            </p>

            <p className="text-small sm:text-body text-ink-500 max-w-2xl mb-6 leading-relaxed">
              No generic templates or disposable prototypes; every codebase is purpose-built for high concurrency, zero downtime, and long-term commercial value.
            </p>

            {/* Service Pillar Quick-Jump Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <button
                onClick={() => scrollToAnchor('service-pillars')}
                className="px-3 py-1.5 rounded-full bg-surface border border-line text-xs font-semibold text-brand-900 hover:border-brand-500 transition-colors cursor-pointer"
              >
                Web &amp; Software →
              </button>
              <button
                onClick={() => scrollToAnchor('service-pillars')}
                className="px-3 py-1.5 rounded-full bg-surface border border-line text-xs font-semibold text-brand-900 hover:border-brand-500 transition-colors cursor-pointer"
              >
                Ecommerce →
              </button>
              <button
                onClick={() => scrollToAnchor('service-pillars')}
                className="px-3 py-1.5 rounded-full bg-surface border border-line text-xs font-semibold text-brand-900 hover:border-brand-500 transition-colors cursor-pointer"
              >
                Agentic AI →
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 min-h-[44px] px-6 py-2.5 text-btn rounded-button bg-cta text-white hover:bg-[#C13010] active:bg-[#C13010] shadow-sm shadow-cta/20 hover:shadow-md gap-2"
              >
                <span>Schedule Technical Scoping</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Console Visual */}
          <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center">
            <ServicesHeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
