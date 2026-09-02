import logoFull from '../assets/logo-full.png'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import SocialLinks from './SocialLinks.jsx'

const serviceLinks = [
  ['/web-development', 'Web Development'],
  ['/small-business-web-development', 'Small-Business Websites'],
  ['/website-redesign', 'Website Redesign'],
  ['/web-app-development', 'Web Applications'],
  ['/ecommerce-development', 'Ecommerce Development'],
  ['/website-maintenance', 'Website Maintenance'],
]

const companyLinks = [
  ['/about', 'About Us'],
  ['/case-studies', 'Case Studies'],
  ['/portfolio', 'Portfolio'],
  ['/process', 'Our Process'],
  ['/packages', 'Pricing'],
  ['/contact', 'Contact'],
]

const resourceLinks = [
  ['/insights', 'Insights'],
  ['/faq', 'FAQ'],
  ['/team', 'Team'],
  ['/privacy-policy', 'Privacy Policy'],
  ['/terms', 'Terms'],
  ['/accessibility', 'Accessibility'],
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-premium border-t border-white/10">
      <div className="footer-cta-wrap max-w-content mx-auto section-pad pt-8 sm:pt-12">
        <div className="footer-cta relative overflow-hidden rounded-[28px] border border-blue-400/20 bg-[#0b1018] px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
          <div className="footer-cta-glow" />
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
            <div className="max-w-2xl">
              <span className="eyebrow">Ready to build?</span>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold tracking-tight">Have a project in mind? Let&apos;s build it.</h2>
              <p className="mt-3 text-sm sm:text-base leading-7 text-white/45">Book a free 15-minute discovery call. We&apos;ll help you find the right starting point for your goals and budget.</p>
            </div>
            <Link to="/contact" className="footer-cta-button shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-400 transition">
              Book Free Discovery Call <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-content mx-auto section-pad py-12 sm:py-14">
        <div className="grid lg:grid-cols-[1.05fr_2fr] gap-12 lg:gap-16">
          <div>
            <Link to="/" className="inline-flex items-center" aria-label="S.A.T Solution home">
              <img src={logoFull} alt="S.A.T Solution" width="190" height="64" className="w-[170px] sm:w-[190px] h-auto object-contain object-left" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">Ideas, engineered into reliable digital systems. We design and build dependable websites, web applications, software, and digital solutions for growing businesses.</p>

            <div className="mt-7 space-y-3 text-sm text-white/55">
              <a href="mailto:hello@satsolution.tech" className="footer-contact-row"><span className="footer-contact-icon"><FiMail /></span><span>hello@satsolution.tech</span></a>
              <Link to="/contact" className="footer-contact-row"><span className="footer-contact-icon"><FiPhone /></span><span>Schedule an appointment</span></Link>
              <div className="footer-contact-row"><span className="footer-contact-icon"><FiMapPin /></span><span>Serving businesses remotely</span></div>
            </div>

            <div className="mt-7"><SocialLinks variant="light" /></div>
          </div>

          <div className="grid sm:grid-cols-3 gap-9 sm:gap-8">
            <FooterColumn title="Services" links={serviceLinks} />
            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="Resources" links={resourceLinks} />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs text-white/35">© {year} S.A.T Solution. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/35">
            <span>Ideas, engineered into reliable digital systems.</span>
            <Link to="/contact" className="inline-flex items-center gap-1 text-blue-300 hover:text-blue-200">Start a project <FiArrowUpRight /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map(([href, label]) => (
          <li key={href}>
            <Link to={href} className="footer-link">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
