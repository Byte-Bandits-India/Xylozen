'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ServiceBadge } from '@/components/ui/ServiceBadge'
import { ServicesHeroVisual } from './ServicesHeroVisual'
import Link from 'next/link'

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
    <section className="relative min-h-screen lg:h-screen flex items-center pt-24 pb-12 lg:pt-20 lg:pb-8 bg-white border-b border-line overflow-hidden">
      {/* Background Subtle Structural Dot Matrix */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #051C50 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container-section w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: Grand, Commanding Headline & Value Narrative         */}
          {/* ================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center"
          >
            {/* Top Status Eyebrow Pill */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-line text-badge text-ink-900">
                <span className="w-1.5 h-1.5 rounded-full bg-cta" />
                <span>SERVICES &amp; ARCHITECTURE</span>
              </div>
              <span className="text-caption text-ink-500 hidden sm:inline-flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-brand-500" />
                Chennai &bull; International Pod
              </span>
            </div>

            {/* Headline: Grand Display Scale */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[3.15rem] font-bold text-brand-900 tracking-tight mb-5 leading-[1.14]">
              Engineering intelligence. Delivering operational precision.
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lead text-ink-500 max-w-xl mb-7 leading-relaxed">
              We build intelligent digital products, enterprise web systems, and autonomous AI agents
              adapted around your actual business operations. No templates or disposable prototypes—every
              system is architected for concurrency and long-term commercial value.
            </p>

            {/* Service Pillar Quick-Jump Pills */}
            <div className="flex flex-wrap items-center gap-2.5 mb-7">
              <button
                onClick={() => scrollToAnchor('web-software')}
                className="cursor-pointer transition-transform hover:scale-102 active:scale-98"
              >
                <ServiceBadge service="web-software" label="Web & Software →" />
              </button>
              <button
                onClick={() => scrollToAnchor('ecommerce')}
                className="cursor-pointer transition-transform hover:scale-102 active:scale-98"
              >
                <ServiceBadge service="ecommerce" label="Ecommerce →" />
              </button>
              <button
                onClick={() => scrollToAnchor('ai-automation')}
                className="cursor-pointer transition-transform hover:scale-102 active:scale-98"
              >
                <ServiceBadge service="ai-automation" label="AI & Automation →" />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 sm:mb-9">
              <Link href="/contact">
                <Button variant="primary-cta" className="flex items-center gap-2 px-6 py-3 text-btn font-semibold">
                  <span>Schedule Technical Scoping</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: Taller, Grand Single-Card Architecture Visual       */}
          {/* ================================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 xl:col-span-6 flex items-center justify-center"
          >
            <ServicesHeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
