import Seo from '../components/Seo.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import FAQ from '../components/FAQ.jsx'
export default function FAQPage(){return <><Seo path="/faq"/><Breadcrumbs items={[{label:'FAQ'}]}/><section className="pt-8 pb-2"><div className="max-w-content mx-auto section-pad"><span className="eyebrow">Frequently asked questions</span><h1 className="mt-4 font-display text-4xl sm:text-6xl font-semibold tracking-tight">Questions about working with S.A.T Solution.</h1></div></section><div className="pt-4"><FAQ/></div></>}
