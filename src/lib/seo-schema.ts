/**
 * JSON-LD Structured Data Generators for Xylozen Technologies
 * Standards compliant with schema.org specifications
 */

export const BASE_URL = 'https://xylozen.com'

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'Xylozen Technologies',
    legalName: 'Xylozen Technologies Private Limited',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/images/logo/transparent.png`,
      caption: 'Xylozen Technologies Logo',
    },
    image: `${BASE_URL}/images/logo/transparent.png`,
    description:
      'Engineering Intelligence. Creating Business Value. Precision operationalized with enterprise web development, high-velocity commerce, and autonomous AI systems.',
    email: 'hello@xylozen.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'India',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'technical support',
        email: 'hello@xylozen.com',
        availableLanguage: ['English'],
      },
    ],
    sameAs: [
      'https://github.com/xylozen',
      'https://www.linkedin.com/company/xylozen',
      'https://x.com/xylozen',
    ],
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#localbusiness`,
    name: 'Xylozen Technologies',
    url: BASE_URL,
    image: `${BASE_URL}/images/logo/transparent.png`,
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '13.0827',
      longitude: '80.2707',
    },
    telephone: '+91-XXXXXXXXXX',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Xylozen Technologies',
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/blogs?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  }
}

export interface ServiceSchemaParams {
  name: string
  description: string
  serviceType: string
  url: string
  deliverables?: string[]
}

export function getServiceSchema({
  name,
  description,
  serviceType,
  url,
  deliverables,
}: ServiceSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType,
    description,
    provider: {
      '@id': `${BASE_URL}/#organization`,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Worldwide',
    },
    url: url.startsWith('http') ? url : `${BASE_URL}${url}`,
    ...(deliverables && deliverables.length > 0
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${name} Deliverables`,
            itemListElement: deliverables.map((item) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: item,
              },
            })),
          },
        }
      : {}),
  }
}

export interface ArticleSchemaParams {
  title: string
  description: string
  slug: string
  datePublished: string
  author: string
  image?: string
}

export function getArticleSchema({
  title,
  description,
  slug,
  datePublished,
  author,
  image,
}: ArticleSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blogs/${slug}`,
    },
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Organization',
      name: author || 'Xylozen Engineering',
      url: BASE_URL,
    },
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    image: image
      ? image.startsWith('http')
        ? image
        : `${BASE_URL}${image}`
      : `${BASE_URL}/images/logo/transparent.png`,
  }
}

export interface FAQSchemaItem {
  question: string
  answer: string
}

export function getFAQSchema(faqs: FAQSchemaItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
