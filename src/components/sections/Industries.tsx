'use client'

import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { Plus, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { useLenis } from 'lenis/react'
import {
  agentScheduler,
  agentRealestate,
  agentEngineer,
  agentOperations,
  agentManufacturing,
} from '@/assets/images'

// =============================================================================
// DATA DEFINITIONS (EXCLUSIVELY from info/Content/WeServe.MD & HomePage.MD)
// =============================================================================

interface IndustryItem {
  id: string
  name: string
  badgeText: string
  description: string
  image: string | StaticImageData
}

const industriesData: IndustryItem[] = [
  {
    id: 'retail',
    name: 'Retail & Ecommerce',
    badgeText: 'Stores that convert and scale',
    description:
      'We help retail and ecommerce businesses improve customer experiences, streamline operations, and build scalable digital commerce platforms.',
    image: agentScheduler,
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    badgeText: 'Listings, portals, and lead systems',
    description:
      'We develop digital solutions that simplify property management, customer engagement, internal workflows, and real estate operations.',
    image: agentRealestate,
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    badgeText: 'Secure, compliant patient-facing systems',
    description:
      'We build secure and intelligent platforms that improve accessibility, streamline processes, and support better coordination between customers, professionals, and service providers.',
    image: agentEngineer,
  },
  {
    id: 'logistics',
    name: 'Logistics',
    badgeText: 'Tracking, dashboards, and automation',
    description:
      'We engineer technology that improves visibility, automates repetitive workflows, and supports efficient coordination across logistics and supply-chain operations.',
    image: agentOperations,
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    badgeText: 'Internal systems that connect the floor to the office',
    description:
      'We develop intelligent systems that help manufacturing businesses improve operational visibility, automate processes, monitor performance, and make better data-driven decisions.',
    image: agentManufacturing,
  },
]

// =============================================================================
// MAIN COMPONENT: Industries Section
// UI: Reference screenshot layout (Soft outer shell, vertical accordion pills, 3D card carousel)
// Content: Strictly 100% from info/Content/WeServe.MD and info/Content/HomePage.MD
// =============================================================================

export function Industries() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const total = industriesData.length
  const lenis = useLenis()

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

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (lenis && el) {
      lenis.scrollTo(el, { offset: -80, duration: 1.2 })
      return
    }
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="industries" className="pb-8 sm:pb-12 bg-[#FFFFFF] relative select-none">
      <div className="container-section w-full">
        {/* ===================================================================== */}
        {/* SECTION HEADER (Strictly from WeServe.MD and HomePage.MD)            */}
        {/* ===================================================================== */}
        <div className="mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-3">
            <span className="w-2 h-2 rounded-full bg-cta" />
            Industries We Serve
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3">
            Built for how your industry <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-900 via-brand-700 to-brand-500">
              actually works
            </span>
          </h2>
          <p className="text-small sm:text-body text-ink-500 max-w-2xl leading-relaxed">
            Every industry has its own workflows, operational challenges, customer expectations, and growth opportunities. At Xylozen, we build intelligent digital products that adapt to the specific needs of each business.
          </p>
        </div>

        {/* ===================================================================== */}
        {/* OUTER SOFT CARD CONTAINER (Matches reference screenshot layout)       */}
        {/* ===================================================================== */}
        <div className="w-full rounded-2xl sm:rounded-[36px] lg:rounded-[40px] bg-[#F4F5F7] border border-slate-200/90 p-4 sm:p-8 lg:p-12 relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          {/* Mobile Horizontal Pill Selector (< lg) */}
          <div className="flex lg:hidden overflow-x-auto gap-2 pb-3 mb-2 -mx-1 px-1 scrollbar-none">
            {industriesData.map((industry, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={industry.id}
                  onClick={() => handleSelect(index)}
                  className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-brand-900 text-white shadow-xs'
                      : 'bg-white/90 text-slate-700 border border-slate-200 hover:bg-white'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? 'bg-cta' : 'bg-slate-300'
                    }`}
                  />
                  <span>{industry.name}</span>
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* ================================================================= */}
            {/* LEFT COLUMN: Vertical Interactive Accordion Pills (Desktop lg+)   */}
            {/* ================================================================= */}
            <div className="hidden lg:flex lg:col-span-5 flex-col space-y-3 z-10">
              {industriesData.map((industry, index) => {
                const isActive = index === activeIndex

                if (isActive) {
                  // Active Expanded Pure White Card (Exact description from WeServe.MD)
                  return (
                    <motion.div
                      key={industry.id}
                      layoutId="activeIndustryCard"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200/90 border-l-[3px] border-l-cta text-left transition-all"
                    >
                      <h3 className="text-xl sm:text-h3 font-bold text-brand-900 mb-1.5">
                        {industry.name}
                      </h3>
                      <p className="text-small sm:text-body text-ink-500 leading-relaxed">
                        {industry.description}
                      </p>
                    </motion.div>
                  )
                }

                // Inactive Pill Button with Circular (+)
                return (
                  <button
                    key={industry.id}
                    onClick={() => handleSelect(index)}
                    className="group bg-white/80 hover:bg-white border border-slate-200/90 px-4 py-2.5 rounded-full text-slate-800 text-small font-medium flex items-center gap-2.5 transition-all shadow-2xs hover:shadow-xs text-left cursor-pointer w-fit"
                  >
                    <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 group-hover:border-slate-800 group-hover:text-slate-900 transition-colors shrink-0">
                      <Plus className="w-3 h-3 stroke-[2.5]" />
                    </span>
                    <span>{industry.name}</span>
                  </button>
                )
              })}
            </div>

            {/* ================================================================= */}
            {/* RIGHT COLUMN: Interactive 3-Card Carousel with Peeking Sides      */}
            {/* ================================================================= */}
            <div className="col-span-1 lg:col-span-7 relative flex flex-col items-center justify-center w-full">
              {/* Carousel Stage (Displays center card + peeking side cards) */}
              <div
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                className="relative w-full flex items-center justify-center h-[450px] sm:h-[490px] lg:h-[510px] overflow-hidden touch-pan-y"
              >
                {/* Floating Left Arrow Button (<) situated over the left peeking card */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous Industry"
                  className="absolute left-0.5 sm:left-4 md:left-6 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white border border-slate-200/90 shadow-md flex items-center justify-center text-slate-700 hover:text-slate-900 hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Floating Right Arrow Button (>) situated over the right peeking card */}
                <button
                  onClick={handleNext}
                  aria-label="Next Industry"
                  className="absolute right-0.5 sm:right-4 md:right-6 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white border border-slate-200/90 shadow-md flex items-center justify-center text-slate-700 hover:text-slate-900 hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* 3-Card Stack */}
                {industriesData.map((item, index) => {
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
                      {/* Top Media Frame with 3D Character Avatar & Frosted Glass Badge */}
                      <div className="rounded-xl sm:rounded-2xl h-44 sm:h-52 md:h-56 bg-gradient-to-b from-[#EFF3F8] to-[#E0E7F0] relative overflow-hidden flex items-center justify-center mb-3 sm:mb-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={340}
                          height={340}
                          className="w-full h-full object-cover object-top"
                        />

                        {/* Frosted Glassmorphism Badge Overlay with official one-liner from HomePage.MD */}
                        <div className="absolute bottom-2.5 sm:bottom-3 inset-x-2.5 sm:inset-x-3 bg-white/95 backdrop-blur-md border border-white/70 shadow-sm rounded-full px-3 py-1.5 sm:px-3.5 sm:py-2 flex items-center gap-2 z-10">
                          <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                            {item.badgeText}
                          </span>
                        </div>
                      </div>

                      {/* Content Section (Strictly from WeServe.MD) */}
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1.5 line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-800 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Bottom Action Row */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-800 truncate max-w-[140px]">
                          {item.name}
                        </span>

                        <button
                          onClick={scrollToContact}
                          tabIndex={isCenter ? 0 : -1}
                          aria-label={`Explore ${item.name} solutions`}
                          className="min-h-[44px] min-w-[44px] px-4 py-2 rounded-full border border-slate-900 text-slate-900 hover:bg-cta hover:border-cta hover:text-white text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Carousel Pagination Dots */}
              <div className="flex items-center gap-1 sm:gap-1.5 mt-4">
                {industriesData.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => setActiveIndex(dotIndex)}
                    aria-label={`Go to slide ${dotIndex + 1} of ${industriesData.length}`}
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
