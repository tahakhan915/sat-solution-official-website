import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiStar } from 'react-icons/fi'
import Reveal from './Reveal.jsx'

// These testimonials are based on the client/review content supplied by S.A.T Solution.
export const testimonials = [
  {
    quote: 'S.A.T Solution helped us improve our online presence with a clearer, more professional digital experience. The team made the process straightforward and easy to follow.',
    name: 'Dr. Sarah Mitchell',
    role: 'Client review',
    source: 'Client',
  },
  {
    quote: 'The team was responsive, transparent and focused on what our business actually needed. We always knew what was being worked on and why.',
    name: 'Alex Kim',
    role: 'Client review',
    source: 'Client',
  },
  {
    quote: 'They helped us turn a complicated workflow into a much clearer digital experience. Communication was practical, and the result was easy for our team to use.',
    name: 'Dr. Priya Sharma',
    role: 'Client review',
    source: 'Client',
  },
]

function Stars() {
  return (
    <div className="flex items-center gap-1 text-amber-300" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => <FiStar key={i} size={16} fill="currentColor" />)}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-dark py-24 md:py-32 bg-[#080910] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full bg-blue-600/[0.07] blur-3xl pointer-events-none" />
      <div className="max-w-[1240px] mx-auto section-pad relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/[0.06] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-blue-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Testimonials
            </span>
            <h2 className="mt-7 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-.04em] leading-[1.02]">
              What our clients say
            </h2>
            <p className="mt-5 text-white/45 text-base sm:text-lg leading-7">
              A few words from businesses we’ve helped turn ideas into practical digital systems.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-3 gap-4">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 70}>
              <article className="testimonial-card group relative h-full rounded-[24px] border border-white/10 bg-[#0b0e13] p-7 sm:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:shadow-[0_25px_80px_-35px_rgba(59,130,246,.55)]">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/[0.10] blur-[1px] transition-transform duration-700 group-hover:scale-125" />
                <div className="relative flex flex-col h-full">
                  <Stars />
                  <blockquote className="mt-7 text-[15px] sm:text-base leading-7 text-white/75 italic flex-1">
                    “{item.quote}”
                  </blockquote>
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-end justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 shrink-0 rounded-full border border-blue-400/35 bg-blue-500/[0.08] flex items-center justify-center font-display font-semibold text-blue-200">
                        {item.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
                      </div>
                      <div className="min-w-0">
                        <div className="font-display font-semibold text-sm text-white truncate">{item.name}</div>
                        <div className="text-xs text-white/40 mt-1 truncate">{item.role}</div>
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-[10px] text-white/35">via {item.source}</div>
                      <div className="mt-1 flex justify-end gap-0.5 text-amber-300">
                        {Array.from({ length: 5 }).map((_, index) => <FiStar key={index} size={10} fill="currentColor" />)}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="mt-12 rounded-[22px] border border-white/10 bg-white/[0.025] px-5 py-6 sm:px-8 sm:py-7">
            <div className="flex flex-col xl:flex-row xl:items-center gap-7 xl:gap-10">
              <p className="text-sm font-medium text-white/55 xl:w-1/4">Client feedback across platforms</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8 flex-1">
                <div><div className="font-display text-2xl sm:text-3xl font-semibold">Client</div><div className="text-xs text-white/35 mt-1">Feedback</div></div>
                <div><div className="font-display text-2xl sm:text-3xl font-semibold">Real</div><div className="text-xs text-white/35 mt-1">Client voices</div></div>
                <div><div className="font-display text-2xl sm:text-3xl font-semibold">Clear</div><div className="text-xs text-white/35 mt-1">Communication</div></div>
                <div><div className="font-display text-2xl sm:text-3xl font-semibold">Built</div><div className="text-xs text-white/35 mt-1">For real business needs</div></div>
              </div>
              <Link to="/contact" className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[#080910] transition-colors">
                Work with us <FiArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
