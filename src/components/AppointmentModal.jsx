import { useEffect, useState } from 'react'
import { FiArrowRight, FiCalendar, FiX, FiCheck } from 'react-icons/fi'

const EMAIL = 'hello@satsolution.tech'

// Same Web3Forms key used by the main contact form, so appointment requests
// land in the same inbox automatically instead of relying on mailto.
const WEB3FORMS_ACCESS_KEY = '168cfcc3-9bed-4983-a44d-cf58574b5791'

export default function AppointmentModal({ open, onClose }) {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', details: '' })

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const sendViaMailto = () => {
    const subject = `Appointment request from ${form.name}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Preferred date: ${form.date}`,
      `Preferred time: ${form.time}`,
      '',
      'Project details:',
      form.details || '(not provided)',
    ].join('\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const submit = async (e) => {
    e.preventDefault()
    setSubmitError('')

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === 'REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY') {
      console.warn('[Appointment form] WEB3FORMS_ACCESS_KEY is not set — falling back to mailto.')
      sendViaMailto()
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
          subject: `Appointment request from ${form.name}`,
          from_name: 'S.A.T Solution website',
          name: form.name,
          email: form.email,
          preferred_date: form.date,
          preferred_time: form.time,
          message: form.details || '(not provided)',
        }),
      })
      const data = await res.json()

      if (data.success) {
        setSent(true)
      } else {
        console.error('[Appointment form] Web3Forms rejected the submission:', data)
        setSubmitError(`Couldn't send automatically: ${data.message || 'Web3Forms rejected the request.'} We've opened your email app instead — just hit Send there.`)
        sendViaMailto()
        setSent(true)
      }
    } catch (err) {
      console.error('[Appointment form] Request to Web3Forms failed:', err)
      setSubmitError(`Couldn't send automatically (${err.message || 'network error'}). We've opened your email app instead — just hit Send there.`)
      sendViaMailto()
      setSent(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="appointment-title" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto overflow-x-hidden rounded-[28px] border border-white/10 bg-[#0a0d12] shadow-[0_35px_100px_-35px_rgba(37,99,235,.55)]">
        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
        <div className="relative p-6 sm:p-8 md:p-10">
          <div className="flex items-start justify-between gap-5">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.18em] text-blue-300"><FiCalendar /> Book an appointment</span>
              <h2 id="appointment-title" className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight">Let's talk about your project.</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/45">Choose a preferred date and time. We'll use your details to arrange the next conversation.</p>
            </div>
            <button type="button" onClick={onClose} aria-label="Close appointment form" className="shrink-0 w-10 h-10 rounded-full border border-white/10 bg-white/[.03] flex items-center justify-center text-white/55 hover:text-white hover:bg-white/[.07] transition"><FiX size={19}/></button>
          </div>

          {sent ? (
            <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/[.06] p-7">
              <div className="w-11 h-11 rounded-full bg-blue-500/15 border border-blue-400/20 flex items-center justify-center text-blue-300"><FiCheck size={20}/></div>
              <h3 className="mt-5 font-display text-2xl font-semibold">Appointment request sent.</h3>
              <p className="mt-2 text-sm leading-6 text-white/45">{submitError || `We've received your appointment request and will be in touch at ${form.email || 'your email'} to confirm.`}</p>
              <button type="button" onClick={() => { setSent(false); setSubmitError(''); setForm({ name: '', email: '', date: '', time: '', details: '' }) }} className="mt-6 text-sm font-semibold text-blue-300 hover:text-blue-200">Book another appointment</button>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-8 grid sm:grid-cols-2 gap-4">
              <label className="sm:col-span-1"><span className="contact-label">Full name *</span><input required value={form.name} onChange={update('name')} className="contact-input" placeholder="John Smith" /></label>
              <label className="sm:col-span-1"><span className="contact-label">Email *</span><input required type="email" value={form.email} onChange={update('email')} className="contact-input" placeholder="john@company.com" /></label>
              <label><span className="contact-label">Preferred date *</span><input required type="date" value={form.date} onChange={update('date')} min={new Date().toISOString().split('T')[0]} className="contact-input [color-scheme:dark]" /></label>
              <label><span className="contact-label">Preferred time *</span><select required value={form.time} onChange={update('time')} className="contact-input bg-[#0d1118]"><option value="" className="bg-[#0d1118] text-white">Select a time</option><option className="bg-[#0d1118] text-white">10:00 AM</option><option className="bg-[#0d1118] text-white">11:00 AM</option><option className="bg-[#0d1118] text-white">12:00 PM</option><option className="bg-[#0d1118] text-white">2:00 PM</option><option className="bg-[#0d1118] text-white">3:00 PM</option><option className="bg-[#0d1118] text-white">4:00 PM</option><option className="bg-[#0d1118] text-white">5:00 PM</option></select></label>
              <label className="sm:col-span-2"><span className="contact-label">What would you like to discuss?</span><textarea rows={4} value={form.details} onChange={update('details')} className="contact-input resize-none" placeholder="Tell us briefly about your project, goals, or questions." /></label>
              <button type="submit" disabled={submitting} className="sm:col-span-2 group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-400 transition shadow-[0_18px_45px_-22px_rgba(59,130,246,.95)] disabled:opacity-60 disabled:pointer-events-none">{submitting ? 'Sending…' : 'Request appointment'} {!submitting && <FiArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}</button>
              <div className="sm:col-span-2 flex flex-wrap gap-5 text-[11px] text-white/35"><span className="inline-flex items-center gap-1.5"><FiCheck className="text-blue-300"/> No commitment required</span><span className="inline-flex items-center gap-1.5"><FiCheck className="text-blue-300"/> Free initial consultation</span><span className="inline-flex items-center gap-1.5"><FiCheck className="text-blue-300"/> Human follow-up</span></div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
