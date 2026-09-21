'use client'

import React from 'react'

export interface ServiceArchitectureLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  size?: number | string
}

/**
 * ServiceArchitectureLogo
 *
 * Official Xylozen Service & Architecture geometric emblem.
 * The curved 4-quadrant architectural cutout flower/clover shape
 * representing Xylozen's enterprise service architecture.
 */
export function ServiceArchitectureLogo({
  className = 'w-6 h-6',
  size,
  ...props
}: ServiceArchitectureLogoProps) {
  const style = size ? { width: size, height: size } : undefined

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const ServiceLogo = ServiceArchitectureLogo
export default ServiceArchitectureLogo
