'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Plus, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import {
  archAppCore,
  archEcomStorefront,
  archAiAgentOrchestrator,
} from '@/assets/images'
import { StaticImageData } from 'next/image'

export interface ServiceShowcaseItem {
  id: string
  name: string
  anchor: string
  href: string
  badgeText: string
  tagline: string
  summary: string
  image: StaticImageData
  capabilitiesCount: string
  coreStack: string[]
}

export const servicesShowcaseData: ServiceShowcaseItem[] = [
  {
    id: 'web-software',
    name: 'Web & Software',
    anchor: 'web-software',
    href: '/services/web-software',
    badgeText: 'Software that runs your business',
    tagline: 'Enterprise portals, dashboards & systems',
    summary:
      'We engineer resilient, production-ready web platforms, internal management systems, and custom software architectures purpose-built for scale and high concurrency.',
    image: archAppCore,
    capabilitiesCount: '4 Specialized Modules',
    coreStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'ecommerce',
    name: 'Ecommerce Systems',
    anchor: 'ecommerce',
    href: '/services/ecommerce',
    badgeText: 'Live, selling & getting paid',
    tagline: 'Custom storefronts & checkout engines',
    summary:
      'High-converting ecommerce platforms engineered for speed, frictionless checkout, and unbroken operation during high-volume traffic surges and flash sales.',
    image: archEcomStorefront,
    capabilitiesCount: 'Sub-Second Checkout Funnels',
    coreStack: ['Shopify Plus', 'MedusaJS', 'Next.js Commerce', 'Stripe', 'Redis'],
  },
  {
    id: 'ai-automation',
    name: 'Agentic AI & Automation',
    anchor: 'ai-automation',
    href: '/services/ai-automation',
    badgeText: 'A digital team that works 24/7',
    tagline: 'Intelligent automation & connected pipelines',
    summary:
      'Goal-driven autonomous agentic workflows, computer vision compliance, and private vector memory NLP pipelines that execute tasks end-to-end within business systems.',
    image: archAiAgentOrchestrator,
    capabilitiesCount: 'Autonomous Action Mesh',
    coreStack: ['FastAPI', 'LangChain', 'Python', 'Qdrant', 'Claude 3.5', 'Docker'],
  },
]

