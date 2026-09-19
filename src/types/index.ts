// --- Service ---
export type ServiceLine = 'web-software' | 'ecommerce' | 'ai-automation' | 'consulting'

export type ServiceCard = {
  id: string
  line: ServiceLine
  title: string
  description: string
  details: string
  link: string
}

// --- Stats ---
export type StatTile = {
  id: string
  metric: string
  description: string
}

// --- Case Study ---
export type CaseStudy = {
  id: string
  industry: string
  title: string
  challenge: string
  capabilities: string[]
  impact: string
}

// --- Industry ---
export type Industry = {
  id: string
  name: string
  description: string
  icon: string
}

// --- Differentiator ---
export type Differentiator = {
  id: string
  title: string
  description: string
  icon: string
}
