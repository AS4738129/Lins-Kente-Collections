import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getWhatsAppLink } from './WhatsAppButton.jsx'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/collections', label: 'Collections' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled ? 'bg-cream/95 backdrop-blur shadow-sm' : 'bg-cream'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <NavLink to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
            <span className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              Lins Kente
            </span>
            <span className="hidden font-body text-xs uppercase tracking-[0.2em] text-gold-dark sm:inline">
              Collections
            </span>
          </NavLink>

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `link-underline font-body text-[15px] font-medium ${
                    isActive ? 'text-ink' : 'text-ink/70 hover:text-ink'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-ink-light"
            >
              WhatsApp Us
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className={`h-0.5 w-6 bg-ink transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-ink transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-ink transition-transform duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </nav>
      </div>
      <div className="kente-band-thin" />

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}

function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 top-[65px] z-40 bg-cream transition-transform duration-300 md:hidden ${
        open ? 'translate-x-0' : 'translate-x-full pointer-events-none'
      }`}
    >
      <nav className="flex flex-col gap-1 px-6 py-8">
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            onClick={onClose}
            className={({ isActive }) =>
              `border-b border-ink/10 py-4 font-display text-2xl ${isActive ? 'text-rust' : 'text-ink'}`
            }
          >
            {link.label}
          </NavLink>
        ))}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-6 rounded-full bg-forest px-5 py-3 text-center text-sm font-semibold text-cream"
        >
          Chat on WhatsApp
        </a>
      </nav>
    </div>
  )
}
