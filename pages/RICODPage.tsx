
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    ShieldCheckIcon, 
    ChatAltIcon, 
    ExclamationIcon, 
    MapPinIcon, 
    BanknotesIcon, 
    ChartBarIcon, 
    CheckCircleIcon, 
    ChevronDownIcon,
    LockClosedIcon,
    ArrowRightIcon
} from '../constants/icons';

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-emerald-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

const UseCaseChip: React.FC<{ title: string }> = ({ title }) => (
    <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 text-gray-800 font-medium hover:border-emerald-300 hover:text-emerald-600 transition-colors cursor-default">
        {title}
    </div>
);

const ComparisonRow: React.FC<{ problem: string; solution: string }> = ({ problem, solution }) => (
    <div className="grid grid-cols-2 border-b border-gray-200 last:border-0">
        <div className="p-4 bg-red-50 text-red-700 font-medium flex items-center">
            <span className="mr-2">✕</span> {problem}
        </div>
        <div className="p-4 bg-green-50 text-green-700 font-bold flex items-center">
            <CheckCircleIcon className="h-5 w-5 mr-2" /> {solution}
        </div>
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
                <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-emerald-600' : 'text-gray-900 group-hover:text-emerald-600'}`}>{question}</span>
                <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                <div className="text-gray-600 leading-relaxed text-base">{answer}</div>
            </div>
        </div>
    );
};

