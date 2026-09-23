'use client'

import { ReactLenis } from 'lenis/react'
import React, { ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  )
}
