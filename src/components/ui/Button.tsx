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
        default: 'px-6 py-2.5 text-btn rounded-button',
        sm: 'h-8 px-3 text-xs rounded-md',
        lg: 'px-8 py-3.5 text-lead font-semibold rounded-button',
        icon: 'h-9 w-9 p-0',
        'icon-xs': 'h-6 w-6 p-0',
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
