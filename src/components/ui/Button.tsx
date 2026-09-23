'use client'

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none',
  {
    variants: {
      variant: {
        'primary-cta': 'bg-cta text-white hover:bg-[#C13010] active:bg-[#C13010] border-0 shadow-sm shadow-cta/20 hover:shadow-md',
        'primary-brand': 'bg-brand-gradient text-white hover:opacity-95 active:opacity-90 border-0 shadow-md shadow-brand-900/20 hover:shadow-lg',
        ghost: 'bg-white text-brand-900 border border-line hover:bg-surface active:bg-surface shadow-none',
        outline: 'border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 shadow-xs',
        default: 'bg-brand-900 text-white hover:bg-brand-800 shadow-xs',
      },
      size: {
        default: 'min-h-[44px] px-6 py-2.5 text-btn rounded-button',
        sm: 'min-h-[40px] px-3.5 text-sm rounded-md',
        lg: 'min-h-[48px] px-8 py-3.5 text-lead font-semibold rounded-button',
        icon: 'min-h-[44px] min-w-[44px] p-2 rounded-lg',
        'icon-xs': 'min-h-[36px] min-w-[36px] p-1.5 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary-brand',
      size: 'default',
    },
  }
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    className?: string
    render?: React.ReactElement
  }

export function Button({ className, variant, size, children, render, ...props }: ButtonProps) {
  const mergedClass = cn(buttonVariants({ variant, size }), className)

  if (render && React.isValidElement(render)) {
    return React.cloneElement(render as React.ReactElement<{ className?: string }>, {
      className: cn(mergedClass, (render.props as { className?: string })?.className),
      ...props,
    })
  }

  return (
    <button className={mergedClass} {...props}>
      {children}
    </button>
  )
}

export { buttonVariants }
