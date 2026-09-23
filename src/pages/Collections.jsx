import Layout from '../components/Layout.jsx'
import PageHero from '../components/PageHero.jsx'
import GalleryLightbox from '../components/GalleryLightbox.jsx'
import CTASection from '../components/CTASection.jsx'
import { galleryItems } from '../assets/images/index.js'

const collectionItems = galleryItems.filter((item) => item.category !== 'Shop')

export default function Collections() {
  return (
    <Layout
      title="Our Collections | Lins Kente Collections"
      description="Browse women's and men's Kente styles and authentic Kente fabrics from Lins Kente Collections in Tanoso, Techiman."
    >
      <PageHero
        eyebrow="Our Collections"
        title="Explore Our Collection"
        description="Women's styles, men's styles, and authentic fabrics — tap any image for a closer look, and reach out about any piece that catches your eye."
      />

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <GalleryLightbox items={collectionItems} />
      </section>

      <CTASection />
    </Layout>
  )
}
