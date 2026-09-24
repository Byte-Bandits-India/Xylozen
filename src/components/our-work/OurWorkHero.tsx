'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { OurWorkHeroVisual } from './OurWorkHeroVisual'

export function OurWorkHero() {
  return (
    <section className="bg-white pb-14 sm:pb-16 lg:pb-20 border-b border-line">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Breadcrumb, Narrative, Actions */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-caption text-ink-500 mb-6">
              <Link href="/" className="hover:text-brand-500 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-900 font-semibold">Our Work</span>
            </div>

            {/* Section Eyebrow Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-badge font-mono uppercase tracking-wider text-brand-500 bg-brand-500/10 px-2.5 py-1 rounded-full font-semibold">
                PORTFOLIO &amp; EVIDENCE
              </span>
              <span className="text-caption font-mono text-ink-500 uppercase font-semibold">
                3 Production Case Studies
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3 max-w-2xl">
              Real products. Complex challenges. Measurable outcomes.
            </h1>

            {/* Lead Subheading */}
            <p className="text-base sm:text-lead font-medium text-brand-700 mb-3 max-w-2xl">
              Precision, in production.
            </p>

            {/* Narrative Summary from info/Content/OurWork.MD */}
            <p className="text-small sm:text-body text-ink-500 max-w-2xl mb-8 leading-relaxed">
              At Xylozen, we work beyond conventional software delivery. We identify operational challenges,
              engineer intelligent solutions, and take ownership from concept to deployment. Our selected
              projects demonstrate how AI-native systems, web applications, and custom digital platforms
              create measurable business value.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <Button variant="primary-cta" className="gap-2 text-white font-medium">
                  <span className="text-white font-medium">Schedule Technical Scoping</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Card */}
          <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center">
            <OurWorkHeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
