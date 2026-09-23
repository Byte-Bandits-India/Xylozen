import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { blogPosts } from '@/lib/blogs-data'

import { JsonLd } from '@/components/seo/JsonLd'
import { getBreadcrumbSchema } from '@/lib/seo-schema'

export const metadata: Metadata = {
  title: 'Blogs & Engineering Perspectives | Xylozen',
  description:
    'Engineering Intelligence. Creating Business Value. In-depth technical perspectives on AI-native architectures, high-concurrency systems, and scalable commerce.',
  alternates: {
    canonical: '/blogs',
  },
  openGraph: {
    title: 'Blogs & Engineering Perspectives | Xylozen',
    description:
      'In-depth technical perspectives on AI-native architectures, high-concurrency systems, and scalable commerce.',
    url: 'https://xylozen.com/blogs',
    siteName: 'Xylozen Technologies',
    images: [
      {
        url: '/opengraph.webp',
        width: 1200,
        height: 630,
        alt: 'Xylozen Engineering Perspectives',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogs & Engineering Perspectives | Xylozen',
    description:
      'In-depth technical perspectives on AI-native architectures, high-concurrency systems, and scalable commerce.',
    images: ['/opengraph.webp'],
  },
}

export default function BlogsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blogs', url: '/blogs' },
  ])

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <Header />
      <main className="min-h-screen pt-32 sm:pt-36 lg:pt-40 bg-white">
        {/* ===================================================================== */}
        {/* HERO SECTION                                                          */}
        {/* ===================================================================== */}
        <section className="border-b border-line pb-12 sm:pb-16 bg-white">
          <div className="container-section">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-caption text-ink-500 mb-6">
              <Link href="/" className="hover:text-brand-500 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-900 font-semibold">Blogs</span>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
              <span className="font-mono uppercase">FROM THE TEAM</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3 max-w-2xl">
              Engineering Perspectives &amp; Insights
            </h1>

            {/* Lead Motto from aboutUs.MD */}
            <p className="text-base sm:text-lead font-medium text-brand-700 mb-2 max-w-2xl">
              From workflow to product. From idea to revenue.
            </p>

            {/* Subtext */}
            <p className="text-small sm:text-body text-ink-500 max-w-2xl leading-relaxed">
              Real-world perspectives and technical outcomes from our product engineering work.
            </p>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* ARTICLES GRID                                                         */}
        {/* ===================================================================== */}
        <section className="py-12 sm:py-16 bg-[#FAFBFD] border-b border-line">
          <div className="container-section">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blogs/${post.slug}`}
                  className="bg-white rounded-2xl border border-line overflow-hidden shadow-2xs hover:shadow-md hover:border-brand-500/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden border-b border-line">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-brand-900 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border border-slate-200/80 shadow-xs">
                        {post.category}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-3 text-caption text-ink-500 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {post.date}
                        </span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-base sm:text-h3 font-bold text-brand-900 group-hover:text-brand-600 transition-colors leading-snug mb-2.5">
                        {post.title}
                      </h2>

                      <p className="text-small text-ink-500 line-clamp-3 leading-relaxed">
                        {post.summary}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-line flex items-center justify-between">
                    <span className="text-caption font-semibold text-brand-700">
                      Read Perspective
                    </span>
                    <span className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-brand-500 group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Global Conversion CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
