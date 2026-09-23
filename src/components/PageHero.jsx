export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="border-b border-ink/10 bg-cream-dark/60">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-20">
        {eyebrow && (
          <p className="font-body text-sm font-medium text-rust">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-balance font-display text-4xl font-semibold text-ink sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-relaxed text-ink/70 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
