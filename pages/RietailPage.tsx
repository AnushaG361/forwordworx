
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    InventoryIcon, 
    UsersIcon, 
    CheckCircleIcon, 
    DocumentSignatureIcon, 
    BanknotesIcon, 
    LinkIcon,
    TemplateIcon,
    ChevronDownIcon,
    ServerStackIcon,
    ShieldCheckIcon
} from '../constants/icons';
import Breadcrumbs from '../components/Breadcrumbs';

const CapabilityCard: React.FC<{ icon: React.ElementType, title: string, features: string[] }> = ({ icon: Icon, title, features }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 h-full flex flex-col group">
        <div className="flex items-center space-x-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight">{title}</h3>
        </div>
        <ul className="space-y-4 flex-grow">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-600">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    </div>
);

const ModuleCard: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm">
        <h4 className="font-bold text-white text-lg mb-2">{title}</h4>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
);

const PricingCard: React.FC<{
    title: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
}> = ({ title, price, description, features, isPopular }) => (
    <div className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 h-full ${isPopular ? 'bg-white border-blue-600 shadow-2xl ring-1 ring-blue-600 scale-105 z-10' : 'bg-gray-50 border-gray-200 hover:shadow-lg'}`}>
        {isPopular && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm tracking-wide uppercase">Most Popular</span>
            </div>
        )}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-500 min-h-[40px]">{description}</p>
        <div className="my-6">
            <span className="text-4xl font-extrabold text-gray-900">{price}</span>
            {price !== 'Custom' && <span className="text-gray-500 font-medium">/mo</span>}
        </div>
        <div className="flex-grow">
            <ul className="space-y-4">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircleIcon className={`h-5 w-5 mr-3 flex-shrink-0 ${isPopular ? 'text-blue-600' : 'text-gray-400'}`} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="mt-8">
            <Link 
                to="/contact" 
                className={`w-full block text-center py-3 px-6 rounded-lg font-bold transition-colors ${isPopular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white border-2 border-gray-200 text-gray-800 hover:border-gray-900 hover:text-gray-900'}`}
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
                className="w-full flex justify-between items-center py-5 text-left focus:outline-none hover:bg-gray-50 px-4 -mx-4 rounded-lg transition-colors"
            >
                <span className="text-lg font-bold text-gray-900 pr-8">{question}</span>
                <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                <div className="text-gray-600 leading-relaxed text-base px-2">{answer}</div>
            </div>
        </div>
    );
};

