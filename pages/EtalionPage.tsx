
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    TemplateIcon, 
    GlobeAltIcon, 
    InventoryIcon, 
    TruckIcon, 
    MegaphoneIcon, 
    DocumentCheckIcon, 
    CheckCircleIcon, 
    ChevronDownIcon,
    ArrowRightIcon,
    RocketLaunchIcon,
    UsersIcon,
    BanknotesIcon
} from '../constants/icons';
import Breadcrumbs from '../components/Breadcrumbs';

const ServiceCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl border border-pink-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
        <div className="w-14 h-14 bg-pink-50 rounded-xl flex items-center justify-center mb-6">
            <Icon className="h-7 w-7 text-pink-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const WhyChooseItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
        <div className="flex-shrink-0 mt-1">
            <CheckCircleIcon className="h-6 w-6 text-pink-500" />
        </div>
        <div>
            <h4 className="font-bold text-gray-900 text-lg">{title}</h4>
            <p className="text-gray-600 mt-1">{description}</p>
        </div>
    </div>
);

const EngagementCard: React.FC<{ title: string, subtitle: string, priceType: string, features: string[], linkText: string, highlight?: boolean }> = ({ title, subtitle, priceType, features, linkText, highlight }) => (
    <div className={`p-8 rounded-2xl border shadow-sm flex flex-col h-full transition-all duration-300 ${highlight ? 'bg-white border-pink-500 shadow-xl relative transform md:-translate-y-4' : 'bg-white border-gray-200'}`}>
        {highlight && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase shadow-md">
                Growth Partner
            </div>
        )}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">{subtitle}</p>
        <div className="my-6">
            <span className="text-2xl font-extrabold text-gray-900">{priceType}</span>
        </div>
        <ul className="space-y-3 mb-8 flex-grow">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-600">
                    <CheckCircleIcon className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0"/>
                    {feature}
                </li>
            ))}
        </ul>
        <Link to="/contact" className={`block w-full py-3 text-center font-bold rounded-lg transition-colors ${highlight ? 'bg-pink-600 text-white hover:bg-pink-700' : 'bg-gray-50 text-gray-800 hover:bg-gray-100 border border-gray-200'}`}>
            {linkText}
        </Link>
    </div>
);

const FAQItem: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
            >
                <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-pink-600' : 'text-gray-900 group-hover:text-pink-600'}`}>{question}</span>
                <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-pink-600' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                <div className="text-gray-600 leading-relaxed text-base">{answer}</div>
            </div>
        </div>
    );
};

