'use client'

import React from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { aboutWhyPillars } from './about-data'

export function AboutWhyUs() {
  const scrollToPillar = (id: string) => {
    const el = document.getElementById(`pillar-${id}`)
    if (el) {
      const headerOffset = 100
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="why-xylozen" className="py-16 sm:py-24 lg:py-32 bg-white border-b border-line">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ================================================================= */}
          {/* LEFT COLUMN (Sticky Editorial Anchor)                             */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-cta" />
              <span>STUDIO PHILOSOPHY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3">
              More than a software vendor.
            </h2>

            <p className="text-small sm:text-body text-ink-500 leading-relaxed mb-6">
              The market is full of teams that build software. Xylozen focuses on building the right solution for the right business outcome.
            </p>

            {/* Pillar Navigator Index */}
            <div className="w-full pt-6 border-t border-slate-100 hidden sm:block">
              <span className="text-caption font-mono uppercase text-slate-400 font-bold tracking-wider block mb-3">
                5 Foundational Pillars
              </span>
              <div className="space-y-2">
                {aboutWhyPillars.map((pillar) => (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => scrollToPillar(pillar.id)}
                    className="w-full text-left py-2 px-3 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-small font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                        {pillar.name}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN (Spacious Architectural Pillar Cards)                */}
          {/* ================================================================= */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8">
            {aboutWhyPillars.map((pillar) => {
              const Icon = pillar.icon

              return (
                <div
                  key={pillar.id}
                  id={`pillar-${pillar.id}`}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-xs hover:border-brand-500/40 hover:shadow-md transition-all scroll-mt-36"
                >
                  {/* Card Header: Monospace Index + Category Tag */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className="text-caption font-mono uppercase text-brand-600 font-semibold tracking-wider">
                        {pillar.badgeText}
                      </span>
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-1.5">
                    {pillar.name}
                  </h3>
                  <div className="text-xs sm:text-caption font-mono uppercase text-cta font-bold tracking-wider mb-4">
                    {pillar.tagline}
                  </div>

                  {/* Narrative Body */}
                  <p className="text-small sm:text-body text-slate-600 leading-relaxed mb-6">
                    {pillar.summary}
                  </p>

                  {/* Architectural Takeaways */}
                  <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-4 sm:p-5">
                    <span className="text-caption font-mono uppercase text-slate-400 font-bold tracking-wider block mb-2.5">
                      Core Implementation Rigor
                    </span>
                    <div className="space-y-2">
                      {pillar.keyTakeaways.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-small text-slate-700">
                          <Check className="w-4 h-4 text-cta shrink-0 mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
