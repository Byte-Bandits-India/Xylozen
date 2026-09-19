'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface LogoProps {
  /**
   * 'light': On white / light backgrounds.
   * Wordmark switches to solid navy #051C50 (the metallic gradient loses all contrast on light backgrounds).
   *
   * 'dark': On navy or black backgrounds.
   * Wordmark in metallic silver (#E7EAEE), X in #265DC3.
   */
  variant?: 'light' | 'dark'

  /**
   * Size presets for the logo
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'

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
    x: 'text-[24px]',
    wordmark: 'text-[19px]',
    tagline: 'text-[10px] tracking-[0.14em]',
    gap: 'gap-0.5',
  },
  md: {
    x: 'text-[28px] sm:text-[30px]',
    wordmark: 'text-[22px] sm:text-[24px]',
    tagline: 'text-[11px] tracking-[0.14em]',
    gap: 'gap-0.5',
  },
  lg: {
    x: 'text-[36px] sm:text-[40px]',
    wordmark: 'text-[28px] sm:text-[32px]',
    tagline: 'text-[12px] sm:text-[13px] tracking-[0.14em]',
    gap: 'gap-1',
  },
  xl: {
    x: 'text-[44px] sm:text-[48px]',
    wordmark: 'text-[36px] sm:text-[40px]',
    tagline: 'text-[13px] sm:text-[14px] tracking-[0.14em]',
    gap: 'gap-1',
  },
}

/**
 * Official Xylozen Brand Logo Component
 *
 * Implements the brand rules from info/design.MD & info/xylozen-brand-guidelines.html:
 * - On navy/black (dark): X in #265DC3 gradient, Wordmark in metallic silver.
 * - On white (light): X in #265DC3 gradient, Wordmark in solid navy #051C50.
 */
export function Logo({
  variant = 'light',
  size = 'md',
  showTagline = false,
  className,
  scrollToTop = false,
  onClick,
}: LogoProps) {
  const isDark = variant === 'dark'
  const currentSize = sizeConfig[size]

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick()
      return
    }
    if (scrollToTop) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const Content = (
    <div className={cn('inline-flex flex-col', className)}>
      <div
        className={cn(
          'inline-flex items-baseline font-sans select-none',
          currentSize.gap
        )}
      >
        {/* The "X" Symbol */}
        <span
          className={cn(
            'font-extrabold leading-none transition-colors',
            currentSize.x,
            isDark
              ? 'text-transparent bg-clip-text bg-gradient-to-br from-[#4C8BEF] via-[#265DC3] to-[#163D8A]'
              : 'text-transparent bg-clip-text bg-gradient-to-br from-[#265DC3] via-[#1E4FA8] to-[#051C50]'
          )}
          style={{
            // Ensures perfect fallback to #265DC3
            WebkitTextFillColor: 'transparent',
          }}
        >
          X
        </span>

        {/* The "ylozen" Wordmark */}
        <span
          className={cn(
            'font-semibold tracking-[-0.03em] leading-none lowercase',
            currentSize.wordmark,
            isDark
              ? 'text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E7EAEE] to-[#B8BEC7] drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]'
              : 'text-[#051C50]'
          )}
        >
          ylozen
        </span>
      </div>

      {/* Official Tagline: Technology . Innovation . Solutions */}
      {showTagline && (
        <p
          className={cn(
            'font-sans font-light mt-1 select-none',
            currentSize.tagline,
            isDark ? 'text-[#E7EAEE]/80' : 'text-[#6B7480]'
          )}
        >
          Technology . Innovation . Solutions
        </p>
      )}
    </div>
  )

  if (scrollToTop || onClick) {
    return (
      <button
        onClick={handleClick}
        className="inline-flex flex-col text-left cursor-pointer transition-opacity hover:opacity-95 focus:outline-hidden"
        aria-label="Xylozen Home"
      >
        {Content}
      </button>
    )
  }

  return Content
}

export default Logo
