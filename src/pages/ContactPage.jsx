import Contact from '../components/Contact.jsx'
import Seo from '../components/Seo.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
export default function ContactPage(){return <><Seo path="/contact"/><Breadcrumbs items={[{label:'Contact'}]}/><section className="pt-8 pb-2"><div className="max-w-content mx-auto section-pad"><span className="eyebrow">Start a web project</span><h1 className="mt-4 font-display text-4xl sm:text-6xl font-semibold">Tell us what you need to build.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/50">Share the business problem, project idea or website you want to improve. We will help define a practical next step.</p></div></section><Contact/></>}
