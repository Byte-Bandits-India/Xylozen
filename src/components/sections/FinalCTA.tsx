'use client'

import React from 'react'
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
      className="relative py-14 sm:py-20 lg:py-28 bg-brand-gradient overflow-hidden selection:bg-brand-500 selection:text-white"
    >
      {/* Ambient atmospheric glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-[#265DC3]/25 to-[#00C2CB]/15 rounded-full blur-3xl opacity-70" />
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
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-display font-bold text-white mb-6 sm:mb-8 max-w-xl tracking-tight">
            Tell us what you&apos;re trying to build
          </h2>

          {/* Primary Action CTA Button (Single Orange button per brand guidelines) */}
          <a
            href="mailto:contact@xylozen.com"
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-lg bg-cta hover:bg-[#D93A16] text-white text-btn transition-colors duration-200 cursor-pointer shadow-sm shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#051C50]"
          >
            <span>Start a project</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
