import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Node from './Node.jsx'
import Reveal from './Reveal.jsx'
import { projects } from '../data.js'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 border-t border-white/10 bg-[#0a0d12]">
      <div className="max-w-content mx-auto section-pad">
        <Reveal>
          <div className="flex items-center gap-2 mb-4">
            <Node className="text-circuit" />
            <span className="eyebrow">Our Work</span>
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight max-w-xl">
            Live projects, shipped and running — explore the case studies.
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="h-full">
              <Link
                to={`/portfolio/${p.slug}`}
                className="group relative bg-[#0b0e13] border border-white/10 rounded-2xl p-7 flex flex-col h-full transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_18px_36px_-18px_rgba(10,11,13,0.2)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-circuit bg-circuit/10 px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                  <FiArrowUpRight
                    size={18}
                    className="text-white/45 transition-transform duration-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="mt-6 font-display font-semibold text-lg">{p.title}</h3>
                <p className="mt-2.5 text-sm text-white/45 leading-relaxed">{p.desc}</p>

                <span className="mt-6 text-xs font-mono text-white/60">View case study →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
