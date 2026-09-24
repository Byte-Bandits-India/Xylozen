'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Layers, Rocket, Users, ArrowRight } from 'lucide-react'
import type { Differentiator } from '@/types'

const differentiators: Differentiator[] = [
  {
    id: 'one-team',
    title: 'One team, three capabilities',
    description: 'AI, software, and commerce under one roof, not stitched together across vendors',
    icon: 'layers',
  },
  {
    id: 'delivery',
    title: 'Delivery, not just design',
    description: 'International-standard execution, not "build and walk away"',
    icon: 'rocket',
  },
  {
    id: 'direct-access',
    title: 'Direct access',
    description: 'You talk to the people building it, not account layers',
    icon: 'users',
  },
]

const iconMap = {
  layers: Layers,
  rocket: Rocket,
  users: Users,
}

export function WhyXylozen() {
  return (
    <section id="why-us" className="py-14 sm:py-20 lg:py-24 bg-surface">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 border border-slate-300/70 text-badge text-slate-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cta" />
            Why Xylozen
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3">Why Choose Xylozen</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 sm:mb-12">
          {differentiators.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center md:items-start text-center md:text-left gap-3.5 sm:gap-4 max-w-sm mx-auto md:max-w-none md:mx-0"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-brand-gradient flex items-center justify-center text-white shadow-xs">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-h3 font-semibold text-brand-900 mb-1.5 sm:mb-2">{item.title}</h3>
                  <p className="text-small sm:text-body text-ink-500 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center md:justify-start"
        >
          <Link
            href="/our-work#how-we-work"
            className="inline-flex items-center gap-2 text-small sm:text-btn font-medium text-brand-700 hover:text-[#C13010] transition-colors hover:gap-3"
          >
            <span>Learn How We Work</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
