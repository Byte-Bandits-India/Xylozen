'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Sparkles,
  Loader2,
  CheckCircle2,
  AlertCircle,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PhoneInput } from '@/components/reui/phone-input'
import { contactFormSchema, ContactFormData } from '@/lib/validations/contact'
import { ContactHeroVisual } from './ContactHeroVisual'

const sourceOptions = [
  'Google ads',
  'LinkedIn',
  'Email',
  'Instagram',
  'Others',
]

const initialForm: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  website: '',
  source: '',
  message: '',
  consent: false as unknown as true,
  _gotcha: '',
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [serverError, setServerError] = useState<string | null>(null)

  const validateField = (name: keyof ContactFormData, value: unknown) => {
    const fieldSchema = contactFormSchema.shape[name]
    if (!fieldSchema) return ''

    const res = fieldSchema.safeParse(value)
    if (!res.success) {
      return res.error.issues[0]?.message || 'Invalid value'
    }
    return ''
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const isCheckbox = type === 'checkbox'
    const checked = (e.target as HTMLInputElement).checked
    const finalVal = isCheckbox ? checked : value

    setForm((prev) => ({
      ...prev,
      [name]: finalVal,
    }))

    if (touched[name as keyof ContactFormData]) {
      const err = validateField(name as keyof ContactFormData, finalVal)
      setErrors((prev) => ({
        ...prev,
        [name]: err,
      }))
    }
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const isCheckbox = type === 'checkbox'
    const checked = (e.target as HTMLInputElement).checked
    const val = isCheckbox ? checked : value

    setTouched((prev) => ({ ...prev, [name]: true }))

    const err = validateField(name as keyof ContactFormData, val)
    setErrors((prev) => ({
      ...prev,
      [name]: err,
    }))
  }

  const handlePhoneChange = (value: string | undefined) => {
    const phoneVal = value || ''
    setForm((prev) => ({
      ...prev,
      phone: phoneVal,
    }))

    if (touched.phone) {
      const err = validateField('phone', phoneVal)
      setErrors((prev) => ({
        ...prev,
        phone: err,
      }))
    }
  }

  const handleSourceSelect = (sourceVal: string) => {
    setForm((prev) => ({
      ...prev,
      source: sourceVal,
    }))
    setTouched((prev) => ({ ...prev, source: true }))
    setErrors((prev) => ({ ...prev, source: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError(null)
    setSuccessMessage(null)

    const result = contactFormSchema.safeParse(form)
    if (!result.success) {
      const newErrors: Partial<Record<keyof ContactFormData, string>> = {}
      const newTouched: Partial<Record<keyof ContactFormData, boolean>> = {}

      result.error.issues.forEach((err) => {
        const fieldName = String(err.path[0]) as keyof ContactFormData
        if (fieldName && !newErrors[fieldName]) {
          newErrors[fieldName] = err.message
        }
      })

      Object.keys(form).forEach((k) => {
        newTouched[k as keyof ContactFormData] = true
      })

      setErrors(newErrors)
      setTouched(newTouched)
      return
    }

    setIsLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit message. Please try again.')
      }

      setSuccessMessage(
        'Thank you! Your message has been sent successfully. An engineering architect will get back to you shortly.'
      )
      setForm(initialForm)
      setErrors({})
      setTouched({})

      setTimeout(() => {
        setSuccessMessage(null)
      }, 7000)
    } catch (err: unknown) {
      const errorObj = err as Error
      setServerError(errorObj.message || 'An error occurred while sending your message.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* ===================================================================== */}
      {/* SUB-HERO SECTION (2-Column Grid with ContactHeroVisual)               */}
      {/* ===================================================================== */}
      <section className="border-b border-line pb-12 sm:pb-16 bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Breadcrumb, Badges, Headline, Narrative */}
            <div className="lg:col-span-7 xl:col-span-7">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-caption text-ink-500 mb-6">
                <Link href="/" className="hover:text-brand-500 transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-brand-900 font-semibold">Contact</span>
              </div>

              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-badge text-slate-700 mb-4 font-semibold">
                <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
                <span className="font-mono uppercase">CONTACT &amp; TECHNICAL SCOPING</span>
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-h2 font-bold text-brand-900 tracking-tight leading-tight mb-3 max-w-2xl">
                Engineering Intelligence. Creating Business Value.
              </h1>

              {/* Motto / Lead */}
              <p className="text-base sm:text-lead font-medium text-brand-700 mb-3 max-w-2xl">
                From workflow to product. From idea to revenue.
              </p>

              {/* Studio Narrative */}
              <p className="text-small sm:text-body text-ink-500 max-w-2xl leading-relaxed">
                Xylozen is an AI-native product engineering studio headquartered in Chennai. Tell us what you are trying to build, and an engineering architect will connect with you to review your roadmap and technical scoping.
              </p>
            </div>

            {/* Right Column: Contact Hero Visual (Similar to OurWorkHeroVisual) */}
            <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center">
              <ContactHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* MAIN 2-COLUMN SECTION                                                 */}
      {/* ===================================================================== */}
      <section className="py-12 sm:py-16 bg-[#FAFBFD] border-b border-line">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* =============================================================== */}
            {/* LEFT COLUMN: Studio Information & Direct Inquiries              */}
            {/* =============================================================== */}
            <div className="lg:col-span-5 space-y-6">
              {/* Studio Info Card */}
              <div className="bg-white rounded-2xl border border-line p-6 sm:p-8 shadow-2xs">
                <h2 className="text-xl sm:text-2xl font-bold text-brand-900 tracking-tight mb-2">
                  Let&apos;s Build Something.
                </h2>
                <p className="text-small text-ink-500 leading-relaxed mb-6">
                  If you have a project in mind, an operational workflow challenge, or want to explore what&apos;s possible with AI and modern software, reach out directly.
                </p>

                <div className="space-y-4">
                  {/* Direct Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-brand-700 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-caption font-semibold text-brand-900">Direct Phone</div>
                      <a
                        href="tel:+919080403951"
                        className="text-small font-semibold text-brand-700 hover:text-brand-900 transition-colors"
                      >
                        +91 90804 03951
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-brand-700 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-caption font-semibold text-brand-900">Direct Inquiries</div>
                      <a
                        href="mailto:contact@xylozen.com"
                        className="text-small font-semibold text-brand-700 hover:text-brand-900 transition-colors"
                      >
                        contact@xylozen.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-brand-700 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-caption font-semibold text-brand-900">Engineering Studio</div>
                      <div className="text-small text-ink-500 leading-relaxed">
                        Chennai, Tamil Nadu, India
                      </div>
                    </div>
                  </div>

                  {/* Response SLA */}
                  <div className="flex items-start gap-3.5 pt-2">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-caption font-semibold text-emerald-800">Response SLA</div>
                      <div className="text-small text-emerald-700 font-medium">
                        Guaranteed response within 24 business hours
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links (Matching Footer style) */}
                <div className="pt-6 mt-6 border-t border-line flex items-center gap-3">
                  <a
                    href="mailto:contact@xylozen.com"
                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* =============================================================== */}
            {/* RIGHT COLUMN: Send us a message Form Card                       */}
            {/* =============================================================== */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-line p-6 sm:p-8 lg:p-10 shadow-2xs">
                {/* Card Header */}
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-900 tracking-tight flex items-center gap-2">
                    <span>Send us a message</span>
                    <Sparkles className="w-5 h-5 text-cta" />
                  </h2>
                  <p className="text-small text-ink-500 mt-1.5 leading-relaxed">
                    Get in touch with us for any inquiries or technical scoping. We&apos;re here to assist you and ensure your experience is exceptional.
                  </p>
                </div>

                {/* Success Alert */}
                {successMessage && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-small flex items-start justify-between gap-3 animate-in fade-in duration-300">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="leading-relaxed">{successMessage}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSuccessMessage(null)}
                      className="text-emerald-700 hover:text-emerald-900 p-0.5"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Error Alert */}
                {serverError && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 text-small flex items-start justify-between gap-3 animate-in fade-in duration-300">
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div className="leading-relaxed">{serverError}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setServerError(null)}
                      className="text-red-700 hover:text-red-900 p-0.5"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Honeypot field for bot defense */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={form._gotcha || ''}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    className="sr-only"
                    aria-hidden="true"
                  />

                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Your Name * */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-caption font-semibold text-brand-900 mb-1.5"
                      >
                        Your Name <span className="text-cta">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full h-10 px-3.5 rounded-lg border text-small transition-colors focus:outline-hidden ${
                          touched.name && errors.name
                            ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                            : 'border-line bg-white hover:border-slate-300 focus:border-brand-500'
                        }`}
                      />
                      {touched.name && errors.name && (
                        <p className="text-[12px] text-red-600 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone (optional) */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-caption font-semibold text-brand-900 mb-1.5"
                      >
                        Phone (optional)
                      </label>
                      <div className="w-full">
                        <PhoneInput
                          defaultCountry="IN"
                          placeholder="6381018516"
                          value={form.phone}
                          onChange={handlePhoneChange}
                          className="w-full"
                        />
                      </div>
                      {touched.phone && errors.phone && (
                        <p className="text-[12px] text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Your Email * */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-caption font-semibold text-brand-900 mb-1.5"
                    >
                      Your Email <span className="text-cta">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full h-10 px-3.5 rounded-lg border text-small transition-colors focus:outline-hidden ${
                        touched.email && errors.email
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                          : 'border-line bg-white hover:border-slate-300 focus:border-brand-500'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="text-[12px] text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Row 3: Website (optional) */}
                  <div>
                    <label
                      htmlFor="website"
                      className="block text-caption font-semibold text-brand-900 mb-1.5"
                    >
                      Website (optional)
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      placeholder="https://example.com"
                      value={form.website || ''}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full h-10 px-3.5 rounded-lg border text-small transition-colors focus:outline-hidden ${
                        touched.website && errors.website
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                          : 'border-line bg-white hover:border-slate-300 focus:border-brand-500'
                      }`}
                    />
                    {touched.website && errors.website && (
                      <p className="text-[12px] text-red-600 mt-1">{errors.website}</p>
                    )}
                  </div>

                  {/* Row 4: Message * */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label
                        htmlFor="message"
                        className="block text-caption font-semibold text-brand-900"
                      >
                        Message <span className="text-cta">*</span>
                      </label>
                      <span className="text-caption text-ink-500 font-mono">
                        {form.message.length}/2500
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project requirements, scope, or questions..."
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={2500}
                      className={`w-full p-3.5 rounded-lg border text-small transition-colors focus:outline-hidden resize-y min-h-[110px] ${
                        touched.message && errors.message
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                          : 'border-line bg-white hover:border-slate-300 focus:border-brand-500'
                      }`}
                    />
                    {touched.message && errors.message && (
                      <p className="text-[12px] text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Row 5: GDPR Agreement * */}
                  <div className="pt-1">
                    <label
                      htmlFor="consent"
                      className="block text-caption font-semibold text-brand-900 mb-1.5"
                    >
                      GDPR Agreement <span className="text-cta">*</span>
                    </label>
                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={Boolean(form.consent)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500 cursor-pointer accent-brand-600"
                      />
                      <label
                        htmlFor="consent"
                        className="text-caption text-ink-500 leading-normal cursor-pointer select-none"
                      >
                        I consent to having this website store my submitted information so they can respond to my inquiry.
                      </label>
                    </div>
                    {touched.consent && errors.consent && (
                      <p className="text-[12px] text-red-600 mt-1">{errors.consent}</p>
                    )}
                  </div>

                  {/* Row 6: How did you come to know about us * */}
                  <div className="pt-1">
                    <label className="block text-caption font-semibold text-brand-900 mb-2">
                      How did you come to know about us <span className="text-cta">*</span>
                    </label>
                    <div className="flex flex-wrap items-center gap-2.5">
                      {sourceOptions.map((opt) => (
                        <label
                          key={opt}
                          onClick={() => handleSourceSelect(opt)}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-small cursor-pointer transition-all duration-150 select-none ${
                            form.source === opt
                              ? 'border-brand-500 bg-brand-50/60 text-brand-900 font-medium shadow-2xs'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="source"
                            value={opt}
                            checked={form.source === opt}
                            onChange={() => handleSourceSelect(opt)}
                            className="h-3.5 w-3.5 text-brand-600 focus:ring-brand-500 cursor-pointer accent-brand-600"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                    {touched.source && errors.source && (
                      <p className="text-[12px] text-red-600 mt-1">{errors.source}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      variant="primary-cta"
                      className="w-full sm:w-auto shadow-sm shadow-cta/20"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4 ml-1.5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
