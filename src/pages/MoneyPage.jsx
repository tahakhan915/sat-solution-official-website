import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck, FiCalendar, FiArrowUpRight } from 'react-icons/fi'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import FAQ from '../components/FAQ.jsx'

export const moneyPages = {
  'web-development': {
    path: '/web-development', title: 'Web Development Services for Small Businesses | S.A.T Solution',
    h1: 'Web development built to turn small-business traffic into leads',
    intro: 'S.A.T Solution builds responsive, conversion-ready websites and web applications for businesses that need a clearer digital presence, stronger user experience, and a reliable foundation for growth.',
    deliverables: ['Responsive business and corporate websites', 'Landing pages and conversion-focused experiences', 'Custom web applications and portals', 'CMS and third-party integrations', 'Technical SEO foundations and launch support'],
    timeline: 'Focused websites can move quickly; larger web applications require more discovery, design, development and testing. We agree the delivery plan before work begins.',
    cost: 'Cost depends on page count, content, integrations, custom functionality, design requirements and ongoing support. We scope those drivers before providing an estimate.',
    faqs: [
      ['What is included in web development?', 'Scope can include information architecture, responsive UI, development, integrations, testing, SEO foundations and launch support.'],
      ['Can you redesign an existing website?', 'Yes. We can audit the current experience, preserve what works and rebuild areas that need better clarity, performance or conversion.'],
      ['Do you build mobile-responsive websites?', 'Yes. The site experience is designed and tested for desktop, tablet and mobile layouts.'],
    ],
    related: ['/small-business-web-development', '/website-redesign', '/web-app-development'],
  },
  'small-business-web-development': {
    path: '/small-business-web-development', title: 'Small Business Website Development | S.A.T Solution',
    h1: 'Small-business websites designed to earn trust and generate enquiries',
    intro: 'For small businesses, the website often has to explain the offer, establish credibility and make the next step obvious. We build focused websites around those buyer needs instead of adding unnecessary complexity.',
    deliverables: ['Clear service-led information architecture', 'Responsive pages and contact journeys', 'Lead-generation sections and calls to action', 'Analytics and technical SEO foundations', 'Launch handoff and post-launch support options'],
    timeline: 'A focused small-business site can be planned and delivered in a compact engagement. The exact schedule depends on content readiness, page count and integrations.',
    cost: 'The main cost drivers are page count, custom design, copy/content needs, integrations and functionality. We explain the scope before work starts.',
    faqs: [
      ['Can you build a website for a small business from scratch?', 'Yes. We can take the project from structure and design through development, testing and launch.'],
      ['Can you work with my existing branding?', 'Yes. Existing logos, colors, typography and brand assets can be incorporated into the new experience.'],
      ['Will the site work on phones?', 'Responsive behavior is part of the implementation, with layouts adapted for smaller screens and touch interaction.'],
    ],
    related: ['/web-development', '/website-redesign', '/website-maintenance'],
  },
  'website-redesign': {
    path: '/website-redesign', title: 'Website Redesign Services | S.A.T Solution',
    h1: 'Website redesign for businesses ready to improve the experience',
    intro: 'A redesign should solve a business problem, not just make an old website look newer. We restructure content, improve journeys and rebuild the experience around clarity, usability and conversion.',
    deliverables: ['Existing-site audit and information architecture', 'Responsive interface redesign', 'Content hierarchy and conversion improvements', 'Technical rebuild and SEO-safe migration planning', 'Testing, launch and post-launch support'],
    timeline: 'Redesign timelines depend on the existing site, number of templates, migration complexity and content changes. We define milestones before implementation.',
    cost: 'The biggest cost drivers are redesign depth, number of templates, CMS migration, integrations, content and custom functionality.',
    faqs: [
      ['Should we redesign or rebuild our website?', 'We assess the existing platform and goals first. If the foundation is sound, an incremental redesign may be enough; otherwise a rebuild can be more practical.'],
      ['Will a redesign hurt SEO?', 'A careful redesign should preserve valuable URLs, metadata and internal links while improving the site. Redirect and canonical planning is part of an SEO-safe migration.'],
      ['Can you improve an existing React or WordPress site?', 'Yes, when the existing stack is appropriate for the requirements.'],
    ],
    related: ['/web-development', '/small-business-web-development', '/website-maintenance'],
  },
  'web-app-development': {
    path: '/web-app-development', title: 'Custom Web Application Development | S.A.T Solution',
    h1: 'Custom web applications for portals, tools and SaaS products',
    intro: 'When a website is not enough, we design and develop browser-based applications around real workflows, users and business rules.',
    deliverables: ['Product discovery and application architecture', 'Responsive application interfaces', 'Authentication, roles and workflows', 'API and database integrations', 'Testing, deployment and ongoing improvements'],
    timeline: 'Application timelines vary significantly with product scope, integrations, user roles and technical requirements. We break the work into defined milestones.',
    cost: 'Application cost is driven by features, user roles, integrations, data model, design depth, security requirements and ongoing support.',
    faqs: [
      ['What is a web application?', 'It is an interactive browser-based product that can support workflows, dashboards, accounts, transactions or other application logic.'],
      ['Can you build an MVP?', 'Yes. We can scope an MVP around the smallest useful set of workflows needed to validate the product.'],
      ['Do you support the application after launch?', 'Post-launch support and improvement work can be scoped based on the product and business needs.'],
    ],
    related: ['/web-development', '/services/software-development', '/website-maintenance'],
  },
  'ecommerce-development': {
    path: '/ecommerce-development', title: 'Ecommerce Website Development | S.A.T Solution',
    h1: 'Ecommerce websites built around products, customers and checkout',
    intro: 'We build ecommerce experiences that make products easy to discover, evaluate and purchase while keeping the operational side of the store in view.',
    deliverables: ['Storefront and product presentation', 'Responsive shopping journeys', 'Checkout and payment integrations', 'Catalog, forms and third-party integrations', 'Technical SEO and launch support'],
    timeline: 'Store timelines depend on catalog size, platform choice, integrations, content and custom requirements. We define the launch sequence during planning.',
    cost: 'Key cost drivers include catalog complexity, custom storefront work, integrations, checkout requirements, migration and ongoing support.',
    faqs: [
      ['Can you build a custom ecommerce experience?', 'Yes. We can tailor the storefront and integrations around the business requirements and chosen platform.'],
      ['Can you migrate an existing store?', 'We can plan migrations around products, content, URLs and integrations where the existing platform supports the required export and migration path.'],
      ['Can ecommerce pages be SEO-friendly?', 'Yes. Information architecture, crawlable links, metadata and product content can all be planned with search visibility in mind.'],
    ],
    related: ['/web-development', '/website-redesign', '/website-maintenance'],
  },
  'website-maintenance': {
    path: '/website-maintenance', title: 'Website Maintenance Services for Small Businesses | S.A.T Solution',
    h1: 'Website maintenance and support without the guesswork',
    intro: 'A launched website still needs attention. We help businesses keep sites updated, monitored and improved so small issues do not become bigger problems.',
    deliverables: ['Content and minor website updates', 'Bug investigation and fixes', 'Dependency and platform maintenance', 'Performance and technical checks', 'Ongoing improvement support'],
    timeline: 'Maintenance can be structured as an ongoing support arrangement or scoped as individual improvements depending on the site and business needs.',
    cost: 'Support cost depends on update frequency, response expectations, platform complexity and the amount of development work included.',
    faqs: [
      ['What does website maintenance include?', 'It can include updates, fixes, technical checks, performance work and small improvements depending on the agreed scope.'],
      ['Can you maintain a website you did not build?', 'Yes, after reviewing the current stack, code quality, hosting and access requirements.'],
      ['Do you offer ongoing support after a new website launch?', 'Yes. Post-launch support can be included as part of a project plan or scoped separately.'],
    ],
    related: ['/web-development', '/website-redesign', '/small-business-web-development'],
  },
}

