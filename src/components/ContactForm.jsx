import { useState } from 'react'
import { getWhatsAppLink } from './WhatsAppButton.jsx'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const waMessage = `Hello Lins Kente Collections, my name is ${form.name || '[name]'}. ${
    form.message || 'I would like to inquire about your Kente styles and collection.'
  }`

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-lg border border-ink/20 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-lg border border-ink/20 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
            placeholder="e.g. 024 XXX XXXX"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={form.message}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-lg border border-ink/20 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
            placeholder="Tell us what you're looking for..."
          />
        </div>

        {!submitted ? (
          <button
            type="submit"
            className="w-full rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink-light sm:w-auto"
          >
            Prepare My Message
          </button>
        ) : (
          <div className="rounded-xl border border-forest/30 bg-forest/5 p-5">
            <p className="text-sm text-ink/80">
              Thanks, {form.name || 'friend'}. This form isn&rsquo;t connected to an inbox yet, so
              please send your message directly using the WhatsApp button below &mdash; it will
              already be filled in with what you wrote.
            </p>
            <a
              href={getWhatsAppLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream"
            >
              Send via WhatsApp
            </a>
          </div>
        )}

        <p className="text-xs text-ink/50">
          This form currently prepares a message for WhatsApp rather than emailing us directly.
          For the fastest response, please use WhatsApp or call us.
        </p>
      </form>
    </div>
  )
}
