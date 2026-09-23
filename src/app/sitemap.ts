import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blogs-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xylozen.com'
  const currentDate = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services/web-software`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ecommerce`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-automation`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-work`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => {
    // Attempt parse or fallback to current date
    const parsedDate = new Date(post.date)
    const validDate = isNaN(parsedDate.getTime()) ? currentDate : parsedDate

    return {
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: validDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  })

  return [...staticRoutes, ...blogRoutes]
}