export function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const total = servicesShowcaseData.length

  const minSwipeDistance = 45

  const handleSelect = (index: number) => {
    setActiveIndex(index)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1))
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      handleNext()
    } else if (isRightSwipe) {
      handlePrev()
    }
  }

  const scrollToAnchor = (anchor: string) => {
    const el = document.getElementById(anchor)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="service-pillars" className="py-16 sm:py-20 lg:py-24 bg-white relative select-none border-b border-line">
      <div className="container-section w-full">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-ink-500 mb-3">
            <span className="w-2 h-2 rounded-full bg-cta" />
            <span className="font-mono uppercase font-semibold">INTERACTIVE SERVICE SELECTOR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-h2 font-semibold text-brand-900 tracking-tight leading-tight mb-3">
            Our Engineering Pillars
          </h2>
          <p className="text-small sm:text-body text-ink-500 max-w-2xl leading-relaxed">
            Explore how we build tailored digital infrastructure, commerce engines, and autonomous AI workflows engineered for operational scale.
          </p>
        </div>

        {/* Outer Soft Card Container */}
        <div className="w-full rounded-2xl sm:rounded-[36px] lg:rounded-[40px] bg-[#F4F5F7] border border-slate-200/90 p-4 sm:p-8 lg:p-12 relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          {/* Mobile Horizontal Pill Selector (< lg) */}
          <div className="flex lg:hidden overflow-x-auto gap-2 pb-3 mb-2 -mx-1 px-1 scrollbar-none">
            {servicesShowcaseData.map((service, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={service.id}
                  onClick={() => handleSelect(index)}
                  className={`min-h-[44px] px-4 py-2 rounded-full text-small font-medium whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-brand-900 text-white shadow-xs'
                      : 'bg-white/90 text-ink-900 border border-slate-200 hover:bg-white'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? 'bg-cta' : 'bg-slate-300'
                    }`}
                  />
                  <span>{service.name}</span>
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* LEFT COLUMN: Vertical Interactive Accordion Pills (Desktop lg+) */}
            <div className="hidden lg:flex lg:col-span-5 flex-col space-y-3 z-10">
              {servicesShowcaseData.map((service, index) => {
                const isActive = index === activeIndex

                if (isActive) {
                  // Active Expanded Pure White Card
                  return (
                    <motion.div
                      key={service.id}
                      layoutId="activeServiceCardPage"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200/90 border-l-[3px] border-l-cta text-left transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-h3 font-semibold text-brand-900">
                          {service.name}
                        </h3>
                        <span className="text-caption font-mono uppercase text-brand-500 font-medium">
                          Pillar 0{index + 1}
                        </span>
                      </div>
                      <p className="text-body text-ink-500 mb-4 leading-relaxed">
                        {service.summary}
                      </p>
                      <div className="flex items-center gap-3">
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 text-caption font-medium text-brand-500 hover:text-brand-700 transition-colors uppercase tracking-wider cursor-pointer"
                        >
                          <span>Dedicated Pillar Page</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <span className="text-slate-300">|</span>
                        <button
                          onClick={() => scrollToAnchor(service.anchor)}
                          className="text-caption font-medium text-ink-500 hover:text-brand-900 transition-colors cursor-pointer"
                        >
                          View Breakdown
                        </button>
                      </div>
                    </motion.div>
                  )
                }

                // Inactive Pill Button with Circular (+)
                return (
                  <button
                    key={service.id}
                    onClick={() => handleSelect(index)}
                    className="group bg-white/80 hover:bg-white border border-slate-200/90 px-4 py-2.5 rounded-full text-ink-900 text-body font-medium flex items-center gap-2.5 transition-all shadow-2xs hover:shadow-xs text-left cursor-pointer w-fit"
                  >
                    <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 group-hover:border-slate-800 group-hover:text-slate-900 transition-colors shrink-0">
                      <Plus className="w-3 h-3 stroke-[2.5]" />
                    </span>
                    <span>{service.name}</span>
                  </button>
                )
              })}
            </div>

            {/* RIGHT COLUMN: Interactive 3-Card Carousel with Peeking Sides */}
            <div className="col-span-1 lg:col-span-7 relative flex flex-col items-center justify-center w-full">
              <div
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                className="relative w-full flex items-center justify-center h-[450px] sm:h-[490px] lg:h-[510px] overflow-hidden touch-pan-y"
              >
                {/* Floating Left Arrow Button (<) */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous Service Pillar"
                  className="absolute left-0.5 sm:left-4 md:left-6 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white border border-slate-200/90 shadow-md flex items-center justify-center text-ink-500 hover:text-brand-900 hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Floating Right Arrow Button (>) */}
                <button
                  onClick={handleNext}
                  aria-label="Next Service Pillar"
                  className="absolute right-0.5 sm:right-4 md:right-6 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white border border-slate-200/90 shadow-md flex items-center justify-center text-ink-500 hover:text-brand-900 hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* 3-Card Stack */}
                {servicesShowcaseData.map((item, index) => {
                  const diff = (index - activeIndex + total) % total

                  const isCenter = diff === 0
                  const isRight = diff === 1
                  const isLeft = diff === total - 1
                  const isVisible = isCenter || isRight || isLeft

                  if (!isVisible) return null

                  return (
                    <motion.div
                      key={item.id}
                      initial={false}
                      animate={{
                        x: isCenter ? 0 : isRight ? '58%' : '-58%',
                        scale: isCenter ? 1 : 0.88,
                        opacity: 1,
                        zIndex: isCenter ? 20 : 10,
                      }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      aria-hidden={!isCenter}
                      inert={!isCenter ? ('' as unknown as boolean) : undefined}
                      style={{ backgroundColor: '#ffffff' }}
                      onClick={() => {
                        if (isRight) handleNext()
                        if (isLeft) handlePrev()
                      }}
                      className={`absolute w-[82vw] max-w-[285px] sm:w-[320px] md:w-[340px] bg-white rounded-2xl sm:rounded-[28px] p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-slate-200/90 flex flex-col justify-between ${
                        !isCenter
                          ? 'cursor-pointer hover:border-slate-300 transition-colors'
                          : ''
                      }`}
                    >
                      {/* Top Media Frame with Architecture Visual & Frosted Glass Badge */}
                      <div className="rounded-xl sm:rounded-2xl h-44 sm:h-52 md:h-56 bg-gradient-to-b from-[#EFF3F8] to-[#E0E7F0] relative overflow-hidden flex items-center justify-center mb-3 sm:mb-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={340}
                          height={340}
                          className="w-full h-full object-cover object-center"
                        />

                        {/* Frosted Glassmorphism Badge Overlay */}
                        <div className="absolute bottom-2.5 sm:bottom-3 inset-x-2.5 sm:inset-x-3 bg-white/95 backdrop-blur-md border border-white/70 shadow-sm rounded-full px-3 py-1.5 sm:px-3.5 sm:py-2 flex items-center gap-2 z-10">
                          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                          <span className="text-caption font-medium text-ink-900 truncate">
                            {item.badgeText}
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-h3 font-semibold text-brand-900 mb-1.5 line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-small text-ink-500 line-clamp-2 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>

                      {/* Bottom Action Row */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          href={item.href}
                          tabIndex={isCenter ? 0 : -1}
                          aria-label={`Deep dive into ${item.name}`}
                          className="min-h-[40px] px-4 py-2 rounded-full border border-brand-900 text-brand-900 hover:bg-cta hover:border-cta hover:text-white text-small font-semibold transition-all duration-200 hover:scale-102 active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                        >
                          <span>Explore Pillar</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Carousel Pagination Dots */}
              <div className="flex items-center gap-1 sm:gap-1.5 mt-4">
                {servicesShowcaseData.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => setActiveIndex(dotIndex)}
                    aria-label={`Go to slide ${dotIndex + 1} of ${servicesShowcaseData.length}`}
                    className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 cursor-pointer group rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  >
                    <span
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        dotIndex === activeIndex
                          ? 'w-7 bg-cta'
                          : 'w-2.5 bg-slate-300 group-hover:bg-slate-400'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
