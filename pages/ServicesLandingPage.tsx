
import React from 'react';
import { Link } from 'react-router-dom';
import { 
    CreativeIcon, MarketingIcon, TechIcon, AutomationIcon, AiIcon,
    ArrowRightIcon, CheckCircleIcon, CameraIcon, GlobeAltIcon, ShoppingCartIcon
} from '../constants/icons';
import Breadcrumbs from '../components/Breadcrumbs';

const ServiceCategorySection: React.FC<{
    title: string;
    description: string;
    icon: React.ElementType;
    links: { label: string; to: string }[];
    colorClass: string; // e.g., text-blue-600
    bgClass?: string;
}> = ({ title, description, icon: Icon, links, colorClass, bgClass = "bg-white" }) => (
    <section className={`py-20 ${bgClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-1/3">
                    <div className={`inline-flex p-3 rounded-xl bg-opacity-10 mb-6 ${colorClass.replace('text-', 'bg-')}`}>
                        <Icon className={`h-10 w-10 ${colorClass}`} />
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
                    <Link to="/contact" className={`inline-block mt-6 font-bold ${colorClass} hover:underline`}>
                        Explore All {title} →
                    </Link>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {links.map((link, idx) => (
                        <Link 
                            key={idx} 
                            to={link.to}
                            className="group flex items-center justify-between p-5 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all bg-white"
                        >
                            <span className="font-bold text-gray-800 group-hover:text-blue-600">{link.label}</span>
                            <ArrowRightIcon className="h-5 w-5 text-gray-300 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const SubscriptionTeaser: React.FC<{
    title: string;
    includes: string;
    forWho: string;
    link: string;
}> = ({ title, includes, forWho, link }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <div className="h-1 w-12 bg-blue-600 rounded-full mb-6"></div>
        
        <div className="mb-4 flex-grow">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Includes</p>
            <p className="text-sm text-gray-600">{includes}</p>
        </div>
        
        <div className="mb-6">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">For Who</p>
            <p className="text-sm text-gray-600">{forWho}</p>
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
            <span className="text-xs font-medium text-gray-400">Monthly / Quarterly</span>
            <Link to={link} className="text-blue-600 font-bold text-sm hover:underline">
                View Subscription Page →
            </Link>
        </div>
    </div>
);

const ServicesLandingPage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Services' }]} />
            </div>

            {/* 1. HERO SECTION */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                 {/* Abstract Background */}
                 <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] -z-10 opacity-60"></div>
                 <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[100px] -z-10 opacity-60"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
                                End-to-End Tech, <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Creative & Growth Services</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                                Everything your business needs — from creative studios to performance marketing, commerce management, automations, and AI transformation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button onClick={() => document.getElementById('services-start')?.scrollIntoView({ behavior: 'smooth' })} className="bg-gray-900 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-800 transition-all shadow-lg">
                                    Explore Services
                                </button>
                                <Link to="/contact" className="bg-white text-gray-900 border-2 border-gray-100 font-bold py-4 px-8 rounded-full text-lg hover:border-gray-300 transition-all text-center">
                                    Book a Strategy Call
                                </Link>
                            </div>
                        </div>
                        {/* Hero Visual Placeholder */}
                        <div className="relative h-[500px] hidden lg:block">
                            <div className="absolute inset-0 bg-gray-100 rounded-3xl transform rotate-3 overflow-hidden shadow-2xl border border-gray-200 group">
                                <img src="https://picsum.photos/seed/services-hero/800/1000" alt="Agency Ecosystem" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 text-white">
                                    <p className="font-bold text-2xl">Growth Ecosystem</p>
                                    <p className="text-sm opacity-80">Integrated. Scalable. Modern.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="services-start"></div>

            {/* 2. SERVICE CATEGORY CARDS */}
            
            {/* A - STUDIO SERVICE */}
            <ServiceCategorySection 
                title="Studio Service"
                description="High-end creative production that converts. From catalogs to brand identity."
                icon={CameraIcon}
                colorClass="text-purple-600"
                links={[
                    { label: 'Explore Catalogue Studio →', to: '/services/studio/catalogue' },
                    { label: 'Explore Creative Studio →', to: '/services/studio/creative-studio' },
                    { label: 'Explore Brand Studio →', to: '/services/studio/brand-studio' },
                ]}
            />

            {/* B - MARKETING SERVICE */}
            <ServiceCategorySection 
                title="Marketing Service"
                description="Performance-first marketing strategies engineered for ROI and scale."
                icon={MarketingIcon}
                colorClass="text-blue-600"
                bgClass="bg-gray-50"
                links={[
                    { label: 'Lead Marketing →', to: '/services/marketing/lead-marketing' },
                    { label: 'Hyper Marketing →', to: '/services/marketing/hyper-marketing' },
                    { label: 'Media Marketing →', to: '/services/marketing/media-marketing' },
                    { label: 'Retention Marketing →', to: '/services/marketing/retention-marketing' },
                ]}
            />

            {/* C - COMMERCE */}
            <ServiceCategorySection 
                title="Commerce"
                description="End-to-end commerce solutions for D2C, B2B, and retail growth."
                icon={ShoppingCartIcon}
                colorClass="text-pink-600"
                links={[
                    { label: 'D2C →', to: '/services/commerce/d2c' },
                    { label: 'B2B →', to: '/services/commerce/b2b' },
                    { label: 'MPS →', to: '/services/commerce/mps' },
                    { label: 'QMS →', to: '/services/commerce/qms' },
                    { label: 'Retail Marketing →', to: '/services/commerce/retail-marketing' },
                ]}
            />

            {/* D - TO-AUTOMATION */}
            <ServiceCategorySection 
                title="To-Automation"
                description="Streamline operations with intelligent automation for CRM, HR, and workflows."
                icon={AutomationIcon}
                colorClass="text-green-600"
                bgClass="bg-gray-50"
                links={[
                    { label: 'CRM Automation →', to: '/services/automation/crm-automation' },
                    { label: 'HRM Automation →', to: '/services/automation/hrm-automation' },
                    { label: 'MPS Automation →', to: '/services/automation/mps-automation' },
                    { label: 'QMS Automation →', to: '/services/automation/qms-automation' },
                ]}
            />

            {/* E - AI SERVICES */}
            <ServiceCategorySection 
                title="AI Services"
                description="Leverage the power of AI for content, agents, and business systems."
                icon={AiIcon}
                colorClass="text-indigo-600"
                links={[
                    { label: 'AI Content & Creative →', to: '/services/ai/ai-content' },
                    { label: 'AI Agents & Assistants →', to: '/services/ai/ai-agents' },
                    { label: 'AI Automation Systems →', to: '/services/ai/ai-automation' },
                    { label: 'AI Integration & Consulting →', to: '/services/ai/ai-consulting' },
                ]}
            />

            {/* 3. SUBSCRIPTION MODEL TEASERS */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold mb-4">Subscription Models</h2>
                        <p className="text-gray-400 text-lg">Choose the growth engine that fits your stage.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-gray-900">
                        <SubscriptionTeaser 
                            title="Studio Agent" 
                            includes="Unltd. Creative & Shoots" 
                            forWho="Brands needing content" 
                            link="/services/studio/catalogue" 
                        />
                        <SubscriptionTeaser 
                            title="Marketing Agent" 
                            includes="Full-stack Ad Team" 
                            forWho="Growth-stage companies" 
                            link="/services/marketing/media-marketing" 
                        />
                        <SubscriptionTeaser 
                            title="Commerce Marketing" 
                            includes="Store Growth Pods" 
                            forWho="E-com & Retail brands" 
                            link="/services/commerce/d2c" 
                        />
                        <SubscriptionTeaser 
                            title="Automation Agent" 
                            includes="Workflow Ops & Maint." 
                            forWho="Ops-heavy businesses" 
                            link="/services/automation/crm-automation" 
                        />
                        <SubscriptionTeaser 
                            title="AI Services" 
                            includes="Consulting & Tooling" 
                            forWho="Future-ready corps" 
                            link="/services/ai/ai-consulting" 
                        />
                    </div>
                </div>
            </section>

            {/* 5. CTA SECTION */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-8">Let’s Build Your Growth Ecosystem.</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/contact" className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-700 transition-all shadow-lg">
                            Get Proposal
                        </Link>
                        <Link to="/contact" className="bg-white text-gray-900 border-2 border-gray-100 font-bold py-4 px-10 rounded-full text-lg hover:border-gray-300 transition-all">
                            Book Free Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesLandingPage;
