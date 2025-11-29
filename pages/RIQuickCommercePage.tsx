
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    LightningIcon, 
    BikeIcon, 
    MapIcon, 
    ShoppingCartIcon, 
    CheckCircleIcon, 
    ChevronDownIcon,
    MobileIcon,
    GiftIcon,
    CreditCardIcon,
    ChartBarIcon,
    LockClosedIcon,
    MegaphoneIcon,
    ArrowRightIcon,
    RocketLaunchIcon
} from '../constants/icons';

// Using ArrowPathIcon as RefreshIcon locally if needed, or mapping correctly
const RefreshIconComponent: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
);

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-orange-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

const IntegrationCard: React.FC<{ title: string; list: string[] }> = ({ title, list }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h4 className="font-bold text-gray-900 mb-3 text-lg">{title}</h4>
        <ul className="space-y-2">
            {list.map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-600 text-sm">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                    {item}
                </li>
            ))}
        </ul>
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
                <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-orange-600' : 'text-gray-900 group-hover:text-orange-600'}`}>{question}</span>
                <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-orange-600' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                <div className="text-gray-600 leading-relaxed text-base">{answer}</div>
            </div>
        </div>
    );
};

const UseCaseChip: React.FC<{ title: string }> = ({ title }) => (
    <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 text-gray-800 font-medium hover:border-orange-300 hover:text-orange-600 transition-colors cursor-default">
        {title}
    </div>
);

