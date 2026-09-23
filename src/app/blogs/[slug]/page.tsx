import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Clock, Calendar, CheckCircle2 } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { blogPosts } from '@/lib/blogs-data'

import { JsonLd } from '@/components/seo/JsonLd'
import { getBreadcrumbSchema, getArticleSchema } from '@/lib/seo-schema'

interface BlogSlugPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogSlugPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Article Not Found | Xylozen',
      robots: { index: false, follow: false },
    }
  }

  const postUrl = `https://xylozen.com/blogs/${slug}`
  const imageUrl = post.image.startsWith('http') ? post.image : `https://xylozen.com${post.image}`

  return {
    title: `${post.title} | Xylozen Blogs`,
    description: post.summary,
    alternates: {
      canonical: `/blogs/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Xylozen Blogs`,
      description: post.summary,
      url: postUrl,
      siteName: 'Xylozen Technologies',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Xylozen Engineering'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Xylozen Blogs`,
      description: post.summary,
      images: [imageUrl],
    },
  }
}

export default async function BlogDetailPage({ params }: BlogSlugPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug)

  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.summary,
    slug: post.slug,
    datePublished: post.date,
    author: post.author,
    image: post.image,
  })

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blogs', url: '/blogs' },
    { name: post.title, url: `/blogs/${post.slug}` },
  ])

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <Header />
      <main className="min-h-screen pt-28 sm:pt-36 lg:pt-40 bg-white">
        {/* ===================================================================== */}
        {/* ARTICLE HEADER & CONTENT                                              */}
        {/* ===================================================================== */}
        <article className="border-b border-line pb-12 sm:pb-18">
          <div className="container-section max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-caption text-ink-500 mb-4 sm:mb-6 min-w-0 overflow-hidden">
              <Link href="/" className="hover:text-brand-500 transition-colors shrink-0">
                Home
              </Link>
              <span className="text-slate-300 shrink-0">/</span>
              <Link href="/blogs" className="hover:text-brand-500 transition-colors shrink-0">
                Blogs
              </Link>
              <span className="text-slate-300 shrink-0">/</span>
              <span className="text-brand-900 font-semibold truncate min-w-0">
                {post.title}
              </span>
            </div>

            {/* Category Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-3 sm:mb-4 font-semibold">
              <span className="w-2 h-2 rounded-full bg-cta" />
              <span className="font-mono uppercase">{post.category}</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3 sm:mb-4 break-words">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1.5 text-caption text-ink-500 mb-6 pb-4 border-b border-line">
              <span className="flex items-center gap-1.5 shrink-0">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {post.date}
              </span>
              <span className="text-slate-300 hidden sm:inline">&bull;</span>
              <span className="flex items-center gap-1.5 shrink-0">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {post.readTime}
              </span>
              <span className="text-slate-300 hidden sm:inline">&bull;</span>
              <span className="shrink-0 text-slate-600 font-medium sm:font-normal">{post.author}</span>
            </div>

            {/* Cover Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-line mb-6 sm:mb-8 shadow-2xs">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-center"
              />
            </div>

            {/* Main Narrative (Strictly from info/Content/OurWork.MD) */}
            <div className="space-y-6 sm:space-y-8 text-slate-700">
              {/* Challenge */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-900 mb-2 sm:mb-2.5">
                  The Challenge
                </h2>
                <p className="text-small sm:text-body text-ink-500 leading-relaxed">
                  {post.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-900 mb-2 sm:mb-2.5">
                  The Solution
                </h2>
                <p className="text-small sm:text-body text-ink-500 leading-relaxed mb-3">
                  Xylozen designed and engineered a targeted digital solution that included:
                </p>
                <ul className="space-y-2.5 bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5">
                  {post.solutionBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-small text-slate-800 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cta shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {post.deliveryNote && (
                  <p className="text-caption text-ink-500 mt-2.5 italic">
                    {post.deliveryNote}
                  </p>
                )}
              </div>

              {/* Impact */}
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-900 mb-2 sm:mb-2.5">
                  Measurable Impact
                </h2>
                <p className="text-small sm:text-body text-ink-500 leading-relaxed">
                  {post.impact}
                </p>
              </div>
            </div>

            {/* Back Navigation Link */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-line flex items-center justify-between">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-small font-semibold text-brand-700 hover:text-brand-900 transition-colors py-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to all perspectives</span>
              </Link>
            </div>
          </div>
        </article>

        {/* ===================================================================== */}
        {/* RELATED PERSPECTIVES                                                  */}
        {/* ===================================================================== */}
        {relatedPosts.length > 0 && (
          <section className="py-10 sm:py-16 bg-[#FAFBFD] border-b border-line">
            <div className="container-section max-w-3xl">
              <h2 className="text-lg sm:text-xl font-bold text-brand-900 mb-4 sm:mb-6">
                More from the Team
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blogs/${rel.slug}`}
                    className="bg-white rounded-xl border border-line p-4 sm:p-5 hover:border-brand-500/40 hover:shadow-sm transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="text-caption text-ink-500 mb-1.5 flex items-center gap-1.5 flex-wrap">
                        <span>{rel.category}</span>
                        <span className="text-slate-300">&bull;</span>
                        <span>{rel.readTime}</span>
                      </div>
                      <h3 className="text-small sm:text-body font-bold text-brand-900 group-hover:text-brand-600 transition-colors leading-snug mb-2">
                        {rel.title}
                      </h3>
                      <p className="text-caption text-ink-500 line-clamp-2 leading-relaxed">
                        {rel.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-caption font-semibold text-brand-700">
                      <span>Read Perspective</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Global Conversion CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