export default function MoneyPage({ slug }) {
  const page = moneyPages[slug]
  if (!page) return null
  return <>
    <Seo path={page.path} />
    <Breadcrumbs items={[{ label: 'Services', to: '/services' }, { label: page.h1 }]} />
    <section className="pt-10 pb-20 md:pt-14 md:pb-28">
      <div className="max-w-content mx-auto section-pad">
        <Reveal><span className="eyebrow">S.A.T Solution · {page.title.split('|')[0].trim()}</span><h1 className="mt-5 max-w-5xl font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-.045em] leading-[.98]">{page.h1}</h1><p className="mt-7 max-w-3xl text-lg sm:text-xl leading-8 text-white/55">{page.intro}</p><div className="mt-9 flex flex-wrap gap-3"><button type="button" onClick={() => window.dispatchEvent(new CustomEvent('open-appointment'))} className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold">Book an appointment <FiCalendar/></button><Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold">Request a scoped estimate <FiArrowRight/></Link></div></Reveal>
      </div>
    </section>
    <section className="border-t border-white/10 bg-[#0a0d12] py-20 md:py-28"><div className="max-w-content mx-auto section-pad grid lg:grid-cols-[.72fr_1.28fr] gap-12"><Reveal><span className="eyebrow">What we deliver</span><h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold">A focused scope, built around the buyer.</h2><p className="mt-5 text-white/45 leading-7">We keep the technology aligned with the business problem so the final product is useful, maintainable and ready for real users.</p></Reveal><div className="grid sm:grid-cols-2 gap-3">{page.deliverables.map((x,i)=><Reveal key={x} delay={i*45}><div className="card-dark p-6 h-full"><FiCheck className="text-blue-300"/><h3 className="mt-5 font-display font-semibold">{x}</h3></div></Reveal>)}</div></div></section>
    <section className="py-20 md:py-28 border-t border-white/10"><div className="max-w-content mx-auto section-pad grid md:grid-cols-2 gap-5"><Reveal><div className="card-dark p-7 h-full"><span className="eyebrow">Timeline</span><h2 className="mt-4 font-display text-2xl font-semibold">Plan before production.</h2><p className="mt-4 text-white/45 leading-7">{page.timeline}</p></div></Reveal><Reveal delay={80}><div className="card-dark p-7 h-full"><span className="eyebrow">Cost</span><h2 className="mt-4 font-display text-2xl font-semibold">Clear cost drivers.</h2><p className="mt-4 text-white/45 leading-7">{page.cost}</p></div></Reveal></div></section>
    <section className="py-20 md:py-28 border-t border-white/10 bg-[#0a0d12]"><div className="max-w-content mx-auto section-pad"><Reveal><span className="eyebrow">Related paths</span><h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold">Explore the next page.</h2></Reveal><div className="mt-8 grid md:grid-cols-3 gap-4">{page.related.map((href)=><Link key={href} to={href} className="card-dark card-dark-hover p-6 flex items-center justify-between"><span className="font-display font-semibold">{href.split('/').filter(Boolean).join(' ').replaceAll('-', ' ')}</span><FiArrowUpRight/></Link>)}</div></div></section>
    <section className="py-20 md:py-28"><div className="max-w-3xl mx-auto section-pad"><Reveal><span className="eyebrow">Frequently asked questions</span><h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold">Before you start.</h2></Reveal><div className="mt-8 space-y-3">{page.faqs.map(([q,a])=><details key={q} className="rounded-2xl border border-white/10 bg-white/[.025] p-5 group"><summary className="cursor-pointer list-none font-display font-semibold flex justify-between gap-4">{q}<span className="text-blue-300">+</span></summary><p className="mt-4 text-sm leading-7 text-white/45">{a}</p></details>)}</div></div></section>
    <section className="border-t border-white/10 bg-[#0a0d12] py-20 md:py-28"><div className="max-w-content mx-auto section-pad text-center"><span className="eyebrow">Next step</span><h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold">Let's scope the right solution.</h2><p className="mt-5 max-w-xl mx-auto text-white/45 leading-7">Tell us what you need to build, redesign, improve or maintain. We'll help you define a practical next step.</p><button type="button" onClick={() => window.dispatchEvent(new CustomEvent('open-appointment'))} className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-semibold">Book an appointment <FiCalendar/></button></div></section>
  </>
}