const RietailPage: React.FC = () => {
    return (
        <div className="bg-white text-gray-800 font-sans">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Products', path: '/products' }, { label: 'Rietail' }]} />
            </div>

            {/* 1. Hero Section */}
            <section className="py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
                <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[100px] opacity-20"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-blue-300 text-xs font-bold tracking-wide uppercase mb-6">
                            <ShieldCheckIcon className="h-4 w-4" />
                            <span>Enterprise B2B Commerce</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                            Complex B2B Sales, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Simplified.</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-lg">
                            Rietail handles the heavy lifting of wholesale: custom pricing, bulk workflows, and intricate product configurations—all in one platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-flex justify-center items-center bg-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/30">
                                Schedule a Demo
                            </Link>
                            <Link to="/contact" className="inline-flex justify-center items-center bg-gray-800 border border-gray-700 text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-700 transition-colors">
                                Talk to Sales
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-800">
                            <div className="absolute top-0 left-0 w-full h-8 bg-gray-900 border-b border-gray-700 flex items-center px-4 space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <img src="https://picsum.photos/seed/rietail-dashboard-ui/800/600" alt="RIETAIL Dashboard Interface" className="w-full h-auto mt-8 opacity-90" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Key Capabilities Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Engineered for Complexity</h2>
                        <p className="mt-4 text-lg text-gray-600">Standard e-commerce platforms break under B2B requirements. Rietail thrives on them.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <CapabilityCard 
                            icon={TemplateIcon}
                            title="Product Configuration"
                            features={[
                                'Customizable sets with dynamic pricing',
                                'Fixed bundles & pre-packs',
                                'Matrix ordering (Color/Size grids)',
                                'Made-to-order logic'
                            ]}
                        />
                         <CapabilityCard 
                            icon={DocumentSignatureIcon}
                            title="Order Workflows"
                            features={[
                                'Quote-to-Order conversion',
                                'Booking w/o immediate payment',
                                'Credit limit approvals',
                                'Hybrid direct & invoice flow'
                            ]}
                        />
                         <CapabilityCard 
                            icon={InventoryIcon}
                            title="Smart Inventory"
                            features={[
                                'Virtual inventory pools',
                                'Real-time stock decrement',
                                'Backorder management',
                                'Multi-warehouse routing'
                            ]}
                        />
                         <CapabilityCard 
                            icon={BanknotesIcon}
                            title="Dynamic Pricing"
                            features={[
                                'Client-specific price lists',
                                'Volume-based tiered discounts',
                                'Contract pricing logic',
                                'Currency conversion per user'
                            ]}
                        />
                         <CapabilityCard 
                            icon={LinkIcon}
                            title="Digital Assets"
                            features={[
                                'Product-level spec sheets (PDF)',
                                'Bulk image downloads',
                                'Video training libraries',
                                'White-label sell sheets'
                            ]}
                        />
                         <CapabilityCard 
                            icon={UsersIcon}
                            title="Customer Portal"
                            features={[
                                'Company hierarchy (Parent/Child)',
                                'Role-based access control',
                                'Order history & re-order',
                                'Statement of accounts'
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* 3. Integration Ecosystem */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Seamlessly Integrated</h2>
                            <p className="text-gray-400 text-lg mb-10">
                                Rietail doesn't sit in a silo. It connects directly with your ERP, CRM, and financial tools to ensure a single source of truth for your data.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-blue-600 p-2 rounded-lg mr-4">
                                        <ServerStackIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">ERP Connectors</h4>
                                        <p className="text-gray-400 text-sm">Pre-built sync for SAP, Oracle, and Microsoft Dynamics.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-purple-600 p-2 rounded-lg mr-4">
                                        <UsersIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">CRM Sync</h4>
                                        <p className="text-gray-400 text-sm">Push customer interactions and orders directly to Salesforce or HubSpot.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-6">
                            <ModuleCard 
                                title="EtaliOn Integration" 
                                description="Unified inventory and settlement workflows across B2B and D2C channels."
                            />
                            <ModuleCard 
                                title="Finance & Billing" 
                                description="Automated invoice generation and reconciliation with Xero and QuickBooks."
                            />
                            <ModuleCard 
                                title="Herometricx Analytics" 
                                description="Deep dive reporting on B2B buyer behavior, churn risk, and CLTV."
                            />
                        </div>
                    </div>
                </div>
            </section>

             {/* 5. Pricing Section */}
             <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Platform Licensing</h2>
                        <p className="mt-4 text-gray-600">Enterprise power, priced for scale.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        <PricingCard 
                            title="Standard B2B"
                            price="$499"
                            description="For growing brands needing wholesale capabilities."
                            features={[
                                'Standard B2B Order Types',
                                'Customer Login Portal',
                                'Tiered Pricing (Up to 3 tiers)',
                                'Manual Inventory Tracking',
                                'Standard Support'
                            ]}
                        />
                         <PricingCard 
                            title="Advanced Commerce"
                            price="$999"
                            description="For established manufacturers and distributors."
                            isPopular={true}
                            features={[
                                'All Order Types (Enquiry/Booking)',
                                'Customer Specific Pricing',
                                'Advanced Inventory (Backorders)',
                                'Catalogue Video Support',
                                'Priority Support'
                            ]}
                        />
                         <PricingCard 
                            title="Enterprise"
                            price="Custom"
                            description="For high-volume, multi-channel operations."
                            features={[
                                'Unlimited Pricing Tiers',
                                'Full ERP/CRM Integration',
                                'Custom Workflow Development',
                                'Dedicated Account Manager',
                                'SLA Guarantees'
                            ]}
                        />
                    </div>
                </div>
            </section>

             {/* 6. FAQ Section */}
             <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Expert Answers</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem 
                            question="What distinguishes Rietail from Shopify Plus?" 
                            answer="Rietail is built specifically for B2B workflows first, not as an afterthought. We handle complex matrix ordering, multi-tiered pricing per customer, and 'booking' workflows (ordering without payment) natively, without needing expensive third-party apps."
                        />
                        <FAQItem 
                            question="Can I handle 'Pre-orders' or 'Futures'?" 
                            answer="Yes. Our booking workflow allows clients to reserve stock for future delivery dates without immediate payment, perfect for fashion seasons or manufacturing lead times."
                        />
                         <FAQItem 
                            question="How do you handle customer-specific catalogs?" 
                            answer="You can create catalog rules that hide/show specific collections or products based on the customer's tag or group. This ensures exclusive items are only seen by approved buyers."
                        />
                         <FAQItem 
                            question="Is there a minimum contract term?" 
                            answer="We offer both monthly and annual contracts. Enterprise plans typically require an annual agreement due to the custom setup involved."
                        />
                    </div>
                </div>
            </section>

            {/* 7. CTA */}
            <section className="py-24 bg-blue-600 text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold">Ready to Modernize Your Wholesale?</h2>
                    <p className="mt-6 text-xl text-blue-100">Stop managing orders on spreadsheets. Start scaling with Rietail.</p>
                    <div className="mt-10">
                        <Link to="/contact" className="inline-block bg-white text-blue-600 font-bold py-4 px-12 rounded-xl text-lg hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-2xl">
                            Request Your Demo
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RietailPage;
