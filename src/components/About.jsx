import { Link } from 'react-router-dom'
import Node from './Node.jsx'
import Reveal from './Reveal.jsx'
import logoFull from '../assets/logo-full.png'

const left = ['Custom Software Development', 'IT Strategy & Consulting', 'Video Editing & Animation', 'Business Automation']
const right = ['Cloud Infrastructure', 'Digital Transformation', 'Social Media Marketing', 'Digital Solutions']

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-white/10 bg-[#0a0d12]">
      <div className="max-w-content mx-auto section-pad grid lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <div className="flex items-center gap-2 mb-4">
            <Node className="text-circuit" />
            <span className="eyebrow">About Us</span>
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight">
            Who We Are
          </h2>

          <p className="mt-6 text-white/45 leading-relaxed">
            <span className="text-white font-medium">S.A.T Solution</span> is a technology and
            digital solutions company focused on helping businesses transform ideas into
            reliable, scalable, and impactful digital experiences.
          </p>
          <p className="mt-4 text-white/45 leading-relaxed">
            We work across software development, IT consulting, cloud infrastructure, digital
            transformation, creative content production, social media marketing, and business
            automation — giving clients a single, trusted partner for their technology and
            digital needs.
          </p>
          <p className="mt-4 text-white/45 leading-relaxed">
            Our approach is built around understanding your business deeply, then designing
            and building solutions that actually work for your goals, workflows, and customers.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-white text-[#07090d] text-sm font-medium px-6 py-3.5 rounded-full transition-all hover:bg-circuit hover:scale-[1.03] active:scale-95"
          >
            Work With Us
          </Link>
        </Reveal>

        <Reveal delay={140} className="bg-[#0b0e13] border border-white/10 rounded-2xl p-8 transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgba(10,11,13,0.18)]">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <img src={logoFull} alt="S.A.T Solution — IT Services & Consulting" width="900" height="389" className="h-14 w-auto object-contain" />

            <div className="bg-white text-[#07090d] rounded-xl px-4 py-3 max-w-[200px] transition-transform duration-300 hover:-translate-y-0.5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-circuit/80">Core Mission</p>
              <p className="text-xs mt-1 leading-snug">Ideas → reliable digital experiences</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-8">
            {[...left, ...right].map((item, i) => (
              <Reveal key={item} delay={200 + i * 40} as="div" className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-circuit shrink-0" />
                <span className="text-sm text-white/80">{item}</span>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
