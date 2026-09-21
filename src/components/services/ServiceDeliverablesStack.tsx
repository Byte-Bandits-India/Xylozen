'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { TechLogo } from '@/components/ui/TechLogo'
export { TechLogo }

export interface TechStackLogoItem {
  name: string
}

export interface DeliverableStackTier {
  number: string
  title: string
  description: string
  logos: TechStackLogoItem[]
}

export interface ServiceDeliverablesStackProps {
  headline: string
  ctaText?: string
  ctaHref?: string
  tiers: DeliverableStackTier[]
}

// Dynamic organic uneven positions tailored for an asymmetrical, non-card scatter
interface SlotDef {
  top: string
  left: string
  size: string
  floatY: number
  delay: number
}

const tierPlacements: Record<number, SlotDef[]> = {
  0: [
    { top: '8%', left: '10%', size: 'w-24 h-24 sm:w-28 sm:h-28', floatY: -12, delay: 0 },
    { top: '14%', left: '58%', size: 'w-20 h-20 sm:w-24 sm:h-24', floatY: 10, delay: 0.4 },
    { top: '48%', left: '20%', size: 'w-28 h-28 sm:w-32 sm:h-32', floatY: -14, delay: 0.8 },
    { top: '64%', left: '62%', size: 'w-20 h-20 sm:w-24 sm:h-24', floatY: 9, delay: 1.2 },
  ],
  1: [
    { top: '10%', left: '52%', size: 'w-24 h-24 sm:w-28 sm:h-28', floatY: -10, delay: 0.1 },
    { top: '26%', left: '8%', size: 'w-20 h-20 sm:w-24 sm:h-24', floatY: 12, delay: 0.5 },
    { top: '52%', left: '58%', size: 'w-24 h-24 sm:w-28 sm:h-28', floatY: -11, delay: 0.9 },
    { top: '68%', left: '18%', size: 'w-24 h-24 sm:w-28 sm:h-28', floatY: 8, delay: 1.3 },
  ],
  2: [
    { top: '8%', left: '28%', size: 'w-24 h-24 sm:w-28 sm:h-28', floatY: 11, delay: 0.2 },
    { top: '24%', left: '64%', size: 'w-20 h-20 sm:w-24 sm:h-24', floatY: -9, delay: 0.6 },
    { top: '48%', left: '8%', size: 'w-20 h-20 sm:w-24 sm:h-24', floatY: 13, delay: 1.0 },
    { top: '66%', left: '42%', size: 'w-28 h-28 sm:w-32 sm:h-32', floatY: -12, delay: 1.4 },
  ],
  3: [
    { top: '14%', left: '12%', size: 'w-28 h-28 sm:w-32 sm:h-32', floatY: -13, delay: 0.1 },
    { top: '8%', left: '58%', size: 'w-20 h-20 sm:w-24 sm:h-24', floatY: 10, delay: 0.4 },
    { top: '50%', left: '50%', size: 'w-24 h-24 sm:w-28 sm:h-28', floatY: -10, delay: 0.8 },
    { top: '68%', left: '10%', size: 'w-20 h-20 sm:w-24 sm:h-24', floatY: 11, delay: 1.2 },
  ],
}

const fallbackSlots: SlotDef[] = [
  { top: '8%', left: '10%', size: 'w-24 h-24 sm:w-28 sm:h-28', floatY: -12, delay: 0 },
  { top: '14%', left: '58%', size: 'w-20 h-20 sm:w-24 sm:h-24', floatY: 10, delay: 0.4 },
  { top: '48%', left: '20%', size: 'w-28 h-28 sm:w-32 sm:h-32', floatY: -14, delay: 0.8 },
  { top: '64%', left: '62%', size: 'w-20 h-20 sm:w-24 sm:h-24', floatY: 9, delay: 1.2 },
  { top: '32%', left: '68%', size: 'w-16 h-16 sm:w-20 sm:h-20', floatY: -8, delay: 0.6 },
  { top: '72%', left: '10%', size: 'w-16 h-16 sm:w-20 sm:h-20', floatY: 8, delay: 1.0 },
]

export function ServiceDeliverablesStack({
  headline,
  tiers,
}: ServiceDeliverablesStackProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const currentTier = tiers[activeIndex] || tiers[0]

  const activeSlots = tierPlacements[activeIndex] || fallbackSlots

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-line">
      <div className="container-section">
        {/* Section Heading (Left-Aligned) */}
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <span className="text-badge font-mono uppercase tracking-wider text-brand-500 mb-2 block">
            PRODUCTION DELIVERABLES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight">
            {headline}
          </h2>
        </div>

        {/* 2-Column Grid: Left Side Pure Floating Uneven Logos, Right Side Numbered Headings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT SIDE: Pure Tech Logos ordered in uneven places (NO cards, NO containers) */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] flex items-center justify-center select-none overflow-hidden">
              {/* Subtle background ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-brand-500/[0.03] rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={`uneven-logos-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full"
                >
                  {currentTier.logos.map((logo, idx) => {
                    const slot = activeSlots[idx] || fallbackSlots[idx % fallbackSlots.length]

                    return (
                      <motion.div
                        key={`${logo.name}-${idx}`}
                        animate={{
                          y: [0, slot.floatY, 0],
                        }}
                        transition={{
                          y: {
                            duration: 4.8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: slot.delay,
                          },
                        }}
                        style={{
                          position: 'absolute',
                          top: slot.top,
                          left: slot.left,
                        }}
                        className="group cursor-pointer select-none"
                      >
                        {/* Pure Logo Without Card Box or Wrapper */}
                        <div
                          className={`${slot.size} transition-transform duration-300 group-hover:scale-115 flex items-center justify-center drop-shadow-sm group-hover:drop-shadow-md`}
                          title={logo.name}
                        >
                          <TechLogo name={logo.name} className="w-full h-full" />
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Numbered Headings & Description (Using globals.css typography) */}
          <div className="lg:col-span-6 w-full space-y-6">
            <div className="divide-y divide-line">
              {tiers.map((tier, idx) => {
                const isActive = activeIndex === idx

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => setActiveIndex(idx)}
                    className={`group cursor-pointer py-5 sm:py-6 transition-all duration-200 flex items-start gap-4 sm:gap-6 ${
                      isActive ? 'opacity-100' : 'opacity-40 hover:opacity-75'
                    }`}
                  >
                    {/* Emerald / Brand Accent Number */}
                    <span
                      className={`text-h3 font-mono font-bold transition-colors duration-200 pt-0.5 shrink-0 ${
                        isActive ? 'text-emerald-600' : 'text-ink-400 group-hover:text-emerald-500'
                      }`}
                    >
                      {tier.number}
                    </span>

                    {/* Heading & Expandable Description */}
                    <div className="flex-1">
                      <h3
                        className={`text-h3 transition-colors duration-200 ${
                          isActive ? 'text-brand-900 font-semibold' : 'text-ink-500 font-normal group-hover:text-brand-700'
                        }`}
                      >
                        {tier.title}
                      </h3>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="mt-3 text-body text-ink-500 leading-relaxed overflow-hidden"
                          >
                            {tier.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

