import { Link } from 'react-router-dom'
import { images } from '../assets/images/index.js'

const CATEGORIES = [
  {
    name: "Women's Kente Styles",
    image: images.dressBlackOrange,
    alt: 'Black Kente dress with an orange bird motif on a mannequin',
  },
  {
    name: "Men's Kente Styles",
    image: images.mensSmockNavyRed,
    alt: 'Model wearing a navy smock with red and gold stripes',
  },
  {
    name: 'Authentic Kente Fabrics',
    image: images.fabricRollsOrangeGreen,
    alt: 'Rolled Kente fabric in orange, green and deep red patterns',
  },
  {
    name: 'Occasion Wear',
    image: images.dressRedBlack,
    alt: 'Red and black striped Kente dress with beaded neckline',
  },
]

export default function FeaturedCollections() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Featured Collections
          </h2>
          <p className="mt-3 max-w-xl text-ink/70">
            A glimpse of the styles and fabrics waiting for you in-store.
          </p>
        </div>
        <Link to="/collections" className="link-underline font-semibold text-rust">
          View all collections &rarr;
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.name}
            to="/collections"
            className="group relative block overflow-hidden rounded-2xl"
          >
            <img
              src={cat.image}
              alt={cat.alt}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0" />
            <span className="absolute bottom-3 left-3 right-3 font-display text-base font-medium text-cream sm:text-lg">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
