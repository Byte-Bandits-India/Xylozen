'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, ShoppingBag, Sparkles } from 'lucide-react'
import type { ServiceCard } from '@/types'

const services: ServiceCard[] = [
  {
    id: 'web-software',
    line: 'web-software',
    title: 'Web & Software',
    description: 'Software that runs your business the way an enterprise runs theirs.',
    details: 'From company websites to internal systems and dashboards — built to hold up under real use.',
    link: '#',
  },
  {
    id: 'ecommerce',
    line: 'ecommerce',
    title: 'Ecommerce',
    description: 'Live, selling, and getting paid — without you learning to code.',
    details: 'Stores built on the platform that fits you, from fast-launch to fully custom.',
    link: '#',
  },
  {
    id: 'ai-automation',
    line: 'ai-automation',
    title: 'AI & Automation',
    description: 'A digital team that works while you sleep.',
    details: "Agents that don't just answer — they complete the work.",
    link: '#',
  },
]

const iconMap = {
  'web-software': Code2,
  ecommerce: ShoppingBag,
  'ai-automation': Sparkles,
}

const gradientMap = {
  'web-software': 'bg-gradient-to-br from-badge-web-bg to-badge-web-bg/50',
  ecommerce: 'bg-gradient-to-br from-badge-ecommerce-bg to-badge-ecommerce-bg/50',
  'ai-automation': 'bg-gradient-to-br from-badge-ai-bg to-badge-ai-bg/50',
}

const iconColorMap = {
  'web-software': 'text-badge-web-text',
  ecommerce: 'text-badge-ecommerce-text',
  'ai-automation': 'text-badge-ai-text',
}

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cta" />
            Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-h2 font-bold text-brand-900">What we do</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.line as keyof typeof iconMap]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white border border-line rounded-card p-5 sm:p-7 lg:p-8 hover:border-brand-500 hover:bg-surface/40 transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-start gap-4 mb-5 sm:mb-6">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${gradientMap[service.line as keyof typeof gradientMap]}`}
                  >
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColorMap[service.line as keyof typeof iconColorMap]}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-small font-semibold text-brand-900">{service.title}</h3>
                  </div>
                </div>

                <p className="text-xl sm:text-h3 font-semibold text-brand-900 mb-2.5 sm:mb-3 leading-snug">{service.description}</p>

                <p className="text-sm sm:text-body text-ink-500 mb-6 flex-grow leading-relaxed">{service.details}</p>

                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-small font-semibold text-brand-500 hover:text-[#D93A16] transition-all group-hover:gap-3"
                >
                  Explore {service.title}
                  <motion.div whileHover={{ x: 3 }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
