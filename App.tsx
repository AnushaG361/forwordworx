
import React from 'react';
import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesLandingPage from './pages/ServicesLandingPage';

// Existing Pages
import CreativeServicesPage from './pages/CreativeServicesPage';
import MarketingServicesPage from './pages/MarketingServicesPage';
import TechnologyServicesPage from './pages/TechnologyServicesPage';
import AgentLandingPage from './pages/AgentLandingPage';
import ContentAgentsPage from './pages/ContentAgentsPage';
import MarketingAgentsPage from './pages/MarketingAgentsPage';
import MediaAgentsPage from './pages/MediaAgentsPage';
import ProductsLandingPage from './pages/ProductsLandingPage';
import RietailPage from './pages/RietailPage';
import RietailBuilderPage from './pages/RietailBuilderPage';
import HcmSuitePage from './pages/HcmSuitePage';
import RiaddonPage from './pages/RiaddonPage';
import RISizeChartPage from './pages/RISizeChartPage';
import RISectionStorePage from './pages/RISectionStorePage';
import RIMobileAppPage from './pages/RIMobileAppPage';
import RIReturnExchangePage from './pages/RIReturnExchangePage';
import RIQuickCommercePage from './pages/RIQuickCommercePage';
import RIProductOptionPage from './pages/RIProductOptionPage';
import RICODPage from './pages/RICODPage';
import EtalionPage from './pages/EtalionPage';
import EnableLandingPage from './pages/EnableLandingPage';
import EnableCommercePage from './pages/EnableCommercePage';
import EnableAgentsPage from './pages/EnableAgentsPage';
import EnableAutomationPage from './pages/EnableAutomationPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import SeoSubscriptionPage from './pages/SeoSubscriptionPage';
import SpecificAgentPage from './pages/SpecificAgentPage';
import ConsultancyPage from './pages/ConsultancyPage';

// New Service Pages (Explicit Relative Imports)
import StudioAgentPage from './pages/services/StudioAgentPage';
import MarketingAgentServicePage from './pages/services/MarketingAgentServicePage';
import CommerceMarketingPage from './pages/services/CommerceMarketingPage';
import AutomationAgentServicePage from './pages/services/AutomationAgentServicePage';
import AiServicesLandingPage from './pages/services/AiServicesLandingPage';

// Studio Sub-Pages
import CatalogueStudioPage from './pages/services/studio/CatalogueStudioPage';
import CreativeStudioPage from './pages/services/studio/CreativeStudioPage';
import BrandStudioPage from './pages/services/studio/BrandStudioPage';

const Layout: React.FC = () => {
    const location = useLocation();
    const isDarkTheme = false; 

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className={'bg-white text-gray-800'}>
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
          
          {/* Main Services Hub */}
          <Route path="services" element={<ServicesLandingPage />} />
          
          {/* Studio Services Routes */}
          <Route path="services/studio" element={<StudioAgentPage />} />
          <Route path="services/studio/catalogue" element={<CatalogueStudioPage />} />
          <Route path="services/studio/creative" element={<CreativeStudioPage />} />
          <Route path="services/studio/brand" element={<BrandStudioPage />} />

          {/* Other Service Categories */}
          <Route path="services/marketing-agent" element={<MarketingAgentServicePage />} />
          <Route path="services/commerce" element={<CommerceMarketingPage />} />
          <Route path="services/automation-agent" element={<AutomationAgentServicePage />} />
          <Route path="services/ai" element={<AiServicesLandingPage />} />

          {/* Legacy/Specific Service Routes */}
          <Route path="services/creative" element={<CreativeServicesPage />} />
          <Route path="services/marketing" element={<MarketingServicesPage />} />
          <Route path="services/technology" element={<TechnologyServicesPage />} />
          <Route path="services/seo-smo" element={<SeoSubscriptionPage />} />
          
          {/* Agents & Products */}
          <Route path="agents" element={<AgentLandingPage />} />
          <Route path="agents/content" element={<ContentAgentsPage />} />
          <Route path="agents/marketing" element={<MarketingAgentsPage />} />
          <Route path="agents/media" element={<MediaAgentsPage />} />
          
          <Route path="agents/content/creative" element={<SpecificAgentPage agentKey="creative" />} />
          <Route path="agents/content/brand-book" element={<SpecificAgentPage agentKey="brand-book" />} />
          <Route path="agents/content/ads" element={<SpecificAgentPage agentKey="ads" />} />
          <Route path="agents/content/catalog" element={<SpecificAgentPage agentKey="ai-catalog" />} />
          <Route path="agents/content/listing" element={<SpecificAgentPage agentKey="catalog-listing" />} />
          
          <Route path="agents/marketing/meta" element={<SpecificAgentPage agentKey="meta" />} />
          <Route path="agents/marketing/google" element={<SpecificAgentPage agentKey="google" />} />
          <Route path="agents/marketing/proposal" element={<SpecificAgentPage agentKey="proposal" />} />

          <Route path="products" element={<ProductsLandingPage />} />
          <Route path="products/rietail" element={<RietailPage />} />
          <Route path="products/rietail-builder" element={<RietailBuilderPage />} />
          <Route path="products/hcm" element={<HcmSuitePage />} />
          <Route path="products/riaddon" element={<RiaddonPage />} />
          <Route path="products/riaddon/size-chart" element={<RISizeChartPage />} />
          <Route path="products/riaddon/section-store" element={<RISectionStorePage />} />
          <Route path="products/riaddon/mobile-app" element={<RIMobileAppPage />} />
          <Route path="products/riaddon/return-exchange" element={<RIReturnExchangePage />} />
          <Route path="products/riaddon/quick-commerce" element={<RIQuickCommercePage />} />
          <Route path="products/riaddon/product-option" element={<RIProductOptionPage />} />
          <Route path="products/riaddon/cod" element={<RICODPage />} />
          <Route path="products/etalion" element={<EtalionPage />} />
          
          <Route path="enable" element={<EnableLandingPage />} />
          <Route path="enable/commerce" element={<EnableCommercePage />} />
          <Route path="enable/agents" element={<EnableAgentsPage />} />
          <Route path="enable/automation" element={<EnableAutomationPage />} />
          
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="consultancy" element={<ConsultancyPage />} />
          {/* AI Services top level route if needed, otherwise covered by services/ai */}
          <Route path="ai-services" element={<AiServicesLandingPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
