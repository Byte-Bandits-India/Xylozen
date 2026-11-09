'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export const LEAD_FLAG = 'xz_lead_submitted'

/**
 * Fires a single `generate_lead` dataLayer event on the thank-you page,
 * only when the visitor actually just submitted the form (not on refresh
 * or direct visits).
 */
export function LeadConversion() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(LEAD_FLAG) !== '1') return
      sessionStorage.removeItem(LEAD_FLAG)
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'generate_lead', form_name: 'contact_form' })
    } catch {
      // storage unavailable: skip event, page view still recorded
    }
  }, [])

  return null
}
