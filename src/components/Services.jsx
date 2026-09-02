import Node from './Node.jsx'
import Reveal from './Reveal.jsx'
import { serviceIcons } from './ServiceIcons.jsx'
import { Link } from 'react-router-dom'
import { techServices, creativeServices } from '../data.js'

function Card({ item, delay }) {
  const Icon = serviceIcons[item.icon]
  const content = (
    <>
      <svg className="absolute -top-2 -right-2 w-16 h-16 text-circuit opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 60 60" aria-hidden="true">
        <path
          d="M58 2 L58 22 L38 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset="1"
          className="group-hover:[animation:draw_0.6s_ease-out_forwards]"
        />
      </svg>
      <div className="relative w-11 h-11 rounded-xl bg-circuit/10 flex items-center justify-center text-circuit transition-all duration-300 group-hover:bg-white group-hover:text-[#07090d] group-hover:scale-110 group-hover:rotate-6">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="mt-6 font-display font-semibold text-lg text-white">{item.title}</h3>
      <p className="mt-2.5 text-sm text-white/45 leading-relaxed">{item.desc}</p>
      {item.slug && <span className="mt-5 inline-block text-xs font-mono text-white/60">Explore service →</span>}
    </>
  )

  return (
    <Reveal delay={delay} className="h-full">
      {item.slug ? (
        <Link
          to={`/services/${item.slug}`}
          className="group relative block h-full bg-[#0b0e13] border border-white/10 rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(10,11,13,0.18)]"
        >
          {content}
        </Link>
      ) : (
        <div className="group relative h-full bg-[#0b0e13] border border-white/10 rounded-2xl p-7 overflow-hidden">
          {content}
        </div>
      )}
    </Reveal>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-content mx-auto section-pad">
        <Reveal>
          <div className="flex items-center gap-2 mb-4">
            <Node className="text-circuit" />
            <span className="eyebrow">What We Do</span>
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight max-w-xl">
            Software and IT services built around how your business actually runs.
          </h2>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-white border-b border-white/10 pb-3 mb-8">
              Technology &amp; IT
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techServices.map((s, i) => (
              <Card key={s.title} item={s} delay={i * 70} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-white border-b border-white/10 pb-3 mb-8">
              Creative &amp; Digital
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {creativeServices.map((s, i) => (
              <Card key={s.title} item={s} delay={i * 70} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
