import Layout from '../components/Layout.jsx'
import PageHero from '../components/PageHero.jsx'
import ContactForm from '../components/ContactForm.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { images } from '../assets/images/index.js'

export default function Contact() {
  return (
    <Layout
      title="Contact Us | Lins Kente Collections"
      description="Get in touch with Lins Kente Collections in Tanoso, Techiman, Ghana — call, WhatsApp, or send us a message."
    >
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk Kente"
        description="Reach out about a style you've seen, or come visit us in Tanoso, Techiman."
      />

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={images.mensSmockNavyRed}
                alt="Model wearing a navy smock with red and gold stripes at Lins Kente Collections"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-sm font-semibold text-rust">Location</dt>
                <dd className="mt-1 text-lg text-ink">Tanoso, Techiman, Ghana</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-rust">Phone</dt>
                <dd className="mt-1 text-lg text-ink">
                  <a href="tel:+233241868025" className="link-underline">
                    +233 24 186 8025
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppButton />
              <a
                href="tel:+233241868025"
                className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                Call Us
              </a>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-ink/60">
              A map isn&rsquo;t shown here since we haven&rsquo;t confirmed exact GPS
              coordinates yet &mdash; call or WhatsApp us and we&rsquo;ll help you find the shop
              in Tanoso, Techiman.
            </p>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-cream-dark/40 p-6 sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-ink">Send Us a Message</h2>
            <p className="mt-2 text-sm text-ink/60">
              We&rsquo;d love to hear what you&rsquo;re looking for.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
