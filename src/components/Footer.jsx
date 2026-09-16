import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram } from 'lucide-react'
import { profile, navLinks } from '../data/portfolioData'
import XIcon from './icons/XIcon'

const socialLinks = [
  { href: profile.socials.github, label: 'GitHub', Icon: Github },
  { href: profile.socials.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: profile.socials.facebook, label: 'Facebook', Icon: Facebook },
  { href: profile.socials.x, label: 'X (Twitter)', Icon: XIcon },
  { href: profile.socials.instagram, label: 'Instagram', Icon: Instagram },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-line">
      <div className="container-1420 py-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        {/* Brand */}
        <div>
          <a href="#home" className="inline-flex items-center gap-1">
            <span className="font-mono text-gold text-xl">{'{'}</span>
            <span className="font-display font-bold text-lg text-paper">NS</span>
            <span className="font-mono text-gold text-xl">{'}'}</span>
          </a>
          <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
            {profile.role} building with React and Tailwind CSS, currently learning the backend
            half of the stack.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-ink-line flex items-center justify-center text-muted hover:text-gold hover:border-gold transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-medium text-paper">Quick links</h4>
          <ul className="mt-5 space-y-3">
            {navLinks
              .filter((link) => link.href.startsWith('#') && link.href !== '#')
              .map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/* Get in touch */}
        <div>
          <h4 className="text-sm font-medium text-paper">Get in touch</h4>
          <ul className="mt-5 space-y-3">
            <li>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2.5 text-sm text-muted hover:text-gold transition-colors">
                <Mail size={15} className="text-teal shrink-0" /> {profile.email}
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2.5 text-sm text-muted hover:text-gold transition-colors">
                <Phone size={15} className="text-teal shrink-0" /> {profile.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-muted">
              <MapPin size={15} className="text-teal shrink-0" /> {profile.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="container-1420 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="font-mono text-xs">Built with React &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
