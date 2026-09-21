'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { deliverySteps } from '@/lib/services-data'
import { ArrowUpRight, Compass } from 'lucide-react'

export function DeliveryProcess() {
  return (
    <section id="delivery-process" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-line">
      <div className="container-section">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-line text-badge text-ink-900 mb-3">
            <Compass className="w-3.5 h-3.5 text-brand-500" />
            <span>HOW WE DELIVER</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-h2 font-bold text-brand-900 tracking-tight mb-3">
            A disciplined approach to building high-value digital products
          </h2>

          <p className="text-base sm:text-lead text-ink-500 leading-relaxed">
            Every engagement begins with business understanding—not a technology stack. We combine
            strategic discovery, product thinking, and engineering excellence to create solutions that
            are commercially relevant and technically resilient.
          </p>
        </motion.div>

        {/* 8 Stages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverySteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-line rounded-card p-6 flex flex-col justify-between hover:border-brand-500 transition-colors"
            >
              <div>
                {/* Monospace Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-brand-500">
                    {step.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-brand-500/30" />
                </div>

                <h3 className="text-h3 font-semibold text-brand-900 mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-small text-ink-500 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Phase Deliverable Tag */}
              <div className="pt-4 border-t border-line/70">
                <span className="text-[11px] font-mono text-ink-500 uppercase tracking-wider block mb-1">
                  Deliverable:
                </span>
                <span className="text-caption font-semibold text-brand-900">
                  {step.output}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Commitment Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 sm:p-8 rounded-card bg-surface border border-line flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <span className="text-caption font-mono uppercase tracking-wider text-brand-500 font-semibold block mb-1">
              Our Commitment
            </span>
            <p className="text-base sm:text-h3 font-semibold text-brand-900">
              Clear strategy. Strong engineering. Transparent execution. Measurable outcomes.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-small font-semibold text-brand-500 hover:text-brand-700 shrink-0"
          >
            <span>Discuss your delivery timeline</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
