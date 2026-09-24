'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Sparkles } from 'lucide-react'
import { pricingTiers } from './pricing-data'

export function PricingModelsGrid() {
  return (
    <section id="pricing-tiers" className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-b border-line select-none">
      <div className="container-section">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-3 font-medium">
            <span className="w-2 h-2 rounded-full bg-cta" />
            <span>COMMERCIAL ENGAGEMENT TIERS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-h2 font-medium text-brand-900 tracking-tight leading-tight mb-3">
            Structured Engagement Models
          </h2>
          <p className="text-small sm:text-body text-ink-500 leading-relaxed font-normal">
            Predictable partnership models built for engineering velocity. All tiers include 100% IP ownership, automated testing, senior architectural governance, and direct engineer access.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
          {pricingTiers.map((tier) => {
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4 }}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 bg-white border ${
                  tier.featured
                    ? 'border-brand-500 shadow-[0_12px_36px_rgba(38,93,195,0.12)] ring-1 ring-brand-500/30'
                    : 'border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Top Header Row: Plan Title + Refined Tag */}
                  <div className="flex items-start justify-between gap-3 mb-4 min-h-[48px]">
                    <h3 className="text-xl sm:text-2xl font-medium text-slate-900 tracking-tight leading-snug">
                      {tier.title}
                    </h3>

                    {tier.badge && (
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-normal shrink-0 mt-0.5 border ${
                          tier.featured
                            ? 'bg-[#0B1528] text-white border-slate-800 shadow-sm'
                            : 'bg-slate-100 text-slate-600 border-slate-200/80'
                        }`}
                      >
                        {tier.featured && (
                          <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
                        )}
                        <span>{tier.badge}</span>
                      </span>
                    )}
                  </div>

                  {/* Headline & Subtext */}
                  <div className="mb-6">
                    <div className="text-base sm:text-lg font-medium text-brand-900">
                      {tier.headline}
                    </div>
                    <div className="text-xs sm:text-small text-slate-500 font-normal mt-1 leading-relaxed">
                      {tier.subtext}
                    </div>
                  </div>

                  {/* Primary CTA Button */}
                  <div className="mb-7">
                    <Link
                      href={tier.ctaLink}
                      className={`w-full inline-flex items-center justify-center min-h-[46px] px-6 py-3 rounded-xl text-btn font-medium transition-all duration-200 gap-2 cursor-pointer shadow-sm hover:scale-[1.01] active:scale-[0.99] ${
                        tier.featured
                          ? 'bg-cta hover:bg-[#C13010] text-white shadow-cta/20'
                          : 'bg-brand-900 hover:bg-black text-white'
                      }`}
                    >
                      <span className="text-white font-medium">{tier.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </Link>
                  </div>

                  {/* Categorized Benefit Sections */}
                  <div className="space-y-5 pt-5 border-t border-slate-100">
                    {tier.benefitGroups.map((group, gIdx) => (
                      <div key={gIdx}>
                        <div className="text-[11px] font-mono uppercase font-medium text-slate-400 tracking-wider mb-2.5">
                          {group.groupTitle}
                        </div>

                        <div className="space-y-2.5">
                          {group.items.map((item, iIdx) => (
                            <div key={iIdx} className="flex items-start gap-2.5 text-left">
                              <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-brand-600">
                                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                              </div>

                              <span className="text-xs sm:text-small text-slate-700 leading-snug font-normal">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
