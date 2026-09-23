import { Link } from 'react-router-dom'
import { images } from '../assets/images/index.js'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-20 lg:pt-20">
        <div className="order-2 lg:order-1">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-rust">
            Tanoso, Techiman &middot; Ghana
          </p>
          <h1 className="mt-4 text-balance font-display text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-[3.4rem]">
            Discover the Beauty of Authentic Kente
          </h1>
          <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-ink/75">
            Explore beautiful Kente styles and quality fabrics for every occasion at Lins Kente
            Collections in Tanoso, Techiman. Come take a look &mdash; the craftsmanship speaks for itself.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/collections"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink-light"
            >
              Explore Our Collection
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-ink/25 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-gold/40 sm:-inset-4" />
            <img
              src={images.mensSmockBlue}
              alt="Model wearing a hand-crafted royal blue Kente smock with beaded collar at Lins Kente Collections"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl shadow-ink/10"
            />
            <img
              src={images.fabricRollsRedGold}
              alt="Rolled Kente fabric in red, gold and white on display in the shop"
              className="absolute -bottom-8 -left-6 hidden aspect-square w-32 rounded-2xl border-4 border-cream object-cover shadow-lg sm:block sm:w-40"
            />
          </div>
        </div>
      </div>
      <div className="kente-band" />
    </section>
  )
}
