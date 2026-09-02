import { useEffect, useRef, useState } from 'react'
import Node from './Node.jsx'
import Reveal from './Reveal.jsx'
import { process } from '../data.js'

export default function Process() {
  const lineRef = useRef(null)
  const [lineVisible, setLineVisible] = useState(false)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-content mx-auto section-pad">
        <Reveal>
          <div className="flex items-center gap-2 mb-4">
            <Node className="text-circuit" />
            <span className="eyebrow">How We Work</span>
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight max-w-xl">
            From idea to impact, in six deliberate stages.
          </h2>
        </Reveal>

        <div ref={lineRef} className="mt-16 relative">
          {/* connecting trace line - desktop, draws in left-to-right on scroll */}
          <div className="hidden lg:block absolute top-6 left-6 right-6 h-px bg-line overflow-hidden">
            <div
              className={`h-full bg-circuit origin-left transition-transform duration-[1400ms] ease-out ${
                lineVisible ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </div>

          <div className="grid gap-x-6 gap-y-10 lg:grid-cols-6">
            {process.map((step, i) => (
              <Reveal key={step.n} delay={i * 110} className="relative">
                <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0 group">
                  <div className="relative shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full border flex items-center justify-center font-mono text-sm font-medium transition-all duration-300 group-hover:scale-110 group-hover:border-circuit ${
                        i === 0
                          ? 'bg-white text-[#07090d] border-ink'
                          : 'bg-[#0b0e13] text-white border-white/10'
                      }`}
                    >
                      {step.n}
                    </div>
                  </div>
                  <div className="lg:mt-5">
                    <h3 className="font-display font-semibold text-base">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-white/45 leading-relaxed lg:pr-2">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
