import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'Inter Tight', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // System / Shadcn tokens
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        // Core Brand
        brand: {
          500: '#265DC3',
          700: '#163D8A',
          900: '#051C50',
        },
        // Metallic
        silver: {
          100: '#E7EAEE',
          400: '#B8BEC7',
        },
        // Accents
        teal: {
          400: '#00C2CB',
          600: '#00A3AD',
        },
        gold: {
          400: '#F5A524',
        },
        violet: {
          500: '#7A5AF8',
        },
        // Action
        action: {
          500: '#FF5A2C',
          700: '#D93A16',
        },
        cta: {
          DEFAULT: '#FF5A2C',
          hover: '#D93A16',
        },
        // Neutrals
        ink: {
          900: '#1F2733',
          500: '#6B7480',
        },
        line: '#E2E6ED',
        surface: '#F3F3F3',
        slate: {
          light: '#C6D3EC',
        },
        // Functional
        success: '#16A34A',
        warning: '#F5A524',
        error: '#E03131',
        // Service Badge Colors
        'badge-web-bg': '#E4ECFB',
        'badge-web-text': '#163D8A',
        'badge-ecommerce-bg': '#D8F5F7',
        'badge-ecommerce-text': '#00676E',
        'badge-ai-bg': '#EDE9FE',
        'badge-ai-text': '#4B32B0',
        'badge-consulting-bg': '#FDF0D9',
        'badge-consulting-text': '#8A5A05',
      },
      borderRadius: {
        button: '8px',
        badge: '6px',
        card: '14px',
      },
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.55' }],
        base: ['1.0625rem', { lineHeight: '1.65' }],
        md: ['1.0625rem', { lineHeight: '1.65' }],
        lg: ['1.1875rem', { lineHeight: '1.6' }],
        xl: ['1.375rem', { lineHeight: '1.5' }],
        '2xl': ['1.625rem', { lineHeight: '1.35' }],
        '3xl': ['2rem', { lineHeight: '1.25' }],
        '4xl': ['2.375rem', { lineHeight: '1.15' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
        display: ['3.25rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '600' }],
        h1: ['2.375rem', { lineHeight: '1.10', letterSpacing: '-0.02em', fontWeight: '600' }],
        h2: ['1.875rem', { lineHeight: '1.20', letterSpacing: '-0.015em', fontWeight: '600' }],
        h3: ['1.375rem', { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '600' }],
        lead: ['1.1875rem', { lineHeight: '1.65', fontWeight: '400' }],
        body: ['1.0625rem', { lineHeight: '1.65', fontWeight: '400' }],
        small: ['0.9375rem', { lineHeight: '1.55', fontWeight: '400' }],
        caption: ['0.8125rem', { lineHeight: '1.50', letterSpacing: '0.04em', fontWeight: '500' }],
        tagline: ['0.75rem', { lineHeight: '1.40', letterSpacing: '0.14em', fontWeight: '400' }],
        btn: ['1.0625rem', { lineHeight: '1.20', fontWeight: '600' }],
        badge: ['0.5000rem', { lineHeight: '1.35', letterSpacing: '0.08em', fontWeight: '600' }],
        nav: ['0.9375rem', { lineHeight: '1.50', fontWeight: '500' }],
      },
      maxWidth: {
        prose: '68ch',
        'prose-narrow': '60ch',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
