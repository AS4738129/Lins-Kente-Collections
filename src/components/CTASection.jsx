import { Link } from 'react-router-dom'
import { getWhatsAppLink } from './WhatsAppButton.jsx'
import { images } from '../assets/images/index.js'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-cream-dark">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            Find a Kente Style That Speaks to You
          </h2>
          <p className="mt-4 max-w-lg text-ink/70">
            Browse our collection online, or come see the fabrics in person at our shop in
            Tanoso, Techiman. We would love to help you find the right piece.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              to="/collections"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink-light"
            >
              Explore Our Collection
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-forest/90"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src={images.fabricFoldedStack}
            alt="Folded stacks of striped Kente cloth in mixed colours"
            className="aspect-square rounded-2xl object-cover"
          />
          <img
            src={images.dressNavyOrange}
            alt="Navy and orange striped Kente dress"
            className="mt-6 aspect-square rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
