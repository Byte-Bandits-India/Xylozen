'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// =============================================================================
// MAIN COMPONENT: FinalCTA Section
// Content strictly from info/Content/HomePage.MD (Section 7: Final CTA)
// Headline: "Tell us what you're trying to build"
// Single Action Orange CTA button per brand guidelines (Section 6.1 & 05 UI)
// =============================================================================

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 lg:py-28 bg-white border-t border-line overflow-hidden select-none selection:bg-brand-500/15 selection:text-brand-900"
    >
      {/* Ambient atmospheric glow on light background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-brand-500/8 to-teal-500/6 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Headline verbatim from HomePage.MD */}
          <h2 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 mb-6 max-w-xl tracking-tight leading-tight">
            Tell us what you&apos;re trying to build
          </h2>

          {/* Primary Action CTA Button (Single Orange button per brand guidelines) */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-cta hover:bg-[#C13010] text-white text-btn font-semibold transition-all duration-200 cursor-pointer shadow-sm shadow-cta/20 hover:shadow-md hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <span>Start a project</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
