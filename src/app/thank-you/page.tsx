import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { LeadConversion } from '@/components/contact/LeadConversion'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thanks for contacting Xylozen Technologies. We will get back to you shortly.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/thank-you' },
}

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <LeadConversion />
      <main className="min-h-screen pt-32 sm:pt-36 lg:pt-40 bg-white">
        <section className="max-w-2xl mx-auto px-4 sm:px-6 text-center py-16">
          <h1 className="text-h1 font-bold text-ink-900 mb-4">Thank you!</h1>
          <p className="text-body text-ink-700 mb-8 leading-relaxed">
            Your message has been sent successfully. An engineering architect will get back to you shortly.
          </p>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
