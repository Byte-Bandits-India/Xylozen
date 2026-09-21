'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { industryMatrix } from '@/lib/services-data'
import { Store, Building2, Stethoscope, Truck, Factory, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const iconMap = {
  'Retail & Ecommerce': Store,
  'Real Estate': Building2,
  Healthcare: Stethoscope,
  Logistics: Truck,
  Manufacturing: Factory,
}

export function CrossIndustryStrip() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-line">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-14 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-line text-badge text-ink-900 mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-500" />
            <span>SECTOR ADAPTABILITY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-h2 font-bold text-brand-900 tracking-tight mb-3">
            Built for different industries. Designed for specific outcomes.
          </h2>

          <p className="text-base sm:text-lead text-ink-500 leading-relaxed">
            Our approach is never one-size-fits-all. We architect web applications, commerce engines,
            and AI agents around the exact regulatory, logistical, and commercial realities of your sector.
          </p>
        </motion.div>

        {/* 5 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {industryMatrix.map((item, idx) => {
            const Icon = iconMap[item.name as keyof typeof iconMap] || Store
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-surface/50 border border-line rounded-card p-5 sm:p-6 flex flex-col justify-between hover:border-brand-500 hover:bg-surface transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-line flex items-center justify-center text-brand-700 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-body font-semibold text-brand-900 mb-1.5">
                    {item.name}
                  </h3>
                  <p className="text-small text-ink-500 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-small font-semibold text-brand-500 hover:text-brand-700 transition-colors group mt-auto pt-3 border-t border-line/60"
                >
                  <span>Explore Sector</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
