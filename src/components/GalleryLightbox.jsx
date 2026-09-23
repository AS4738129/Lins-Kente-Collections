import { useEffect, useMemo, useState } from 'react'
import { getWhatsAppLink } from './WhatsAppButton.jsx'

export default function GalleryLightbox({ items, showFilters = true }) {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(items.map((i) => i.category)))],
    [items]
  )
  const [active, setActive] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = useMemo(
    () => (active === 'All' ? items : items.filter((i) => i.category === active)),
    [active, items]
  )

  const openAt = (item) => {
    const idx = filtered.findIndex((i) => i.id === item.id)
    setLightboxIndex(idx)
  }
  const close = () => setLightboxIndex(null)
  const next = () => setLightboxIndex((i) => (i + 1) % filtered.length)
  const prev = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length)

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, filtered.length])

  return (
    <div>
      {showFilters && (
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? 'bg-ink text-cream'
                  : 'bg-ink/5 text-ink/70 hover:bg-ink/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="columns-2 gap-4 sm:columns-3 [column-fill:_balance]">
        {filtered.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => openAt(item)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl text-left"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-ink/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between text-cream">
            <p className="text-sm text-cream/70">
              {lightboxIndex + 1} / {filtered.length}
            </p>
            <button type="button" onClick={close} aria-label="Close" className="text-2xl leading-none">
              &times;
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-0 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 sm:left-4"
            >
              &larr;
            </button>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-h-[70vh] max-w-full rounded-lg object-contain"
            />
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-0 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 sm:right-4"
            >
              &rarr;
            </button>
          </div>

          <div className="mx-auto flex max-w-lg flex-col items-center gap-3 text-center">
            <p className="text-sm text-cream/80">{filtered[lightboxIndex].label}</p>
            <a
              href={getWhatsAppLink(
                `Hello Lins Kente Collections, I'm interested in the style shown here: ${filtered[lightboxIndex].label}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream"
            >
              Ask About This Style
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
