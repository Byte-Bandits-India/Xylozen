'use client'

import React from 'react'
import { Check, Minus } from 'lucide-react'
import { pricingComparison } from './pricing-data'

export function PricingComparison() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-line select-none">
      <div className="container-section">
        {/* Header */}
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-3 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-cta" />
            <span>MODEL COMPARISON</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-medium text-brand-900 tracking-tight leading-tight mb-2">
            Compare Models &amp; Deliverables
          </h2>
          <p className="text-small sm:text-body text-ink-500 leading-relaxed font-normal">
            Side-by-side comparison of team composition, architectural standards, and delivery terms.
          </p>
        </div>

        {/* Minimalist Comparison Table */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <th className="py-4 px-6 text-xs sm:text-sm font-medium text-slate-900 w-[37%]">
                    Features &amp; Scope
                  </th>
                  <th className="py-4 px-4 text-xs sm:text-sm font-medium text-slate-900 text-center w-[21%]">
                    Fixed-Scope MVP
                  </th>
                  <th className="py-4 px-4 text-xs sm:text-sm font-medium text-brand-900 text-center w-[21%]">
                    Dedicated Pod
                  </th>
                  <th className="py-4 px-4 text-xs sm:text-sm font-medium text-slate-900 text-center w-[21%]">
                    Technical Audit
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {pricingComparison.map((section, sIdx) => (
                  <React.Fragment key={sIdx}>
                    {/* Category Divider */}
                    <tr className="bg-slate-50/50">
                      <td
                        colSpan={4}
                        className="py-2.5 px-6 font-mono text-[11px] uppercase text-slate-500 font-medium tracking-wider"
                      >
                        {section.category}
                      </td>
                    </tr>

                    {/* Feature Rows */}
                    {section.features.map((feature, fIdx) => (
                      <tr
                        key={fIdx}
                        className="hover:bg-slate-50/40 transition-colors"
                      >
                        <td className="py-3 px-6 text-slate-700 font-normal">
                          {feature.name}
                        </td>

                        {/* MVP Cell */}
                        <td className="py-3 px-4 text-center text-slate-600 font-normal">
                          {typeof feature.mvp === 'boolean' ? (
                            feature.mvp ? (
                              <Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" />
                            ) : (
                              <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-slate-600 font-normal">{feature.mvp}</span>
                          )}
                        </td>

                        {/* Pod Cell */}
                        <td className="py-3 px-4 text-center text-slate-800 font-medium">
                          {typeof feature.pod === 'boolean' ? (
                            feature.pod ? (
                              <Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" />
                            ) : (
                              <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-slate-900 font-medium">{feature.pod}</span>
                          )}
                        </td>

                        {/* Audit Cell */}
                        <td className="py-3 px-4 text-center text-slate-600 font-normal">
                          {typeof feature.audit === 'boolean' ? (
                            feature.audit ? (
                              <Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" />
                            ) : (
                              <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-slate-600 font-normal">{feature.audit}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
