import { Link } from 'react-router-dom'
import { getWhatsAppLink } from './WhatsAppButton.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-cream">
      <div className="kente-band" />
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-2xl font-semibold">Lins Kente Collections</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
              Beautiful authentic Kente styles and quality fabrics for every occasion, based in Tanoso, Techiman.
            </p>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold text-gold">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li><Link to="/" className="link-underline">Home</Link></li>
              <li><Link to="/about" className="link-underline">About</Link></li>
              <li><Link to="/collections" className="link-underline">Collections</Link></li>
              <li><Link to="/gallery" className="link-underline">Gallery</Link></li>
              <li><Link to="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold text-gold">Visit Us</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>Tanoso, Techiman, Ghana</li>
              <li>
                <a href="tel:+233241868025" className="link-underline">+233 24 186 8025</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold text-gold">Get in Touch</h4>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-cream/30 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-cream hover:text-ink"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center">
          <p>&copy; {year} Lins Kente Collections. All rights reserved.</p>
          <p>Tanoso, Techiman, Ghana</p>
        </div>
      </div>
    </footer>
  )
}
