import {
  Code2,
  ShoppingBag,
  Bot,
  Briefcase,
  FileText,
  Store,
  Building2,
  Stethoscope,
  Truck,
  Factory,
  Layers,
  Users,
  Compass,
  BookOpen,
  TrendingUp,
  LucideIcon,
} from 'lucide-react'

export interface SubMenuItem {
  title: string
  subtitle: string
  href: string
  icon: LucideIcon
  iconBg: string
  iconColor: string
}

export interface MegaMenuData {
  id: string
  label: string
  eyebrow: string
  eyebrowIcon: LucideIcon
  items: SubMenuItem[]
  viewAllText: string
  viewAllHref: string
  visualHeadline: string
  visualSub: string
}

export const navigationMenuData: Record<string, MegaMenuData> = {
  services: {
    id: 'services',
    label: 'Services',
    eyebrow: 'SERVICES',
    eyebrowIcon: Layers,
    items: [
      {
        title: 'Web & Software',
        subtitle: 'Enterprise portals, dashboards & systems',
        href: '#what-we-do',
        icon: Code2,
        iconBg: 'bg-brand-500/10',
        iconColor: 'text-brand-500',
      },
      {
        title: 'Ecommerce',
        subtitle: 'Custom storefronts & checkout engines',
        href: '#what-we-do',
        icon: ShoppingBag,
        iconBg: 'bg-teal-400/15',
        iconColor: 'text-teal-600',
      },
      {
        title: 'AI & Automation',
        subtitle: 'Intelligent automation & connected pipelines',
        href: '#what-we-do',
        icon: Bot,
        iconBg: 'bg-violet-500/10',
        iconColor: 'text-violet-500',
      },
    ],
    viewAllText: 'Explore all services',
    viewAllHref: '#what-we-do',
    visualHeadline: 'AI-Native Architecture',
    visualSub: 'Intelligent systems engineered for operational scale',
  },

  'our-work': {
    id: 'our-work',
    label: 'Our Work',
    eyebrow: 'PORTFOLIO & EVIDENCE',
    eyebrowIcon: TrendingUp,
    items: [
      {
        title: 'Portfolio',
        subtitle: 'Selected production platforms & products',
        href: '#our-work',
        icon: Briefcase,
        iconBg: 'bg-brand-500/10',
        iconColor: 'text-brand-500',
      },
      {
        title: 'Case Studies',
        subtitle: 'Measurable outcomes & architectural ROI',
        href: '#our-work',
        icon: FileText,
        iconBg: 'bg-teal-400/15',
        iconColor: 'text-teal-600',
      },
    ],
    viewAllText: 'View all project metrics',
    viewAllHref: '#our-work',
    visualHeadline: 'Precision in Production',
    visualSub: 'Titan × Tata, HireAI & Vision Safety Systems',
  },

  industries: {
    id: 'industries',
    label: 'Industries',
    eyebrow: 'SECTOR SOLUTIONS',
    eyebrowIcon: Store,
    items: [
      {
        title: 'Retail & Ecommerce',
        subtitle: 'High-converting stores & inventory sync',
        href: '#industries',
        icon: Store,
        iconBg: 'bg-brand-500/10',
        iconColor: 'text-brand-500',
      },
      {
        title: 'Real Estate',
        subtitle: 'Portals, listings & lead management',
        href: '#industries',
        icon: Building2,
        iconBg: 'bg-blue-50',
        iconColor: 'text-brand-700',
      },
      {
        title: 'Healthcare',
        subtitle: 'Secure & compliant patient platforms',
        href: '#industries',
        icon: Stethoscope,
        iconBg: 'bg-teal-400/15',
        iconColor: 'text-teal-600',
      },
      {
        title: 'Logistics',
        subtitle: 'Tracking dashboards & dispatch flows',
        href: '#industries',
        icon: Truck,
        iconBg: 'bg-amber-50',
        iconColor: 'text-amber-600',
      },
      {
        title: 'Manufacturing',
        subtitle: 'Floor telemetry to ERP integration',
        href: '#industries',
        icon: Factory,
        iconBg: 'bg-violet-500/10',
        iconColor: 'text-violet-500',
      },
    ],
    viewAllText: 'Explore industry workflows',
    viewAllHref: '#industries',
    visualHeadline: 'Industry-Specific Tech',
    visualSub: 'Engineered for how your business actually operates',
  },

  about: {
    id: 'about',
    label: 'About',
    eyebrow: 'STUDIO OVERVIEW',
    eyebrowIcon: Compass,
    items: [
      {
        title: 'Why Xylozen',
        subtitle: 'AI-native studio differentiators',
        href: '#why-us',
        icon: Layers,
        iconBg: 'bg-brand-500/10',
        iconColor: 'text-brand-500',
      },
      {
        title: 'Leadership',
        subtitle: 'Engineering partners & architects',
        href: '#why-us',
        icon: Users,
        iconBg: 'bg-blue-50',
        iconColor: 'text-brand-700',
      },
      {
        title: 'How We Work',
        subtitle: '8-stage disciplined delivery process',
        href: '#why-us',
        icon: Compass,
        iconBg: 'bg-teal-400/15',
        iconColor: 'text-teal-600',
      },
      {
        title: 'Blogs',
        subtitle: 'Architecture & technical perspectives',
        href: '#why-us',
        icon: BookOpen,
        iconBg: 'bg-violet-500/10',
        iconColor: 'text-violet-500',
      },
    ],
    viewAllText: 'Meet our engineering team',
    viewAllHref: '#why-us',
    visualHeadline: 'Chennai to Global',
    visualSub: 'International delivery rigor with 100% in-house team',
  },
}
