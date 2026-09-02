import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck, FiPlay, FiCalendar } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-40 left-1/3 w-[680px] h-[680px] rounded-full hero-orb pointer-events-none" />
      <div className="absolute inset-0 hero-noise pointer-events-none" />

      <div className="relative max-w-[1240px] mx-auto section-pad w-full">
        <div className="grid lg:grid-cols-[1.02fr_.98fr] gap-12 xl:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-2 animate-rise">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-soft" />
              <span className="font-mono text-[10px] uppercase tracking-[.18em] text-white/65">Software development & IT solutions</span>
            </div>

            <h1 className="mt-7 font-display font-semibold text-[3.1rem] sm:text-6xl lg:text-[4.6rem] xl:text-[5.1rem] leading-[.98] tracking-[-.045em] animate-rise" style={{animationDelay:'80ms'}}>
              We build digital products that <span className="text-gradient">move business forward.</span>
            </h1>

            <p className="mt-5 font-display text-lg sm:text-xl lg:text-2xl font-medium tracking-[-.02em] text-white/90 animate-rise" style={{animationDelay:'120ms'}}>
              Ideas, engineered into reliable digital systems.
            </p>

            <p className="mt-7 max-w-xl text-base sm:text-lg leading-8 text-white/60 animate-rise" style={{animationDelay:'160ms'}}>
              S.A.T Solution delivers AI automation, custom software, custom web development, mobile apps, cloud solutions and IT services for businesses worldwide.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 animate-rise" style={{animationDelay:'240ms'}}>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-400 transition-colors shadow-[0_15px_40px_-18px_rgba(59,130,246,.9)]">
                Start a project <FiArrowRight size={16}/>
              </Link>
              <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('open-appointment'))} className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/[.06] px-6 py-3.5 text-sm font-semibold text-blue-100 hover:bg-blue-500/[.12] transition-colors">
                Book an appointment <FiCalendar size={15}/>
              </button>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.03] px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/[.08] transition-colors">
                <FiPlay size={14} /> Explore our work
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/45 animate-rise" style={{animationDelay:'320ms'}}>
              {['Custom-built', 'Scalable architecture', 'Human support'].map(x => <span key={x} className="inline-flex items-center gap-2"><FiCheck className="text-blue-300" size={14}/>{x}</span>)}
            </div>
          </div>

          <HeroDashboard />
        </div>

        <div className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
          {[
            ['6', 'delivery stages'],
            ['6+', 'core technology services'],
            ['5', 'featured projects'],
            ['1', 'dedicated technology partner'],
          ].map(([value,label]) => (
            <div key={label} className="bg-[#0b0e13] px-5 py-6 sm:px-7 sm:py-7">
              <div className="font-display text-3xl sm:text-4xl font-semibold text-white">{value}</div>
              <div className="mt-1 text-xs sm:text-sm text-white/40">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HeroDashboard() {
  return (
    <div className="relative animate-rise" style={{animationDelay:'180ms'}}>
      <div className="absolute -inset-8 rounded-[40px] bg-blue-500/10 blur-3xl" />
      <div className="relative rounded-[30px] border border-white/10 bg-[#0b0e13]/95 p-2 dashboard-glow animate-float">
        <div className="rounded-[23px] border border-white/10 overflow-hidden bg-[#080a0e]">
          <div className="h-11 px-4 flex items-center gap-2 border-b border-white/10 bg-white/[.025]">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70"/><span className="w-2.5 h-2.5 rounded-full bg-amber-300/70"/><span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70"/>
            <div className="ml-3 h-6 flex-1 rounded-md bg-white/[.04] border border-white/5 text-[9px] text-white/25 flex items-center px-3 font-mono">app.satsolution.tech / dashboard</div>
          </div>
          <div className="p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <div><p className="text-[10px] uppercase tracking-[.18em] text-blue-300">Business systems</p><h2 className="mt-2 font-display text-xl sm:text-2xl font-semibold">One clear view of the work.</h2></div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-300"><FiArrowRight/></div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-7">
              {['Orders','Leads','Tasks'].map((x,i)=><div key={x} className="rounded-xl border border-white/8 bg-white/[.03] p-3"><div className="text-[9px] text-white/35 uppercase">{x}</div><div className="mt-2 font-display text-xl font-semibold">{['1,284','247','86'][i]}</div><div className="mt-1 text-[9px] text-emerald-300">+{['18','12','24'][i]}% this month</div></div>)}
            </div>
            <div className="mt-4 rounded-2xl border border-white/8 bg-white/[.025] p-4">
              <div className="flex justify-between text-[10px] text-white/35"><span>System activity</span><span>Live</span></div>
              <div className="mt-5 h-28 flex items-end gap-2">
                {[35,52,42,66,58,74,62,88,70,94,82,100].map((h,i)=><div key={i} className="flex-1 rounded-t bg-gradient-to-t from-blue-600/25 to-blue-300/80" style={{height:`${h}%`}}/>) }
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/8 p-3 bg-white/[.025]"><div className="text-[9px] text-white/35 uppercase">Automation</div><div className="mt-2 h-2 rounded-full bg-white/8 overflow-hidden"><div className="h-full w-[82%] bg-blue-400 rounded-full"/></div><div className="mt-2 text-xs text-white/60">82% optimized</div></div>
              <div className="rounded-xl border border-white/8 p-3 bg-white/[.025]"><div className="text-[9px] text-white/35 uppercase">Uptime</div><div className="mt-2 text-xl font-display font-semibold">99.9%</div><div className="mt-1 text-[9px] text-emerald-300">healthy</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
