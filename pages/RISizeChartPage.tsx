
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    ScaleIcon, 
    GlobeAltIcon, 
    CodeBracketIcon, 
    MobileIcon, 
    TrendingUpIcon, 
    CheckCircleIcon, 
    ChevronDownIcon,
    TemplateIcon,
    SparklesIcon,
    ArrowRightIcon
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
    items: string[]; 
    image: string; 
    reversed?: boolean;
}> = ({ title, description, items, image, reversed }) => (
    <div className={`flex flex-col md:flex-row gap-12 items-center py-16 ${reversed ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-lg text-gray-600 mb-6">{description}</p>
            <ul className="space-y-3">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex-1 w-full">
            <div className="bg-gray-100 rounded-2xl p-4 shadow-inner">
                <img src={image} alt={title} className="rounded-xl shadow-lg w-full h-auto object-cover" />
            </div>
        </div>
    </div>
);

const PricingCard: React.FC<{ 
    plan: string; 
    price: string; 
    highlights: string[]; 
    cta: string; 
    isPopular?: boolean;
}> = ({ plan, price, highlights, cta, isPopular }) => (
    <div className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 h-full ${isPopular ? 'bg-white border-blue-600 shadow-xl ring-1 ring-blue-600 transform scale-105 z-10' : 'bg-gray-50 border-gray-200 hover:border-blue-300 hover:shadow-lg'}`}>
        {isPopular && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm tracking-wide uppercase">Most Popular</span>
            </div>
        )}
        <h3 className="text-xl font-bold text-gray-900">{plan}</h3>
        <div className="my-6">
            <span className="text-4xl font-extrabold text-gray-900">{price}</span>
            {price !== '$0' && <span className="text-gray-500 font-medium">/mo</span>}
        </div>
        <ul className="space-y-4 mb-8 flex-grow">
            {highlights.map((feature, idx) => (
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

const UseCaseCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
);

const RISizeChartPage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-800">
            {/* 1. Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative z-10">
                            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase mb-6">
                                Shopify App Store
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                                Create Custom Size Charts for Every Product
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Whether you’re selling tees, rings, or footwear — RI Size Chart lets you build accurate size guides, reduce returns, and boost shopper confidence globally.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
                                    Install Free Trial
                                </button>
                                <button className="bg-transparent border border-gray-300 text-gray-700 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-50 transition-colors">
                                    Watch Demo
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                             <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                             <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                            <img src="https://picsum.photos/seed/sizechart-hero/600/600" alt="RI Size Chart Dashboard" className="relative rounded-2xl shadow-2xl border border-gray-100" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Why Choose Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Why Choose RI Size Chart?</h2>
                        <p className="mt-4 text-gray-600">Precision, speed, and compatibility tailored for modern e-commerce.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard 
                            icon={ScaleIcon} 
                            title="Tailored Precision" 
                            description="Design custom charts for any category — from apparel to accessories." 
                        />
                        <FeatureCard 
                            icon={GlobeAltIcon} 
                            title="Global Compatibility" 
                            description="Support for inches, centimetres and all international standards automatically." 
                        />
                        <FeatureCard 
                            icon={CodeBracketIcon} 
                            title="Seamless Integration" 
                            description="Embed size charts perfectly into your product pages — no coding required." 
                        />
                        <FeatureCard 
                            icon={MobileIcon} 
                            title="Mobile-Friendly" 
                            description="Optimised for all devices so your customers always get a smooth experience." 
                        />
                    </div>
                </div>
            </section>

            {/* 3. Detailed Features */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <DetailedFeature 
                        title="Customizable Size Charts"
                        description="Design unique size tables or images for different product types and categories. Control every aspect of the look and feel."
                        items={[
                            "Create different charts for T-shirts, Shoes, and Hats",
                            "Use images, tables, or video guides",
                            "Assign by product, collection, or tag"
                        ]}
                        image="https://picsum.photos/seed/sizechart-editor/500/350"
                    />
                     <DetailedFeature 
                        title="Global Sizing & Conversions"
                        description="Don't lose international sales due to confusion. Automatically convert units and display regional sizing standards."
                        items={[
                            "Auto-switch between Inches and CM",
                            "Display US, UK, EU, and Asian sizing",
                            "Geolocation-based unit display"
                        ]}
                        image="https://picsum.photos/seed/sizechart-global/500/350"
                        reversed
                    />
                     <DetailedFeature 
                        title="Flexible Display Modes"
                        description="Ensure the size guide appears exactly where your customers need it without disrupting your theme."
                        items={[
                            "Clean modal popups",
                            "Inline tables next to variants",
                            "Tabbed layouts for detailed guides"
                        ]}
                        image="https://picsum.photos/seed/sizechart-display/500/350"
                    />
                </div>
            </section>

            {/* 4. Use Cases */}
             <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Who is this for?</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        <UseCaseCard title="Apparel Brands" description="Detailed tables for shirts, trousers, and outerwear." />
                        <UseCaseCard title="Footwear Stores" description="Precise measurements and international conversions." />
                        <UseCaseCard title="Jewelry & Accessories" description="Ring sizing guides and visual measurement instructions." />
                        <UseCaseCard title="Global Ecommerce" description="Multi-region support with automated unit conversion." />
                    </div>
                </div>
            </section>

            {/* 5. How It Works */}
            <section className="py-20 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">Get Started in Minutes</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-0.5 bg-blue-700 -z-0"></div>
                        
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold mb-6 shadow-lg border-4 border-blue-900">1</div>
                            <h4 className="text-xl font-bold">Install & Connect</h4>
                            <p className="mt-2 text-blue-200">Get the app from the Shopify store and connect your shop.</p>
                        </div>
                         <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold mb-6 shadow-lg border-4 border-blue-900">2</div>
                            <h4 className="text-xl font-bold">Create & Assign</h4>
                            <p className="mt-2 text-blue-200">Build your size charts and link them to products or collections.</p>
                        </div>
                         <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold mb-6 shadow-lg border-4 border-blue-900">3</div>
                            <h4 className="text-xl font-bold">Go Live</h4>
                            <p className="mt-2 text-blue-200">Publish instantly to see fewer returns and happier customers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Pricing */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Simple Pricing</h2>
                        <p className="mt-4 text-gray-600">Choose the plan that fits your store's volume.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        <PricingCard 
                            plan="Free" 
                            price="$0" 
                            highlights={['2 size charts', 'Automatic unit conversion', 'Full style customization']}
                            cta="Install Free"
                        />
                        <PricingCard 
                            plan="Standard" 
                            price="$4" 
                            isPopular
                            highlights={['Unlimited size charts', '14-day free trial', 'Priority support', 'Remove branding']}
                            cta="Start 14-Day Trial"
                        />
                        <PricingCard 
                            plan="Pro" 
                            price="$7" 
                            highlights={['Everything in Standard', 'Direct video size charts', 'YouTube embed support', 'Dedicated success manager']}
                            cta="Get Pro"
                        />
                    </div>
                </div>
            </section>

            {/* 7. FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem 
                            question="Can the size chart change automatically for different variants?" 
                            answer="Yes! You can assign unique size charts to specific variants like color OR fit types, so customers always see the most accurate sizing."
                        />
                        <FAQItem 
                            question="Is import/export supported for bulk size data?" 
                            answer="Absolutely. Upload CSV files to update multiple size charts in one shot — perfect for large catalogs or seasonal drops."
                        />
                        <FAQItem 
                            question="Can I display size charts for only selected products?" 
                            answer="Yes. You control where the size chart appears — by individual products, collections, tags, or global assignment."
                        />
                        <FAQItem 
                            question="Can I use images instead of tables?" 
                            answer="For sure. Upload visual guides, brand-style measurement graphics, or even add embedded measurement videos in the premium plans."
                        />
                        <FAQItem 
                            question="Does it support multiple languages?" 
                            answer="Yep — fully compatible with Shopify’s multilingual setup. Great for brands selling in multiple regions."
                        />
                        <FAQItem 
                            question="How customizable is the design?" 
                            answer={
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Fonts & Colors</li>
                                    <li>Button styles</li>
                                    <li>Positioning (popup/inline/tab)</li>
                                    <li>Table layout & borders</li>
                                </ul>
                            }
                        />
                         <FAQItem 
                            question="Does it show size conversion (like US → UK → EU)?" 
                            answer="Yes — automatic conversion options are available and can be toggled on/off based on your needs."
                        />
                         <FAQItem 
                            question="Will this app affect my store speed?" 
                            answer="Negative. It’s lightweight and optimized to keep your Core Web Vitals and load speed crisp."
                        />
                         <FAQItem 
                            question="How do I preview before publishing?" 
                            answer="You can use the internal preview mode → validate → then publish live. No changes go public unless you approve."
                        />
                         <FAQItem 
                            question="Is it compatible with custom Shopify themes or Page Builders?" 
                            answer="Yes — works smoothly with Shopify OS 2.0, PageFly, GemPages, Shogun, and most custom-coded themes."
                        />
                    </div>
                </div>
            </section>

            {/* 8. Final CTA */}
             <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold">Ready to Improve Fit, Boost Confidence & Cut Returns?</h2>
                    <p className="mt-6 text-xl text-blue-100">Join thousands of merchants using RI Size Chart to deliver the perfect fit.</p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-blue-700 font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg">
                            Install Free Trial
                        </button>
                        <button className="bg-transparent border border-white text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-white/10 transition-colors">
                            Book a Demo
                        </button>
                    </div>
                     <div className="mt-8 text-sm text-blue-200 space-x-4">
                        <Link to="#" className="hover:text-white">Privacy Policy</Link>
                        <span>|</span>
                        <Link to="#" className="hover:text-white">Terms of Service</Link>
                        <span>|</span>
                        <Link to="/contact" className="hover:text-white">Support</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RISizeChartPage;
