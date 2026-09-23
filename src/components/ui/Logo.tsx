'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useLenis } from 'lenis/react'
import { usePathname, useRouter } from 'next/navigation'

export interface LogoProps {
  /**
   * 'light': On white / light backgrounds. Uses the official 3D metallic logo (/images/logo/transparent.webp).
   * 'dark': On dark / navy / black backgrounds. Uses the solid white logo (/images/logo/white.webp).
   */
  variant?: 'light' | 'dark'

  /**
   * Size presets for the logo
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /**
   * If true, displays only the standalone 'X' symbol (/images/logo/favicon.webp)
   */
  iconOnly?: boolean

  /**
   * Whether to display the official brand tagline underneath:
   * "Technology . Innovation . Solutions"
   */
  showTagline?: boolean

  /**
   * Additional wrapper className
   */
  className?: string

  /**
   * Whether clicking the logo scrolls to top smoothly
   */
  scrollToTop?: boolean

  /**
   * Custom onClick handler
   */
  onClick?: () => void
}

const sizeConfig = {
  sm: {
    height: 26,
    width: 104,
    imgClass: 'h-6 sm:h-7 w-auto',
    iconSize: 26,
    tagline: 'text-[10px] tracking-[0.14em]',
  },
  md: {
    height: 34,
    width: 136,
    imgClass: 'h-7 sm:h-8 w-auto',
    iconSize: 34,
    tagline: 'text-[11px] tracking-[0.14em]',
  },
  lg: {
    height: 42,
    width: 168,
    imgClass: 'h-9 sm:h-10 w-auto',
    iconSize: 42,
    tagline: 'text-[12px] sm:text-[13px] tracking-[0.14em]',
  },
  xl: {
    height: 54,
    width: 216,
    imgClass: 'h-11 sm:h-13 w-auto',
    iconSize: 54,
    tagline: 'text-[13px] sm:text-[14px] tracking-[0.14em]',
  },
}

/**
 * Official Xylozen Brand Logo Component
 *
 * Implements the brand rules from info/design.MD & info/xylozen-brand-guidelines.html:
 * - On navy/black (dark): Uses official white asset (/images/logo/white.png)
 * - On white/light (light): Uses official 3D metallic asset (/images/logo/transparent.webp)
 * - Standalone Icon: Uses official 'X' mark (/images/logo/favicon.webp)
 */
export function Logo({
  variant = 'light',
  size = 'md',
  iconOnly = false,
  showTagline = false,
  className,
  scrollToTop = false,
  onClick,
}: LogoProps) {
  const isDark = variant === 'dark'
  const currentSize = sizeConfig[size]
  const lenis = useLenis()
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick()
      return
    }
    if (scrollToTop) {
      e.preventDefault()
      if (pathname !== '/') {
        router.push('/')
        return
      }
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const logoSrc = iconOnly
    ? '/images/logo/favicon.webp'
    : '/images/logo/transparent.webp'

  const logoWidth = iconOnly ? Math.round(currentSize.iconSize * 1.23) : currentSize.width
  const logoHeight = iconOnly ? currentSize.iconSize : currentSize.height

  const Content = (
    <div className={cn('inline-flex flex-col items-start', className)}>
      <Image
        src={logoSrc}
        alt="Xylozen Technologies"
        width={logoWidth}
        height={logoHeight}
        priority
        className={cn('object-contain select-none transition-opacity duration-200', currentSize.imgClass)}
      />

      {/* Official Tagline: Technology . Innovation . Solutions */}
      {showTagline && !iconOnly && (
        <p
          className={cn(
            'font-sans font-light mt-1.5 select-none tracking-[0.14em]',
            currentSize.tagline,
            isDark ? 'text-[#E7EAEE]/80' : 'text-[#6B7480]'
          )}
        >
          Technology &bull; Innovation &bull; Solutions
        </p>
      )}
    </div>
  )

  if (scrollToTop || onClick) {
    return (
      <button
        onClick={handleClick}
        className="inline-flex flex-col text-left cursor-pointer transition-opacity hover:opacity-90 focus:outline-hidden"
        aria-label="Xylozen Home"
      >
        {Content}
      </button>
    )
  }

  return Content
}

export default Logo
