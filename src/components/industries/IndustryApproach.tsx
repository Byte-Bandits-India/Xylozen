'use client'

import React from 'react'
import { ShieldCheck, Target, Cpu } from 'lucide-react'

export function IndustryApproach() {
  const principles = [
    {
      icon: Target,
      number: '01',
      title: 'Context-First Engineering',
      description:
        'We first understand the industry, workflow, and business objective, then design technology around the way the organization actually operates day-to-day.',
    },
    {
      icon: Cpu,
      number: '02',
      title: 'Adaptive AI & Systems',
      description:
        'Our approach is never based on forcing every business into the same software model. We build intelligent digital products that adapt to your exact domain requirements.',
    },
    {
      icon: ShieldCheck,
      number: '03',
      title: 'Strategic Ownership & IP',
      description:
        'From complexity to clarity, and from ideas to measurable outcomes. You receive complete intellectual property rights, code repositories, and deployable architecture runbooks.',
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-line">
      <div className="container-section">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-line text-badge text-ink-900 mb-3 font-semibold">
            <span className="w-2 h-2 rounded-full bg-cta" />
            <span>CORE PHILOSOPHY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3">
            Built for Different Industries.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-900 via-brand-700 to-brand-500">
              Designed for Specific Outcomes.
            </span>
          </h2>
          <p className="text-small sm:text-body text-ink-500 leading-relaxed">
            Our approach is not based on forcing every business into the same software model. We first understand the industry, workflow, and business objective, then design technology around the way the organization actually operates.
          </p>
        </div>

        {/* 3 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {principles.map((p, idx) => {
            const Icon = p.icon
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-brand-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-700 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-small text-slate-400 font-bold">
                      {p.number}
                    </span>
                  </div>

                  <h3 className="text-h3 font-bold text-slate-900 mb-2.5">
                    {p.title}
                  </h3>
                  <p className="text-small text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
