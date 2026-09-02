import { Link, useLocation } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

export default function Breadcrumbs({ items = [] }) {
  const location = useLocation()
  const crumbs = [{ label: 'Home', to: '/' }, ...items]
  return (
    <nav aria-label="Breadcrumb" className="pt-28 sm:pt-32 max-w-content mx-auto section-pad">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/35">
        {crumbs.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
            {i > 0 && <FiChevronRight size={13} aria-hidden="true" />}
            {i === crumbs.length - 1 ? <span className="text-white/55">{item.label}</span> : <Link to={item.to || location.pathname} className="hover:text-white transition-colors">{item.label}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
