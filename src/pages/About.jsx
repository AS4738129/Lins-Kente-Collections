import Layout from '../components/Layout.jsx'
import PageHero from '../components/PageHero.jsx'
import CTASection from '../components/CTASection.jsx'
import { images } from '../assets/images/index.js'

export default function About() {
  return (
    <Layout
      title="About Us | Lins Kente Collections"
      description="Lins Kente Collections is a Kente fashion and textile business in Tanoso, Techiman, Ghana, offering authentic styles and quality fabrics."
    >
      <PageHero
        eyebrow="About Us"
        title="Welcome to Lins Kente Collections"
        description="Where beautiful Kente styles meet quality and cultural expression."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={images.mensSmockTanNavy}
              alt="Model wearing a tan and navy striped smock with beaded collar"
              className="aspect-[3/4] rounded-2xl object-cover"
            />
            <img
              src={images.fabricRollsPinkGold}
              alt="Rolled Kente fabric in pink, maroon and gold"
              className="mt-8 aspect-[3/4] rounded-2xl object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Beautiful Kente, for Every Occasion
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/75">
              <p>
                Lins Kente Collections is a Kente fashion and textile business based in Tanoso,
                Techiman, Ghana. We bring together authentic Kente fabrics and fashionable Kente
                outfits, built around quality, attractive design, and genuine cultural
                expression.
              </p>
              <p>
                Our collection covers a wide range of styles &mdash; from everyday Kente wear to
                pieces suited for special occasions and celebrations. Every visit to our shop is
                an invitation to look closely at the patterns, colours, and craftsmanship that
                make Kente so distinctive.
              </p>
              <p>
                Come, take a look at our collection. We are proud of what we offer, and we take
                just as much pride in how we welcome every customer who walks through our doors.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-ink px-6 py-10 text-center text-cream sm:px-12 sm:py-14">
          <p className="mx-auto max-w-2xl text-balance font-display text-2xl leading-snug sm:text-3xl">
            &ldquo;Hello, welcome to Lins Kente Collections. We have the finest Kente in Tanoso,
            Techiman. Please have a look around.&rdquo;
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <img
            src={images.smockTealModel}
            alt="Model wearing a teal and white striped smock outdoors"
            className="aspect-square rounded-2xl object-cover"
          />
          <img
            src={images.fabricWallStripes}
            alt="Wall of stacked striped Kente fabric rolls in many colours"
            className="aspect-square rounded-2xl object-cover"
          />
          <img
            src={images.dressBlackOrange}
            alt="Black Kente dress with an orange bird motif on a mannequin"
            className="aspect-square rounded-2xl object-cover"
          />
        </div>
      </section>

      <CTASection />
    </Layout>
  )
}
