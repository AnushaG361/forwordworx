
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    PuzzlePieceIcon, 
    MarketingIcon, 
    ShopifyIcon, 
    RocketLaunchIcon, 
    CodeBracketIcon, 
    ScaleIcon, 
    TemplateIcon, 
    MobileIcon, 
    LinkIcon, 
    CheckCircleIcon, 
    BanknotesIcon, 
    SparklesIcon, 
    ArrowRightIcon, 
    ChevronDownIcon 
} from '../constants/icons';

const PluginCard: React.FC<{ 
    icon: React.ElementType, 
    title: string, 
    oneLiner: string,
    points: string[],
    cta: string,
    link: string
}> = ({ icon: Icon, title, oneLiner, points, cta, link }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
        <div className="flex items-center space-x-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-xl">
                <Icon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6 min-h-[48px]">{oneLiner}</p>
        <ul className="space-y-3 mb-8 flex-grow">
            {points.map((point, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-500">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                </li>
            ))}
        </ul>
        <Link to={link} className="w-full block text-center bg-gray-50 hover:bg-blue-600 hover:text-white text-blue-600 font-bold py-3 rounded-lg transition-colors border border-gray-200 hover:border-transparent">
            {cta}
        </Link>
    </div>
);

const Step: React.FC<{ number: string, title: string, description: string }> = ({ number, title, description }) => (
    <div className="flex flex-col items-center text-center">
        <div className="flex-shrink-0 h-14 w-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mb-6">{number}</div>
        <h4 className="font-bold text-gray-900 text-lg">{title}</h4>
        <p className="mt-2 text-gray-600 leading-relaxed">{description}</p>
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
                <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>{question}</span>
                <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                <div className="text-gray-600 leading-relaxed text-base">{answer}</div>
            </div>
        </div>
    );
};

