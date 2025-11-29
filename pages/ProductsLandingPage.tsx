
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HcmIcon, CrmIcon, ErpIcon, ScmIcon, ArrowRightIcon, CheckCircleIcon, ChevronDownIcon, ShoppingCartIcon, PuzzlePieceIcon, RocketLaunchIcon } from '../constants/icons';
import Breadcrumbs from '../components/Breadcrumbs';

const ProductCard: React.FC<{ 
    title: string; 
    tagline: string; 
    description: string; 
    link: string;
    icon: React.ElementType;
    color: string;
}> = ({ title, tagline, description, link, icon: Icon, color }) => {
    const isExternal = link.startsWith('http');
    const content = (
        <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 h-full overflow-hidden flex flex-col relative transform hover:-translate-y-1`}>
            <div className={`absolute top-0 left-0 w-full h-1 ${color}`}></div>
            <div className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl ${color.replace('bg-', 'bg-opacity-10 bg-')} text-${color.replace('bg-', '')}-600`}>
                        <Icon className={`h-8 w-8 ${color.replace('bg-', 'text-')}`} />
                    </div>
                    <ArrowRightIcon className="h-5 w-5 text-gray-300 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                <p className={`text-sm font-bold uppercase tracking-wide mt-1 mb-4 ${color.replace('bg-', 'text-')}`}>{tagline}</p>
                <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
            </div>
        </div>
    );

    if (isExternal) {
        return (
            <a href={link} className="group block h-full">
                {content}
            </a>
        );
    }

    return (
        <Link to={link} className="group block h-full">
            {content}
        </Link>
    );
};

const AutomationCard: React.FC<{ icon: React.ElementType; title: string; tagline: string; description: string; link: string; }> = ({ icon: Icon, title, tagline, description, link }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-300 transition-colors duration-300 flex flex-col h-full">
        <div className="flex items-start space-x-4 mb-4">
            <div className="bg-gray-50 p-3 rounded-lg flex-shrink-0">
                <Icon className="h-6 w-6 text-gray-700" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mt-0.5">{tagline}</p>
            </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed flex-grow">{description}</p>
        <div className="mt-6 pt-4 border-t border-gray-100">
            <Link to={link} className="text-sm font-bold text-gray-900 hover:text-blue-600 flex items-center group">
                Explore Module <ArrowRightIcon className="h-3 w-3 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
    </div>
);

const PricingCard: React.FC<{
    title: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
}> = ({ title, price, description, features, isPopular }) => (
    <div className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 h-full ${isPopular ? 'bg-gray-900 text-white border-gray-900 shadow-2xl scale-105 z-10' : 'bg-white text-gray-900 border-gray-200 hover:shadow-xl'}`}>
        {isPopular && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg tracking-wide uppercase">Best Value</span>
            </div>
        )}
        <h3 className="text-xl font-bold">{title}</h3>
        <p className={`mt-2 text-sm min-h-[40px] ${isPopular ? 'text-gray-300' : 'text-gray-500'}`}>{description}</p>
        <div className="my-6">
            <span className="text-4xl font-extrabold">{price}</span>
            {price !== 'Custom' && <span className={`font-medium ${isPopular ? 'text-gray-400' : 'text-gray-500'}`}>/mo</span>}
        </div>
        <div className="flex-grow">
            <ul className="space-y-4">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                        <CheckCircleIcon className={`h-5 w-5 mr-3 flex-shrink-0 ${isPopular ? 'text-blue-400' : 'text-blue-600'}`} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="mt-8">
            <Link 
                to="/contact" 
                className={`w-full block text-center py-4 px-6 rounded-lg font-bold transition-all ${isPopular ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/50' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
            >
                Get Started
            </Link>
        </div>
    </div>
);

const FAQItem: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
            >
                <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>{question}</span>
                <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <div className="text-gray-600 leading-relaxed pr-8">{answer}</div>
            </div>
        </div>
    );
};

