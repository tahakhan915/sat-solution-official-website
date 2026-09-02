import About from '../components/About.jsx'
import Seo from '../components/Seo.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
export default function AboutPage(){return <><Seo path="/about"/><Breadcrumbs items={[{label:'About'}]}/><section className="pt-8 pb-2"><div className="max-w-content mx-auto section-pad"><span className="eyebrow">About S.A.T Solution</span><h1 className="mt-4 font-display text-4xl sm:text-6xl font-semibold tracking-tight">A practical development partner for growing businesses.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/50">We combine strategy, design and engineering to build dependable digital products around real business requirements.</p></div></section><About/></>}
