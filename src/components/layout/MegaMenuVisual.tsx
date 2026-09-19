'use client'

import React from 'react'

interface MegaMenuVisualProps {
  menuId: string
}

export function MegaMenuVisual({ menuId }: MegaMenuVisualProps) {
  return (
    <div className="w-full h-full flex items-center justify-center select-none py-4">
      {renderShape(menuId)}
    </div>
  )
}

function renderShape(menuId: string) {
  switch (menuId) {
    case 'services':
      // Shape 1: Clover / Curved architectural cutout flower shape
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-36 h-36 sm:w-44 sm:h-44 transition-transform duration-300 hover:scale-105"
          fill="none"
        >
          <path
            d="M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z"
            fill="rgb(84, 84, 84)"
          />
        </svg>
      )

    case 'our-work':
      // Shape 2: Angular faceted / diagonal ribbon notch shape
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-36 h-36 sm:w-44 sm:h-44 transition-transform duration-300 hover:scale-105"
          fill="none"
        >
          <path
            d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
            fill="rgb(84, 84, 84)"
          />
        </svg>
      )

    case 'industries':
      // Shape 3: Concentric nested L-brackets / stepped corner blocks
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-36 h-36 sm:w-44 sm:h-44 transition-transform duration-300 hover:scale-105"
          fill="none"
        >
          <path
            d="M 64 256 L 0 256 L 0 192 L 64 192 Z M 160 256 L 96 256 L 96 160 L 0 160 L 0 96 L 160 96 Z M 256 256 L 192 256 L 192 64 L 0 64 L 0 0 L 256 0 Z"
            fill="rgb(84, 84, 84)"
          />
        </svg>
      )

    case 'about':
      // Shape 4: Circular 4-quadrant geometric clover
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-36 h-36 sm:w-44 sm:h-44 transition-transform duration-300 hover:scale-105"
          fill="none"
        >
          <path
            d="M 128 0 C 128 70.692 70.692 128 0 128 C 70.692 128 128 185.308 128 256 C 128 185.308 185.308 128 256 128 C 185.308 128 128 70.692 128 0 Z"
            fill="rgb(84, 84, 84)"
          />
        </svg>
      )

    default:
      return null
  }
}
