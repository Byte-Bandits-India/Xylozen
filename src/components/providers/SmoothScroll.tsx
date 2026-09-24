'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import React, { ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface SmoothScrollProps {
  children: ReactNode
}

function ScrollReset() {
  const pathname = usePathname()
  const lenis = useLenis()

  useEffect(() => {
    if (lenis && !window.location.hash) {
      lenis.scrollTo(0, { immediate: true })
    }
  }, [pathname, lenis])

  return null
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.0,
        smoothWheel: true,
        wheelMultiplier: 1,
        syncTouch: false,
      }}
    >
      <ScrollReset />
      {children}
    </ReactLenis>
  )
}
