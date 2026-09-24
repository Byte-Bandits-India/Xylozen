'use client'

import React from 'react'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { Mail, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'
import { useLenis } from 'lenis/react'
import { usePathname } from 'next/navigation'

// =============================================================================
// MAIN COMPONENT: Footer
// Clean White Background with Header Route Alignment
// Strictly clean UI alignment and placements, no extra elements
// =============================================================================

export function Footer() {
  const lenis = useLenis()
  const pathname = usePathname()

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') || href.startsWith('#')) {
      const cleanId = href.replace('/#', '').replace('#', '')
      const element = document.getElementById(cleanId)
      if (element && pathname === '/') {
        e.preventDefault()
        if (lenis) {
          lenis.scrollTo(element, { offset: -80, duration: 1.2 })
        } else {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <footer className="bg-white border-t border-slate-200/90 py-12 sm:py-16 text-slate-900 selection:bg-brand-500 selection:text-white">
      <div className="px-6 w-full">
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
            <div className="flex items-center gap-2.5 mt-5">
              <a
                href="mailto:contact@xylozen.com"
                className="min-h-[44px] min-w-[44px] w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                aria-label="Email Xylozen"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                aria-label="Twitter profile"
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
                <Link
                  href="/services/web-software"
                  prefetch={true}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Web &amp; Software
                </Link>
                <Link
                  href="/services/ecommerce"
                  prefetch={true}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Ecommerce
                </Link>
                <Link
                  href="/services/ai-automation"
                  prefetch={true}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  AI &amp; Automation
                </Link>
              </div>
            </div>

            {/* Column 3: Industries */}
            <div className="flex flex-col items-start">
              <h3 className="text-sm uppercase font-semibold tracking-wider text-slate-900 mb-4">
                Industries
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="/industries#retail"
                  prefetch={true}
                  onClick={(e) => handleAnchorClick(e, '/industries#retail')}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Retail &amp; Ecommerce
                </Link>
                <Link
                  href="/industries#real-estate"
                  prefetch={true}
                  onClick={(e) => handleAnchorClick(e, '/industries#real-estate')}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Real Estate
                </Link>
                <Link
                  href="/industries#healthcare"
                  prefetch={true}
                  onClick={(e) => handleAnchorClick(e, '/industries#healthcare')}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Healthcare
                </Link>
                <Link
                  href="/industries#logistics"
                  prefetch={true}
                  onClick={(e) => handleAnchorClick(e, '/industries#logistics')}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Logistics
                </Link>
                <Link
                  href="/industries#manufacturing"
                  prefetch={true}
                  onClick={(e) => handleAnchorClick(e, '/industries#manufacturing')}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Manufacturing
                </Link>
              </div>
            </div>

            {/* Column 4: Resources & Studio */}
            <div className="flex flex-col items-start">
              <h3 className="text-sm uppercase font-semibold tracking-wider text-slate-900 mb-4">
                Resources &amp; Studio
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="/blogs"
                  prefetch={true}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Blogs
                </Link>
                <Link
                  href="/our-work"
                  prefetch={true}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Case Studies
                </Link>
                <Link
                  href="/pricing"
                  prefetch={true}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Pricing Models
                </Link>
                <Link
                  href="/our-work#how-we-work"
                  prefetch={true}
                  onClick={(e) => handleAnchorClick(e, '/our-work#how-we-work')}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  How We Work
                </Link>
                <Link
                  href="/about"
                  prefetch={true}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  About Us
                </Link>
                <Link
                  href="/careers"
                  prefetch={true}
                  className="text-small text-slate-600 hover:text-brand-500 transition-colors text-left cursor-pointer"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  prefetch={true}
                  className="text-small font-semibold text-cta hover:text-[#C13010] transition-colors text-left cursor-pointer flex items-center gap-1"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
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
