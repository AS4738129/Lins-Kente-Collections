const REASONS = [
  {
    title: 'Authentic Kente Styles',
    text: 'Every piece reflects genuine Kente craftsmanship, woven with the patterns and colours the tradition is known for.',
    icon: (
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    ),
  },
  {
    title: 'Quality & Attractive Designs',
    text: 'We pay close attention to fabric quality and finishing, so every style looks and feels as good as it should.',
    icon: (
      <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3z" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Styles for Every Occasion',
    text: 'From everyday wear to special celebrations, our collection covers a wide range of moments worth dressing up for.',
    icon: (
      <path d="M12 21c4-3 7-6.5 7-10.5A7 7 0 0 0 5 10.5C5 14.5 8 18 12 21z" strokeLinejoin="round" />
    ),
  },
  {
    title: 'A Welcoming Experience',
    text: 'Visit us and you will be greeted warmly and given all the time you need to find the right piece.',
    icon: (
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 20c1.5-4 5-6 8-6s6.5 2 8 6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Why Choose Lins Kente Collections?
          </h2>
          <p className="mt-3 text-cream/70">
            Rooted in Tanoso, Techiman &mdash; here is what to expect when you shop with us.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <div key={reason.title}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-9 w-9 text-gold"
                aria-hidden="true"
              >
                {reason.icon}
              </svg>
              <h3 className="mt-4 font-display text-lg font-semibold">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
