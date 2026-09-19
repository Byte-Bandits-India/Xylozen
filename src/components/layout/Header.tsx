'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { navigationMenuData, MegaMenuData } from './nav-data'
import { MegaMenu } from './MegaMenu'
import { AnimatePresence, motion } from 'framer-motion'
import { useLenis } from 'lenis/react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const navContainerRef = useRef<HTMLDivElement>(null)
  const lenis = useLenis()

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

  const scrollToSection = (id: string) => {
    setActiveMenu(null)
    setMobileOpen(false)
    
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

  const activeMenuData: MegaMenuData | undefined = activeMenu
    ? navigationMenuData[activeMenu]
    : undefined

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
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
                <button
                  onClick={() => scrollToSection('why-us')}
                  className="flex items-center gap-1.5 px-3 py-2 text-nav text-ink-900 hover:text-brand-500 hover:bg-surface/70 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Careers</span>
                </button>

                {/* Contact */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-3 py-2 text-nav text-ink-900 hover:text-brand-500 hover:bg-surface/70 rounded-lg transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </nav>
            </div>

            {/* Right: Actions */}
            <div className="hidden lg:flex items-center gap-3.5">
              <Button
                variant="primary-cta"
                size="default"
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-1.5 text-white"
              >
                <span className="text-white">Talk to us</span>
                <ArrowRight className="w-4 h-4 opacity-90 text-white" />
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-ink-900 hover:bg-surface border border-line cursor-pointer"
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

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-50 border-b border-line bg-white px-5 py-6 max-h-[85vh] overflow-y-auto shadow-xl"
          >
            <div className="flex flex-col space-y-4">
              
              {/* Accordion Categories */}
              {Object.values(navigationMenuData).map((menu) => (
                <div key={menu.id} className="border-b border-line/60 pb-3">
                  <button
                    onClick={() =>
                      setMobileAccordion(mobileAccordion === menu.id ? null : menu.id)
                    }
                    className="flex items-center justify-between w-full text-left py-2 text-h3 text-brand-900 cursor-pointer"
                  >
                    <span>{menu.label}</span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 transition-transform text-ink-500',
                        mobileAccordion === menu.id && 'rotate-180 text-brand-500'
                      )}
                    />
                  </button>

                  {mobileAccordion === menu.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 space-y-2 pl-2"
                    >
                      {menu.items.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => scrollToSection(item.href)}
                          className="flex items-start gap-3 p-2.5 rounded-lg text-left w-full hover:bg-surface cursor-pointer"
                        >
                          <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 ${item.iconBg} ${item.iconColor} mt-0.5`}>
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-body font-semibold text-brand-900">
                              {item.title}
                            </div>
                            <div className="text-small text-ink-500 leading-tight">
                              {item.subtitle}
                            </div>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Direct Links */}
              <div className="flex flex-col space-y-3 pt-2">
                <button
                  onClick={() => scrollToSection('why-us')}
                  className="flex items-center justify-between py-2 text-h3 text-brand-900 text-left cursor-pointer"
                >
                  <span>Careers</span>
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="py-2 text-h3 text-brand-900 text-left cursor-pointer"
                >
                  Contact
                </button>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-line">
                <Button
                  variant="primary-cta"
                  size="default"
                  onClick={() => scrollToSection('contact')}
                  className="w-full justify-center text-center text-white"
                >
                  Talk to us
                </Button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