const EtalionPage: React.FC = () => {
    return (
        <div className="bg-white text-gray-800 font-sans">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Products', path: '/products' }, { label: 'EtaliOn' }]} />
            </div>

            {/* 1. Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-gray-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative z-10">
                            <span className="text-pink-600 font-bold tracking-wider uppercase text-sm mb-4 block">
                                Etailon — Your Digital Commerce & Retail Growth Partner
                            </span>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                                Scale Your Business Online. <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Smart. Fast. Reliable.</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed mb-10">
                                From e-commerce setup to multi-channel retail expansion — we make digital retail work.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="inline-block bg-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-pink-700 transition-transform transform hover:scale-105 shadow-lg shadow-pink-500/30">
                                    Get A Free Audit
                                </Link>
                                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="inline-block bg-white border-2 border-gray-200 text-gray-800 font-bold py-4 px-8 rounded-full text-lg hover:border-gray-400 transition-colors">
                                    View Our Services
                                </button>
                            </div>
                        </div>
                        <div className="relative flex justify-center">
                            <div className="absolute top-10 right-10 w-full h-full bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                            <div className="absolute -bottom-10 left-10 w-full h-full bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                            
                            {/* Hero Visual: Dashboard + Mobile + Retail */}
                            <div className="relative w-full max-w-lg">
                                <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden aspect-[4/3]">
                                    {/* Dashboard Header */}
                                    <div className="bg-gray-50 p-3 border-b border-gray-200 flex space-x-2 items-center">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        <div className="h-4 bg-gray-200 rounded w-1/3 ml-4"></div>
                                    </div>
                                    
                                    <div className="p-6 grid grid-cols-3 gap-4 h-full relative">
                                        {/* Main Dashboard Area */}
                                        <div className="col-span-2 bg-white rounded-lg border border-gray-100 p-4 shadow-sm z-10">
                                            <div className="h-4 w-1/2 bg-gray-100 rounded mb-4"></div>
                                            <div className="h-32 bg-pink-50 rounded border border-pink-100 mb-4"></div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="h-12 bg-gray-50 rounded"></div>
                                                <div className="h-12 bg-gray-50 rounded"></div>
                                            </div>
                                        </div>
                                        
                                        {/* Mobile App Interface */}
                                        <div className="col-span-1 absolute bottom-0 right-6 w-28 h-48 bg-gray-900 rounded-t-xl p-2 border-x-4 border-t-4 border-gray-800 shadow-xl z-20">
                                            <div className="bg-white w-full h-full rounded-t-lg p-2">
                                                <div className="h-2 w-8 bg-gray-200 rounded mx-auto mb-2"></div>
                                                <div className="h-16 bg-pink-100 rounded mb-2"></div>
                                                <div className="h-2 w-full bg-gray-100 rounded mb-1"></div>
                                                <div className="h-2 w-2/3 bg-gray-100 rounded"></div>
                                            </div>
                                        </div>

                                        {/* Retail Tag */}
                                        <div className="absolute top-20 right-4 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100 flex items-center z-0 opacity-80">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                            <span className="text-xs font-bold text-gray-600">POS Active</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Intro Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">End-to-End Digital Retail Ecosystems</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-10">
                        At Etailon, we specialize in building the complete infrastructure for your online success. Whether you’re stepping into e-commerce for the first time or scaling up multiple channels, we’ve got the infrastructure + team to make it happen.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                        <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-pink-200 transition-colors">
                            <TemplateIcon className="h-8 w-8 text-pink-600 mb-3" />
                            <div className="font-bold text-gray-900">Online Store Setup</div>
                        </div>
                        <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-pink-200 transition-colors">
                            <InventoryIcon className="h-8 w-8 text-pink-600 mb-3" />
                            <div className="font-bold text-gray-900">Product & Catalog</div>
                        </div>
                        <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-pink-200 transition-colors">
                            <GlobeAltIcon className="h-8 w-8 text-pink-600 mb-3" />
                            <div className="font-bold text-gray-900">Multi-channel Sales</div>
                        </div>
                        <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-pink-200 transition-colors">
                            <TruckIcon className="h-8 w-8 text-pink-600 mb-3" />
                            <div className="font-bold text-gray-900">Logistics & Ops</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Services Grid */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Services</h2>
                        <p className="mt-4 text-lg text-gray-600">Key offerings to build your online engine.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard 
                            icon={TemplateIcon} 
                            title="E-Commerce Store Creation" 
                            description="Build your Shopify / WooCommerce / custom store with sleek UX, mobile-first design & high performance." 
                        />
                        <ServiceCard 
                            icon={GlobeAltIcon} 
                            title="Multi-Channel Sales Enablement" 
                            description="Sell on your website, marketplaces, mobile apps & offline systems — all integrated." 
                        />
                        <ServiceCard 
                            icon={InventoryIcon} 
                            title="Inventory & Order Management" 
                            description="Stay in control with real-time stock sync, order routing & vendor workflows." 
                        />
                        <ServiceCard 
                            icon={TruckIcon} 
                            title="Logistics & Fulfilment Solutions" 
                            description="Optimize delivery zones, tracking, returns and streamline your supply chain." 
                        />
                        <ServiceCard 
                            icon={MegaphoneIcon} 
                            title="Digital Marketing & Performance" 
                            description="Drive traffic, manage media buying, convert high-intent leads and grow revenue." 
                        />
                        <ServiceCard 
                            icon={DocumentCheckIcon} 
                            title="Compliance & Business Setup" 
                            description="From GST to trade licences, we support your digital business foundation so you don’t get held back." 
                        />
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Etailon */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Etailon?</h2>
                            <div className="space-y-3">
                                <WhyChooseItem title="One stop for retail + tech" description="No juggling multiple agencies." />
                                <WhyChooseItem title="Tailored to your scale" description="Startup to enterprise, we adjust." />
                                <WhyChooseItem title="Proven frameworks" description="We’ve worked across sectors and deliver measurable outcomes." />
                                <WhyChooseItem title="Support that’s real" description="We don’t disappear after launch." />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl transform rotate-3"></div>
                            <img src="https://picsum.photos/seed/retail-framework/600/500" alt="Retail Framework" className="relative rounded-2xl shadow-xl hover:rotate-0 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Ideal For */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">Ideal For</h2>
                        <p className="mt-4 text-gray-400">We work best with:</p>
                    </div>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                        <div className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700">
                            <h4 className="font-bold">Apparel & Fashion</h4>
                            <p className="text-xs text-gray-400 mt-1">Ready to go online</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700">
                            <h4 className="font-bold">Retail Chains</h4>
                            <p className="text-xs text-gray-400 mt-1">Moving to D2C + Omnichannel</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700">
                            <h4 className="font-bold">Enterprises</h4>
                            <p className="text-xs text-gray-400 mt-1">Complex inventory + orders</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700">
                            <h4 className="font-bold">Startups</h4>
                            <p className="text-xs text-gray-400 mt-1">Launching fast</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700">
                            <h4 className="font-bold">Compliance Heavy</h4>
                            <p className="text-xs text-gray-400 mt-1">Full logistics support</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Pricing / Engagement Models */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Pricing & Engagement Models</h2>
                        <p className="mt-4 text-gray-600">Transparent pricing tailored to your growth stage.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <EngagementCard 
                            title="Store Launch" 
                            subtitle="For new brands going online." 
                            priceType="Project Based" 
                            features={['Design & Setup', 'Catalog Upload', 'Payment Integration', '2 Weeks Support']} 
                            linkText="Get Quote" 
                        />
                        <EngagementCard 
                            title="Growth Retainer" 
                            subtitle="For scaling D2C businesses." 
                            priceType="Monthly Retainer" 
                            features={['Performance Marketing', 'Tech Maintenance', 'CRO & A/B Testing', 'Bi-Weekly Strategy']} 
                            linkText="Start Growth" 
                            highlight
                        />
                        <EngagementCard 
                            title="Enterprise" 
                            subtitle="High volume & retail chains." 
                            priceType="Custom Enterprise" 
                            features={['ERP & POS Sync', 'Multi-Warehouse Ops', 'Custom Development', 'Dedicated Manager']} 
                            linkText="Contact Sales" 
                        />
                    </div>
                </div>
            </section>

            {/* 7. FAQs */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">FAQs — Etailon EBusiness Solutions</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem 
                            question="1️⃣ What platforms do you work on?" 
                            answer="We support Shopify, WooCommerce, Magento as well as fully custom builds and integrations for enterprise workflows."
                        />
                        <FAQItem 
                            question="2️⃣ How long does it take to launch an online store with you?" 
                            answer="Depending on scope and design, typical launch time for a standard store is 4–6 weeks. Faster for lighter builds."
                        />
                        <FAQItem 
                            question="3️⃣ Will you handle logistics and fulfilment too?" 
                            answer="Yes — we assist with delivery zone setup, courier integrations, returns workflows and inventory logistics."
                        />
                        <FAQItem 
                            question="4️⃣ Do you manage marketplaces and offline + online integration?" 
                            answer="Absolutely. We enable multi-channel sales including marketplaces, web stores, mobile apps and sync them for data consistency."
                        />
                        <FAQItem 
                            question="5️⃣ What about compliance, licences & tax?" 
                            answer="We offer advisory on business setup, GST registration, licenses, trade documentation so you’re covered on the legal/financial side."
                        />
                        <FAQItem 
                            question="6️⃣ Are digital marketing services included?" 
                            answer="Yes — we provide performance marketing, media buying, lead generation and e-commerce growth strategies."
                        />
                        <FAQItem 
                            question="7️⃣ Will I own the store and data?" 
                            answer="100%. You retain ownership of your site, code, data and customer base. We build for you, but you own it."
                        />
                        <FAQItem 
                            question="8️⃣ What kinds of support do you provide post-launch?" 
                            answer="We offer ongoing support, maintenance, analytics, growth optimisation and scaling services, according to your plan."
                        />
                        <FAQItem 
                            question="9️⃣ How is pricing structured?" 
                            answer="Pricing is scoped custom-based: depends on the store size, integrations, number of channels, volumes and support level. We’ll share a detailed quote after discovery."
                        />
                        <FAQItem 
                            question="🔟 Can you handle inventory for multiple warehouses/locations?" 
                            answer="Yes — we build workflows to manage multiple fulfilment centres, routing logic, real-time stock tracking and delivery optimisation."
                        />
                    </div>
                </div>
            </section>

            {/* 8. Final CTA */}
            <section className="py-24 bg-pink-600 text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold">Ready to take your retail game digital?</h2>
                    <p className="mt-6 text-xl text-pink-100">Let’s build your online engine.</p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="inline-block bg-white text-pink-600 font-bold py-4 px-12 rounded-full text-lg hover:bg-pink-50 transition-colors shadow-xl">
                            Schedule Strategy Call
                        </Link>
                        <button className="bg-transparent border border-white text-white font-bold py-4 px-12 rounded-full text-lg hover:bg-white/10 transition-colors">
                            Download Capability Deck
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EtalionPage;
