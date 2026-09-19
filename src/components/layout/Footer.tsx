'use client'

import React from 'react'
import { Logo } from '@/components/ui/Logo'
import { Mail, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'
import { useLenis } from 'lenis/react'

// =============================================================================
// MAIN COMPONENT: Footer
// Clean White Background with Header Route Alignment
// Strictly clean UI alignment and placements, no extra elements
// =============================================================================

export function Footer() {
  const lenis = useLenis()

  const scrollToSection = (id: string) => {
    const cleanId = id.replace('#', '')
    const element = document.getElementById(cleanId)

    if (lenis) {
      if (element) {
        lenis.scrollTo(element, { offset: -80, duration: 1.2 })
      } else {
        lenis.scrollTo(0, { duration: 1.2 })
      }
      return
    }

    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className="bg-white border-t border-slate-200/90 py-12 sm:py-16 text-slate-900 selection:bg-brand-500 selection:text-white">
      <div className="container-section w-full">
        {/* Main Grid: 4 Clean Columns with Perfect Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ================================================================= */}
          {/* Column 1: Brand Logo, Description & Socials (5 cols)              */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Logo variant="light" size="lg" showTagline scrollToTop />

            <p className="text-body text-slate-600 mt-4 leading-relaxed max-w-sm">
              AI-native product engineering studio. We help organizations turn complex ideas and operational challenges into intelligent, scalable digital products.
            </p>

            <div className="text-small text-slate-600 mt-3">
              Chennai, India &bull;{' '}
              <a
                href="mailto:contact@xylozen.com"
                className="text-brand-500 hover:underline"
              >
                contact@xylozen.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="mailto:contact@xylozen.com"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ================================================================= */}
          {/* Navigation Columns: Services, Industries, Studio & Work (7 cols) */}
          {/* Aligned alongside paragraph with perfectly equal gaps             */}
          {/* ================================================================= */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 items-start lg:pt-[76px]">
            {/* Column 2: Services */}
            <div className="flex flex-col items-start">
              <h3 className="text-sm uppercase font-semibold tracking-wider text-slate-900 mb-4">
                Services
              </h3>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => scrollToSection('what-we-do')}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Web &amp; Software
                </button>
                <button
                  onClick={() => scrollToSection('what-we-do')}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Ecommerce
                </button>
                <button
                  onClick={() => scrollToSection('what-we-do')}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  AI &amp; Automation
                </button>
                <button
                  onClick={() => scrollToSection('what-we-do')}
                  className="text-small font-semibold text-brand-500 hover:text-brand-700 transition-colors text-left cursor-pointer flex items-center gap-1"
                >
                  <span>Explore All Services</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Column 3: Industries */}
            <div className="flex flex-col items-start">
              <h3 className="text-sm uppercase font-semibold tracking-wider text-slate-900 mb-4">
                Industries
              </h3>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => scrollToSection('industries')}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Retail &amp; Ecommerce
                </button>
                <button
                  onClick={() => scrollToSection('industries')}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Real Estate
                </button>
                <button
                  onClick={() => scrollToSection('industries')}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Healthcare
                </button>
                <button
                  onClick={() => scrollToSection('industries')}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Logistics
                </button>
                <button
                  onClick={() => scrollToSection('industries')}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Manufacturing
                </button>
              </div>
            </div>

            {/* Column 4: Studio & Work */}
            <div className="flex flex-col items-start">
              <h3 className="text-sm uppercase font-semibold tracking-wider text-slate-900 mb-4">
                Studio &amp; Work
              </h3>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => scrollToSection('our-work')}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Our Work
                </button>
                <button
                  onClick={() => scrollToSection('our-work')}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Case Studies
                </button>
                <button
                  onClick={() => scrollToSection('why-us')}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Why Xylozen
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-small font-semibold text-cta hover:text-[#D93A16] transition-colors text-left cursor-pointer flex items-center gap-1"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* Bottom Bar: Copyright & Legal                                         */}
        {/* ===================================================================== */}
        <div className="pt-8 mt-12 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-caption text-slate-500">
          <p className='text-small'>
            &copy; {new Date().getFullYear()} Xylozen Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-900 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">
              Security
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
