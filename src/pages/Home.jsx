import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiArrowRight, FiCheck, FiCode, FiCloud, FiLayers, FiSmartphone, FiZap, FiGlobe } from 'react-icons/fi'
import Hero from '../components/Hero.jsx'
import Reveal from '../components/Reveal.jsx'
import Seo from '../components/Seo.jsx'
import { techServices, projects, process } from '../data.js'
import Testimonials from '../components/Testimonials.jsx'
import FAQ from '../components/FAQ.jsx'

const iconMap = { code: FiCode, globe: FiGlobe, phone: FiSmartphone, cloud: FiCloud, consulting: FiLayers, zap: FiZap }

export default function Home() {
  return (
    <div className="site-shell">
      <Seo path="/" />
      <Hero />

      <section className="section-dark py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto section-pad">
          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 items-start">
            <Reveal>
              <span className="eyebrow">The S.A.T approach</span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.02]">Technology should make your business <span className="text-white/45">simpler, faster and stronger.</span></h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg leading-8 text-white/55 max-w-2xl">We combine strategy, design and engineering to turn business problems into dependable digital products. No unnecessary complexity. No one-size-fits-all templates.</p>
              <div className="mt-8 grid sm:grid-cols-3 gap-3">
                {['Understand the problem','Design the right system','Build for the long run'].map((x,i)=><div key={x} className="card-dark p-5"><span className="font-mono text-xs text-blue-300">0{i+1}</span><p className="mt-4 text-sm text-white/75 leading-6">{x}</p></div>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-dark py-24 md:py-32 bg-[#0a0d12]">
        <div className="max-w-[1240px] mx-auto section-pad">
          <Reveal><span className="eyebrow">Primary web offer</span><h2 className="mt-4 max-w-3xl font-display text-4xl sm:text-5xl font-semibold tracking-tight">Focused pages for the problems businesses actually hire us to solve.</h2><p className="mt-5 max-w-2xl text-white/45 leading-7">Explore the core web-development paths: new websites, small-business builds, redesigns, web applications, ecommerce and ongoing maintenance.</p></Reveal>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">{[['/web-development','Web Development','Business websites and modern web experiences.'],['/small-business-web-development','Small-Business Websites','Focused websites built to explain, build trust and generate enquiries.'],['/website-redesign','Website Redesign','Improve content hierarchy, user journeys and the existing experience.'],['/web-app-development','Web Applications','Browser-based portals, tools and SaaS products.'],['/ecommerce-development','Ecommerce Development','Shopping journeys, product presentation and integrations.'],['/website-maintenance','Website Maintenance','Ongoing updates, fixes, checks and improvements.']].map(([href,title,desc],i)=><Reveal key={href} delay={i*35}><Link to={href} className="card-dark card-dark-hover p-6 flex items-center justify-between gap-5"><div><h3 className="font-display text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/40">{desc}</p></div><FiArrowUpRight className="shrink-0 text-blue-300"/></Link></Reveal>)}</div>
        </div>
      </section>

      <section className="section-dark py-24 md:py-32 bg-[#0a0d12]">
        <div className="max-w-[1240px] mx-auto section-pad">
          <Reveal>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div><span className="eyebrow">What we build</span><h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">One team. <span className="text-white/45">Multiple capabilities.</span></h2></div>
              <Link to="/services" className="text-sm text-white/60 hover:text-white inline-flex items-center gap-2">View all services <FiArrowUpRight/></Link>
            </div>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techServices.map((s,i)=>{ const Icon=iconMap[s.icon]||FiCode; return <Reveal key={s.title} delay={i*50}><Link to={`/services/${s.slug}`} className="group card-dark card-dark-hover block p-7 h-full"><div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-400/15 text-blue-300 flex items-center justify-center"><Icon size={19}/></div><div className="mt-10 flex items-end justify-between gap-4"><div><h3 className="font-display text-xl font-semibold">{s.title}</h3><p className="mt-3 text-sm leading-6 text-white/45">{s.desc}</p></div><FiArrowUpRight className="shrink-0 text-white/25 group-hover:text-blue-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition"/></div></Link></Reveal>})}
          </div>
        </div>
      </section>

      <section className="section-dark py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto section-pad">
          <Reveal><span className="eyebrow">Selected work</span><div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-6"><h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">Built for real <span className="text-white/45">use, not just screenshots.</span></h2><Link to="/portfolio" className="text-sm text-white/60 hover:text-white inline-flex items-center gap-2">View portfolio <FiArrowUpRight/></Link></div></Reveal>
          <div className="mt-12 grid lg:grid-cols-12 gap-5">
            {projects.slice(0,3).map((p,i)=><Reveal key={p.title} delay={i*70} className={i===0?'lg:col-span-7':'lg:col-span-5'}><Link to={`/case-studies/${p.slug}`} className={`group relative block overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-white/[.08] to-white/[.02] ${i===0?'min-h-[430px]':'min-h-[300px]'}`}><div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,.24),transparent_42%)]"/><div className="relative h-full min-h-[300px] p-7 sm:p-9 flex flex-col justify-between"><div className="flex items-center justify-between"><span className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-blue-200">{p.tag}</span><FiArrowUpRight className="text-white/35 group-hover:text-white transition"/></div><div><h3 className="font-display text-3xl font-semibold">{p.title}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-white/45">{p.desc}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white">Read case study <FiArrowUpRight size={15}/></span></div></div></Link></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section-dark py-24 md:py-32 bg-[#0a0d12]">
        <div className="max-w-[1240px] mx-auto section-pad">
          <div className="grid lg:grid-cols-[.75fr_1.25fr] gap-12">
            <Reveal><span className="eyebrow">How we work</span><h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">Clear process. <span className="text-white/45">Better outcomes.</span></h2><p className="mt-6 text-white/45 leading-7 max-w-md">Every engagement moves through a deliberate sequence so you always know what happens next.</p><Link to="/process" className="mt-8 inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200">See our full process <FiArrowUpRight/></Link></Reveal>
            <div className="grid sm:grid-cols-2 gap-3">{process.map((step,i)=><Reveal key={step.n} delay={i*60}><div className="card-dark p-6 h-full"><div className="font-mono text-xs text-blue-300">{step.n}</div><h3 className="mt-7 font-display text-lg font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-white/40">{step.desc}</p></div></Reveal>)}</div>
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQ />

      <section className="section-dark py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto section-pad">
          <div className="rounded-[30px] border border-blue-400/20 bg-gradient-to-br from-blue-500/[.16] via-white/[.04] to-transparent p-8 sm:p-12 md:p-16 relative overflow-hidden">
            <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative max-w-3xl"><span className="eyebrow">Ready when you are</span><h2 className="mt-4 font-display text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.02]">Have an idea? Let's turn it into something <span className="text-blue-300">real.</span></h2><p className="mt-6 text-white/50 text-lg leading-8 max-w-xl">Tell us what you are trying to build, improve or automate. We'll help you map the next practical step.</p><div className="mt-9 flex flex-wrap gap-3"><Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3.5 text-sm font-semibold hover:bg-blue-100 transition">Start a project <FiArrowRight/></Link><Link to="/packages" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.03] px-6 py-3.5 text-sm font-semibold hover:bg-white/[.08] transition">View pricing <FiArrowUpRight/></Link></div><div className="mt-8 flex flex-wrap gap-5 text-xs text-white/40">{['Free initial consultation','Custom scope','No pressure'].map(x=><span key={x} className="inline-flex items-center gap-2"><FiCheck className="text-blue-300"/>{x}</span>)}</div></div>
          </div>
        </div>
      </section>
    </div>
  )
}
