'use client'

import React, { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, Store, Building2, Stethoscope, Truck, Factory } from 'lucide-react'
import {
  agentScheduler,
  agentRealestate,
  agentEngineer,
  agentOperations,
  agentManufacturing,
} from '@/assets/images'

interface SectorHighlight {
  id: string
  tabLabel: string
  badgeLabel: string
  topPillTitle: string
  topPillSub: string
  icon: React.ComponentType<{ className?: string }>
  iconBg: string
  title: string
  description: string
  metricLabel: string
  targetId: string
  image: string | StaticImageData
}

const sectorHighlights: SectorHighlight[] = [
  {
    id: 'retail',
    tabLabel: 'Retail',
    badgeLabel: 'Stores that convert & scale',
    topPillTitle: 'Production verified',
    topPillSub: '40% faster checkout · live',
    icon: Store,
    iconBg: 'bg-brand-500/10 text-brand-700 border-brand-500/20',
    title: 'Retail & Ecommerce Platform',
    description: 'Headless storefronts & sub-second inventory sync across warehouses & physical POS.',
    metricLabel: '40% Faster Checkout',
    targetId: 'retail',
    image: agentScheduler,
  },
  {
    id: 'real-estate',
    tabLabel: 'Real Estate',
    badgeLabel: 'Listings & lead routing',
    topPillTitle: 'Geospatial sync live',
    topPillSub: '70% faster lead dispatch',
    icon: Building2,
    iconBg: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
    title: 'Property Portals & Lead Hub',
    description: 'Geospatial listing search, automated broker lead distribution & lease management.',
    metricLabel: '70% Faster Routing',
    targetId: 'real-estate',
    image: agentRealestate,
  },
  {
    id: 'healthcare',
    tabLabel: 'Healthcare',
    badgeLabel: 'Telehealth & diagnostics',
    topPillTitle: 'HIPAA & GDPR verified',
    topPillSub: '100% stream encrypted',
    icon: Stethoscope,
    iconBg: 'bg-teal-500/10 text-teal-700 border-teal-500/20',
    title: 'Clinical Diagnostic Platform',
    description: 'WebSockets hardware diagnostics & HIPAA-compliant teleconsultation portals.',
    metricLabel: '100% Stream Encrypted',
    targetId: 'healthcare',
    image: agentEngineer,
  },
  {
    id: 'logistics',
    tabLabel: 'Logistics',
    badgeLabel: 'Fleet telemetry & dispatch',
    topPillTitle: 'IoT Telemetry Active',
    topPillSub: '65% manual dispatch saved',
    icon: Truck,
    iconBg: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    title: 'Supply Chain & Fleet Telemetry',
    description: 'High-frequency GPS track ingestion, automated route assignment & digital manifests.',
    metricLabel: '65% Dispatch Saved',
    targetId: 'logistics',
    image: agentOperations,
  },
  {
    id: 'manufacturing',
    tabLabel: 'Manufacturing',
    badgeLabel: 'Floor telemetry to ERP',
    topPillTitle: 'Edge Vision Inference',
    topPillSub: '24/7 continuous safety',
    icon: Factory,
    iconBg: 'bg-violet-500/10 text-violet-700 border-violet-500/20',
    title: 'Smart Floor & Vision Safety',
    description: 'Edge CCTV safety compliance, machine telemetry brokers & real-time OEE dashboards.',
    metricLabel: '24/7 Floor Monitoring',
    targetId: 'manufacturing',
    image: agentManufacturing,
  },
]

export function IndustriesHeroVisual() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const active = sectorHighlights[selectedIndex]
  const ActiveIcon = active.icon

  // Auto-scroll / auto-cycle through sectors every 3.5 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % sectorHighlights.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [isPaused])

  const scrollToSector = (targetId: string) => {
    const el = document.getElementById(targetId)
    if (el) {
      const headerOffset = 100
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[430px] xl:max-w-[470px] mx-auto select-none pt-4 pb-8 px-2 sm:px-4"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gradient-to-tr from-brand-500/10 via-blue-400/10 to-teal-400/8 rounded-full blur-3xl pointer-events-none" />

      {/* ===================================================================== */}
      {/* MAIN PORTRAIT CARD (Crossfading Image per Vertical)                   */}
      {/* ===================================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-[2.25rem] overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-900/8 bg-slate-100 aspect-[4/4.6]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0.4, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.4 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full"
          >
            <Image
              src={active.image}
              alt={active.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Soft Bottom Vignette for Image Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* ===================================================================== */}
      {/* TOP-RIGHT FLOATING BADGE: Production Telemetry Status                  */}
      {/* ===================================================================== */}
      <motion.div
        key={`top-${active.id}`}
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-950/10 py-2.5 px-3.5 sm:px-4 flex items-center gap-3"
      >
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
          <Check className="w-4 h-4 stroke-[2.5]" />
        </div>
        <div className="text-left">
          <div className="text-[13px] sm:text-sm font-bold text-slate-900 leading-tight">
            {active.topPillTitle}
          </div>
          <div className="text-[11px] text-slate-500 font-medium leading-none mt-0.5">
            {active.topPillSub}
          </div>
        </div>
      </motion.div>

      {/* ===================================================================== */}
      {/* BOTTOM-LEFT FLOATING CARD: Interactive Sector Telemetry               */}
      {/* ===================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute -bottom-5 -left-2 sm:-bottom-6 sm:-left-5 z-20 bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-slate-950/14 p-4 sm:p-5 max-w-[325px] sm:max-w-[370px] w-full"
      >

        {/* Dynamic Project Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            {/* Header: Icon and Title */}
            <div className="flex items-start gap-3 mb-2">
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 ${active.iconBg}`}
              >
                <ActiveIcon className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="pr-2">
                <h4 className="text-[13px] sm:text-sm font-medium text-slate-900 tracking-tight leading-snug">
                  {active.title}
                </h4>
                <p className="text-[11px] sm:text-[12px] text-slate-500 leading-snug mt-0.5 line-clamp-2">
                  {active.description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Auto-Cycling Indicator & Sector Deep Dive Link (Buttons removed for auto-scroll) */}
        <div className="flex items-center justify-between gap-2 mt-3.5 pt-2.5 border-t border-slate-100">
          <div className="flex items-center gap-1.5" title="Auto-cycling verticals">
            {sectorHighlights.map((sector, idx) => {
              const isSelected = idx === selectedIndex

              return (
                <div
                  key={sector.id}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    isSelected ? 'w-6 bg-brand-500' : 'w-1.5 bg-slate-200'
                  }`}
                />
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollToSector(active.targetId)}
            className="text-[11px] font-medium text-brand-600 hover:text-brand-800 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Explore {active.tabLabel}</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </motion.div>
    </div>
  )
}
