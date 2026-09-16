import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, ArrowRight } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sent

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire this up to a real service (Formspree, EmailJS, or your own
    // backend once you finish learning Express + MongoDB) to actually send
    // the message somewhere.
    setStatus('sent')
  }

  return (
    <section id="contact" className="py-24 border-t border-ink-line bg-ink-soft/40">
      <div className="container-1420 grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
        <div>
          <p className="text-teal font-mono text-sm mb-4">Contact</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-paper leading-tight">
            Let&apos;s work together.
          </h2>
          <p className="mt-5 text-muted leading-relaxed max-w-sm">
            Have a project in mind or just want to say hi? My inbox is open.
          </p>

          <div className="mt-9 space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-paper hover:text-gold transition-colors">
              <Mail size={17} className="text-teal" /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-sm text-paper hover:text-gold transition-colors">
              <Phone size={17} className="text-teal" /> {profile.phone}
            </a>
            <div className="flex items-center gap-3 text-sm text-paper">
              <MapPin size={17} className="text-teal" /> {profile.location}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a href={profile.socials.github} className="w-10 h-10 rounded-full border border-ink-line flex items-center justify-center text-muted hover:text-gold hover:border-gold transition-colors">
              <Github size={17} />
            </a>
            <a href={profile.socials.linkedin} className="w-10 h-10 rounded-full border border-ink-line flex items-center justify-center text-muted hover:text-gold hover:border-gold transition-colors">
              <Linkedin size={17} />
            </a>
            <a href={profile.socials.facebook} className="w-10 h-10 rounded-full border border-ink-line flex items-center justify-center text-muted hover:text-gold hover:border-gold transition-colors">
              <Facebook size={17} />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-ink-line bg-ink-soft p-8 sm:p-10">
          <p className="text-gold font-mono text-xs tracking-wide">Briefing</p>
          <h3 className="mt-3 font-display font-bold text-2xl sm:text-3xl text-paper">
            Send a short brief.
          </h3>
          <hr className="mt-6 border-ink-line" />

          <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-6">
            <Field id="firstName" label="First name" required placeholder="Anna" />
            <Field id="lastName" label="Last name" required placeholder="Smith" />

            <div className="sm:col-span-2">
              <Field id="email" type="email" label="Email" required placeholder="anna@company.com" />
            </div>

            <Field id="company" label="Company" placeholder="Studio Inc." />
            <Field id="website" label="Website" placeholder="https://..." />

            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-paper">
                Message <span className="text-muted font-normal">(optional)</span>
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Idea, industry, timeline — what I should know."
                className="mt-2 w-full rounded-lg bg-ink border border-ink-line px-4 py-3 text-sm text-paper placeholder:text-muted/60 focus:outline-none focus:border-gold resize-none"
              />
            </div>
          </div>

          <label htmlFor="consent" className="mt-7 flex items-start gap-3 text-sm text-muted cursor-pointer">
            <input
              id="consent"
              type="checkbox"
              required
              className="mt-0.5 w-4 h-4 rounded border-ink-line bg-ink accent-gold"
            />
            I consent to the processing of my data according to the privacy policy.
          </label>

          <button
            type="submit"
            className="mt-8 mx-auto flex items-center gap-2 text-sm font-medium text-muted hover:text-gold transition-colors"
          >
            Send request <ArrowRight size={16} />
          </button>

          {status === 'sent' && (
            <p className="mt-5 text-sm text-teal text-center">
              Thanks! This form isn&apos;t connected to an email service yet — see the comment in
              Contact.jsx to wire it up.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function Field({ id, label, type = 'text', required = false, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-paper">
        {label}{' '}
        {required ? (
          <span className="text-red-400">*</span>
        ) : (
          <span className="text-muted font-normal">(optional)</span>
        )}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg bg-ink border border-ink-line px-4 py-2.5 text-sm text-paper placeholder:text-muted/60 focus:outline-none focus:border-gold"
      />
    </div>
  )
}
