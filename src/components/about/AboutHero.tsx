'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { AboutHeroVisual } from './AboutHeroVisual'

export function AboutHero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const headerOffset = 90
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-white border-b border-line pt-4 pb-16 sm:pb-20 lg:pb-24">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ================================================================= */}
          {/* LEFT COLUMN: Narrative, Headline, CTAs, and Quick Jumps            */}
          {/* ================================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Breadcrumb Bar */}
            <div className="flex items-center gap-2 text-caption text-ink-500 mb-6">
              <Link href="/" className="hover:text-brand-500 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-900 font-semibold">About Us</span>
            </div>

            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-4">
              <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
              <span className="font-mono uppercase font-semibold">AI-NATIVE PRODUCT STUDIO</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight mb-4 max-w-2xl leading-tight">
              Engineering Intelligence.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-900 via-brand-700 to-brand-500">
                Creating Business Value.
              </span>
            </h1>

            {/* Lead Narrative (Motto) */}
            <p className="text-base sm:text-lead font-medium text-brand-700 mb-3 max-w-2xl leading-relaxed">
              From workflow to product. From idea to revenue.
            </p>

            {/* Body Narrative */}
            <p className="text-small sm:text-body text-slate-600 max-w-2xl mb-7 leading-relaxed">
              Xylozen is an AI-native product engineering studio headquartered in Chennai. We help startups, growing businesses, and established organizations turn complex ideas and operational challenges into intelligent, scalable digital products.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <Button
                type="button"
                onClick={() => scrollTo('how-we-work')}
                variant="primary-cta"
                className="shadow-sm text-white font-medium"
              >
                <span className="text-white font-medium">Explore 8-Stage Delivery</span>
                <ArrowRight className="w-4 h-4 ml-2 text-white" />
              </Button>
            </div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: Interactive Studio Graphic Visual                   */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <AboutHeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
