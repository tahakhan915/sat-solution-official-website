import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <>
      <Seo path="/404" />
      <section className="pt-40 pb-32 min-h-[60vh] flex items-center">
        <div className="max-w-content mx-auto section-pad text-center w-full">
          <p className="eyebrow justify-center flex">404</p>
          <h1 className="mt-4 font-display font-semibold text-3xl sm:text-4xl tracking-tight">
            Page not found
          </h1>
          <p className="mt-4 text-white/45">The page you're looking for doesn't exist or has moved.</p>
          <Link
            to="/"
            className="mt-9 inline-flex items-center gap-2 bg-ink text-white text-sm font-medium px-6 py-3.5 rounded-full transition-all hover:bg-circuit hover:scale-[1.03] active:scale-95"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
