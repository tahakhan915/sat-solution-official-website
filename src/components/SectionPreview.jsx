import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Node from './Node.jsx'
import Reveal from './Reveal.jsx'

/**
 * A short teaser block used on the Home page for each major section
 * (About, Services, Packages, Process, Portfolio). Keeps Home light and
 * scannable while linking out to the full, dedicated page for that
 * topic — avoids duplicating long content across two indexable URLs.
 */
export default function SectionPreview({
  eyebrow,
  title,
  description,
  to,
  linkLabel = 'Learn more',
  surface = false,
  children,
}) {
  return (
    <section className={`py-20 md:py-28 border-t border-white/10 ${surface ? 'bg-[#0a0d12]' : ''}`}>
      <div className="max-w-content mx-auto section-pad">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-10">
          <Reveal className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <Node className="text-circuit" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-white/45 leading-relaxed">{description}</p>
            )}
          </Reveal>

          <Reveal delay={100} className="mt-8 lg:mt-0 shrink-0">
            <Link
              to={to}
              className="group inline-flex items-center gap-2 bg-white text-[#07090d] text-sm font-medium px-6 py-3.5 rounded-full transition-all hover:bg-circuit hover:scale-[1.03] active:scale-95"
            >
              {linkLabel}
              <FiArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  )
}
