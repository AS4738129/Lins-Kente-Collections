import { Link } from 'react-router-dom'
import Layout from '../components/Layout.jsx'

export default function NotFound() {
  return (
    <Layout title="Page Not Found | Lins Kente Collections">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-5 py-28 text-center sm:px-8">
        <p className="font-display text-6xl text-gold">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mt-3 text-ink/70">
          The page you&rsquo;re looking for may have moved. Let&rsquo;s get you back to
          exploring the collection.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream hover:bg-ink-light"
        >
          Back to Home
        </Link>
      </div>
    </Layout>
  )
}
