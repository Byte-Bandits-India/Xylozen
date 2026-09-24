'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { engagementModels } from '@/lib/services-data'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function EngagementModels() {
  return (
    <section id="engagement-models" className="py-16 sm:py-20 lg:py-24 bg-surface/50 border-b border-line">
      <div className="container-section">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-line text-badge text-ink-900 mb-3">
            <span className="w-2 h-2 rounded-full bg-cta" />
            <span className="font-mono uppercase font-medium">STRUCTURED ENGAGEMENT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-h2 font-medium text-brand-900 tracking-tight mb-3">
            Predictable partnership models built for engineering velocity
          </h2>

          <p className="text-base sm:text-lead text-ink-500 leading-relaxed font-normal">
            Whether you need a full-spectrum engineering pod or a rapid fixed-scope sprint, we tailor
            the engagement to your capital priorities and delivery timeline.
          </p>
        </motion.div>

        {/* 3 Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {engagementModels.map((model, idx) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-card p-6 sm:p-8 flex flex-col justify-between transition-all ${
                model.featured
                  ? 'bg-white border-2 border-brand-500 relative shadow-sm'
                  : 'bg-white border border-line hover:border-brand-500/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-caption font-mono uppercase tracking-wider text-brand-700 bg-brand-500/10 px-3 py-1 rounded-full font-medium">
                    {model.badge}
                  </span>
                </div>

                <h3 className="text-h3 font-medium text-brand-900 mb-2">
                  {model.title}
                </h3>

                <p className="text-small font-medium text-brand-700 mb-3 leading-snug">
                  {model.headline}
                </p>

                <p className="text-small text-ink-500 mb-6 leading-relaxed font-normal">
                  {model.description}
                </p>

                {/* Highlights */}
                <div className="pt-6 border-t border-line mb-8">
                  <span className="text-caption font-mono uppercase tracking-wider text-ink-500 block mb-3 font-medium">
                    What is Included:
                  </span>
                  <ul className="space-y-3">
                    {model.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-small text-ink-900 font-normal">
                        <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action - White Text Button Variant with Medium Font Weight */}
              <Link href={model.ctaLink} className="w-full">
                <Button
                  variant={model.featured ? 'primary-cta' : 'primary-brand'}
                  className="w-full justify-center flex items-center gap-2 text-white font-medium"
                >
                  <span className="text-white font-medium">{model.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