const ProductsLandingPage: React.FC = () => {
    return (
        <div className="bg-white text-gray-800 font-sans">
            <main className="overflow-hidden">
                {/* Breadcrumbs */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                    <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Products' }]} />
                </div>

                {/* 1. Hero Section */}
                <section className="relative py-24 md:py-36 bg-gray-900 text-white overflow-hidden">
                    {/* Abstract Background Elements */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-sm">
                            The Forwardworkx Ecosystem
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
                            Automate your store. <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Accelerate your sales.</span>
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-2xl text-gray-300 leading-relaxed font-medium">
                            One ecosystem. Infinite revenue.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact" className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/40">
                                Explore Products
                            </Link>
                            <Link to="/contact" className="inline-flex items-center justify-center bg-transparent border border-gray-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-white/10 transition-colors">
                                Talk to Sales
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 2. Commerce Products Section */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Commerce Solutions</h2>
                            <p className="mt-4 text-lg text-gray-600">Powerful engines to launch, manage, and scale your sales channels.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ProductCard 
                                icon={ShoppingCartIcon}
                                title="Rietail" 
                                tagline="Wholesale & B2B Management"
                                description="A specialized B2B platform managing complex pricing, bulk orders, and buyer workflows with Enterprise-grade control." 
                                link="/products/rietail-builder"
                                color="bg-blue-500"
                            />
                            <ProductCard 
                                icon={PuzzlePieceIcon}
                                title="RIAddon" 
                                tagline="Shopify Growth Plugins"
                                description="A modular suite of plugins—size charts, mobile apps, section builders—to supercharge your existing Shopify store." 
                                link="/products/riaddon"
                                color="bg-purple-500"
                            />
                            <ProductCard 
                                icon={RocketLaunchIcon} 
                                title="EtaliOn" 
                                tagline="D2C Store Launchpad"
                                description="The all-in-one launchpad for D2C brands. Get a beautiful store, payments, and management tools in minutes." 
                                link="/products/etalion"
                                color="bg-pink-500"
                            />
                        </div>
                    </div>
                </section>

                {/* 3. Business Automation Products Section */}
                <section className="py-24 bg-white border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">ToAutomation Suite</h2>
                            <p className="mt-4 text-lg text-gray-600">The operating system for your internal business processes.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <AutomationCard 
                                icon={HcmIcon} 
                                title="HCM" 
                                tagline="People Operations"
                                description="Automate the employee lifecycle: onboarding, payroll, performance, and compliance." 
                                link="/products/hcm" 
                            />
                            <AutomationCard 
                                icon={CrmIcon} 
                                title="CRM" 
                                tagline="Customer Intelligence"
                                description="Turn relationships into revenue with automated pipelines and deep customer insights." 
                                link="/contact" 
                            />
                            <AutomationCard 
                                icon={ErpIcon} 
                                title="ERP" 
                                tagline="Business Core"
                                description="The central nervous system connecting finance, ops, and planning." 
                                link="/contact" 
                            />
                            <AutomationCard 
                                icon={ScmIcon} 
                                title="SCM" 
                                tagline="Supply Chain"
                                description="End-to-end visibility from raw material sourcing to final mile delivery." 
                                link="/contact" 
                            />
                        </div>
                    </div>
                </section>

                 {/* 4. Ecosystem Pricing Section */}
                 <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl font-extrabold text-gray-900">Flexible Licensing</h2>
                            <p className="mt-4 text-gray-600">Start with a single module or deploy the full ecosystem.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
                            <PricingCard 
                                title="Starter Product"
                                price="$299"
                                description="Single product license (e.g. HCM or EtaliOn) for small businesses."
                                features={[
                                    '1 Core Product Module',
                                    'Standard Email Support',
                                    'Basic Analytics Dashboard',
                                    '5 Admin Users',
                                    'Cloud Hosting Included'
                                ]}
                            />
                             <PricingCard 
                                title="Growth Bundle"
                                price="$1,499"
                                description="Combine commerce and automation for scaling operations."
                                isPopular={true}
                                features={[
                                    'Access to 3 Products',
                                    'Priority 24/7 Support',
                                    'Cross-Product Data Sync',
                                    'Unlimited Users',
                                    'API Access & Webhooks'
                                ]}
                            />
                             <PricingCard 
                                title="Full Ecosystem"
                                price="Custom"
                                description="Complete enterprise digital transformation."
                                features={[
                                    'All Products Unlocked',
                                    'Dedicated Success Manager',
                                    'Custom Integrations & SSO',
                                    '99.99% Uptime SLA',
                                    'On-Premise Deployment Option'
                                ]}
                            />
                        </div>
                    </div>
                </section>

                 {/* 5. FAQ Section */}
                 <section className="py-24 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-extrabold text-gray-900">Common Questions</h2>
                            <p className="mt-4 text-gray-600">How our ecosystem fits into your business.</p>
                        </div>
                        <div className="space-y-2">
                            <FAQItem 
                                question="1️⃣ What platforms do your products support?" 
                                answer="Most of our tools are built natively for Shopify, with selected products available for custom e-commerce and omnichannel setups."
                            />
                            <FAQItem 
                                question="2️⃣ How fast can I get started?" 
                                answer={
                                    <>
                                        <p>Most products can go live in 48–72 hours once access and basic settings are done.</p>
                                        <p className="mt-1">More advanced automation tools may take 1–2 weeks depending on integration needs.</p>
                                    </>
                                }
                            />
                            <FAQItem 
                                question="3️⃣ Do I need a developer to use your products?" 
                                answer={
                                    <>
                                        <p>Nope — everything is no-code.</p>
                                        <p className="mt-1">If you ever need help, our support team handles onboarding and configuration for you.</p>
                                    </>
                                }
                            />
                             <FAQItem 
                                question="4️⃣ Will your apps slow down my website/app performance?" 
                                answer="Absolutely not. We use optimized scripts + server-side rendering to keep stores fast and smooth ⚡"
                            />
                            <FAQItem 
                                question="5️⃣ Are all features customizable to my brand?" 
                                answer="Yes — UI, colors, button styles, wording, branding — all can be matched to your brand identity 💅"
                            />
                            <FAQItem 
                                question="6️⃣ Do you help with publishing mobile apps?" 
                                answer={
                                    <>
                                        <p>Totally.</p>
                                        <p className="mt-1">From developer accounts to compliance approvals — we submit and manage App Store + Play Store publishing for you.</p>
                                    </>
                                }
                            />
                            <FAQItem 
                                question="7️⃣ How do pricing and billing work?" 
                                answer={
                                    <>
                                        <p className="mb-2">Simple subscription plans based on:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Feature requirements</li>
                                            <li>Store size / order volume</li>
                                            <li>Number of locations / apps installed</li>
                                        </ul>
                                        <p className="mt-2">No heavy upfront development fees 🚫💸</p>
                                    </>
                                }
                            />
                            <FAQItem 
                                question="8️⃣ Is training or onboarding included?" 
                                answer={
                                    <>
                                        <p className="mb-2">Yes — we provide:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Live onboarding sessions</li>
                                            <li>Knowledge base docs</li>
                                            <li>Ongoing feature guidance</li>
                                        </ul>
                                        <p className="mt-2">We don’t leave you hanging 🫶</p>
                                    </>
                                }
                            />
                            <FAQItem 
                                question="9️⃣ What type of support do you provide?" 
                                answer={
                                    <>
                                        <p className="mb-2">Dedicated support team with:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Live chat</li>
                                            <li>Email support</li>
                                            <li>Ticketing</li>
                                        </ul>
                                        <p className="mt-2">Priority SLAs for growth plans.</p>
                                    </>
                                }
                            />
                            <FAQItem 
                                question="🔟 Can your products integrate with our existing systems?" 
                                answer={
                                    <>
                                        <p className="mb-2">Yes! Depending on your suite, integrations available for:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>CRM</li>
                                            <li>ERP</li>
                                            <li>POS</li>
                                            <li>Delivery systems</li>
                                            <li>Wallets & payment gateways</li>
                                        </ul>
                                        <p className="mt-2">Our ecosystem is built for connectivity.</p>
                                    </>
                                }
                            />
                        </div>
                    </div>
                </section>

                {/* 6. Final CTA */}
                <section className="py-24 bg-blue-600">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-extrabold text-white">Ready to Modernize Your Operations?</h2>
                        <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
                            Join forward-thinking brands that use our ecosystem to scale faster and work smarter.
                        </p>
                        <div className="mt-10">
                            <Link to="/contact" className="inline-block bg-white text-blue-600 font-bold py-4 px-12 rounded-xl text-lg hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-2xl">
                                Request a Demo
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProductsLandingPage;