const RIQuickCommercePage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-800">
            {/* 1. Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="mb-8">
                         <Link to="/products/riaddon" className="inline-flex items-center text-gray-500 hover:text-orange-600 font-medium transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Addons
                        </Link>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative z-10">
                            <div className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-wide uppercase mb-6">
                                RI Quick Commerce
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                                Go Live Faster. <br />
                                Sell Smarter. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Deliver Everywhere.</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                                From catalog to checkout to delivery — a single platform that powers your D2C + Q-Commerce hustle.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/30">
                                    Get Live in 48 Hours
                                </button>
                                <button className="bg-white border-2 border-gray-200 text-gray-700 font-bold py-4 px-8 rounded-lg text-lg hover:border-gray-900 hover:text-gray-900 transition-colors">
                                    See Demo Store
                                </button>
                            </div>
                        </div>
                        <div className="relative flex justify-center">
                             <div className="absolute top-10 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
                             <div className="absolute -bottom-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
                            {/* Visual Placeholder for "Mobile + Web app UI mockups with speed lightning elements" */}
                            <div className="relative w-full max-w-lg">
                                <div className="relative bg-gray-900 rounded-3xl shadow-2xl border-4 border-gray-800 overflow-hidden aspect-[4/5] flex items-center justify-center">
                                    <div className="absolute top-4 left-4 right-4 h-8 bg-gray-800 rounded-full flex items-center px-4 space-x-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="text-center p-8">
                                        <LightningIcon className="h-24 w-24 text-yellow-400 mx-auto mb-4 animate-pulse" />
                                        <h3 className="text-white text-2xl font-bold">15 Minute Delivery</h3>
                                        <div className="mt-6 space-y-3">
                                            <div className="h-12 bg-gray-800 rounded-xl w-full flex items-center px-4">
                                                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                                                <div className="ml-3 h-3 bg-gray-700 rounded w-24"></div>
                                            </div>
                                            <div className="h-12 bg-gray-800 rounded-xl w-full flex items-center px-4">
                                                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                                                <div className="ml-3 h-3 bg-gray-700 rounded w-24"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Mobile Overlay */}
                                    <div className="absolute -right-4 -bottom-12 w-40 h-72 bg-white rounded-3xl border-4 border-gray-200 shadow-xl p-3 flex flex-col">
                                         <div className="w-full h-24 bg-orange-100 rounded-xl mb-2"></div>
                                         <div className="w-full h-8 bg-gray-100 rounded-md mb-2"></div>
                                         <div className="flex-grow"></div>
                                         <div className="w-full h-10 bg-orange-600 rounded-lg text-white text-xs flex items-center justify-center font-bold">Order Now</div>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Quick Commerce?</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        Start making money on <span className="font-bold text-gray-900">Day 1</span>. We take care of product listing, queue-free checkout, fast fulfillment workflows, and smart delivery routes.
                    </p>
                    <div className="inline-block bg-orange-50 border border-orange-100 px-6 py-3 rounded-full">
                        <span className="text-orange-700 font-bold">💸 Growth without tech stress.</span>
                    </div>
                </div>
            </section>

            {/* 3. Features Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard 
                            icon={RocketLaunchIcon} 
                            title="Instant Commerce Setup" 
                            description="Web + Android app + iOS app — launch seamlessly without waiting months for developers." 
                        />
                        <FeatureCard 
                            icon={RefreshIconComponent} 
                            title="Real-time Inventory Sync" 
                            description="Never oversell. Auto-syncs stock, variants & pricing across all your channels instantly." 
                        />
                         <FeatureCard 
                            icon={BikeIcon} 
                            title="Smart Delivery System" 
                            description="Automatically assign and track deliveries with seamless rider app connectivity." 
                        />
                         <FeatureCard 
                            icon={LightningIcon} 
                            title="1-Click Checkout" 
                            description="Lightning-speed ordering flows designed for maximum conversion rates." 
                        />
                         <FeatureCard 
                            icon={ShoppingCartIcon} 
                            title="Subscription & Repeat Orders" 
                            description="Perfect for groceries, essentials, and D2C brands looking for predictable revenue." 
                        />
                         <FeatureCard 
                            icon={GiftIcon} 
                            title="Marketing Tools Built-In" 
                            description="Push notifications, loyalty points, coupons, and referrals — the complete retention kit." 
                        />
                    </div>
                </div>
            </section>

             {/* 4. Industry Fit */}
             <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Made for brands that move fast</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <UseCaseChip title="Grocery Stores" />
                        <UseCaseChip title="Meat & Seafood Shops" />
                        <UseCaseChip title="Kirana & Local Biz" />
                        <UseCaseChip title="Cloud Kitchens" />
                        <UseCaseChip title="Personal Care D2C" />
                        <UseCaseChip title="Pharmacy & Essentials" />
                        <UseCaseChip title="Multi-branch Chains" />
                    </div>
                </div>
            </section>

            {/* 5. Logistics Automation */}
            <section className="py-20 bg-orange-600 text-white">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-orange-700 rounded-full px-3 py-1 text-sm font-bold mb-6">
                                <BikeIcon className="h-4 w-4" />
                                <span>Rider App Included</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-6">Delivery & Logistics Automation</h2>
                            <p className="text-orange-100 text-lg mb-8">Zero chaos. Only on-time drops.</p>
                            <ul className="space-y-4">
                                <li className="flex items-center"><CheckCircleIcon className="h-6 w-6 text-white mr-3"/> Delivery zone management</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-6 w-6 text-white mr-3"/> Auto rider assignment</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-6 w-6 text-white mr-3"/> Route optimization</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-6 w-6 text-white mr-3"/> Order tracking for customers</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-2xl text-gray-900">
                             {/* Map / Tracking UI Placeholder */}
                             <div className="bg-gray-100 rounded-xl h-64 w-full mb-4 relative overflow-hidden">
                                 <div className="absolute inset-0 bg-blue-50 opacity-50"></div>
                                 {/* Mock Map Route */}
                                 <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                     <path d="M 20 20 Q 50 10 80 80" stroke="#F97316" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                                     <circle cx="20" cy="20" r="3" fill="#3B82F6" />
                                     <circle cx="80" cy="80" r="3" fill="#EF4444" />
                                 </svg>
                                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded shadow text-xs font-bold flex items-center">
                                     <BikeIcon className="h-3 w-3 mr-1 text-orange-600" />
                                     Arriving in 5 mins
                                 </div>
                             </div>
                             <div className="flex justify-between items-center border-t pt-4">
                                 <div>
                                     <p className="text-xs text-gray-500">Order #8821</p>
                                     <p className="font-bold">Dispatching to Downtown</p>
                                 </div>
                                 <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">On Route</span>
                             </div>
                        </div>
                    </div>
                 </div>
            </section>

            {/* 6. Integrations & Dashboard */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                         <div>
                            <h2 className="text-3xl font-bold mb-6">Integrations that work smooth af. 💅</h2>
                            <p className="text-gray-600 mb-8">Everything connects together seamlessly so you don't have to glue disparate systems.</p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <IntegrationCard title="Storefronts" list={['Shopify', 'Custom Web Stores', 'EtaliOn']} />
                                <IntegrationCard title="Payments" list={['UPI & Wallets', 'Credit/Debit Cards', 'Cash on Delivery']} />
                                <IntegrationCard title="Operations" list={['POS Systems', 'Inventory Management', 'ERP Connectors']} />
                                <IntegrationCard title="Communication" list={['WhatsApp API', 'SMS Gateways', 'Email Providers']} />
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                             <h3 className="text-2xl font-bold mb-6 flex items-center">
                                 <ChartBarIcon className="h-6 w-6 text-blue-600 mr-2" />
                                 Power Dashboard
                             </h3>
                             <p className="text-gray-600 mb-8">Data that actually helps you scale.</p>
                             <div className="space-y-4">
                                 <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                                     <span className="font-medium">Live Order Timeline</span>
                                     <div className="h-2 w-20 bg-green-100 rounded-full overflow-hidden"><div className="h-full w-2/3 bg-green-500"></div></div>
                                 </div>
                                 <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                                     <span className="font-medium">Customer Insights</span>
                                     <div className="h-2 w-20 bg-blue-100 rounded-full overflow-hidden"><div className="h-full w-1/2 bg-blue-500"></div></div>
                                 </div>
                                 <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                                     <span className="font-medium">Delivery Performance</span>
                                     <div className="h-2 w-20 bg-orange-100 rounded-full overflow-hidden"><div className="h-full w-4/5 bg-orange-500"></div></div>
                                 </div>
                                 <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                                     <span className="font-medium">Top Repeat Items</span>
                                     <div className="h-2 w-20 bg-purple-100 rounded-full overflow-hidden"><div className="h-full w-3/4 bg-purple-500"></div></div>
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* Security */}
                    <div className="border-t border-gray-100 pt-16">
                        <div className="text-center mb-10">
                             <h2 className="text-2xl font-bold text-gray-900 flex items-center justify-center">
                                <LockClosedIcon className="h-6 w-6 text-gray-700 mr-2" />
                                Stability & Security
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-bold text-gray-900">PCI-Compliant</h4>
                                <p className="text-sm text-gray-600">Secure Payments</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-bold text-gray-900">Secure Infra</h4>
                                <p className="text-sm text-gray-600">Enterprise Backend</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-bold text-gray-900">Fast Hosting</h4>
                                <p className="text-sm text-gray-600">Global CDN</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-bold text-gray-900">99.9% Uptime</h4>
                                <p className="text-sm text-gray-600">Always Online</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Social Proof */}
            <section className="py-20 bg-gray-900 text-white text-center">
                 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                     <h2 className="text-3xl font-bold mb-12">Trusted by Fast Movers</h2>
                     <div className="grid md:grid-cols-3 gap-8 mb-16">
                         <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                             <p className="italic text-gray-300 mb-4">“We scaled to 300+ daily orders in 60 days.”</p>
                             <div className="font-bold text-orange-400">— FreshMart</div>
                         </div>
                         <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                             <p className="italic text-gray-300 mb-4">“Push notifications alone boosted repeat by 35%.”</p>
                             <div className="font-bold text-orange-400">— Urban Essentials</div>
                         </div>
                         <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                             <p className="italic text-gray-300 mb-4">“Riders love the app. Dispatch time cut in half.”</p>
                             <div className="font-bold text-orange-400">— Swift Logistics</div>
                         </div>
                     </div>
                     <div className="flex justify-center space-x-8 opacity-50 grayscale">
                         {/* Placeholder Logos */}
                         <div className="h-8 w-24 bg-gray-500 rounded"></div>
                         <div className="h-8 w-24 bg-gray-500 rounded"></div>
                         <div className="h-8 w-24 bg-gray-500 rounded"></div>
                         <div className="h-8 w-24 bg-gray-500 rounded"></div>
                     </div>
                 </div>
            </section>

             {/* 8. FAQ */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">RI Quick Commerce — FAQs</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem 
                            question="How fast can I launch?" 
                            answer="If your product list is ready → Live in 48–72 hours. No dev drama."
                        />
                        <FAQItem 
                            question="Do you support multiple store locations?" 
                            answer={
                                <>
                                    <p className="mb-2">Yessir. Each store can have:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Separate inventory</li>
                                        <li>Separate delivery zones</li>
                                        <li>Central admin control</li>
                                    </ul>
                                </>
                            }
                        />
                        <FAQItem 
                            question="Will delivery agents get a rider app?" 
                            answer={
                                <>
                                    <p className="mb-2">Yup — they:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Accept orders</li>
                                        <li>Navigate route</li>
                                        <li>Update delivery status live</li>
                                    </ul>
                                </>
                            }
                        />
                        <FAQItem 
                            question="What about payments?" 
                            answer={
                                <>
                                    <p className="mb-2">Supports:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>UPI, Cards, Wallets</li>
                                        <li>Cash on Delivery</li>
                                        <li>Payment gateways like Razorpay, Cashfree, Stripe (region-based)</li>
                                    </ul>
                                </>
                            }
                        />
                        <FAQItem 
                            question="Will orders sync with my Shopify or existing website?" 
                            answer="Yes — inventory & order data auto-sync in real time."
                        />
                         <FAQItem 
                            question="Can customers track deliveries?" 
                            answer={
                                <>
                                    <p className="mb-2">100%. They get:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Real-time status</li>
                                        <li>Map tracking</li>
                                        <li>Push notifications</li>
                                    </ul>
                                </>
                            }
                        />
                         <FAQItem 
                            question="Does it support subscriptions and recurring deliveries?" 
                            answer="Yep — perfect for groceries, milk, pet food, skincare routine products, etc."
                        />
                         <FAQItem 
                            question="Can we run discounts, referrals & loyalty?" 
                            answer={
                                <>
                                    <p className="mb-2">Yes — built-in sales boosters:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Coupon engine</li>
                                        <li>Store credits</li>
                                        <li>Refer & earn</li>
                                        <li>Flash deals</li>
                                    </ul>
                                </>
                            }
                        />
                         <FAQItem 
                            question="What happens if an item is out of stock?" 
                            answer="Auto stop-ordering & smart product suggestions keep orders flowing."
                        />
                        <FAQItem 
                            question="Will I get analytics?" 
                            answer="Ofc — from fastest-selling SKUs to highest repeat users — all data unlocked."
                        />
                    </div>
                </div>
            </section>

             {/* 9. Final CTA */}
             <section className="py-24 bg-gradient-to-r from-orange-500 to-red-600 text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold">Your brand should be the fastest in your city.</h2>
                    <p className="mt-6 text-xl text-orange-100">Let’s make it happen.</p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-orange-600 font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg">
                            Schedule Strategy Call
                        </button>
                        <button className="bg-transparent border border-white text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-white/10 transition-colors">
                            Launch My Store
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RIQuickCommercePage;
