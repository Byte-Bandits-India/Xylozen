import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(70, 'Name must not exceed 70 characters')
    .regex(/^[a-zA-Z\s.'-]+$/, 'Name contains invalid characters'),
  email: z
    .string()
    .min(1, 'Please enter your email address')
    .max(100, 'Email must not exceed 100 characters')
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .optional()
    .refine((val) => {
      if (!val || val.trim() === '') return true
      const digits = val.replace(/\D/g, '')
      return digits.length >= 10 && digits.length <= 15
    }, 'Please enter a valid phone number (at least 10 digits)'),
  website: z
    .string()
    .optional()
    .refine(
      (val) =>
        !val ||
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i.test(val),
      'Please enter a valid website URL'
    ),
  source: z.string().min(1, 'Please select how you heard about us'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters long')
    .max(2500, 'Message must not exceed 2500 characters'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to continue',
  }),
  _gotcha: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export function sanitizeInput(str: unknown): string {
  if (typeof str !== 'string') return ''
  return str
    .trim()
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/onload|onerror|onclick/gi, '')
    .slice(0, 3000)
}
