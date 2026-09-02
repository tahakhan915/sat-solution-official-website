import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import Reveal from './Reveal.jsx'

const faqs = [
  { q: 'What services does S.A.T Solution provide?', a: 'We build custom software, websites, mobile applications, cloud solutions, IT systems and business automation tailored to each project.' },
  { q: 'How does the project process work?', a: 'We start by understanding your goals, then define the scope, plan the solution, design the experience, build and test it, and finally help with launch and ongoing improvements.' },
  { q: 'How much does a project cost?', a: 'Every project is scoped around its requirements, complexity and timeline. After an initial conversation, we can recommend a practical scope and provide a tailored estimate.' },
  { q: 'How long does it take to build a website or software?', a: 'Timelines vary by scope. A focused website can move quickly, while custom software and larger systems take longer. We provide a clear delivery plan before development begins.' },
  { q: 'Can you work with an existing website or system?', a: 'Yes. We can improve, redesign, integrate with, maintain or extend existing digital products when the current technology is suitable for the job.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section-dark py-24 md:py-32 bg-[#0a0d12]">
      <div className="max-w-[1000px] mx-auto section-pad">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.04]">Questions, <span className="text-white/45">answered clearly.</span></h2>
            <p className="mt-5 text-white/45 text-base sm:text-lg leading-7">A few of the questions we hear before a project begins.</p>
          </div>
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 45}>
                <div className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'border-blue-400/25 bg-blue-500/[.045]' : 'border-white/10 bg-white/[.025] hover:border-white/15'}`}>
                  <button type="button" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="w-full flex items-center justify-between gap-5 text-left px-5 sm:px-7 py-5 sm:py-6">
                    <span className="font-display text-base sm:text-lg font-semibold text-white">{item.q}</span>
                    <span className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition ${isOpen ? 'border-blue-400/30 bg-blue-500/10 text-blue-300' : 'border-white/10 text-white/45'}`}>{isOpen ? <FiMinus size={16}/> : <FiPlus size={16}/>}</span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden"><p className="px-5 sm:px-7 pb-6 text-sm leading-7 text-white/45 max-w-3xl">{item.a}</p></div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
