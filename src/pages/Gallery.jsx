import Layout from '../components/Layout.jsx'
import PageHero from '../components/PageHero.jsx'
import GalleryLightbox from '../components/GalleryLightbox.jsx'
import { galleryItems } from '../assets/images/index.js'

export default function Gallery() {
  return (
    <Layout
      title="Gallery | Lins Kente Collections"
      description="A visual look at Kente clothing, fabrics, and the Lins Kente Collections shop in Tanoso, Techiman."
    >
      <PageHero
        eyebrow="Gallery"
        title="A Look Inside Lins Kente Collections"
        description="Fabrics, finished styles, and moments from the shop in Tanoso, Techiman."
      />

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <GalleryLightbox items={galleryItems} />
      </section>
    </Layout>
  )
}
