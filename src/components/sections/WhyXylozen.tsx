'use client'

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
    <section id="why-us" className="py-24 bg-surface">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 border border-slate-300/70 text-badge text-slate-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cta" />
            Why Xylozen
          </div>
          <h2 className="text-h2 text-brand-900">Why choose Xylozen</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {differentiators.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col gap-4"
              >
                <div className="w-14 h-14 rounded-lg bg-brand-gradient flex items-center justify-center text-white">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-h3 text-brand-900 mb-3">{item.title}</h3>
                  <p className="text-body text-ink-500">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#how-we-work"
            className="inline-flex items-center gap-2 text-btn text-brand-700 hover:text-[#D93A16] transition-colors hover:gap-3 transition-all"
          >
            Learn How We Work
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
