'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { IndustriesHeroVisual } from './IndustriesHeroVisual'

export function IndustriesHero() {

  return (
    <section className="bg-white pb-14 sm:pb-16 lg:pb-20 border-b border-line">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Breadcrumb, Badges, Heading, Narrative, Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 xl:col-span-7"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-caption text-ink-500 mb-6">
              <Link href="/" className="hover:text-brand-500 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-900 font-semibold">Industries</span>
            </div>

            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-4">
              <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
              <span className="font-mono uppercase font-semibold">SECTOR SOLUTIONS</span>
            </div>

            {/* Main Headline (Strictly from WeServe.MD) */}
            <h1 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3 max-w-2xl">
              Technology Built Around Your Industry
            </h1>

            {/* Lead Narrative (Strictly from WeServe.MD) */}
            <p className="text-base sm:text-lead font-medium text-brand-700 mb-3 max-w-2xl leading-relaxed">
              Every industry has its own workflows, operational challenges, customer expectations, and growth opportunities. At Xylozen, we build intelligent digital products that adapt to the specific needs of each business.
            </p>

            <p className="text-small sm:text-body text-ink-500 max-w-2xl mb-8 leading-relaxed">
              Our expertise in AI-native systems, web applications, Micro-SaaS platforms, workflow automation, and MVP development enables us to support organizations across multiple industries—from emerging businesses to established enterprises.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link href="/#contact">
                <Button variant="primary-cta" className="shadow-sm">
                  <span>Schedule Technical Scoping</span>
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Interactive Sector Visual with Images (OurWorkHeroVisual UI format) */}
          <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center">
            <IndustriesHeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
