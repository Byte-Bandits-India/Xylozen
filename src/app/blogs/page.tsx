import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Calendar, Sparkles, CheckCircle2 } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { blogPosts } from '@/lib/blogs-data'
import { Button } from '@/components/ui/Button'

import { JsonLd } from '@/components/seo/JsonLd'
import { getBreadcrumbSchema } from '@/lib/seo-schema'

export const metadata: Metadata = {
  title: 'Blogs & Engineering Perspectives | Xylozen',
  description:
    'AI in Business: How Companies Are Using AI to Automate, Scale and Work Smarter. In-depth technical perspectives on AI-native architectures, workflow automation, and agentic systems.',
  alternates: {
    canonical: '/blogs',
  },
  openGraph: {
    title: 'Blogs & Engineering Perspectives | Xylozen',
    description:
      'In-depth technical perspectives on AI-native architectures, workflow automation, and agentic systems.',
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
      'In-depth technical perspectives on AI-native architectures, workflow automation, and agentic systems.',
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
            <h1 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3 max-w-3xl">
              Engineering Perspectives &amp; Insights
            </h1>

            {/* Lead Motto */}
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
        {/* FEATURED ARTICLES SECTION                                             */}
        {/* ===================================================================== */}
        <section className="py-12 sm:py-16 bg-[#FAFBFD] border-b border-line">
          <div className="container-section">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-line overflow-hidden shadow-sm hover:shadow-md hover:border-brand-500/30 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Left: Visual Cover with Badge */}
                    <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[340px] lg:min-h-[440px] bg-slate-100 border-b lg:border-b-0 lg:border-r border-line overflow-hidden group">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-brand-900 px-3 py-1 rounded-full text-[11px] font-mono font-semibold border border-slate-200/80 shadow-xs flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-cta" />
                        {post.category}
                      </div>
                    </div>

                    {/* Right: Rich Metadata & Content */}
                    <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                      <div>
                        {/* Meta Line */}
                        <div className="flex flex-wrap items-center gap-3 text-caption text-ink-500 mb-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            {post.date}
                          </span>
                          <span>&bull;</span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {post.readTime}
                          </span>
                          <span>&bull;</span>
                          <span className="text-slate-600 font-medium">{post.author}</span>
                        </div>

                        {/* Title */}
                        <Link href={`/blogs/${post.slug}`} className="group block">
                          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-900 group-hover:text-brand-600 transition-colors leading-snug mb-3">
                            {post.title}
                          </h2>
                        </Link>

                        {/* Summary */}
                        <p className="text-small sm:text-body text-ink-500 leading-relaxed mb-6">
                          {post.summary}
                        </p>

                        {/* Core Pillars / Topics */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 pt-5 border-t border-line">
                          <div className="flex items-center gap-2 text-caption text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-cta shrink-0" />
                            <span>Workflow Automation vs Simple Tools</span>
                          </div>
                          <div className="flex items-center gap-2 text-caption text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-cta shrink-0" />
                            <span>AI vs Traditional Automation Matrix</span>
                          </div>
                          <div className="flex items-center gap-2 text-caption text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-cta shrink-0" />
                            <span>6-Step Practical Implementation Roadmap</span>
                          </div>
                          <div className="flex items-center gap-2 text-caption text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-cta shrink-0" />
                            <span>AI-Native Architecture &amp; FAQs</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Action */}
                      <div className="pt-4 border-t border-line flex flex-wrap items-center justify-between gap-4">
                        <Link href={`/blogs/${post.slug}`}>
                          <Button variant="primary-cta" className="gap-2">
                            <span className="text-white font-medium">Read Full Article</span>
                            <ArrowRight className="w-4 h-4 text-white" />
                          </Button>
                        </Link>
                        <span className="text-caption text-ink-500 font-mono">
                          {post.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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
