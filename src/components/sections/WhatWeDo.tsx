'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, ShoppingBag, Sparkles } from 'lucide-react'
import type { ServiceCard } from '@/types'

interface ExtendedServiceCard extends ServiceCard {
  badge: string
  tagline: string
}

const services: ExtendedServiceCard[] = [
  {
    id: 'web-software',
    line: 'web-software',
    badge: 'Pillar 01',
    title: 'Web & Software',
    tagline: 'Enterprise Web & Cloud Platforms',
    description: 'Software that runs your business the way an enterprise runs theirs.',
    details: 'From company websites to internal systems and dashboards — built to hold up under real use.',
    link: '/services/web-software',
  },
  {
    id: 'ecommerce',
    line: 'ecommerce',
    badge: 'Pillar 02',
    title: 'Ecommerce',
    tagline: 'High-Conversion Checkout & Headless',
    description: 'Live, selling, and getting paid — without you learning to code.',
    details: 'Stores built on the platform that fits you, from fast-launch to fully custom.',
    link: '/services/ecommerce',
  },
  {
    id: 'ai-automation',
    line: 'ai-automation',
    badge: 'Pillar 03',
    title: 'AI & Automation',
    tagline: 'Autonomous Agents & Vision Pipelines',
    description: 'A digital team that works while you sleep.',
    details: "Agents that don't just answer — they complete the work.",
    link: '/services/ai-automation',
  },
]

const iconMap = {
  'web-software': Code2,
  ecommerce: ShoppingBag,
  'ai-automation': Sparkles,
}

const iconStyleMap = {
  'web-software': {
    bg: 'bg-brand-500/10',
    color: 'text-brand-500',
    hoverBg: 'group-hover:bg-brand-500 group-hover:text-white',
  },
  ecommerce: {
    bg: 'bg-teal-500/10',
    color: 'text-teal-600',
    hoverBg: 'group-hover:bg-teal-600 group-hover:text-white',
  },
  'ai-automation': {
    bg: 'bg-violet-500/10',
    color: 'text-violet-600',
    hoverBg: 'group-hover:bg-violet-600 group-hover:text-white',
  },
}

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-line">
      <div className="container-section">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-line text-badge text-ink-900 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cta" />
              <span>CAPABILITIES &amp; ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3">
              What we do
            </h2>
            <p className="text-small sm:text-body text-ink-500 max-w-xl leading-relaxed">
              Three core engineering capabilities delivered by dedicated, senior pods in Chennai.
            </p>
          </motion.div>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.line as keyof typeof iconMap]
            const styles = iconStyleMap[service.line as keyof typeof iconStyleMap]

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-line rounded-card p-6 sm:p-8 hover:border-brand-500/60 hover:bg-surface/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Card Header with Icon & Pillar Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${styles.bg} ${styles.color} ${styles.hoverBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-caption font-mono uppercase tracking-wider text-ink-500 font-semibold bg-surface px-2.5 py-1 rounded-full border border-line">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-3">
                    <span className="text-[12px] font-mono uppercase tracking-wider text-brand-500 font-bold block mb-1">
                      {service.title}
                    </span>
                    <h3 className="text-lg sm:text-xl lg:text-h3 font-bold text-brand-900 leading-snug group-hover:text-brand-500 transition-colors">
                      {service.description}
                    </h3>
                  </div>

                  {/* Body Text */}
                  <p className="text-small sm:text-body text-ink-500 mb-8 leading-relaxed">
                    {service.details}
                  </p>
                </div>

                {/* Bottom CTA Link */}
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-small font-semibold text-brand-500 group-hover:text-brand-900 transition-all pt-4 border-t border-line/70 group-hover:border-brand-500/30"
                >
                  <span>Explore {service.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

