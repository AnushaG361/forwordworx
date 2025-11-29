
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    TemplateIcon, 
    RocketLaunchIcon, 
    CodeBracketIcon, 
    MobileIcon, 
    CheckCircleIcon, 
    ChevronDownIcon,
    SparklesIcon,
    ArrowRightIcon,
    GlobeAltIcon,
    ServerStackIcon,
    InterfaceIcon,
    UsersIcon
} from '../constants/icons';

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

const DetailedFeature: React.FC<{ 
    title: string; 
    description: string; 
    image: string; 
    reversed?: boolean;
}> = ({ title, description, image, reversed }) => (
    <div className={`flex flex-col md:flex-row gap-12 items-center py-12 ${reversed ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
        </div>
        <div className="flex-1 w-full">
            <div className="bg-gray-100 rounded-2xl p-2 shadow-inner">
                <img src={image} alt={title} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            </div>
        </div>
    </div>
);

const Step: React.FC<{ number: string, title: string, description: string }> = ({ number, title, description }) => (
    <div className="flex flex-col items-center text-center relative z-10">
        <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold mb-6 text-white shadow-lg border-4 border-white">
            {number}
        </div>
        <h4 className="text-xl font-bold text-gray-900">{title}</h4>
        <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const PricingCard: React.FC<{ 
    plan: string; 
    price: string; 
    features: string[]; 
    cta: string; 
    isPopular?: boolean;
}> = ({ plan, price, features, cta, isPopular }) => (
    <div className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 h-full ${isPopular ? 'bg-white border-blue-600 shadow-xl ring-1 ring-blue-600 transform scale-105 z-10' : 'bg-gray-50 border-gray-200 hover:border-blue-300 hover:shadow-lg'}`}>
        {isPopular && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm tracking-wide uppercase">Most Popular</span>
            </div>
        )}
        <h3 className="text-xl font-bold text-gray-900">{plan}</h3>
        <div className="my-6">
            <span className="text-4xl font-extrabold text-gray-900">{price}</span>
            {price !== 'Free' && <span className="text-gray-500 font-medium">/mo</span>}
        </div>
        <ul className="space-y-4 mb-8 flex-grow">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                    <CheckCircleIcon className={`h-5 w-5 mr-3 flex-shrink-0 ${isPopular ? 'text-blue-600' : 'text-gray-400'}`} />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <button className={`w-full py-3 px-6 rounded-lg font-bold transition-colors ${isPopular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white border-2 border-gray-200 text-gray-800 hover:border-gray-900 hover:text-gray-900'}`}>
            {cta}
        </button>
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

const UseCaseItem: React.FC<{ title: string }> = ({ title }) => (
    <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
        <span className="font-semibold text-gray-900">{title}</span>
    </div>
);

