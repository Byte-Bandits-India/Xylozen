'use client'

import React from 'react'
import { aboutCommitments } from './about-data'

export function AboutCommitment() {
  return (
    <section id="commitment" className="py-16 sm:py-24 lg:py-32 bg-white border-b border-line">
      <div className="container-section">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-cta" />
            <span>OUR CORE COMMITMENT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3">
            Clear strategy. Strong engineering.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-900 via-brand-700 to-brand-500">
              Transparent execution. Measurable outcomes.
            </span>
          </h2>
          <p className="text-small sm:text-body text-ink-500 leading-relaxed">
            We hold ourselves accountable to four non-negotiable standards on every project, from initial architectural discovery to production go-live and ongoing scale.
          </p>
        </div>

        {/* 4 Architectural Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {aboutCommitments.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.id}
                className="pt-6 border-t-2 border-slate-900 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      STANDARD {c.number}
                    </span>
                    <Icon className="w-4 h-4 text-brand-600" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {c.title}
                  </h3>
                  <div className="text-xs font-mono text-cta uppercase font-semibold mb-3">
                    {c.tagline}
                  </div>
                  <p className="text-small text-slate-600 leading-relaxed">
                    {c.description}
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

