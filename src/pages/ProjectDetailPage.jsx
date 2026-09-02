import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiArrowLeft } from 'react-icons/fi'
import Node from '../components/Node.jsx'
import Reveal from '../components/Reveal.jsx'
import Seo from '../components/Seo.jsx'
import { projects } from '../data.js'
import Breadcrumbs from '../components/Breadcrumbs.jsx'

const details = {
  'forno-pizza': { service: 'Web Application Development', overview: 'An online ordering experience for a pizzeria brand, designed around a fast menu browser and a clean path to checkout.', approach: 'The project focused on making the menu easy to browse and the ordering journey simple across mobile and desktop.' },
  petacare: { service: 'Business Website Development', overview: 'A professional website for a pet-care company, presenting services, facilities, and booking information to prospective clients.', approach: 'The experience organizes the company information into clear service-led sections so visitors can understand the offer and take the next step.' },
  'comic-reader': { service: 'React Web Application', overview: 'A React-powered comic browsing application with a library view and an in-browser reader for individual issues.', approach: 'The interface prioritizes content discovery, clear navigation, and a focused reading experience.' },
  flowdesk: { service: 'SaaS Product Development', overview: 'A productivity workspace concept for teams to plan, track, and move work forward from a single dashboard.', approach: 'The product concept brings common planning and tracking workflows into one focused workspace.' },
  maintainiq: { service: 'SaaS Product Development', overview: 'A maintenance-management platform concept for tracking assets, work orders, and technician schedules.', approach: 'The platform organizes operational maintenance information into workflows intended to help teams see what needs attention and when.' },
}

export default function ProjectDetailPage({ slug, seoPath = `/portfolio/${slug}` }) {
  const project = projects.find((item) => item.slug === slug)
  const detail = details[slug]
  if (!project || !detail) return null

  return (
    <>
      <Seo path={seoPath} />
      <Breadcrumbs items={[{label:'Case Studies', to:'/case-studies'}, {label:project.title}]} />
      <section className="pt-10 pb-24 md:pt-12 md:pb-32">
        <div className="max-w-content mx-auto section-pad">
          <Reveal>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-white/45 hover:text-white transition-colors"><FiArrowLeft size={15} /> Back to portfolio</Link>
            <div className="flex items-center gap-2 mt-10 mb-5"><Node className="text-circuit" /><span className="eyebrow">{detail.service}</span></div>
            <h1 className="font-display font-semibold text-4xl sm:text-6xl tracking-tight max-w-4xl">{project.title}</h1>
            <p className="mt-7 text-lg text-white/45 max-w-2xl leading-relaxed">{detail.overview}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-2 bg-ink text-white text-sm font-medium px-6 py-3.5 rounded-full hover:bg-circuit transition-colors">Visit Live Project <FiArrowUpRight size={16} /></a>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/10 bg-[#0a0d12]">
        <div className="max-w-content mx-auto section-pad grid lg:grid-cols-2 gap-8">
          <Reveal><div className="bg-[#07090d] border border-white/10 rounded-2xl p-8 h-full"><span className="eyebrow">Project</span><h2 className="mt-4 font-display font-semibold text-2xl">{project.title}</h2><p className="mt-4 text-white/45 leading-relaxed">{project.desc}</p><p className="mt-6 font-mono text-xs text-white/45 break-all">{project.url}</p></div></Reveal>
          <Reveal delay={100}><div className="bg-[#07090d] border border-white/10 rounded-2xl p-8 h-full"><span className="eyebrow">Approach</span><h2 className="mt-4 font-display font-semibold text-2xl">Built around the user journey.</h2><p className="mt-4 text-white/45 leading-relaxed">{detail.approach}</p></div></Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/10">
        <div className="max-w-content mx-auto section-pad text-center">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight">Have a similar project?</h2>
          <p className="mt-4 text-white/45 max-w-xl mx-auto">S.A.T Solution can help you turn the next idea into a reliable digital product.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-ink text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-circuit transition-colors">Start a Project <FiArrowUpRight size={16} /></Link>
        </div>
      </section>
    </>
  )
}
