'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function PricingHero() {
  return (
    <section className="bg-white pb-14 sm:pb-16 lg:pb-20 border-b border-line">
      <div className="container-section">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-caption text-ink-500 mb-6">
            <Link href="/" className="hover:text-brand-500 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-900 font-medium">Pricing &amp; Engagement Models</span>
          </div>

          {/* Pill Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-4">
            <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
            <span className="font-mono uppercase font-medium">TRANSPARENT COMMERCIAL PARTNERSHIPS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-h1 font-medium text-brand-900 tracking-tight leading-tight mb-4">
            Predictable Models Built for Engineering Velocity &amp; Business Value
          </h1>

          {/* Lead Narrative */}
          <p className="text-base sm:text-lead font-medium text-brand-700 mb-3 max-w-3xl leading-relaxed">
            Whether you need a dedicated senior engineering pod or a rapid fixed-scope MVP sprint, we structure engagements around commercial certainty, full IP ownership, and measurable velocity.
          </p>

          <p className="text-small sm:text-body text-ink-500 max-w-2xl mb-8 leading-relaxed">
            Zero hidden markups, zero middle managers, and zero vendor lock-in. Every sprint deliverables are backed by rigorous code reviews, automated tests, and live bi-weekly milestones.
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact">
              <Button variant="primary-cta" className="gap-2 text-white font-medium">
                <span className="text-white font-medium">Request a Scoping Consultation</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Button>
            </Link>

            <a
              href="#pricing-tiers"
              className="inline-flex items-center justify-center font-medium transition-all duration-200 min-h-[44px] px-5 py-2.5 text-btn rounded-button border border-slate-300 text-slate-800 hover:border-slate-800 hover:bg-slate-50 gap-2"
            >
              <span>Compare Models</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-slate-100 text-caption text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-500" />
              <span>100% IP &amp; Repository Rights</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-500" />
              <span>Fixed Milestone Guarantees</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-500" />
              <span>30-Day Post-Launch Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
