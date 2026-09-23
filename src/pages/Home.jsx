import Layout from '../components/Layout.jsx'
import Hero from '../components/Hero.jsx'
import FeaturedCollections from '../components/FeaturedCollections.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import CTASection from '../components/CTASection.jsx'

export default function Home() {
  return (
    <Layout
      title="Lins Kente Collections | Authentic Kente Styles in Tanoso, Techiman"
      description="Explore beautiful authentic Kente styles and quality fabrics at Lins Kente Collections in Tanoso, Techiman, Ghana."
    >
      <Hero />
      <FeaturedCollections />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  )
}
