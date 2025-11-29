
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    MobileIcon, 
    RocketLaunchIcon, 
    CodeBracketIcon, 
    ArrowRightIcon, 
    CheckCircleIcon, 
    ChevronDownIcon,
    ChartBarIcon
} from '../constants/icons';

// Icons tailored for this page
const BellIconComponent = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

const BoltIconComponent = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const PaintBrushIconComponent = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
);

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-indigo-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

const Step: React.FC<{ number: string, title: string, description: string }> = ({ number, title, description }) => (
    <div className="flex flex-col items-center text-center relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl font-bold mb-6 text-white shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
            {number}
        </div>
        <h4 className="text-xl font-bold text-gray-900">{title}</h4>
        <p className="mt-3 text-gray-600 leading-relaxed max-w-xs">{description}</p>
    </div>
);

const DetailedFeature: React.FC<{ 
    title: string; 
    description: string; 
    image: string; 
    features: string[];
    reversed?: boolean;
}> = ({ title, description, image, features, reversed }) => (
    <div className={`flex flex-col md:flex-row gap-16 items-center py-16 ${reversed ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
            <ul className="space-y-4">
                {features.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex-1 w-full">
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-900/5 ${reversed ? 'bg-purple-50' : 'bg-indigo-50'}`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/50 opacity-50"></div>
                <img src={image} alt={title} className="relative z-10 w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
            </div>
        </div>
    </div>
);

const PricingCard: React.FC<{ 
    plan: string; 
    price: string; 
    features: string[]; 
    cta: string; 
    isPopular?: boolean;
}> = ({ plan, price, features, cta, isPopular }) => (
    <div className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 h-full ${isPopular ? 'bg-white border-indigo-600 shadow-2xl ring-1 ring-indigo-600 transform scale-105 z-10' : 'bg-gray-50 border-gray-200 hover:border-indigo-300 hover:shadow-lg'}`}>
        {isPopular && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm tracking-wide uppercase">Most Popular</span>
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
                    <CheckCircleIcon className={`h-5 w-5 mr-3 flex-shrink-0 ${isPopular ? 'text-indigo-600' : 'text-gray-400'}`} />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <button className={`w-full py-3 px-6 rounded-lg font-bold transition-colors ${isPopular ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-white border-2 border-gray-200 text-gray-800 hover:border-gray-900 hover:text-gray-900'}`}>
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
                <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-indigo-600' : 'text-gray-900 group-hover:text-indigo-600'}`}>{question}</span>
                <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                <div className="text-gray-600 leading-relaxed text-base">{answer}</div>
            </div>
        </div>
    );
};

const RIMobileAppPage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-800">
            {/* 1. Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] opacity-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-sm">
                                <MobileIcon className="h-4 w-4" />
                                <span>No-Code App Builder</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                                Turn Your Shopify Store into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Native Mobile App</span>
                            </h1>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
                                Launch a world-class iOS and Android app in days, not months. Retain customers with push notifications and a seamless shopping experience.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-indigo-500 text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-500/40 transform hover:scale-105">
                                    Start Building Free
                                </button>
                                <button className="bg-transparent border border-gray-500 text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-white/10 transition-colors">
                                    View Demo App
                                </button>
                            </div>
                        </div>
                        <div className="relative flex justify-center">
                            <div className="relative w-64 h-[500px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden z-20">
                                {/* iPhone Mockup Content */}
                                <div className="absolute inset-0 bg-white overflow-hidden">
                                     <div className="bg-indigo-600 h-32 rounded-b-3xl absolute top-0 w-full"></div>
                                     <div className="absolute top-12 left-6 right-6">
                                         <div className="h-4 w-20 bg-white/30 rounded mb-4"></div>
                                         <div className="h-8 w-32 bg-white rounded mb-2"></div>
                                     </div>
                                     <div className="absolute top-36 left-0 w-full px-4 grid grid-cols-2 gap-4">
                                         <div className="bg-gray-100 h-40 rounded-xl"></div>
                                         <div className="bg-gray-100 h-40 rounded-xl"></div>
                                         <div className="bg-gray-100 h-40 rounded-xl"></div>
                                         <div className="bg-gray-100 h-40 rounded-xl"></div>
                                     </div>
                                     {/* Bottom Nav */}
                                     <div className="absolute bottom-0 w-full h-16 bg-white border-t border-gray-100 flex justify-around items-center px-4 text-gray-300">
                                         <div className="w-6 h-6 bg-indigo-600 rounded-full"></div>
                                         <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                         <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                     </div>
                                </div>
                            </div>
                            <div className="absolute top-20 -right-12 w-64 h-[500px] bg-gray-800 rounded-[3rem] opacity-50 transform scale-90 blur-sm z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Key Features Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Why Go Mobile?</h2>
                        <p className="mt-4 text-lg text-gray-600">Mobile apps convert 3x higher than mobile websites. RI Mobile App Builder gives you that power instantly.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard 
                            icon={BellIconComponent} 
                            title="Push Notifications" 
                            description="Send unlimited push notifications to recover abandoned carts and announce new drops instantly." 
                        />
                        <FeatureCard 
                            icon={BoltIconComponent} 
                            title="Real-Time Sync" 
                            description="Your products, inventory, and collections sync automatically from Shopify. No double entry." 
                        />
                         <FeatureCard 
                            icon={PaintBrushIconComponent} 
                            title="Drag & Drop Builder" 
                            description="Design your app layout with blocks, banners, and grids. No coding or developer needed." 
                        />
                         <FeatureCard 
                            icon={MobileIcon} 
                            title="iOS & Android" 
                            description="Publish to both the Apple App Store and Google Play Store with our guided submission process." 
                        />
                         <FeatureCard 
                            icon={ChartBarIcon} 
                            title="App Analytics" 
                            description="Track installs, active users, and revenue specific to your mobile app channel." 
                        />
                         <FeatureCard 
                            icon={RocketLaunchIcon} 
                            title="Fast Checkout" 
                            description="Pre-filled shipping and Apple Pay/Google Pay integration for one-tap purchasing." 
                        />
                    </div>
                </div>
            </section>

            {/* 3. Detailed Breakdown */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <DetailedFeature 
                        title="Design Freedom, Zero Code"
                        description="Our visual builder lets you arrange your app's home screen exactly how you want. Highlight bestsellers, create lookbooks, or feature seasonal collections with simple drag-and-drop tools."
                        image="https://picsum.photos/seed/mobile-builder-ui/600/400"
                        features={[
                            "30+ Pre-built blocks (Sliders, Grids, Countdowns)",
                            "Custom brand colors & fonts",
                            "Tab bar customization",
                            "Real-time preview on your phone"
                        ]}
                    />
                    <DetailedFeature 
                        title="Engage & Retain Like a Pro"
                        description="The biggest advantage of an app is direct access to your customers' home screen. Use smart push notifications to drive traffic on demand, without paying for ads."
                        image="https://picsum.photos/seed/push-notification/600/400"
                        features={[
                            "Automated Abandoned Cart recovery",
                            "Back-in-stock alerts",
                            "Rich media notifications (Images & GIFs)",
                            "Segmented campaigns by user behavior"
                        ]}
                        reversed
                    />
                </div>
            </section>

            {/* 4. How It Works */}
            <section className="py-24 bg-white relative">
                 {/* Connecting Line */}
                 <div className="hidden lg:block absolute top-[40%] left-[20%] right-[20%] h-0.5 bg-gray-100 z-0"></div>
                 
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Launch in 3 Simple Steps</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        <Step 
                            number="1" 
                            title="Connect Shopify" 
                            description="Install the RI Mobile App Builder plugin. We instantly pull your store data." 
                        />
                        <Step 
                            number="2" 
                            title="Design Your App" 
                            description="Choose a theme, add your logo, and configure your layout in our visual editor." 
                        />
                        <Step 
                            number="3" 
                            title="Submit & Launch" 
                            description="We generate the binary files. Upload to the App Stores and start getting downloads." 
                        />
                    </div>
                </div>
            </section>

            {/* 5. Pricing */}
            <section className="py-24 bg-indigo-900 text-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 text-white">
                        <h2 className="text-3xl font-bold">Transparent Pricing</h2>
                        <p className="mt-4 text-indigo-200">Invest in your brand's mobile future.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        <PricingCard 
                            plan="Starter" 
                            price="Free" 
                            features={['Design & Preview App', 'Sync 50 Products', 'Standard Push Notifications', 'Community Support']}
                            cta="Start Building"
                        />
                        <PricingCard 
                            plan="Growth" 
                            price="$29" 
                            isPopular
                            features={['Unlimited Products', 'Publish to iOS & Android', 'Automated Push Campaigns', 'Remove RI Branding', 'Priority Support']}
                            cta="Start 14-Day Trial"
                        />
                        <PricingCard 
                            plan="Scale" 
                            price="$79" 
                            features={['Advanced Analytics', 'Dedicated Success Manager', 'Custom Integrations', 'Smart App Banners', 'Apple Pay Support']}
                            cta="Go Scale"
                        />
                    </div>
                </div>
            </section>

            {/* 6. FAQ */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem 
                            question="What is RI Mobile App Builder?" 
                            answer="It’s a no-code platform that turns your Shopify website into a fully-functional Android & iOS mobile app — fast, affordable, and hella aesthetic."
                        />
                        <FAQItem 
                            question="Will my app sync with my Shopify store?" 
                            answer="Yesss. All products, orders, inventory, customers, discounts — everything auto-syncs in real-time with Shopify. No manual updates. 👌"
                        />
                        <FAQItem 
                            question="Do you support push notifications?" 
                            answer={
                                <>
                                    <p className="mb-2">100%. Automated + manual push notifications for:</p>
                                    <ul className="list-disc pl-5 space-y-1 mb-2">
                                        <li>Offers</li>
                                        <li>Abandoned carts</li>
                                        <li>New arrivals</li>
                                        <li>Price drops</li>
                                        <li>App-exclusive deals</li>
                                    </ul>
                                    <p className="font-semibold">Push = more repeat sales 🔥</p>
                                </>
                            }
                        />
                        <FAQItem 
                            question="Can customers log in with their existing store accounts?" 
                            answer="Yup. Same Shopify login works in the app — all order history + saved addresses stay intact."
                        />
                         <FAQItem 
                            question="Are the app designs customizable?" 
                            answer="Fully. You can pick layouts, colors, fonts, banners — and update anytime without needing a dev. ✨ Your brand, your drip."
                        />
                        <FAQItem 
                            question="Can I publish the app on App Store & Play Store?" 
                            answer="Yes. We help with the entire publishing & compliance process — so you don’t stress over certificates and guidelines."
                        />
                        <FAQItem 
                            question="Does it support COD, UPI & Wallet payments?" 
                            answer="YES. Whatever payment methods your Shopify uses — including Razorpay, Cashfree, PayPal, COD — all work smooth in the app."
                        />
                        <FAQItem 
                            question="Will the app load fast?" 
                            answer={
                                <>
                                    <p className="mb-2">Lightning-quick. We optimize performance for:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>✔ Speed</li>
                                        <li>✔ Low size</li>
                                        <li>✔ Seamless navigation</li>
                                    </ul>
                                    <p className="mt-2 font-semibold">→ Higher conversion rates</p>
                                </>
                            }
                        />
                        <FAQItem 
                            question="Do you support multi-language & multi-currency?" 
                            answer="Absolutely — perfect for global brands."
                        />
                        <FAQItem 
                            question="How much time does it take to launch?" 
                            answer="If your Shopify is ready → your mobile app can go LIVE in 7–10 days."
                        />
                    </div>
                </div>
            </section>

            {/* 7. Final CTA */}
            <section className="py-24 bg-gray-50 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-gray-900">Ready to Launch Your App?</h2>
                    <p className="mt-6 text-xl text-gray-600">Join thousands of brands driving growth with their own mobile app.</p>
                    <div className="mt-10">
                        <Link to="/contact" className="inline-block bg-indigo-600 text-white font-bold py-4 px-12 rounded-xl text-lg hover:bg-indigo-700 transition-colors shadow-xl hover:shadow-indigo-500/30">
                            Build Your App Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RIMobileAppPage;