const RICODPage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-800">
            {/* 1. Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-emerald-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="mb-8">
                         <Link to="/products/riaddon" className="inline-flex items-center text-gray-500 hover:text-emerald-600 font-medium transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Addons
                        </Link>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative z-10">
                            <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold tracking-wide uppercase mb-6">
                                RI COD — Fraud & RTO Protection
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                                Reduce RTO. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Increase COD Profit.</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                                Verify orders, block fraud buyers, and turn COD into a revenue booster — not a risk.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30">
                                    Start Free Trial
                                </button>
                                <button className="bg-white border-2 border-gray-200 text-gray-700 font-bold py-4 px-8 rounded-lg text-lg hover:border-gray-900 hover:text-gray-900 transition-colors">
                                    See Live Demo
                                </button>
                            </div>
                        </div>
                        <div className="relative flex justify-center">
                             <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
                             <div className="absolute -bottom-10 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
                            {/* Visual Placeholder for Phone UI showing OTP verification + trust badge “COD Protected” */}
                            <div className="relative w-64 h-[500px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden z-20">
                                <div className="absolute inset-0 bg-white overflow-hidden flex flex-col">
                                     <div className="bg-emerald-600 h-24 rounded-b-3xl w-full mb-6"></div>
                                     <div className="px-6 flex-1">
                                         <div className="text-center font-bold text-lg mb-2">Verify Order</div>
                                         <p className="text-center text-gray-500 text-xs mb-6">Enter the OTP sent to +91 98*** ***21</p>
                                         <div className="flex justify-center space-x-2 mb-6">
                                             <div className="w-10 h-12 border border-gray-300 rounded bg-gray-50"></div>
                                             <div className="w-10 h-12 border border-gray-300 rounded bg-gray-50"></div>
                                             <div className="w-10 h-12 border border-gray-300 rounded bg-gray-50"></div>
                                             <div className="w-10 h-12 border border-gray-300 rounded bg-gray-50"></div>
                                         </div>
                                         <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold mb-4">Confirm Order</button>
                                         <div className="flex items-center justify-center text-xs text-green-600 font-bold bg-green-50 py-2 rounded">
                                             <LockClosedIcon className="h-3 w-3 mr-1" /> COD Protected
                                         </div>
                                     </div>
                                     <div className="h-12 border-t border-gray-100 bg-gray-50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Intro Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">COD is 🔥 for sales but 😭 for returns.</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        RI COD fixes that by adding fraud protection, OTP confirmation, and smart eligibility rules. More delivered orders → More money in the bank 💸
                    </p>
                </div>
            </section>

            {/* 3. Features Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard 
                            icon={ChatAltIcon} 
                            title="COD OTP Verification" 
                            description="Every COD order gets real customer confirmation via SMS/WhatsApp before shipping." 
                        />
                        <FeatureCard 
                            icon={ExclamationIcon} 
                            title="RTO Risk Scoring" 
                            description="Block buyers with shady history or repeated cancellations automatically." 
                        />
                         <FeatureCard 
                            icon={ShieldCheckIcon} 
                            title="Auto COD Availability Rules" 
                            description="Turn off COD based on Pin codes, Cart value, or Customer type (new vs old)." 
                        />
                         <FeatureCard 
                            icon={MapPinIcon} 
                            title="Address + Phone Validation" 
                            description="Catch fake numbers & half-baked addresses before they hit your warehouse." 
                        />
                         <FeatureCard 
                            icon={BanknotesIcon} 
                            title="COD to Prepaid Conversion" 
                            description="Offer instant discounts or reward points for switching to prepaid 💳." 
                        />
                         <FeatureCard 
                            icon={ChartBarIcon} 
                            title="Real-Time Reporting" 
                            description="Track COD conversion %, RTO reduction, Fraud alerts, and Operational savings." 
                        />
                    </div>
                </div>
            </section>

             {/* 4. Industry Fit */}
             <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Ideal For</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <UseCaseChip title="Fashion & Apparel" />
                        <UseCaseChip title="Footwear & Bags" />
                        <UseCaseChip title="Cosmetics & Personal Care" />
                        <UseCaseChip title="Electronics Dealers" />
                        <UseCaseChip title="Any store with high COD orders 🚚" />
                    </div>
                </div>
            </section>

            {/* 5. Risk Control Section */}
            <section className="py-20 bg-emerald-900 text-white">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Risk Control Center</h2>
                            <p className="text-emerald-100 mb-8 text-lg">Protect your brand like a pro. Stop RTOs before they ship.</p>
                            <ul className="space-y-4 text-emerald-50">
                                <li className="flex items-center"><CheckCircleIcon className="h-6 w-6 text-emerald-400 mr-3"/> High-risk customer blocking</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-6 w-6 text-emerald-400 mr-3"/> Blacklist repeat offenders</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-6 w-6 text-emerald-400 mr-3"/> Delivery region restrictions</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-6 w-6 text-emerald-400 mr-3"/> Order limit rules</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-6 w-6 text-emerald-400 mr-3"/> Fraud flagging alerts</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-2xl text-gray-900">
                             <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                                 <div>
                                     <div className="text-xs text-gray-500 font-bold uppercase">Risk Score</div>
                                     <div className="text-2xl font-extrabold text-red-600">High Risk</div>
                                 </div>
                                 <ExclamationIcon className="h-10 w-10 text-red-500" />
                             </div>
                             <div className="space-y-4">
                                 <div className="flex justify-between text-sm">
                                     <span className="text-gray-600">Phone Validity</span>
                                     <span className="text-red-600 font-bold">Invalid Format</span>
                                 </div>
                                 <div className="flex justify-between text-sm">
                                     <span className="text-gray-600">Past Returns</span>
                                     <span className="text-orange-600 font-bold">3 Orders</span>
                                 </div>
                                 <div className="flex justify-between text-sm">
                                     <span className="text-gray-600">Address Match</span>
                                     <span className="text-gray-900 font-bold">Partial</span>
                                 </div>
                             </div>
                             <div className="mt-8">
                                 <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold shadow-md">Block Order Automatically</button>
                             </div>
                        </div>
                    </div>
                 </div>
            </section>

            {/* 6. Automation Wins (Comparison) */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Automation Wins</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="grid grid-cols-2 bg-gray-900 text-white p-4 font-bold text-lg">
                            <div className="text-center">Without RI COD</div>
                            <div className="text-center">With RI COD</div>
                        </div>
                        <ComparisonRow problem="High returns (RTO)" solution="Confirmed orders only" />
                        <ComparisonRow problem="Delivery boy wasted trips" solution="Better delivery success" />
                        <ComparisonRow problem="Lost inventory & profit" solution="Strong repeat customer base" />
                    </div>
                </div>
            </section>

             {/* 7. FAQ */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">RI COD — FAQs</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem 
                            question="Does this work with Shopify?" 
                            answer="Yes — plug & play integration with full order sync."
                        />
                        <FAQItem 
                            question="How does OTP confirmation work?" 
                            answer="Customers get an SMS to verify their COD order → only verified orders go to fulfillment."
                        />
                        <FAQItem 
                            question="Can I turn off COD for risky customers?" 
                            answer={
                                <>
                                    <p className="mb-2">Yesss. Set rules like:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Max order cancellations allowed</li>
                                        <li>COD blocked for flagged phone numbers</li>
                                        <li>Pin code risk ratings</li>
                                    </ul>
                                </>
                            }
                        />
                        <FAQItem 
                            question="Will it help reduce RTO?" 
                            answer="Legit. Brands see 20–40% reduction in RTO within the first month."
                        />
                        <FAQItem 
                            question="Does it support WhatsApp communication too?" 
                            answer="Optional add-on: WhatsApp verification & reminders 💬"
                        />
                         <FAQItem 
                            question="Can I push them to prepaid payment?" 
                            answer={
                                <>
                                    <p className="mb-2">Absolutely. Offer incentives like:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>💰 ₹50 OFF for prepaid</li>
                                        <li>🎁 Extra loyalty points</li>
                                    </ul>
                                </>
                            }
                        />
                         <FAQItem 
                            question="Will customers still love COD?" 
                            answer="Ofc. They get trusted COD, faster approval, and clear delivery updates."
                        />
                         <FAQItem 
                            question="How fast can I set this up?" 
                            answer="If store is ready → same day onboarding ⚡"
                        />
                         <FAQItem 
                            question="Any impact on page speed?" 
                            answer="No slowdown — optimized scripts → fast af 🚀"
                        />
                        <FAQItem 
                            question="What kind of support do you provide?" 
                            answer="Onboarding assistance + live support + regular updates + RTO strategy guidance."
                        />
                    </div>
                </div>
            </section>

             {/* 8. Final CTA */}
             <section className="py-24 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold">Turn COD into your strongest sales weapon.</h2>
                    <p className="mt-6 text-xl text-emerald-100">Make every delivery count.</p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-emerald-600 font-bold py-4 px-10 rounded-lg text-lg hover:bg-emerald-50 transition-colors shadow-lg">
                            Install on Shopify
                        </button>
                        <Link to="/contact" className="bg-transparent border border-white text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-white/10 transition-colors">
                            Book Strategy Call
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RICODPage;
