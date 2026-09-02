import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiGlobe, FiSmartphone, FiCloud, FiZap, FiLayers, FiCheck } from 'react-icons/fi'
import Node from './Node.jsx'
import Reveal from './Reveal.jsx'
import { packageCategories } from '../packagesData.js'

const icons = {
  globe: FiGlobe,
  phone: FiSmartphone,
  cloud: FiCloud,
  zap: FiZap,
  layers: FiLayers,
}

export default function Packages() {
  const [activeId, setActiveId] = useState(packageCategories[0].id)
  const active = packageCategories.find((c) => c.id === activeId)

  return (
    <section id="packages" className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-content mx-auto section-pad">
        <Reveal>
          <div className="flex items-center gap-2 mb-4">
            <Node className="text-circuit" />
            <span className="eyebrow">Packages</span>
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight max-w-xl">
            Choose your perfect package.
          </h2>
          <p className="mt-4 text-white/45 max-w-lg leading-relaxed">
            Flexible packages designed to match your needs and budget — starting points, not
            fixed boxes. Every project can be scoped further once we talk.
          </p>
        </Reveal>

        {/* category tabs */}
        <Reveal delay={100} className="mt-10 flex flex-wrap gap-2.5">
          {packageCategories.map((cat) => {
            const Icon = icons[cat.icon]
            const isActive = cat.id === activeId
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-[#07090d] border-ink scale-[1.03]'
                    : 'bg-[#0b0e13] text-white/45 border-white/10 hover:text-white hover:border-white/20 hover:-translate-y-0.5'
                }`}
              >
                <Icon size={16} className={isActive ? 'animate-nodePulse' : ''} />
                {cat.label}
              </button>
            )
          })}
        </Reveal>

        {/* tiers — remounts (and re-animates) whenever the category changes */}
        <div key={activeId} className="mt-12 grid md:grid-cols-3 gap-6">
          {active.tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-8 border animate-rise transition-all duration-300 hover:-translate-y-1 ${
                tier.popular
                  ? 'border-circuit bg-circuit/[0.04] shadow-[0_0_0_1px_rgba(22,101,216,0.15)] hover:shadow-[0_20px_36px_-18px_rgba(22,101,216,0.35)]'
                  : 'border-white/10 bg-[#0b0e13] hover:shadow-[0_16px_32px_-16px_rgba(10,11,13,0.18)]'
              }`}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-circuit text-white text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="font-display font-semibold text-xl">{tier.name}</h3>
              <p className="mt-1.5 text-sm text-white/45">{tier.tagline}</p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className={`font-display font-semibold text-3xl ${tier.price === "Let's Talk" ? 'text-circuit' : 'text-white'}`}>
                  {tier.price}
                </span>
                {tier.priceNote && <span className="text-sm text-white/45">{tier.priceNote}</span>}
              </div>

              <ul className="mt-7 space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                    <FiCheck size={16} className="text-circuit mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 text-sm font-medium px-6 py-3.5 rounded-full transition-all hover:scale-[1.03] active:scale-95 ${
                  tier.popular
                    ? 'bg-circuit text-white hover:bg-white hover:text-[#07090d]'
                    : 'bg-white text-[#07090d] hover:bg-circuit'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-white/45 font-mono">
          Prices are starting estimates — final scope and cost are confirmed after a quick
          consultation.
        </p>
      </div>
    </section>
  )
}
