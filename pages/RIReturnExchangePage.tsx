
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    LinkIcon, 
    ArrowRightIcon, 
    CheckCircleIcon, 
    ChevronDownIcon,
    ArrowPathIcon,
    TruckIcon,
    BanknotesIcon,
    ShieldCheckIcon,
    CodeBracketIcon,
    UserGroupIcon
} from '../constants/icons';

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-teal-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
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

const PricingCard: React.FC<{ 
    plan: string; 
    price: string; 
    description: string;
    cta: string; 
    isPopular?: boolean;
}> = ({ plan, price, description, cta, isPopular }) => (
    <div className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 h-full ${isPopular ? 'bg-white border-teal-600 shadow-2xl ring-1 ring-teal-600 transform scale-105 z-10' : 'bg-gray-50 border-gray-200 hover:border-teal-300 hover:shadow-lg'}`}>
        {isPopular && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-teal-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm tracking-wide uppercase">Most Popular</span>
            </div>
        )}
        <h3 className="text-xl font-bold text-gray-900">{plan}</h3>
        <p className="mt-2 text-sm text-gray-500 min-h-[40px]">{description}</p>
        <div className="my-6">
            <span className="text-3xl font-extrabold text-gray-900">{price}</span>
        </div>
        <div className="flex-grow">
            <p className="text-sm text-gray-600">No dev cost. No setup hassle. Simple subscriptions.</p>
        </div>
        <button className={`w-full mt-8 py-3 px-6 rounded-lg font-bold transition-colors ${isPopular ? 'bg-teal-600 hover:bg-teal-700 text-white' : 'bg-white border-2 border-gray-200 text-gray-800 hover:border-gray-900 hover:text-gray-900'}`}>
            {cta}
        </button>
    </div>
);

const UseCaseCard: React.FC<{ title: string }> = ({ title }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center text-center h-24">
        <h4 className="font-bold text-gray-900">{title}</h4>
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
                <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-teal-600' : 'text-gray-900 group-hover:text-teal-600'}`}>{question}</span>
                <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-teal-600' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                <div className="text-gray-600 leading-relaxed text-base">{answer}</div>
            </div>
        </div>
    );
};

