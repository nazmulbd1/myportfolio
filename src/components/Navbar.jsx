import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { navLinks } from '../data/portfolioData'
import { useTheme } from '../hooks/useTheme'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur border-b border-ink-line' : 'bg-transparent'
      }`}
    >
      <div className="container-1420 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1 shrink-0">
          <span className="font-mono text-gold text-xl">{'{'}</span>
          <span className="font-display font-bold text-lg text-paper tracking-tight">NS</span>
          <span className="font-mono text-gold text-xl">{'}'}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted hover:text-paper transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center rounded-full bg-gold px-5 py-2 text-sm font-medium text-ink hover:bg-gold-dim transition-colors"
          >
            Contact
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark / light mode"
            className="w-9 h-9 rounded-full border border-ink-line flex items-center justify-center text-muted hover:text-gold hover:border-gold transition-colors"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark / light mode"
            className="w-9 h-9 rounded-full border border-ink-line flex items-center justify-center text-muted hover:text-gold hover:border-gold transition-colors"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            className="text-paper"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-ink-soft border-t border-ink-line">
          <div className="container-1420 flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-muted hover:text-paper border-b border-ink-line last:border-none"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ink"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