const RISectionStorePage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-800">
            {/* 1. Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-indigo-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative z-10">
                            <div className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-6">
                                Drag & Drop Page Builder
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                                Build High-Converting Shopify Pages in Minutes
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Access a library of premium, drag-and-drop Shopify sections and templates. Design beautiful pages without writing a single line of code.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
                                    Browse Section Library
                                </button>
                                <button className="bg-white border border-gray-300 text-gray-700 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-50 transition-colors">
                                    See Demo
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                             <div className="absolute top-10 right-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                             <div className="absolute -bottom-10 left-10 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                            <img src="https://picsum.photos/seed/section-store-hero/600/500" alt="RI Section Store Builder" className="relative rounded-2xl shadow-2xl border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Why Choose Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Why Choose RI Section Store?</h2>
                        <p className="mt-4 text-gray-600">The easiest way to upgrade your store design without hiring a developer.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard 
                            icon={RocketLaunchIcon} 
                            title="Instant Launch" 
                            description="Launch landing pages & hero banners in minutes — use pre-built sections or customise your own." 
                        />
                        <FeatureCard 
                            icon={InterfaceIcon} 
                            title="No-Code Builder" 
                            description="Drag-and-drop interface built for merchants, not developers — total control without coding." 
                        />
                        <FeatureCard 
                            icon={SparklesIcon} 
                            title="Conversion Ready" 
                            description="Optimised for conversion and speed — every section designed to load fast and perform." 
                        />
                        <FeatureCard 
                            icon={CheckCircleIcon} 
                            title="Theme Compatible" 
                            description="Compatible with ANY Shopify 2.0 theme — seamless integration, zero conflict." 
                        />
                    </div>
                </div>
            </section>

            {/* 3. Core Features - Detailed */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Core Features</h2>
                        <p className="mt-4 text-gray-600">Everything you need to build professional pages.</p>
                    </div>

                    <DetailedFeature 
                        title="Extensive Section Library"
                        description="Access hundreds of ready-made sections including hero banners, product grids, countdown timers, testimonial sliders, and FAQ accordions. Simply drop them into your store and watch your design come to life."
                        image="https://picsum.photos/seed/section-library/600/400"
                    />
                    <DetailedFeature 
                        title="Fully Customisable Design"
                        description="Maintain brand consistency with ease. Change colours, fonts, layouts, backgrounds, and see your changes in real-time. Personalize every element to match your brand identity perfectly."
                        image="https://picsum.photos/seed/section-custom/600/400"
                        reversed
                    />
                    <DetailedFeature 
                        title="Speed & Performance First"
                        description="Don't sacrifice speed for design. Our sections use lightweight code, lazy-loaded assets, and optimal markup to ensure your store remains blazing fast and scores high on Core Web Vitals."
                        image="https://picsum.photos/seed/section-speed/600/400"
                    />
                     <DetailedFeature 
                        title="Responsive & Mobile-Ready"
                        description="Every section is built mobile-first. Your pages will look beautiful and function perfectly on desktops, tablets, and smartphones with seamless responsive transitions."
                        image="https://picsum.photos/seed/section-mobile/600/400"
                        reversed
                    />
                </div>
            </section>

            {/* 4. How It Works */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
                        <p className="mt-4 text-gray-600">Three simple steps to a better looking store.</p>
                    </div>
                    <div className="relative grid md:grid-cols-3 gap-12">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-1 bg-gray-100 z-0"></div>

                        <Step 
                            number="1" 
                            title="Install & Activate" 
                            description="One-click install from the Shopify App Store. The plugin integrates seamlessly with your current theme." 
                        />
                        <Step 
                            number="2" 
                            title="Browse & Insert" 
                            description="Pick from our extensive library of sections. Customize colors, fonts, and content to fit your needs." 
                        />
                        <Step 
                            number="3" 
                            title="Publish & Optimise" 
                            description="Preview your changes across all devices. Publish live to your store, track results, and iterate." 
                        />
                    </div>
                </div>
            </section>

            {/* 5. Use Cases */}
            <section className="py-20 bg-indigo-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Perfect For Any Page</h2>
                            <p className="text-indigo-200 text-lg mb-8">
                                Whether you're building a landing page from scratch or adding flair to your homepage, RI Section Store gives you the building blocks you need.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <UseCaseItem title="Homepages & Brand Landing Pages" />
                                <UseCaseItem title="Seasonal Campaign Pages" />
                                <UseCaseItem title="Product Feature Highlights" />
                                <UseCaseItem title="Upsell & Cross-sell Sections" />
                                <UseCaseItem title="Blog & Content Layouts" />
                                <UseCaseItem title="About Us & Story Pages" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img src="https://picsum.photos/seed/section-usecase/500/400" alt="Page building examples" className="rounded-xl shadow-2xl border border-indigo-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Pricing */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
                        <p className="mt-4 text-gray-600">Start for free and upgrade as you grow.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        <PricingCard 
                            plan="Free Starter" 
                            price="Free" 
                            features={['Access to 10 Basic Sections', 'Standard Support', 'Mobile Responsive']}
                            cta="Install Free"
                        />
                        <PricingCard 
                            plan="Standard" 
                            price="$9" 
                            isPopular
                            features={['Access to 50+ Sections', 'Premium Templates', 'Priority Email Support', 'New Sections Monthly']}
                            cta="Start Free Trial"
                        />
                        <PricingCard 
                            plan="Pro" 
                            price="$29" 
                            features={['All Sections Unlocked', 'Custom Section Requests', 'Live Chat Support', 'A/B Testing Tools']}
                            cta="Go Pro"
                        />
                    </div>
                </div>
            </section>

            {/* 7. Social Proof */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Trusted by Merchants</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex text-yellow-400 mb-4 justify-center">
                                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                            </div>
                            <p className="text-gray-600 italic">"Using Section Store we cut landing-page build times by 70%. It's a game changer for our marketing team."</p>
                            <p className="mt-4 font-bold text-gray-900">— Brand XYZ</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex text-yellow-400 mb-4 justify-center">
                                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                            </div>
                            <p className="text-gray-600 italic">"Finally, a section builder that doesn't slow down my site. The designs are clean and modern."</p>
                            <p className="mt-4 font-bold text-gray-900">— The Modern Shop</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex text-yellow-400 mb-4 justify-center">
                                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                            </div>
                            <p className="text-gray-600 italic">"I love how easy it is to customize. I built a Black Friday landing page in under an hour."</p>
                            <p className="mt-4 font-bold text-gray-900">— Creative Co.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem 
                            question="What is RI Section Store?" 
                            answer="RI Section Store is a library of pre-built Shopify sections that let you design pages faster — no coding needed. Drag, drop, customise, publish. That’s it."
                        />
                        <FAQItem 
                            question="Do these sections work with all Shopify themes?" 
                            answer="Yes! All sections are built for Shopify 2.0 and work seamlessly with most themes. No theme conflict issues."
                        />
                        <FAQItem 
                            question="Can I customise the sections to match my brand?" 
                            answer={
                                <>
                                    <p className="mb-2">Absolutely. You can edit:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Colors</li>
                                        <li>Fonts</li>
                                        <li>Layouts & Backgrounds</li>
                                        <li>Text + Images</li>
                                    </ul>
                                    <p className="mt-2">Total control over every section’s look & feel.</p>
                                </>
                            }
                        />
                        <FAQItem 
                            question="Will these sections affect my store speed?" 
                            answer="Nah — all sections are optimised for performance. Lightweight code ensures fast load speeds and top-tier user experience."
                        />
                        <FAQItem 
                            question="Can I preview the section before publishing?" 
                            answer="Yep! You can see real-time previews inside the Shopify editor before going live."
                        />
                        <FAQItem 
                            question="Do I need a developer to install this?" 
                            answer="No developer required. Installation takes just a few clicks, and customisation is 100% no-code."
                        />
                         <FAQItem 
                            question="How often do you add new sections?" 
                            answer="New sections and templates are added regularly based on merchant demand and industry trends. Your library keeps growing."
                        />
                         <FAQItem 
                            question="Can I build complete landing pages using RI Section Store?" 
                            answer="100%. From hero banners to product grids, testimonials, FAQs, countdowns — you can build entire pages that convert."
                        />
                         <FAQItem 
                            question="Is it mobile-friendly?" 
                            answer="Yes, every section is responsive by design. Views will look crisp and smooth on mobile, tablet, and desktop."
                        />
                         <FAQItem 
                            question="What if I need support?" 
                            answer="We’ve got you, babe. You’ll get documentation, chat support, and onboarding help based on your subscription plan."
                        />
                    </div>
                </div>
            </section>

            {/* 9. Final CTA */}
             <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold">Ready to Upgrade Your Store Design?</h2>
                    <p className="mt-6 text-xl text-blue-100">Start building beautiful, high-converting pages today.</p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-blue-700 font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg">
                            Install Free
                        </button>
                        <button className="bg-transparent border border-white text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-white/10 transition-colors">
                            View Demo
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RISectionStorePage;
