'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { heroCareers } from '@/assets/images'

export function CareersHeroVisual() {
  return (
    <div className="relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[480px] xl:max-w-[540px] mx-auto select-none pt-4 pb-8 px-2 sm:px-4">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gradient-to-tr from-brand-500/10 via-blue-400/10 to-teal-400/8 rounded-full blur-3xl pointer-events-none" />

      {/* ===================================================================== */}
      {/* MAIN CARD (Natural Landscape / 16:11 Aspect for Sharp Full Team View)  */}
      {/* ===================================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-[2rem] sm:rounded-[2.25rem] overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-900/8 bg-slate-100 aspect-[16/11]"
      >
        <Image
          src={heroCareers}
          alt="Careers at Xylozen Studio"
          fill
          priority
          quality={95}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 960px"
          className="object-cover object-center"
        />

        {/* Soft Bottom Vignette for Image Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* ===================================================================== */}
      {/* TOP-RIGHT FLOATING BADGE: Hiring Status                                */}
      {/* ===================================================================== */}
      <motion.div
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
            We&apos;re Hiring
          </div>
          <div className="text-[11px] text-slate-500 font-medium leading-none mt-0.5">
            3 Open Roles &middot; Chennai
          </div>
        </div>
      </motion.div>
    </div>
  )
}

