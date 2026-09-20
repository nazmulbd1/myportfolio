import { Download, ArrowDown, Facebook, Instagram, Github } from 'lucide-react'
import { profile } from '../data/portfolioData'
import XIcon from './icons/XIcon'

const socialLinks = [
  { href: profile.socials.facebook, label: 'Facebook', Icon: Facebook },
  { href: profile.socials.x, label: 'X (Twitter)', Icon: XIcon },
  { href: profile.socials.instagram, label: 'Instagram', Icon: Instagram },
  { href: profile.socials.github, label: 'GitHub', Icon: Github },
]

export default function Banner() {
  return (
    <section id="home" className="pt-[100px] pb-24 lg:pt-48 lg:pb-32">
      <div className="container-1420 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        {/* Left: text */}
        <div>
          <p className="text-teal font-mono text-sm mb-5">Frontend Developer</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-paper">
            Hi, I&apos;m {profile.name}!
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
            {profile.tagline}
          </p>
          <p className="mt-4 text-base text-muted/90 max-w-xl leading-relaxed">
            {profile.intro}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink hover:bg-gold-dim transition-colors"
            >
              <Download size={18} />
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-ink-line px-6 py-3 text-sm font-medium text-paper hover:border-gold hover:text-gold transition-colors"
            >
              View Projects
            </a>
          </div>

          <div className="mt-7 flex items-center gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-ink-line flex items-center justify-center text-muted hover:text-gold hover:border-gold transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: photo placeholder with bracket frame */}
        <div className="relative mx-auto w-full max-w-sm">
          <span className="absolute -top-6 -left-10 font-mono text-6xl text-gold/70 select-none">{'{'}</span>
          <span className="absolute -bottom-8 -right-10 font-mono text-6xl text-gold/70 select-none">{'}'}</span>
          <div className="relative aspect-[4/5] rounded-2xl bg-ink-soft border border-ink-line flex items-center justify-center overflow-hidden">
            {/*
              Replace this block with your real photo, e.g.:
              <img src="/profile.jpg" alt={profile.name}  />
            */}
            <img
              className="absolute w-full h-full object-cover"
              src="/nazmulsheikh1.webp"
              alt="Nazmul Sheikh Nahid"
              width={400}
              height={500}
              decoding="async"
              fetchpriority="high"
              loading="eager"
            />
            <span className="font-display font-bold text-7xl text-ink-line select-none">NS</span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hidden lg:flex mx-auto mt-20 w-9 h-9 rounded-full border border-ink-line items-center justify-center text-muted hover:text-gold hover:border-gold transition-colors"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={16} />
      </a>
    </section>
  )
}
