'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import { navigationMenuData, MegaMenuData } from './nav-data'
import { AnimatePresence, motion } from 'framer-motion'
import { useLenis } from 'lenis/react'
import { usePathname, useRouter } from 'next/navigation'

const MegaMenu = dynamic(() => import('./MegaMenu').then((mod) => mod.MegaMenu), { ssr: false })

const mobileMenuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const mobileItemVariants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 24,
      stiffness: 260,
    },
  },
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const navContainerRef = useRef<HTMLDivElement>(null)
  const lenis = useLenis()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on click outside or escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveMenu(menuId)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 180)
  }

  const scrollToSection = (target: string) => {
    setActiveMenu(null)
    setMobileOpen(false)

    // Check if target is a path like /services or /services#web-software
    if (target.startsWith('/')) {
      const [targetPath, targetHash] = target.split('#')
      
      if (pathname === targetPath || (targetPath === '' && pathname === '/')) {
        if (targetHash) {
          const element = document.getElementById(targetHash)
          if (element) {
            if (lenis) {
              lenis.scrollTo(element, { offset: -80, duration: 1.2 })
            } else {
              const headerOffset = 80
              const elementPosition = element.getBoundingClientRect().top
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
            }
            return
          }
        } else {
          if (lenis) lenis.scrollTo(0, { duration: 1.2 })
          else window.scrollTo({ top: 0, behavior: 'smooth' })
          return
        }
      }
      
      router.push(target)
      return
    }

    const cleanId = target.replace('#', '')
    const element = document.getElementById(cleanId)

    if (element) {
      if (lenis) {
        lenis.scrollTo(element, { offset: -80, duration: 1.2 })
      } else {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    } else {
      // If element not on current page, route to home with hash
      router.push(`/#${cleanId}`)
    }
  }

  const activeMenuData: MegaMenuData | undefined = activeMenu
    ? navigationMenuData[activeMenu]
    : undefined

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-200',
          isScrolled || activeMenu !== null || mobileOpen
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-line'
            : 'bg-white/85 backdrop-blur-sm border-b border-line/40'
        )}
      >
        <div className="container-section" ref={navContainerRef}>
          <div className="flex items-center justify-between h-20">
            
            {/* Left: Logo & Desktop Navigation */}
            <div className="flex items-center gap-6 xl:gap-8">
              {/* Official Xylozen Logo (On White / Light background) */}
              <Logo variant="light" size="md" scrollToTop />

              {/* Desktop Nav Items */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
                
                {/* Services */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => setActiveMenu(activeMenu === 'services' ? null : 'services')}
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-2 text-nav rounded-lg transition-colors cursor-pointer',
                      activeMenu === 'services'
                        ? 'text-brand-500 bg-surface'
                        : 'text-ink-900 hover:text-brand-500 hover:bg-surface/70'
                    )}
                    aria-expanded={activeMenu === 'services'}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-200 opacity-60',
                        activeMenu === 'services' && 'rotate-180 text-brand-500 opacity-100'
                      )}
                    />
                  </button>
                </div>

                {/* Our Work */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('our-work')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => setActiveMenu(activeMenu === 'our-work' ? null : 'our-work')}
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-2 text-nav rounded-lg transition-colors cursor-pointer',
                      activeMenu === 'our-work'
                        ? 'text-brand-500 bg-surface'
                        : 'text-ink-900 hover:text-brand-500 hover:bg-surface/70'
                    )}
                    aria-expanded={activeMenu === 'our-work'}
                  >
                    <span>Our Work</span>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-200 opacity-60',
                        activeMenu === 'our-work' && 'rotate-180 text-brand-500 opacity-100'
                      )}
                    />
                  </button>
                </div>

                {/* Industries */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('industries')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => setActiveMenu(activeMenu === 'industries' ? null : 'industries')}
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-2 text-nav rounded-lg transition-colors cursor-pointer',
                      activeMenu === 'industries'
                        ? 'text-brand-500 bg-surface'
                        : 'text-ink-900 hover:text-brand-500 hover:bg-surface/70'
                    )}
                    aria-expanded={activeMenu === 'industries'}
                  >
                    <span>Industries</span>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-200 opacity-60',
                        activeMenu === 'industries' && 'rotate-180 text-brand-500 opacity-100'
                      )}
                    />
                  </button>
                </div>

                {/* About */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => setActiveMenu(activeMenu === 'about' ? null : 'about')}
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-2 text-nav rounded-lg transition-colors cursor-pointer',
                      activeMenu === 'about'
                        ? 'text-brand-500 bg-surface'
                        : 'text-ink-900 hover:text-brand-500 hover:bg-surface/70'
                    )}
                    aria-expanded={activeMenu === 'about'}
                  >
                    <span>About</span>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-200 opacity-60',
                        activeMenu === 'about' && 'rotate-180 text-brand-500 opacity-100'
                      )}
                    />
                  </button>
                </div>

                {/* Careers */}
                <Link
                  href="/careers"
                  className="flex items-center gap-1.5 px-3 py-2 text-nav text-ink-900 hover:text-brand-500 hover:bg-surface/70 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Careers</span>
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  className="px-3 py-2 text-nav text-ink-900 hover:text-brand-500 hover:bg-surface/70 rounded-lg transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Right: Actions */}
            <div className="hidden lg:flex items-center gap-3.5">
              <Link href="/contact">
                <Button
                  variant="primary-cta"
                  size="default"
                  className="flex items-center gap-1.5 text-white"
                >
                  <span className="text-white">Talk to us</span>
                  <ArrowRight className="w-4 h-4 opacity-90 text-white" />
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-lg text-ink-900 hover:bg-surface border border-line cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </header>

      {/* Floating Mega-Menu Dropdown Panel (Desktop): Centered across viewport */}
      <AnimatePresence>
        {activeMenuData && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="fixed top-[76px] inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current)
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="pointer-events-auto w-full max-w-[1020px]">
              <MegaMenu
                data={activeMenuData}
                onItemClick={(href) => scrollToSection(href)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-Screen Mobile Navigation Drawer (Right to Left) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 280, mass: 0.8 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col w-full h-[100dvh] overflow-hidden lg:hidden shadow-2xl"
          >
            {/* Top Bar with Logo & Close Button */}
            <div className="flex items-center justify-between h-20 px-4 sm:px-6 border-b border-line shrink-0 bg-white">
              <Logo
                variant="light"
                size="md"
                onClick={() => {
                  setMobileOpen(false)
                  if (lenis) lenis.scrollTo(0, { duration: 1.2 })
                }}
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2.5 rounded-lg text-ink-900 hover:bg-surface border border-line cursor-pointer transition-colors active:scale-95"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Nav Items Area with Staggered Animations */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              className="flex-1 overflow-y-auto px-5 sm:px-6 py-6 divide-y divide-line/60"
            >
              {/* Accordion Categories */}
              {Object.values(navigationMenuData).map((menu) => (
                <motion.div
                  key={menu.id}
                  variants={mobileItemVariants}
                  className="py-3.5 first:pt-0"
                >
                  <button
                    onClick={() =>
                      setMobileAccordion(mobileAccordion === menu.id ? null : menu.id)
                    }
                    className="flex items-center justify-between w-full text-left py-2 group cursor-pointer"
                  >
                    <span className="text-xl font-medium text-brand-900 group-hover:text-brand-500 transition-colors">
                      {menu.label}
                    </span>
                    <div
                      className={cn(
                        'w-8 h-8 rounded-full flex items-center justify-center bg-surface transition-transform duration-200',
                        mobileAccordion === menu.id && 'bg-brand-500/10 text-brand-500 rotate-180'
                      )}
                    >
                      <ChevronDown className="w-4 h-4 text-ink-500" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {mobileAccordion === menu.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden mt-2 space-y-1.5 pl-1"
                      >
                        {menu.items.map((item, idx) => (
                          <motion.button
                            key={idx}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: idx * 0.04 }}
                            onClick={() => scrollToSection(item.href)}
                            className="flex items-start gap-3.5 p-3 rounded-xl text-left w-full hover:bg-surface/80 active:bg-surface transition-colors cursor-pointer"
                          >
                            <div
                              className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${item.iconBg} ${item.iconColor} mt-0.5 shadow-2xs`}
                            >
                              <item.icon className="w-4.5 h-4.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-brand-900 truncate">
                                {item.title}
                              </div>
                              <div className="text-xs text-ink-500 leading-snug line-clamp-1">
                                {item.subtitle}
                              </div>
                            </div>
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* Direct Links */}
              <motion.div variants={mobileItemVariants} className="py-4 space-y-3.5">
                <Link
                  href="/careers"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-xl font-medium text-brand-900 hover:text-brand-500 py-1.5 transition-colors cursor-pointer"
                >
                  <span>Careers</span>
                  <ArrowRight className="w-4.5 h-4.5 text-ink-400 -rotate-45" />
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-xl font-medium text-brand-900 hover:text-brand-500 py-1.5 transition-colors cursor-pointer"
                >
                  <span>Contact</span>
                  <ArrowRight className="w-4.5 h-4.5 text-ink-400 -rotate-45" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Bottom Bar: Action CTA and Brand Tagline */}
            <motion.div
              variants={mobileItemVariants}
              initial="hidden"
              animate="visible"
              className="border-t border-line px-5 sm:px-6 py-4.5 bg-white shrink-0 flex flex-col gap-2.5 shadow-xs"
            >
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="w-full">
                <Button
                  variant="primary-cta"
                  size="default"
                  className="w-full justify-center text-center text-white py-3.5 text-btn rounded-xl shadow-sm shadow-cta/20 flex items-center gap-2"
                >
                  <span>Talk to us</span>
                  <ArrowRight className="w-4.5 h-4.5 text-white" />
                </Button>
              </Link>
              <div className="text-center text-[10px] sm:text-[11px] text-ink-500 font-mono tracking-widest pt-0.5">
                TECHNOLOGY &bull; INNOVATION &bull; SOLUTIONS
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
