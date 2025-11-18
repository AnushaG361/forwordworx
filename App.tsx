
import React from 'react';
import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesLandingPage from './pages/ServicesLandingPage';
import CreativeServicesPage from './pages/CreativeServicesPage';
import MarketingServicesPage from './pages/MarketingServicesPage';
import TechnologyServicesPage from './pages/TechnologyServicesPage';
import AgentLandingPage from './pages/AgentLandingPage';
import ContentAgentsPage from './pages/ContentAgentsPage';
import MarketingAgentsPage from './pages/MarketingAgentsPage';
import ProductsLandingPage from './pages/ProductsLandingPage';
import RietailPage from './pages/RietailPage';
import HcmSuitePage from './pages/HcmSuitePage';
import RiaddonPage from './pages/RiaddonPage';
import EtalionPage from './pages/EtalionPage';
import EnableLandingPage from './pages/EnableLandingPage';
import EnableCommercePage from './pages/EnableCommercePage';
import EnableAgentsPage from './pages/EnableAgentsPage';
import EnableAutomationPage from './pages/EnableAutomationPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import SeoSubscriptionPage from './pages/SeoSubscriptionPage';

const Layout: React.FC = () => {
    const location = useLocation();
    
    const lightThemePaths = ['/', '/services', '/agents', '/enable', '/products', '/enable/automation', '/about', '/contact'];
    const isDarkTheme = !lightThemePaths.includes(location.pathname);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className={isDarkTheme ? 'bg-[#0B101B] text-white' : 'bg-white text-gray-800'}>
            <Header darkTheme={isDarkTheme} />
            <main>
                <Outlet />
            </main>
            <Footer darkTheme={isDarkTheme} />
        </div>
    );
};


const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesLandingPage />} />
          <Route path="services/creative" element={<CreativeServicesPage />} />
          <Route path="services/marketing" element={<MarketingServicesPage />} />
          <Route path="services/technology" element={<TechnologyServicesPage />} />
          <Route path="services/seo-smo" element={<SeoSubscriptionPage />} />
          <Route path="agents" element={<AgentLandingPage />} />
          <Route path="agents/content" element={<ContentAgentsPage />} />
          <Route path="agents/marketing" element={<MarketingAgentsPage />} />
          <Route path="products" element={<ProductsLandingPage />} />
          <Route path="products/rietail" element={<RietailPage />} />
          <Route path="products/hcm" element={<HcmSuitePage />} />
          <Route path="products/riaddon" element={<RiaddonPage />} />
          <Route path="products/etalion" element={<EtalionPage />} />
          <Route path="enable" element={<EnableLandingPage />} />
          <Route path="enable/commerce" element={<EnableCommercePage />} />
          <Route path="enable/agents" element={<EnableAgentsPage />} />
          <Route path="enable/automation" element={<EnableAutomationPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactUsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;