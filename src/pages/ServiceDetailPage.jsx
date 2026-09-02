import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import Node from '../components/Node.jsx'
import Reveal from '../components/Reveal.jsx'
import Seo from '../components/Seo.jsx'
import { serviceIcons } from '../components/ServiceIcons.jsx'
import { techServices } from '../data.js'

const content = {
  'software-development': {
    eyebrow: 'Software Development',
    heading: 'Custom software built around your business.',
    intro: 'We design and develop reliable software for businesses that need systems tailored to their workflows, customers, and growth plans.',
    bullets: ['Custom business applications', 'SaaS and internal platforms', 'API and database development', 'Integrations and workflow automation', 'Maintenance and ongoing improvements'],
    process: ['Understand your workflow and users', 'Define the product scope and technical architecture', 'Design, develop, test, and deploy', 'Measure, improve, and support the product as it grows'],
  },
  'web-development': {
    eyebrow: 'Web Development',
    heading: 'Fast, responsive websites and web applications.',
    intro: 'We build modern web experiences that make your business easier to discover, understand, trust, and use across desktop and mobile.',
    bullets: ['Business and corporate websites', 'Modern web applications', 'Landing pages and conversion experiences', 'Performance-focused front ends', 'CMS and third-party integrations'],
    process: ['Plan the information architecture and user journeys', 'Create a clear responsive interface', 'Build and test across devices', 'Launch with analytics, SEO, and ongoing support'],
  },
  'mobile-app-development': {
    eyebrow: 'Mobile App Development',
    heading: 'Mobile apps designed for real users and real goals.',
    intro: 'From an early product idea to a production-ready app, we focus on intuitive experiences, dependable engineering, and a foundation that can scale.',
    bullets: ['iOS and Android applications', 'Cross-platform app development', 'API and backend integration', 'Authentication and data flows', 'App maintenance and iteration'],
    process: ['Define users, features, and success criteria', 'Prototype the core experience', 'Build the application and supporting services', 'Test, launch, monitor, and iterate'],
  },
  'cloud-solutions': {
    eyebrow: 'Cloud Solutions',
    heading: 'Cloud infrastructure that is practical, reliable, and ready to grow.',
    intro: 'We help businesses deploy, improve, and maintain cloud systems with an emphasis on reliability, performance, security, and sensible operating costs.',
    bullets: ['Cloud architecture and setup', 'Deployment and CI/CD workflows', 'Migration planning and execution', 'Performance and cost optimization', 'Monitoring and operational improvements'],
    process: ['Audit your current infrastructure', 'Plan the target architecture and migration path', 'Implement and validate the environment', 'Monitor, optimize, and document the system'],
  },
  'it-consulting': {
    eyebrow: 'IT Consulting',
    heading: 'Technology strategy grounded in your business needs.',
    intro: 'We help teams make better technology decisions without unnecessary complexity, from choosing tools to planning systems and delivery roadmaps.',
    bullets: ['Technology strategy and roadmaps', 'Architecture reviews', 'Software and vendor evaluation', 'Technical project planning', 'Digital transformation guidance'],
    process: ['Understand business priorities and constraints', 'Assess the current technology landscape', 'Recommend practical options and priorities', 'Turn the strategy into an actionable roadmap'],
  },
  'business-automation': {
    eyebrow: 'Business Automation',
    heading: 'Replace repetitive work with connected digital workflows.',
    intro: 'We identify manual processes worth automating, connect the systems involved, and build practical workflows that save time and reduce avoidable errors.',
    bullets: ['Workflow analysis and automation', 'System and API integrations', 'Data synchronization', 'Internal dashboards and tools', 'Process monitoring and improvements'],
    process: ['Map the current process', 'Identify bottlenecks and automation opportunities', 'Build and connect the workflow', 'Measure the result and refine the system'],
  },
}

export default function ServiceDetailPage({ slug }) {
  const item = techServices.find((service) => service.slug === slug)
  const copy = content[slug]
  const Icon = serviceIcons[item?.icon] || serviceIcons.code

  if (!item || !copy) return null

  return (
    <>
      <Seo path={`/services/${slug}`} />
      <section className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-content mx-auto section-pad">
          <div className="max-w-4xl">
            <Reveal>
              <div className="flex items-center gap-2 mb-5">
                <Node className="text-circuit" />
                <span className="eyebrow">{copy.eyebrow}</span>
              </div>
              <h1 className="font-display font-semibold text-4xl sm:text-6xl tracking-tight max-w-4xl">{copy.heading}</h1>
              <p className="mt-7 text-lg text-white/45 max-w-2xl leading-relaxed">{copy.intro}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-ink text-white text-sm font-medium px-6 py-3.5 rounded-full hover:bg-circuit transition-colors">
                  Start a Project <FiArrowRight size={16} />
                </Link>
                <Link to="/portfolio" className="inline-flex items-center gap-2 border border-white/10 text-white text-sm font-medium px-6 py-3.5 rounded-full hover:border-white/20 transition-colors">
                  See Our Work
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/10 bg-[#0a0d12]">
        <div className="max-w-content mx-auto section-pad grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
          <Reveal>
            <div className="w-14 h-14 rounded-2xl bg-circuit/10 flex items-center justify-center text-circuit">
              <Icon className="w-7 h-7" />
            </div>
            <h2 className="mt-7 font-display font-semibold text-3xl tracking-tight">What we can build</h2>
            <p className="mt-4 text-white/45 leading-relaxed">Every engagement starts with the business problem, not a technology checklist.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {copy.bullets.map((bullet, index) => (
              <Reveal key={bullet} delay={index * 60}>
                <div className="h-full bg-[#07090d] border border-white/10 rounded-2xl p-6">
                  <FiCheck className="text-circuit" size={18} />
                  <h3 className="mt-5 font-display font-semibold">{bullet}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/10">
        <div className="max-w-content mx-auto section-pad">
          <Reveal>
            <div className="flex items-center gap-2 mb-4"><Node className="text-circuit" /><span className="eyebrow">Our Approach</span></div>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight">A clear path from requirements to results.</h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {copy.process.map((step, index) => (
              <Reveal key={step} delay={index * 70}>
                <div className="border border-white/10 rounded-2xl p-6 h-full">
                  <span className="font-mono text-xs text-circuit">0{index + 1}</span>
                  <p className="mt-5 text-sm text-white/45 leading-relaxed">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/10 bg-[#0a0d12]">
        <div className="max-w-content mx-auto section-pad text-center">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight">Need a {item.title.toLowerCase()} partner?</h2>
          <p className="mt-4 text-white/45 max-w-xl mx-auto">Tell us what you are trying to build or improve. We will help you define a practical next step.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-ink text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-circuit transition-colors">Talk to S.A.T Solution <FiArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  )
}
