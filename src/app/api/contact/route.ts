import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { contactFormSchema, sanitizeInput } from '@/lib/validations/contact'

const cleanEnv = (val?: string) =>
  val ? val.split('#')[0].trim().replace(/^["']|["']$/g, '') : ''

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json()

    // 1. Honeypot Bot Defense
    if (
      rawBody._gotcha &&
      typeof rawBody._gotcha === 'string' &&
      rawBody._gotcha.trim() !== ''
    ) {
      // Return 200 OK silently to deceive automated spam bots
      return NextResponse.json(
        { success: true, message: 'Message processed' },
        { status: 200 }
      )
    }

    // 2. Server-side Zod Schema Validation
    const parseResult = contactFormSchema.safeParse(rawBody)
    if (!parseResult.success) {
      const firstError =
        parseResult.error.issues[0]?.message || 'Invalid form submission'
      return NextResponse.json(
        { success: false, error: firstError },
        { status: 400 }
      )
    }

    // 3. XSS Sanitization
    const name = sanitizeInput(parseResult.data.name)
    const email = sanitizeInput(parseResult.data.email)
    const phone = sanitizeInput(parseResult.data.phone) || 'Not provided'
    const website = sanitizeInput(parseResult.data.website) || 'Not provided'
    const source = sanitizeInput(parseResult.data.source) || 'Not specified'
    const message = sanitizeInput(parseResult.data.message)

    // 4. SMTP Transporter Configuration
    const smtpHost = cleanEnv(process.env.SMTP_HOST) || 'smtp.titan.email'
    const smtpPort = parseInt(cleanEnv(process.env.SMTP_PORT) || '465', 10)
    const smtpSecure =
      cleanEnv(process.env.SMTP_SECURE) === 'true' || smtpPort === 465
    const smtpUser = cleanEnv(process.env.SMTP_USER)
    const smtpPass = cleanEnv(process.env.SMTP_PASS)
    const smtpFrom =
      cleanEnv(process.env.SMTP_FROM) || smtpUser || 'contact@xylozen.com'
    const ownerEmail =
      cleanEnv(process.env.OWNER_EMAIL) || 'contact@xylozen.com'

    const isDummyPass = !smtpPass || smtpPass === 'YourTitanPasswordHere'

    let mailSent = false

    if (!isDummyPass && smtpUser) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })

      // 5. Dual Email Dispatch (Parallel Execution)
      // (1) Owner Lead Notification
      const ownerMailPromise = transporter.sendMail({
        from: `"Xylozen Inquiries" <${smtpFrom}>`,
        to: ownerEmail,
        replyTo: email,
        subject: `New Technical Scoping Inquiry: ${name}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1f2733; line-height: 1.6;">
            <div style="padding-bottom: 16px; border-bottom: 2px solid #265dc3; margin-bottom: 20px;">
              <h2 style="margin: 0; color: #051c50; font-size: 20px;">New Project Scoping Inquiry</h2>
              <p style="margin: 4px 0 0; color: #6b7480; font-size: 13px;">Received via Xylozen Contact System</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 12px; background: #f8fafd; font-weight: bold; width: 140px; border-bottom: 1px solid #e2e6ed;">Client Name:</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e6ed;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; background: #f8fafd; font-weight: bold; border-bottom: 1px solid #e2e6ed;">Work Email:</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e6ed;"><a href="mailto:${email}" style="color: #265dc3;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; background: #f8fafd; font-weight: bold; border-bottom: 1px solid #e2e6ed;">Phone Number:</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e6ed;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; background: #f8fafd; font-weight: bold; border-bottom: 1px solid #e2e6ed;">Website:</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e6ed;">${website}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; background: #f8fafd; font-weight: bold; border-bottom: 1px solid #e2e6ed;">Referral Source:</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e6ed;">${source}</td>
              </tr>
            </table>

            <div style="margin-top: 20px;">
              <h4 style="margin: 0 0 8px; color: #051c50;">Project Requirement / Message:</h4>
              <div style="background: #f8fafd; border: 1px solid #e2e6ed; border-radius: 8px; padding: 16px; white-space: pre-wrap; font-size: 14px; color: #1f2733;">${message}</div>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e6ed; font-size: 12px; color: #6b7480;">
              Hit <strong>Reply</strong> to directly respond to ${name} (${email}).
            </div>
          </div>
        `,
        text: `New Inquiry from ${name}\nEmail: ${email}\nPhone: ${phone}\nWebsite: ${website}\nSource: ${source}\n\nMessage:\n${message}`,
      })

      // (2) Submitter Confirmation Receipt
      const receiptMailPromise = transporter.sendMail({
        from: `"Xylozen Technologies" <${smtpFrom}>`,
        to: email,
        subject: `We received your inquiry – Xylozen Technologies`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1f2733; line-height: 1.6;">
            <div style="padding-bottom: 16px; border-bottom: 2px solid #265dc3; margin-bottom: 20px;">
              <h2 style="margin: 0; color: #051c50; font-size: 20px;">Thank you for contacting Xylozen</h2>
              <p style="margin: 4px 0 0; color: #6b7480; font-size: 13px;">Engineering Intelligence. Creating Business Value.</p>
            </div>
            
            <p>Hello ${name},</p>
            <p>We have successfully received your inquiry. Our engineering team in Chennai is reviewing your requirements and will reach out with technical scoping feedback within <strong>24 business hours</strong>.</p>
            
            <div style="background: #f8fafd; border: 1px solid #e2e6ed; border-radius: 8px; padding: 16px; margin: 20px 0;">
              <h4 style="margin: 0 0 8px; color: #051c50; font-size: 13px; text-transform: uppercase;">Summary of your message:</h4>
              <p style="margin: 0; font-size: 13px; color: #4a5568; white-space: pre-wrap;">${message}</p>
            </div>

            <p style="font-size: 14px; color: #4a5568;">In the meantime, feel free to explore our case studies and engineering perspectives at <a href="https://xylozen.com/our-work" style="color: #265dc3;">xylozen.com/our-work</a>.</p>
            
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e6ed; font-size: 12px; color: #6b7480;">
              Xylozen Technologies &bull; Chennai, India &bull; <a href="mailto:contact@xylozen.com" style="color: #265dc3;">contact@xylozen.com</a>
            </div>
          </div>
        `,
        text: `Hello ${name},\n\nWe received your inquiry. Our team will review your project and get back to you within 24 business hours.\n\nSummary:\n${message}\n\nBest regards,\nXylozen Team`,
      })

      await Promise.all([ownerMailPromise, receiptMailPromise])
      mailSent = true
    } else {
      console.warn(
        '[CONTACT_API_NOTICE]: SMTP credentials not configured or set to dummy values in .env.local. Skipping live email dispatch.'
      )
    }

    // 6. Backend Database Synchronization (Dashboard Sync)
    const rawBackendUrl =
      cleanEnv(process.env.BACKEND_API_URL) || 'http://localhost:4000/api'
    const backendUrl = `${rawBackendUrl.replace(/\/$/, '')}/contacts`

    try {
      await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: phone === 'Not provided' ? '' : phone,
          website: website === 'Not provided' ? '' : website,
          message,
          consent: parseResult.data.consent ?? true,
          source: source === 'Not specified' ? 'Others' : source,
        }),
      })
    } catch (backendErr) {
      // Non-blocking warning: email is already handled/persisted
      console.warn('Backend DB Dashboard Connection Notice:', backendErr)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been submitted successfully.',
        mailSent,
      },
      { status: 200 }
    )
  } catch (err: unknown) {
    const errorObj = err as Error
    console.error('❌ [CONTACT API ERROR]:', {
      message: errorObj.message,
      stack: errorObj.stack,
    })

    return NextResponse.json(
      {
        success: false,
        error: errorObj.message || 'An unexpected error occurred. Please try again.',
      },
      { status: 500 }
    )
  }
}
