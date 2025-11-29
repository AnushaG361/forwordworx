
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    ContentAgentIcon, 
    MarketingAgentIcon, 
    SparklesIcon, 
    DocumentSignatureIcon, 
    MegaphoneIcon, 
    ShoppingCartIcon, 
    LinkIcon, 
    ChartBarIcon, 
    GlobeAltIcon, 
    DocumentCheckIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    ChevronDownIcon
} from '../constants/icons';
import Breadcrumbs from '../components/Breadcrumbs';

const MiniCard: React.FC<{ 
    icon: React.ElementType, 
    title: string, 
    subtitle: string, 
    description: string, 
    bullets: string[],
    link: string 
}> = ({ icon: Icon, title, subtitle, description, bullets, link }) => (
    <Link to={link} className="block group h-full">
        <div className="bg-white border border-gray-200 hover:border-blue-400 rounded-xl p-6 h-full transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Icon className="h-6 w-6 text-blue-600 group-hover:text-blue-700" />
                </div>
                <ArrowRightIcon className="h-5 w-5 text-gray-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-sm font-semibold text-blue-600 mb-3">{subtitle}</p>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
            <ul className="space-y-2">
                {bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-500">
                        <span className="mr-2 text-blue-500">•</span>
                        {bullet}
                    </li>
                ))}
            </ul>
        </div>
    </Link>
);

const PricingCard: React.FC<{ title: string, price: string, features: string[], recommended?: boolean }> = ({ title, price, features, recommended }) => (
    <div className={`relative flex flex-col p-8 rounded-2xl border transition-transform hover:scale-105 duration-300 ${recommended ? 'bg-white border-blue-500 shadow-xl ring-1 ring-blue-500' : 'bg-white border-gray-200 shadow-lg'}`}>
        {recommended && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md tracking-wide uppercase">Most Popular</span>
            </div>
        )}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <div className="mt-4 mb-6">
            <span className="text-4xl font-extrabold text-gray-900">{price}</span>
            {price !== 'Custom' && <span className="text-gray-500 text-sm font-medium">/month</span>}
        </div>
        <ul className="space-y-4 mb-8 flex-1">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-600">
                    <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <button className={`w-full py-3 px-6 rounded-lg font-bold transition-colors ${recommended ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-800 hover:bg-gray-900 text-white'}`}>
            Get Started
        </button>
    </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
            >
                <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>{question}</span>
                <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

const AgentLandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'AI Agents' }]} />
            </div>
            
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-5xl mx-auto">
                            Empower your business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI Agents</span> that work tirelessly—scaling your success around the clock with results.
                        </h1>
                        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                            Deploy your autonomous workforce today. Scalable, efficient, and always on.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Content Agent Hero Card */}
                        <div className="bg-white border border-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="bg-purple-100 p-3 rounded-xl">
                                    <ContentAgentIcon className="h-8 w-8 text-purple-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Content Agent</h2>
                            </div>
                            <p className="text-xl text-gray-600 font-medium mb-8 leading-relaxed">
                                Creates ideas, branding, catalogs, & all your creative sauce.
                            </p>
                            <Link to="/agents/content" className="inline-flex items-center justify-center w-full py-4 px-6 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold rounded-xl transition-all">
                                Explore Content Agent <ArrowRightIcon className="ml-2 h-5 w-5" />
                            </Link>
                        </div>

                        {/* Marketing Agent Hero Card */}
                        <div className="bg-white border border-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="bg-blue-100 p-3 rounded-xl">
                                    <MarketingAgentIcon className="h-8 w-8 text-blue-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Marketing Agent</h2>
                            </div>
                            <p className="text-xl text-gray-600 font-medium mb-8 leading-relaxed">
                                Meta Ads + Google Ads + Sales Funnels = <span className="text-green-600 font-bold">📈 No excuses zone</span>
                            </p>
                            <Link to="/agents/marketing" className="inline-flex items-center justify-center w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg">
                                Explore Marketing Agent <ArrowRightIcon className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Agent Capabilities */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <span className="text-purple-600 font-bold tracking-wider uppercase text-sm bg-purple-100 px-3 py-1 rounded-full">Content Agent Capabilities</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">Creativity on Auto-Pilot</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        <MiniCard 
                            icon={SparklesIcon}
                            title="Creative Agent"
                            subtitle="Think → Script → Create → Deliver"
                            description="Plans and produces your brand’s entire content output."
                            bullets={['Creative strategy & ideation', 'Social post scripts & captions', 'Video content workflows', 'High-quality creative messaging']}
                            link="/agents/content/creative"
                        />
                        <MiniCard 
                            icon={DocumentSignatureIcon}
                            title="Brand Book Agent"
                            subtitle="Makes brand guidelines look elite"
                            description="Builds and upgrades brand identity documentation."
                            bullets={['Brand voice development', 'Color, typography & visual guidelines', 'Logo consistency', 'Brand narrative']}
                            link="/agents/content/brand-book"
                        />
                        <MiniCard 
                            icon={MegaphoneIcon}
                            title="Ads Agent"
                            subtitle="Meta + Google ad creatives? Done."
                            description="Delivers ad-ready content for every channel."
                            bullets={['Ad copywriting (USP, CTA, hooks)', 'Campaign-specific design language', 'Market testing variations']}
                            link="/agents/content/ads"
                        />
                        <MiniCard 
                            icon={ShoppingCartIcon}
                            title="AI Catalog Agent"
                            subtitle="Create, clean & format product catalogs"
                            description="Creates and automates product catalog content."
                            bullets={['Product descriptions & breakdowns', 'Image copy & structured lists', 'Catalog formats for ecommerce']}
                            link="/agents/content/catalog"
                        />
                        <MiniCard 
                            icon={LinkIcon} 
                            title="Catalog Listing Agent"
                            subtitle="Listing sheets for all marketplaces"
                            description="Prepares accurate product listings for distribution."
                            bullets={['Listings for Shopify/Amazon/Flipkart', 'Category-wise structured data', 'SKU mapping with compliance']}
                            link="/agents/content/listing"
                        />
                    </div>
                </div>
            </section>

            {/* Marketing Agent Capabilities */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                         <span className="text-blue-600 font-bold tracking-wider uppercase text-sm bg-blue-100 px-3 py-1 rounded-full">MARKETING AGENT CAPABILITIES</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">Growth on Auto-Pilot</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        <MiniCard 
                            icon={ChartBarIcon}
                            title="Meta Agent"
                            subtitle="Campaign mapping. Results first."
                            description="Creates smart campaign structures tailored to business goals."
                            bullets={['Complete Meta ads funnel mapping', 'Audience breakdown & conversion paths', 'Always-on remarketing strategy']}
                            link="/agents/marketing/meta"
                        />
                        <MiniCard 
                            icon={GlobeAltIcon}
                            title="Google Agent"
                            subtitle="Search + Demand Gen + PMax mastery"
                            description="End-to-end management of Google Ads ecosystem."
                            bullets={['Search, Demand Gen & Performance Max', 'Keyword intent mapping', 'Retail-ready conversion planning']}
                            link="/agents/marketing/google"
                        />
                        <MiniCard 
                            icon={DocumentCheckIcon}
                            title="Proposal Agent"
                            subtitle="Investor-ready, client-approved proposals"
                            description="Creates high-impact proposals that convert clients or buyers."
                            bullets={['Problem + solution breakdown', 'Numbers & ROI justification', 'Offer positioning for decision-makers']}
                            link="/agents/marketing/proposal"
                        />
                        <MiniCard 
                            icon={ChartBarIcon}
                            title="SEO Agent"
                            subtitle="Dominate search engines."
                            description="Optimizes your online presence for organic growth."
                            bullets={['Keyword research & tracking', 'On-page optimization', 'Technical SEO audits']}
                            link="/services/seo-smo" 
                        />
                        <MiniCard 
                            icon={MegaphoneIcon}
                            title="SMO Agent"
                            subtitle="Social media optimization."
                            description="Boosts your brand's social media presence and engagement."
                            bullets={['Profile optimization', 'Content scheduling', 'Engagement analysis']}
                            link="/services/seo-smo"
                        />
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
             <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900">Pricing Plans</h2>
                        <p className="mt-4 text-gray-600">Select the power level that fits your business needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                        <PricingCard 
                            title="Starter" 
                            price="$499" 
                            features={[
                                'Access to 1 Agent Type',
                                'Standard Response Time',
                                '50 Task Executions/mo',
                                'Basic Reporting',
                                'Email Support'
                            ]} 
                        />
                        <PricingCard 
                            title="Growth" 
                            price="$999" 
                            recommended={true}
                            features={[
                                'Access to All Agents',
                                'Priority Response Time',
                                '500 Task Executions/mo',
                                'Advanced Analytics',
                                'Dedicated Account Manager',
                                'Custom Workflows'
                            ]} 
                        />
                        <PricingCard 
                            title="Enterprise" 
                            price="Custom" 
                            features={[
                                'Unlimited Agent Access',
                                'Real-time Execution',
                                'Unlimited Tasks',
                                'API Access & Integrations',
                                'White-glove Onboarding',
                                '24/7 Premium Support'
                            ]} 
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                        <p className="mt-4 text-gray-600">Common questions about working with our AI Agents.</p>
                    </div>
                    <div className="space-y-2">
                        <FAQItem question="What industries do you work with?" answer="Fashion, Retail, B2B, Healthcare, and Tech founders — basically anyone hungry to scale." />
                        <FAQItem question="Do you offer customized service packs?" answer="Yepp. Every engagement starts with a growth plan tailored to goals, timelines, and budgets." />
                        <FAQItem question="How fast can we start?" answer="On-boarding takes 3-5 days once the scope + commercials are locked." />
                        <FAQItem question="Do you work on retainer or projects?" answer="Both. Long-term retainers for scale brands & sprint-based projects for quick wins." />
                        <FAQItem question="How do you measure success?" answer="KPIs differ per service — leads, ROAS, CAC, CTR, revenue — your numbers, not fluffy vanity metrics." />
                        <FAQItem question="Can you integrate all tools with our system?" answer="100% — from Shopify and ERP to CRM & HCM platforms — we make everything work together." />
                        <FAQItem question="Do you provide content strategy too?" answer="Absolutely. Scripts, shotlists, brand books, and campaign messaging are our playground." />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AgentLandingPage;
