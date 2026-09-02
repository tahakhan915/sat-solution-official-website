import { Routes, Route, useParams } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import BackToTop from './components/BackToTop.jsx'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import PackagesPage from './pages/PackagesPage.jsx'
import ProcessPage from './pages/ProcessPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFound from './pages/NotFound.jsx'
import ServiceDetailPage from './pages/ServiceDetailPage.jsx'
import ProjectDetailPage from './pages/ProjectDetailPage.jsx'
import MoneyPage from './pages/MoneyPage.jsx'
import InsightsPage, { InsightArticle } from './pages/InsightsPage.jsx'
import { TeamPage, LegalPage } from './pages/TrustPages.jsx'
import FAQPage from './pages/FAQPage.jsx'

function InsightArticleRoute() {
  const { slug } = useParams()
  return <InsightArticle slug={slug} />
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090d] text-white">
      <ScrollProgress /><Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/software-development" element={<ServiceDetailPage slug="software-development" />} />
          <Route path="/services/web-development" element={<ServiceDetailPage slug="web-development" />} />
          <Route path="/services/mobile-app-development" element={<ServiceDetailPage slug="mobile-app-development" />} />
          <Route path="/services/cloud-solutions" element={<ServiceDetailPage slug="cloud-solutions" />} />
          <Route path="/services/it-consulting" element={<ServiceDetailPage slug="it-consulting" />} />
          <Route path="/services/business-automation" element={<ServiceDetailPage slug="business-automation" />} />
          <Route path="/web-development" element={<MoneyPage slug="web-development" />} />
          <Route path="/small-business-web-development" element={<MoneyPage slug="small-business-web-development" />} />
          <Route path="/website-redesign" element={<MoneyPage slug="website-redesign" />} />
          <Route path="/web-app-development" element={<MoneyPage slug="web-app-development" />} />
          <Route path="/ecommerce-development" element={<MoneyPage slug="ecommerce-development" />} />
          <Route path="/website-maintenance" element={<MoneyPage slug="website-maintenance" />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/case-studies" element={<PortfolioPage />} />
          <Route path="/portfolio/forno-pizza" element={<ProjectDetailPage slug="forno-pizza" seoPath="/portfolio/forno-pizza" />} />
          <Route path="/case-studies/forno-pizza" element={<ProjectDetailPage slug="forno-pizza" seoPath="/case-studies/forno-pizza" />} />
          <Route path="/portfolio/petacare" element={<ProjectDetailPage slug="petacare" seoPath="/portfolio/petacare" />} />
          <Route path="/case-studies/petacare" element={<ProjectDetailPage slug="petacare" seoPath="/case-studies/petacare" />} />
          <Route path="/portfolio/comic-reader" element={<ProjectDetailPage slug="comic-reader" seoPath="/portfolio/comic-reader" />} />
          <Route path="/case-studies/comic-reader" element={<ProjectDetailPage slug="comic-reader" seoPath="/case-studies/comic-reader" />} />
          <Route path="/portfolio/flowdesk" element={<ProjectDetailPage slug="flowdesk" seoPath="/portfolio/flowdesk" />} />
          <Route path="/case-studies/flowdesk" element={<ProjectDetailPage slug="flowdesk" seoPath="/case-studies/flowdesk" />} />
          <Route path="/portfolio/maintainiq" element={<ProjectDetailPage slug="maintainiq" seoPath="/portfolio/maintainiq" />} />
          <Route path="/case-studies/maintainiq" element={<ProjectDetailPage slug="maintainiq" seoPath="/case-studies/maintainiq" />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<InsightArticleRoute />} />
          <Route path="/privacy-policy" element={<LegalPage path="/privacy-policy" />} />
          <Route path="/terms" element={<LegalPage path="/terms" />} />
          <Route path="/accessibility" element={<LegalPage path="/accessibility" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer /><BackToTop />
    </div>
  )
}
