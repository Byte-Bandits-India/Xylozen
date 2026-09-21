'use client'

import React from 'react'
import AccordionGallery, { AccordionGalleryItem } from '@/components/ui/AccordionGallery'

const ecommerceTiers: AccordionGalleryItem[] = [
  {
    image: '/images/architecture/ecommerce/ecom_storefront.jpg',
    label: 'Headless Storefront',
    description:
      'Next.js Commerce with edge-side ISR caching, sub-second TTFB, predictive prefetching, and 100/100 Core Web Vitals across mobile & desktop.',
    link: '/contact',
  },
  {
    image: '/images/architecture/ecommerce/ecom_checkout.jpg',
    label: 'Accelerated Checkout',
    description:
      'Multi-gateway orchestration (Stripe, Razorpay, Apple Pay), biometric authentication, 1-click checkout flows, and zero drop-off cart recovery.',
    link: '/contact',
  },
  {
    image: '/images/architecture/ecommerce/ecom_catalog_search.jpg',
    label: 'Real-Time Catalog Search',
    description:
      'Faceted indexing with Algolia & Typesense, sub-10ms query times, typo-tolerant search, and personalized product ranking across 100k+ SKUs.',
    link: '/contact',
  },
  {
    image: '/images/architecture/ecommerce/ecom_erp_sync.jpg',
    label: 'Omnichannel ERP & Sync',
    description:
      'Real-time inventory synchronization across physical retail POS, online storefronts, and central warehouse ERPs with transactional zero-conflict locks.',
    link: '/contact',
  },
  {
    image: '/images/architecture/ecommerce/ecom_order_mesh.jpg',
    label: 'Global Order Routing',
    description:
      'Distributed multi-node warehouse dispatch, intelligent proximity shipping routing, automated fraud analysis, and live parcel webhook telemetry.',
    link: '/contact',
  },
]

export function EcommerceArchitectureVisual() {
  return (
    <div className="w-full">
      <AccordionGallery
        items={ecommerceTiers}
        defaultIndex={1}
        expandRatio={0.48}
        trigger="hover"
        height="500px"
        gap="12px"
        radius="1.25rem"
      />
    </div>
  )
}