const RIReturnExchangePage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-800">
            {/* 1. Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-teal-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative z-10">
                            <div className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold tracking-wide uppercase mb-6">
                                Smart Return & Exchange Automation
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                                Make Returns Easy. <br/>Keep Customers Loyal.
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Automate returns & exchanges with a branded portal that reduces support workload and improves customer experience.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-teal-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/30">
                                    Start Free Setup
                                </button>
                                <button className="bg-white border border-gray-300 text-gray-700 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-50 transition-colors">
                                    Try Demo Portal
                                </button>
                            </div>
                        </div>
                        <div className="relative flex justify-center">
                            <div className="relative w-full max-w-lg">
                                <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                                <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                                {/* Mockup Representation */}
                                <div className="relative bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                                     <div className="bg-gray-100 p-4 border-b border-gray-200 flex items-center space-x-2">
                                         <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                         <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                         <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                         <div className="ml-4 bg-white h-6 rounded-md w-1/2"></div>
                                     </div>
                                     <div className="p-8">
                                         <div className="flex justify-between items-center mb-8">
                                             <div className="font-bold text-xl">BRAND LOGO</div>
                                             <div className="text-sm text-gray-500">Order #12345</div>
                                         </div>
                                         <h3 className="text-2xl font-bold mb-4">Select items to return</h3>
                                         <div className="space-y-4">
                                             <div className="flex items-center p-4 border rounded-lg bg-gray-50">
                                                 <div className="w-16 h-16 bg-gray-300 rounded-md mr-4"></div>
                                                 <div className="flex-1">
                                                     <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                                                     <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                                                 </div>
                                                 <input type="checkbox" className="h-5 w-5 text-teal-600 rounded" defaultChecked />
                                             </div>
                                             <div className="flex items-center p-4 border rounded-lg">
                                                 <div className="w-16 h-16 bg-gray-200 rounded-md mr-4"></div>
                                                 <div className="flex-1">
                                                     <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                                     <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                                                 </div>
                                                 <input type="checkbox" className="h-5 w-5 text-gray-300 rounded" />
                                             </div>
                                         </div>
                                         <button className="w-full bg-black text-white py-3 rounded-lg mt-8 font-bold">Proceed to Refund</button>
                                     </div>
                                </div>
                                {/* Phone Mockup Overlay */}
                                <div className="absolute -right-6 -bottom-10 w-40 h-80 bg-black rounded-[2rem] border-4 border-gray-800 shadow-2xl overflow-hidden">
                                     <div className="bg-white h-full w-full p-3 pt-8">
                                          <div className="text-center font-bold text-xs mb-4">Return Status</div>
                                          <div className="bg-green-100 text-green-700 text-xs p-2 rounded text-center mb-4">Approved</div>
                                          <div className="space-y-2">
                                              <div className="h-2 bg-gray-100 rounded"></div>
                                              <div className="h-2 bg-gray-100 rounded"></div>
                                          </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. What is RI Return & Exchange */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">What is RI Return & Exchange?</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-12">
                        No more WhatsApp messages, endless tickets, or manual approvals — let automation handle it.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-teal-50 text-teal-800 px-4 py-2 rounded-full font-semibold text-sm">Self-initiate returns</span>
                        <span className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm">Track status live</span>
                        <span className="bg-purple-50 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm">Instant approvals</span>
                    </div>
                </div>
            </section>

            {/* 3. Key Features */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Everything You Need to Automate Returns</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard 
                            icon={LinkIcon} 
                            title="Self-Serve Return Portal" 
                            description="Customer-friendly and fully brandable portal where customers can initiate requests in seconds." 
                        />
                        <FeatureCard 
                            icon={ArrowPathIcon} 
                            title="Exchange Automation" 
                            description="Allow variant changes, size swaps, or product replacements in just 3 clicks." 
                        />
                        <FeatureCard 
                            icon={CheckCircleIcon} 
                            title="Approval Rules" 
                            description="You control when returns are accepted automatically based on return windows or item types." 
                        />
                        <FeatureCard 
                            icon={TruckIcon} 
                            title="Reverse Pickup Support" 
                            description="Seamless courier requests generated directly inside the portal for approved returns." 
                        />
                        <FeatureCard 
                            icon={BanknotesIcon} 
                            title="Auto Refund Flows" 
                            description="Issue refunds to wallet, store credit, or original payment mode automatically." 
                        />
                        <FeatureCard 
                            icon={ShieldCheckIcon} 
                            title="Order Verification" 
                            description="Direct Shopify order check ensures zero fraud returns by verifying eligibility instantly." 
                        />
                    </div>
                </div>
            </section>

            {/* 4. Comparison Table */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Why it’s a Game Changer</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="grid grid-cols-2 bg-gray-900 text-white p-4 font-bold text-lg">
                            <div className="text-center">Problem without us</div>
                            <div className="text-center">Solution with us</div>
                        </div>
                        <ComparisonRow problem="Manual return approvals" solution="Auto approval rules" />
                        <ComparisonRow problem="Lost refunds & delays" solution="Real-time updates" />
                        <ComparisonRow problem="Customers irritated" solution="Repeat purchase loyalty" />
                        <ComparisonRow problem="Support team overloaded" solution="60% workload reduced" />
                    </div>
                </div>
            </section>

            {/* 5. Dashboard & Branding */}
            <section className="py-20 bg-teal-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Unified Dashboard</h2>
                            <ul className="space-y-4 text-teal-100">
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 mr-3 text-teal-400"/> Track every request (return/exchange/refund)</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 mr-3 text-teal-400"/> Drag-and-drop workflow management</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 mr-3 text-teal-400"/> Export detailed reports</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 mr-3 text-teal-400"/> Internal notes + timeline history</li>
                            </ul>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-4 shadow-2xl border border-gray-700">
                            <div className="h-48 bg-gray-700 rounded-lg flex items-center justify-center text-gray-500">Dashboard Preview</div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
                         <div className="md:order-2">
                            <h2 className="text-3xl font-bold mb-6">Custom Branding</h2>
                            <p className="text-teal-100 mb-6">Customer experience stays on-brand, not generic.</p>
                            <ul className="space-y-4 text-teal-100">
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 mr-3 text-teal-400"/> Match your Logo & Colors</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 mr-3 text-teal-400"/> Custom Email/SMS templates</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 mr-3 text-teal-400"/> Custom Domain (URL) Portal</li>
                            </ul>
                        </div>
                        <div className="md:order-1 bg-white rounded-xl p-4 shadow-2xl text-gray-900">
                            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">Branded Portal Preview</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Integrations & Fraud */}
             <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <div className="flex items-center mb-6">
                                <CodeBracketIcon className="h-8 w-8 text-blue-600 mr-4" />
                                <h3 className="text-2xl font-bold text-gray-900">Integrations</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-green-500 mr-2"/> Shopify Orders + Inventory</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-green-500 mr-2"/> Return courier APIs (optional)</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-green-500 mr-2"/> Payment gateways for auto refunds</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-green-500 mr-2"/> Wallet / Credit systems</li>
                            </ul>
                        </div>
                         <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <div className="flex items-center mb-6">
                                <ShieldCheckIcon className="h-8 w-8 text-red-600 mr-4" />
                                <h3 className="text-2xl font-bold text-gray-900">Fraud Prevention</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-gray-500 mr-2"/> SKU condition check</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-gray-500 mr-2"/> Time-based eligibility rules</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-gray-500 mr-2"/> Restrict high-risk customers</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-gray-500 mr-2"/> Auto-flagging suspicious requests</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Who is this for? */}
             <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Who is this for?</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <UseCaseCard title="Apparel Brands" />
                        <UseCaseCard title="Footwear Stores" />
                        <UseCaseCard title="Cosmetics & Personal Care" />
                        <UseCaseCard title="Electronics" />
                        <UseCaseCard title="Growing eCommerce Brands" />
                    </div>
                </div>
            </section>

            {/* 8. Pricing */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Simple Pricing</h2>
                        <p className="mt-4 text-gray-600">Choose the plan that fits your store's volume.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        <PricingCard 
                            plan="Basic" 
                            price="Free" 
                            description="For new stores getting started."
                            cta="Start Setup"
                        />
                        <PricingCard 
                            plan="Pro" 
                            price="$29" 
                            description="For growing brands with regular returns."
                            cta="Start Setup"
                            isPopular
                        />
                        <PricingCard 
                            plan="Enterprise" 
                            price="Custom" 
                            description="For high-volume, multi-channel operations."
                            cta="Start Setup"
                        />
                    </div>
                </div>
            </section>

             {/* 9. FAQs */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem 
                            question="What platforms does RI Return & Exchange support?" 
                            answer="Currently built for Shopify — 100% native sync with orders, variants, inventory & customers."
                        />
                        <FAQItem 
                            question="Can customers request both returns and exchanges?" 
                            answer={
                                <>
                                    <p className="mb-2">Yep. Customers can:</p>
                                    <ul className="list-disc pl-5 space-y-1 mb-2">
                                        <li>Change size/color/variant</li>
                                        <li>Swap products</li>
                                        <li>Request refund or store credit</li>
                                    </ul>
                                    <p>All based on the rules you define. ✨</p>
                                </>
                            }
                        />
                        <FAQItem 
                            question="Will the system auto-approve returns?" 
                            answer={
                                <>
                                    <p className="mb-2">Yes — with custom approval rules like:</p>
                                    <ul className="list-disc pl-5 space-y-1 mb-2">
                                        <li>Return within 7 days</li>
                                        <li>Refund not allowed during sale period</li>
                                        <li>Only unused items eligible</li>
                                    </ul>
                                    <p>Your brand controls the automation.</p>
                                </>
                            }
                        />
                        <FAQItem 
                            question="Do you support reverse pickups?" 
                            answer={
                                <>
                                    <p className="mb-2">Yes. With integrated courier APIs for:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Pickup scheduling</li>
                                        <li>Return tracking</li>
                                        <li>Warehouse delivery confirmation</li>
                                    </ul>
                                </>
                            }
                        />
                         <FAQItem 
                            question="How do refunds work?" 
                            answer={
                                <>
                                    <p className="mb-2">You decide the mode:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Store credit / Wallet</li>
                                        <li>Original payment method (gateway dependent)</li>
                                        <li>Manual refund option</li>
                                    </ul>
                                </>
                            }
                        />
                         <FAQItem 
                            question="Can I customize the portal to match my brand?" 
                            answer={
                                <>
                                    <p className="mb-2">100%.</p>
                                    <p className="mb-2">Logo, brand colors, buttons, fonts — even the URL.</p>
                                    <p>Your customers feel like they never left your store. 💅</p>
                                </>
                            }
                        />
                         <FAQItem 
                            question="Will customers get real-time status updates?" 
                            answer={
                                <>
                                    <p className="mb-2">Yes — via:</p>
                                    <ul className="list-disc pl-5 space-y-1 mb-2">
                                        <li>Portal tracking</li>
                                        <li>Email alerts</li>
                                        <li>Optional SMS / WhatsApp notifications</li>
                                    </ul>
                                    <p>Transparency = less customer anxiety.</p>
                                </>
                            }
                        />
                         <FAQItem 
                            question="How does it prevent fraud returns?" 
                            answer={
                                <>
                                    <p className="mb-2">Smart protection:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Order verification via Shopify</li>
                                        <li>Time & eligibility limits</li>
                                        <li>Reason-based approval rules</li>
                                        <li>High-risk customer flagging</li>
                                    </ul>
                                </>
                            }
                        />
                         <FAQItem 
                            question="Do you offer analytics and reporting?" 
                            answer={
                                <>
                                    <p className="mb-2">Yep — dashboards showing:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Return reasons</li>
                                        <li>Refund vs Exchange ratio</li>
                                        <li>Repeat customer impact</li>
                                        <li>Trends to reduce future returns</li>
                                    </ul>
                                </>
                            }
                        />
                         <FAQItem 
                            question="How fast can I go live?" 
                            answer="If your Shopify store is ready → 2–4 days setup"
                        />
                    </div>
                </div>
            </section>

             {/* 10. Final CTA */}
             <section className="py-24 bg-gradient-to-r from-teal-600 to-teal-800 text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold">Ready to automate your returns?</h2>
                    <p className="mt-6 text-xl text-teal-100">Join thousands of merchants saving time and money with RI Return & Exchange.</p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-teal-700 font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg">
                            Start Free Setup
                        </button>
                         <button className="bg-transparent border border-white text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-white/10 transition-colors">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default RIReturnExchangePage;
