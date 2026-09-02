import { useState } from 'react'
import { FiCopy, FiCheck, FiMail, FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import Node from './Node.jsx'
import Reveal from './Reveal.jsx'
import SocialLinks from './SocialLinks.jsx'
import logoIcon from '../assets/logo-icon.png'

const EMAIL = 'hello@satsolution.tech'
const NAME_MAX = 60
const COMPANY_MAX = 100
// letters, spaces, apostrophes, hyphens, and periods only (e.g. "Anne-Marie", "O'Brien", "J. Khan")
const NAME_PATTERN = /^[A-Za-z][A-Za-z\s'.-]*$/

// Get a free access key at https://web3forms.com (verify it with hello@satsolution.tech
// so submissions land in that inbox), then paste it below. Until you do, the form
// falls back to opening the visitor's own email app instead of sending automatically.
const WEB3FORMS_ACCESS_KEY = '168cfcc3-9bed-4983-a44d-cf58574b5791'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', details: '' })
  const [fieldErrors, setFieldErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [sentName, setSentName] = useState('')
  const [sentEmail, setSentEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setFieldErrors((prev) => (prev[field] ? { ...prev, [field]: '' } : prev))
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable — the mailto link below still works
    }
  }

  const validate = () => {
    const errors = {}
    const name = form.name.trim()
    const email = form.email.trim()

    if (!name) {
      errors.name = 'Please enter your name.'
    } else if (!NAME_PATTERN.test(name)) {
      errors.name = 'Name should only contain letters (no numbers or special characters).'
    } else if (name.length > NAME_MAX) {
      errors.name = `Name must be ${NAME_MAX} characters or fewer.`
    }

    if (!email) {
      errors.email = 'Please enter your work email.'
    }

    if (form.company.trim().length > COMPANY_MAX) {
      errors.company = `Company name must be ${COMPANY_MAX} characters or fewer.`
    }

    return errors
  }

  const sendViaMailto = () => {
    const subject = `New project inquiry from ${form.name}`
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company.trim() ? `Company: ${form.company}` : null,
      '',
      'Project details:',
      form.details.trim() || '(not provided)',
    ].filter((line) => line !== null)

    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join('\n')
    )}`
    window.location.href = mailtoUrl
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')

    const errors = validate()
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    // No access key configured yet — fall back to the visitor's own email app.
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === 'REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY') {
      console.warn(
        '[Contact form] WEB3FORMS_ACCESS_KEY is not set — falling back to mailto. ' +
          'Add your key in src/components/Contact.jsx to send email automatically.'
      )
      sendViaMailto()
      setSubmitError('')
      setSentName(form.name)
      setSentEmail(form.email)
      setSent(true)
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New project inquiry from ${form.name}`,
          from_name: 'S.A.T Solution website',
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.details || '(not provided)',
        }),
      })
      const data = await res.json()

      if (data.success) {
        setSentName(form.name)
        setSentEmail(form.email)
        setSent(true)
      } else {
        // Web3Forms responded, but rejected the submission — show its real reason.
        console.error('[Contact form] Web3Forms rejected the submission:', data)
        setSubmitError(`Couldn't send automatically: ${data.message || 'Web3Forms rejected the request.'} We've opened your email app instead — just hit Send there.`)
        sendViaMailto()
        setSentName(form.name)
        setSentEmail(form.email)
        setSent(true)
      }
    } catch (err) {
      // Network/CORS/other issue — log the real cause and still get the message to us via mailto.
      console.error('[Contact form] Request to Web3Forms failed:', err)
      setSubmitError(`Couldn't send automatically (${err.message || 'network error'}). We've opened your email app instead — just hit Send there.`)
      sendViaMailto()
      setSentName(form.name)
      setSentEmail(form.email)
      setSent(true)
    } finally {
      setSubmitting(false)
    }
  }

  const sendAnother = () => {
    setForm({ name: '', email: '', company: '', details: '' })
    setFieldErrors({})
    setSubmitError('')
    setSentEmail('')
    setSent(false)
  }

  return (
    <section id="contact" className="contact-section py-24 md:py-32 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-24 w-[520px] h-[520px] rounded-full bg-blue-600/[0.10] blur-3xl" />
        <div className="absolute -bottom-56 -right-20 w-[620px] h-[620px] rounded-full bg-violet-600/[0.08] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.25] contact-grid" />
      </div>
      <div className="max-w-content mx-auto section-pad relative">
        <div className="contact-card rounded-[30px] border border-white/10 bg-gradient-to-br from-[#10131a] via-[#0b0e14] to-[#090b10] overflow-hidden shadow-[0_30px_100px_-50px_rgba(37,99,235,.55)]">
          <div className="relative grid lg:grid-cols-[.9fr_1.1fr] gap-0">
            <Reveal className="p-7 sm:p-10 md:p-14 lg:p-16">
              <div className="flex items-center gap-2 mb-5">
                <Node className="text-blue-300" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-blue-300">Get in touch</span>
              </div>
              <h2 className="font-display font-semibold text-4xl sm:text-5xl tracking-[-.035em] leading-[1.02]">
                Have a project in mind?<br />
                <span className="text-white/45">Let’s build it.</span>
              </h2>
              <p className="mt-6 max-w-md text-white/50 leading-7">
                Tell us what you’re trying to build, improve or automate. We’ll help you map the next practical step — without unnecessary complexity.
              </p>

              <div className="mt-9 grid sm:grid-cols-2 gap-3 max-w-lg">
                {['Free initial consultation', 'Custom solution roadmap', 'Clear project scope', 'Human support'].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white/65 flex items-center gap-2.5">
                    <FiCheck size={14} className="text-blue-300 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-sm font-medium text-white/75 hover:text-white transition-colors">
                  <FiMail size={16} className="text-blue-300" /> {EMAIL}
                </a>
                <button onClick={copyEmail} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-white/60 hover:text-white hover:border-white/20 transition-colors">
                  {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
                  {copied ? 'Copied' : 'Copy email'}
                </button>
              </div>

              <div className="mt-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3">Follow S.A.T Solution</p>
                <SocialLinks variant="dark" />
              </div>

              <img src={logoIcon} alt="" aria-hidden="true" width="320" height="345" className="contact-logo-mark absolute -left-16 -bottom-20 w-72 h-72 object-contain opacity-[0.035] pointer-events-none" />
            </Reveal>

            <Reveal delay={120} className="border-t lg:border-t-0 lg:border-l border-white/10 bg-black/20 p-5 sm:p-8 md:p-10 lg:p-12">
              <div className="rounded-[24px] border border-white/10 bg-[#0b0e14]/90 p-6 sm:p-8 shadow-[0_25px_70px_-45px_rgba(0,0,0,.9)]">
                {sent ? (
                  <div className="flex flex-col items-center text-center py-12 sm:py-16">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center animate-[rise_0.5s_cubic-bezier(0.16,1,0.3,1)_both]">
                      <FiCheckCircle size={31} className="text-blue-300" />
                    </div>
                    <h3 className="mt-6 font-display font-semibold text-2xl">Thanks{sentName ? `, ${sentName}` : ''}!</h3>
                    <p className="mt-3 text-sm text-white/50 leading-6 max-w-sm">
                      {submitError || `We’ve received your message and will get back to you at ${sentEmail || 'your email'} soon.`}
                    </p>
                    <button onClick={sendAnother} className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/[.05] transition-colors">
                      Send another message <FiArrowRight size={15} />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-blue-300">Start a conversation</span>
                        <h3 className="mt-3 font-display font-semibold text-2xl sm:text-3xl tracking-tight">Get your free strategy session</h3>
                        <p className="mt-2 text-sm text-white/40 leading-6">Share the basics. We’ll take it from there.</p>
                      </div>
                      <div className="hidden sm:flex w-10 h-10 rounded-xl border border-white/10 bg-white/[.03] items-center justify-center text-blue-300"><FiArrowRight /></div>
                    </div>

                    <div className="mt-7 grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-[10px] font-mono uppercase tracking-[0.15em] text-white/40 mb-2">Full name *</label>
                        <input id="name" type="text" required maxLength={NAME_MAX} value={form.name} onChange={update('name')} placeholder="John Smith" aria-invalid={Boolean(fieldErrors.name)} className={`contact-input ${fieldErrors.name ? 'border-red-400/70' : ''}`} />
                        {fieldErrors.name && <p className="mt-1.5 text-xs text-red-300">{fieldErrors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-[10px] font-mono uppercase tracking-[0.15em] text-white/40 mb-2">Work email *</label>
                        <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder="john@company.com" aria-invalid={Boolean(fieldErrors.email)} className={`contact-input ${fieldErrors.email ? 'border-red-400/70' : ''}`} />
                        {fieldErrors.email && <p className="mt-1.5 text-xs text-red-300">{fieldErrors.email}</p>}
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-[10px] font-mono uppercase tracking-[0.15em] text-white/40 mb-2">Company</label>
                        <input id="company" type="text" maxLength={COMPANY_MAX} value={form.company} onChange={update('company')} placeholder="Your company" aria-invalid={Boolean(fieldErrors.company)} className={`contact-input ${fieldErrors.company ? 'border-red-400/70' : ''}`} />
                        {fieldErrors.company && <p className="mt-1.5 text-xs text-red-300">{fieldErrors.company}</p>}
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="details" className="block text-[10px] font-mono uppercase tracking-[0.15em] text-white/40 mb-2">Project details</label>
                        <textarea id="details" rows={5} value={form.details} onChange={update('details')} placeholder="Tell us what you need, your goals, timeline, or anything else that helps." className="contact-input resize-none" />
                      </div>
                    </div>

                    <button type="submit" disabled={submitting} className="group mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(59,130,246,.95)] hover:bg-blue-400 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none">
                      {submitting ? 'Sending…' : 'Schedule free consultation'}
                      {!submitting && <FiArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
                    </button>
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-white/35">
                      {['No commitment required', 'Custom scope', 'Human follow-up'].map((item) => <span key={item} className="inline-flex items-center gap-1.5"><FiCheck size={12} className="text-blue-300" />{item}</span>)}
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