const RiaddonPage: React.FC = () => {
    const scrollToPlugins = () => {
        const element = document.getElementById('plugins-grid');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white text-gray-800 font-sans">
            {/* 1. Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-gray-900 text-white">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                 <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                 <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                         <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 border border-blue-400 text-blue-300 text-sm font-bold tracking-wide uppercase mb-6">
                            Shopify Plugin Suite
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                            Unlock the True Potential of Your Shopify Store
                        </h1>
                        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                            RI Addon is a powerful suite of Shopify plugins that level up your store’s design, performance, and customer experience — from mobile apps and sections to returns, COD, and more.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <button onClick={scrollToPlugins} className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg shadow-blue-500/30">
                                View All Plugins
                            </button>
                            <Link to="/contact" className="inline-block bg-transparent border border-gray-400 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white/10 transition-colors">
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center relative">
                        {/* Abstract visual representation of plugins */}
                        <div className="relative w-full max-w-md">
                            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                            <img src="https://picsum.photos/seed/riaddon-dashboard/600/500" alt="RI Addon Suite Dashboard" className="relative rounded-xl shadow-2xl border border-gray-700/50 backdrop-blur-sm" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 2. Why RI Addon */}
            <section className="py-20 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center md:text-left">
                            <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm mb-4 mx-auto md:mx-0">
                                <PuzzlePieceIcon className="h-6 w-6 text-blue-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 text-lg">All-in-one Toolkit</h4>
                            <p className="mt-2 text-sm text-gray-600">Mobile apps, sections, size charts, product options, returns, themes, and more.</p>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm mb-4 mx-auto md:mx-0">
                                <CodeBracketIcon className="h-6 w-6 text-blue-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 text-lg">No-code Friendly</h4>
                            <p className="mt-2 text-sm text-gray-600">Built for merchants, not developers. Simple setup and drag-and-drop UX.</p>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm mb-4 mx-auto md:mx-0">
                                <RocketLaunchIcon className="h-6 w-6 text-blue-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 text-lg">Optimized for Speed</h4>
                            <p className="mt-2 text-sm text-gray-600">Plugins are designed with clean code to not slow down your store.</p>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm mb-4 mx-auto md:mx-0">
                                <ShopifyIcon className="h-6 w-6 text-blue-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 text-lg">Universal Compatibility</h4>
                            <p className="mt-2 text-sm text-gray-600">Works seamlessly with most Shopify themes and storefronts.</p>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-blue-800 font-medium bg-blue-50 inline-block px-4 py-2 rounded-full text-sm">Use one plugin or the full stack — RI Addon tools are built to work together smoothly.</p>
                    </div>
                </div>
            </section>

            {/* 3. All Plugins Grid */}
            <section id="plugins-grid" className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Explore All RI Addon Plugins</h2>
                        <p className="mt-4 text-lg text-gray-600">Pick the tools you need — or stack them for a fully optimized Shopify store.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <PluginCard 
                            icon={ScaleIcon}
                            title="RI Size Chart"
                            oneLiner="Customizable size charts that reduce returns and give shoppers confidence."
                            points={['Product-specific or global charts', 'Support for clothing & footwear', 'Improve fit accuracy']}
                            cta="Learn More"
                            link="/products/riaddon/size-chart"
                        />
                         <PluginCard 
                            icon={TemplateIcon}
                            title="RI Section Store"
                            oneLiner="Pre-built Shopify sections and templates to design high-converting pages."
                            points={['Large library of ready-made sections', 'Drag-and-drop into any theme', 'Perfect for landing pages']}
                            cta="Explore Sections"
                            link="/products/riaddon/section-store"
                        />
                         <PluginCard 
                            icon={MobileIcon}
                            title="RI Mobile App Builder"
                            oneLiner="Turn your Shopify store into a fully synced mobile app that boosts engagement."
                            points={['Real-time sync with Shopify', 'Native app-like experience', 'Push notifications included']}
                            cta="Build My App"
                            link="/products/riaddon/mobile-app"
                        />
                         <PluginCard 
                            icon={LinkIcon}
                            title="RI Return & Exchange"
                            oneLiner="A simple portal to manage returns, exchanges, and refunds."
                            points={['Self-service customer portal', 'Central tracking of requests', 'Reduced support load']}
                            cta="Simplify Returns"
                            link="/products/riaddon/return-exchange"
                        />
                         <PluginCard 
                            icon={RocketLaunchIcon}
                            title="RI Quick Commerce"
                            oneLiner="Advanced checkout & commerce controls that make your store faster."
                            points={['Enhanced checkout experience', 'Real-time inventory updates', 'In-depth analytics']}
                            cta="Boost Checkout"
                            link="/products/riaddon/quick-commerce"
                        />
                         <PluginCard 
                            icon={CheckCircleIcon}
                            title="RI Product Option"
                            oneLiner="Powerful custom product options that go beyond Shopify’s default variants."
                            points={['Add text, dropdowns, swatches', 'Real-time pricing updates', 'Multi-product support']}
                            cta="Customize Products"
                            link="/products/riaddon/product-option"
                        />
                         <PluginCard 
                            icon={BanknotesIcon}
                            title="RI COD Addon"
                            oneLiner="Flexible Cash-on-Delivery controls tailored for high-intent buyers."
                            points={['Enable/disable by pin code', 'Extra COD fee capability', 'Simple checkout integration']}
                            cta="Manage COD"
                            link="/products/riaddon/cod"
                        />
                         <PluginCard 
                            icon={SparklesIcon}
                            title="RI Themes"
                            oneLiner="Premium Shopify themes built for speed, conversion, and modern aesthetics."
                            points={['Optimized for Core Web Vitals', 'Compatible with all RI plugins', 'Modern, clean designs']}
                            cta="Browse Themes"
                            link="/contact"
                        />
                    </div>
                </div>
            </section>

            {/* 4. How It Works */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-16">How It Works</h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                         {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-200 -z-0"></div>

                        <Step number="1" title="Choose Your Plugins" description="Pick the tools your Shopify store needs right now." />
                        <Step number="2" title="Install & Configure" description="Simple onboarding, guided setup, and no-code controls." />
                        <Step number="3" title="Optimize & Scale" description="Use analytics, A/B tweaks, and additional plugins as you grow." />
                    </div>
                    <div className="mt-16">
                        <Link to="/contact" className="text-blue-600 font-bold hover:text-blue-800 flex items-center justify-center">
                            Need help choosing? <span className="underline ml-2">Book a Demo</span> <ArrowRightIcon className="h-4 w-4 ml-1" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. FAQs */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                        <p className="mt-4 text-gray-600">Everything you need to know about the RI Addon suite.</p>
                    </div>
                    <div className="space-y-2">
                        <FAQItem 
                            question="What is RI Addon?" 
                            answer="RI Addon is a suite of powerful Shopify plugins that improve your store’s design, checkout experience, performance, and post-purchase workflows — without coding."
                        />
                        <FAQItem 
                            question="Do these plugins work with any Shopify theme?" 
                            answer="Yup! All plugins are theme-agnostic and compatible with most Shopify 2.0 and Classic themes."
                        />
                        <FAQItem 
                            question="Do I need coding skills to use these tools?" 
                            answer="Zero coding. Everything is drag-and-drop and merchant-friendly. Put simply: install → enable → customize."
                        />
                        <FAQItem 
                            question="Can I use more than one plugin together?" 
                            answer="For sure. The plugins are designed to work perfectly together so you can build a complete shopping experience for your customers."
                        />
                        <FAQItem 
                            question="Will the plugins slow down my store?" 
                            answer="Nope. Every plugin is optimized for fast loading, clean code, and minimal script weight to maintain top Core Web Vitals."
                        />
                         <FAQItem 
                            question="Do you provide support for setup and troubleshooting?" 
                            answer="Absolutely. We provide dedicated support plus onboarding assistance to help you configure everything smoothly."
                        />
                        <FAQItem 
                            question="Is there a free trial?" 
                            answer="Most plugins include trial options so you can test before committing."
                        />
                        <FAQItem 
                            question="Can I customize the design to match my brand?" 
                            answer="Yes — styles like fonts, colors, button shapes, and image layouts can be tailored to perfectly match your store’s branding."
                        />
                        <FAQItem 
                            question="How do updates work?" 
                            answer="New features + improvements roll out automatically. No manual downloading, no downtime."
                        />
                         <FAQItem 
                            question="What happens if I uninstall a plugin?" 
                            answer="Your store remains intact — the plugin simply disconnects. Data syncing and UI components stop cleanly without breaking layouts."
                        />
                         <FAQItem 
                            question="Is training available for my team?" 
                            answer="Yes. We offer onboarding walkthroughs, guides, and demo calls so your team can run independently."
                        />
                         <FAQItem 
                            question="Who should use RI Addon?" 
                            answer={
                                <>
                                    <p className="mb-2">Stores that want:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Better product pages & custom options</li>
                                        <li>Mobile app version of their shop</li>
                                        <li>Faster checkout & smart COD control</li>
                                        <li>Section-based design freedom</li>
                                        <li>Easy returns & exchanges</li>
                                    </ul>
                                </>
                            }
                        />
                    </div>
                </div>
            </section>

            {/* 6. Closing CTA */}
            <section className="py-24 bg-blue-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900">Ready to Power Up Your Shopify Store?</h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Install a single plugin to fix one problem — or plug in the full RI Addon stack for a complete upgrade across design, UX, and operations.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <button onClick={scrollToPlugins} className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-50 border border-blue-200 transition-colors shadow-sm">
                            View All Plugins
                        </button>
                        <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
                            Book a Demo
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RiaddonPage;
