
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    ShoppingCartIcon, 
    BuildingLibraryIcon, 
    InventoryIcon, 
    UserGroupIcon, 
    GiftIcon, 
    DocumentTextIcon, 
    ServerStackIcon, 
    CheckCircleIcon, 
    TrendingUpIcon, 
    UsersIcon, 
    DevicePhoneMobileIcon,
    ClipboardDocumentCheckIcon,
    CurrencyDollarIcon,
    PresentationChartLineIcon,
    RocketLaunchIcon,
    TrophyIcon,
    ArrowRightIcon,
    MapPinIcon,
    UserPlusIcon,
    CreditCardIcon,
    MobileIcon,
    GlobeAltIcon,
    SparklesIcon
} from '../constants/icons';

const GOALS = [
    { id: 'bulk_booking', icon: ShoppingCartIcon, title: 'Place bulk bookings easily' },
    { id: 'manage_retailers', icon: BuildingLibraryIcon, title: 'Manage multiple retailers' },
    { id: 'inventory_control', icon: InventoryIcon, title: 'Control inventory across stores' },
    { id: 'distributor_flow', icon: UserGroupIcon, title: 'Improve distributor → retailer flow' },
    { id: 'loyalty', icon: GiftIcon, title: 'Add loyalty & customer rewards' },
    { id: 'credit_orders', icon: DocumentTextIcon, title: 'Manage credit orders smoothly' },
    { id: 'digital_catalog', icon: ServerStackIcon, title: 'Build digital product catalog' },
    { id: 'approvals', icon: CheckCircleIcon, title: 'Automate order approvals' },
    { id: 'centralize_ops', icon: TrendingUpIcon, title: 'Centralize B2B operations' },
    { id: 'sales_workflow', icon: UsersIcon, title: 'Improve sales agents workflow' },
];

const MODELS = [
    { id: 'retailer_app', title: 'Retailer App Model', description: 'Personalized login → Easy Catalog → Bulk Orders → Tracking.', recommendedFor: ['bulk_booking', 'digital_catalog', 'loyalty'] },
    { id: 'distributor_dashboard', title: 'Distributor Dashboard Model', description: 'Multi-retailer oversight, order consolidation, and territory management.', recommendedFor: ['distributor_flow', 'manage_retailers', 'inventory_control'] },
    { id: 'manufacturer_dashboard', title: 'Manufacturer Dashboard Model', description: 'Full control on production, orders, inventory, and analytics.', recommendedFor: ['centralize_ops', 'approvals'] },
    { id: 'sales_agent', title: 'Retail Agent Model', description: 'Field-sales order entry app with offline capabilities.', recommendedFor: ['sales_workflow'] },
    { id: 'multi_store', title: 'Multi-Store Management Model', description: 'Centralized control for brands with multiple physical outlets.', recommendedFor: ['inventory_control', 'centralize_ops'] },
    { id: 'credit_mgmt', title: 'B2B Credit Order Model', description: 'Manage credit limits, outstanding balances, and payment terms.', recommendedFor: ['credit_orders'] },
    { id: 'loyalty_model', title: 'Loyalty Rewarding Model', description: 'Incentivize repeat purchases with points and tier-based rewards.', recommendedFor: ['loyalty'] },
];

const NEEDS_CHECKLIST = [
    'Easy product browsing',
    'Bulk order placement',
    'Order history & tracking',
    'Real-time inventory visibility',
    'Booking approval workflows',
    'Credit order handling',
    'Loyalty & customer rewards',
    'Role-based access',
    'Multi-user dashboard',
    'Distributor → retailer control',
    'Territory management',
    'Smart catalog downloads',
];

const MODULES_MAP = {
    core: ['Digital Product Catalogs', 'Multiple Product Detail Pages', 'Multiple Order Types', 'Multiple Inventory Types', 'Multiple Pricing', 'Multiple User Types'],
    ops: ['Booking Approval Workflow', 'Credit Order Processing', 'Inventory Management', 'Distributor Dashboard', 'Manufacturer Dashboard', 'Order Consolidation', 'Territory Management', 'Role-Based Login Access'],
    customer: ['Loyalty Points', 'Customer Grades', 'Customer Rewards', 'CRM with communication', 'Customer Registration'],
    integration: ['Tally / Zoho ERP', 'WhatsApp order updates', 'SMS/Email notifications'],
};

const MARKET_VALUE = [
    { value: '40%', label: 'Faster order processing' },
    { value: '0%', label: 'Manual catalog work' },
    { value: '3×', label: 'Increase in retailer retention' },
    { value: '2×', label: 'Faster booking approval' },
];

// New Detailed Pricing Structure
const PRICING_CATEGORIES = [
    { id: 'website', label: 'Website Plans', icon: GlobeAltIcon },
    { id: 'mobile', label: 'Mobile Apps', icon: MobileIcon },
    { id: 'combos', label: 'Subscription Combos', icon: ServerStackIcon },
    { id: 'enterprise', label: 'Enterprise', icon: BuildingLibraryIcon },
];

const PRICING_DATA: any = {
    website: [
        {
            title: 'Enquiry & Catalog Website',
            oneTime: '₹ 10,000',
            monthly: '₹ 499',
            features: ['Product catalog', 'Enquiry form', 'Basic admin panel', 'Customer view pages']
        },
        {
            title: 'Booking & Order Website',
            oneTime: '₹ 25,000',
            monthly: '₹ 499',
            features: ['Everything in Enquiry', 'Full online ordering', 'Cart + checkout flow', 'Order management dashboard'],
            popular: true
        },
        {
            title: 'Website + Distributor Panel',
            oneTime: '₹ 40,000',
            monthly: '₹ 1,499',
            features: ['All Booking features', 'Distributor / Reseller panel', 'Multi-tier pricing', 'Distributor order & ledger']
        }
    ],
    mobile: [
        {
            title: 'Android App or iOS',
            oneTime: '₹ 25,000',
            monthly: '₹ 999',
            features: ['Native App (Android OR iOS)', 'Push Notifications', 'App Store/Play Store Submission', 'Real-time Sync']
        },
        {
            title: 'Android + iOS Combo Plan',
            oneTime: '₹ 40,000',
            monthly: '₹ 999',
            features: ['Both Android & iOS Apps', 'Unified Management', 'Maximum Reach', 'Priority Support'],
            popular: true
        }
    ],
    combos: [
        {
            title: 'Website + Android App',
            oneTime: '₹ 0',
            monthly: '₹ 999',
            features: ['Full Website Access', 'Android Application', 'Unified Backend', 'Real-time Sync'],
            badge: 'Best Value'
        },
        {
            title: 'Website + Android + iOS',
            oneTime: '₹ 0',
            monthly: '₹ 1,499',
            features: ['Full Website Access', 'Android App', 'iOS App', 'Complete Omni-channel'],
            popular: true
        },
        {
            title: 'Full Stack + Distributor',
            oneTime: '₹ 0',
            monthly: '₹ 1,999',
            features: ['Website + Apps', 'Distributor Panel', 'Reseller Management', 'Advanced Analytics']
        }
    ],
    enterprise: [
        {
            title: 'Enterprise Distributor System',
            oneTime: '₹ 1,00,000',
            monthly: 'Custom',
            features: ['Custom distributor portal', 'Unlimited scale', 'Dedicated server setup', 'Custom integrations', 'SLA Support'],
            fullWidth: true
        }
    ]
};

const GoalCard: React.FC<{ icon: React.ElementType, title: string, selected: boolean, onClick: () => void }> = ({ icon: Icon, title, selected, onClick }) => (
    <div 
        onClick={onClick}
        className={`border rounded-xl p-6 flex items-center space-x-4 cursor-pointer transition-all duration-200 group h-full ${selected ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-200' : 'border-gray-200 hover:border-blue-300 hover:shadow-md bg-white'}`}
    >
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${selected ? 'bg-blue-600' : 'bg-blue-50 group-hover:bg-blue-100'}`}>
            <Icon className={`h-6 w-6 transition-colors ${selected ? 'text-white' : 'text-blue-600'}`} />
        </div>
        <span className={`font-semibold text-sm flex-1 ${selected ? 'text-blue-900' : 'text-gray-700'}`}>{title}</span>
    </div>
);

const ModelCard: React.FC<{ title: string, description: string, recommended: boolean, selected: boolean, onClick: () => void }> = ({ title, description, recommended, selected, onClick }) => (
    <div 
        onClick={onClick}
        className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all ${selected ? 'border-blue-600 bg-blue-50' : 'border-gray-100 bg-white hover:border-blue-200'}`}
    >
        {recommended && <span className="absolute -top-3 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Recommended</span>}
        <h4 className="font-bold text-gray-900 text-lg mb-2">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

const DetailedPricingCard: React.FC<{ 
    plan: any, 
    isSelected: boolean, 
    onSelect: () => void 
}> = ({ plan, isSelected, onSelect }) => (
    <div 
        onClick={onSelect}
        className={`relative p-6 rounded-2xl border-2 flex flex-col h-full cursor-pointer transition-all duration-300 ${isSelected ? 'border-blue-600 bg-blue-50/50 shadow-lg scale-[1.02]' : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'} ${plan.fullWidth ? 'md:col-span-2 lg:col-span-3' : ''}`}
    >
        {plan.popular && (
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg shadow-sm">
                Most Popular
            </div>
        )}
        {plan.badge && (
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg shadow-sm">
                {plan.badge}
            </div>
        )}
        
        <h3 className="text-lg font-bold text-gray-900 mb-4">{plan.title}</h3>
        
        <div className="flex items-end space-x-4 mb-6">
            <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Onetime Setup</p>
                <p className="text-xl font-bold text-gray-900">{plan.oneTime}</p>
            </div>
            {plan.monthly !== '-' && (
                <div className="pl-4 border-l border-gray-200">
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Monthly Subscription</p>
                    <p className="text-xl font-bold text-blue-600">{plan.monthly}</p>
                </div>
            )}
        </div>

        <ul className="space-y-3 mb-6 flex-grow">
            {plan.features.map((f: string, i: number) => (
                <li key={i} className="flex items-start text-sm text-gray-600">
                    <CheckCircleIcon className="h-4 w-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                </li>
            ))}
        </ul>

        <div className={`w-full py-2 rounded-lg font-bold text-center text-sm transition-colors ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'}`}>
            {isSelected ? 'Selected' : 'Select Plan'}
        </div>
    </div>
);

const StepIndicator: React.FC<{ currentStep: number, totalSteps: number }> = ({ currentStep, totalSteps }) => {
    const progress = (currentStep / totalSteps) * 100;
    return (
        <div className="w-full max-w-xs mx-auto mb-8">
            <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                <span>Start</span>
                <span>Finish</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-blue-600 transition-all duration-500 ease-out rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div className="text-center mt-2 text-sm font-semibold text-blue-600">
                Step {currentStep} of {totalSteps}
            </div>
        </div>
    );
};

const RietailBuilderPage: React.FC = () => {
    const [step, setStep] = useState(1);
    const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
    const [selectedModel, setSelectedModel] = useState<string | null>(null);
    const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
    const [pricingCategory, setPricingCategory] = useState<string>('website');
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    const nextStep = () => setStep(s => Math.min(s + 1, 7));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    const toggleNeed = (need: string) => {
        if (selectedNeeds.includes(need)) {
            setSelectedNeeds(selectedNeeds.filter(n => n !== need));
        } else {
            setSelectedNeeds([...selectedNeeds, need]);
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans text-gray-800 pb-20">
            {/* Header */}
            <div className="border-b border-gray-200 bg-white sticky top-20 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="bg-blue-600 rounded p-1">
                            <ShoppingCartIcon className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-bold text-gray-900">RiEtail</span>
                        <span className="text-gray-400 mx-2">|</span>
                        <span className="text-sm font-medium text-gray-600">Ecosystem Builder</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        {step > 1 && (
                            <button onClick={prevStep} className="text-sm font-medium text-gray-500 hover:text-gray-900">Back</button>
                        )}
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
                            {step === 7 ? 'Complete' : `Step ${step}/7`}
                        </span>
                    </div>
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <StepIndicator currentStep={step} totalSteps={7} />

                {/* STEP 1: GOAL */}
                {step === 1 && (
                    <div className="animate-fade-in-up">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">What do you want to achieve?</h1>
                            <p className="text-gray-500 text-lg">Select your primary business objective to customize the RiEtail ecosystem.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {GOALS.map(goal => (
                                <GoalCard 
                                    key={goal.id} 
                                    icon={goal.icon} 
                                    title={goal.title} 
                                    selected={selectedGoal === goal.id}
                                    onClick={() => setSelectedGoal(goal.id)}
                                />
                            ))}
                        </div>
                        <div className="text-center">
                            <button 
                                onClick={nextStep} 
                                disabled={!selectedGoal}
                                className={`px-8 py-3 rounded-lg font-bold text-lg transition-all ${selectedGoal ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                            >
                                Continue to Step 2
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 2: MODEL */}
                {step === 2 && (
                    <div className="animate-fade-in-up">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended Business Models</h2>
                            <p className="text-gray-500">Based on your goal, these models fit your needs best.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                            {MODELS.map(model => {
                                const isRec = selectedGoal ? model.recommendedFor.includes(selectedGoal) : false;
                                return (
                                    <ModelCard 
                                        key={model.id}
                                        title={model.title}
                                        description={model.description}
                                        recommended={isRec}
                                        selected={selectedModel === model.id}
                                        onClick={() => setSelectedModel(model.id)}
                                    />
                                );
                            })}
                        </div>
                        <div className="text-center">
                            <button 
                                onClick={nextStep} 
                                disabled={!selectedModel}
                                className={`px-8 py-3 rounded-lg font-bold text-lg transition-all ${selectedModel ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                            >
                                Continue to Step 3
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 3: NEEDS */}
                {step === 3 && (
                    <div className="animate-fade-in-up">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">What specific features do you need?</h2>
                            <p className="text-gray-500">Select all that apply to tailor your module stack.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
                            {NEEDS_CHECKLIST.map(need => (
                                <div 
                                    key={need}
                                    onClick={() => toggleNeed(need)}
                                    className={`p-4 rounded-lg border cursor-pointer flex items-center transition-all ${selectedNeeds.includes(need) ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}
                                >
                                    <div className={`w-6 h-6 rounded border flex items-center justify-center mr-4 ${selectedNeeds.includes(need) ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white'}`}>
                                        {selectedNeeds.includes(need) && <CheckCircleIcon className="h-4 w-4 text-white" />}
                                    </div>
                                    <span className="text-gray-800 font-medium">{need}</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <button onClick={nextStep} className="px-8 py-3 rounded-lg font-bold text-lg bg-blue-600 text-white hover:bg-blue-700 shadow-lg">
                                Build My Stack
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 4: MODULES */}
                {step === 4 && (
                    <div className="animate-fade-in-up">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Custom RiEtail Stack</h2>
                            <p className="text-gray-500">Auto-mapped modules based on your requirements.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <h3 className="font-bold text-blue-900 mb-4 flex items-center text-lg"><ServerStackIcon className="h-6 w-6 mr-2 text-blue-600"/> Core Modules</h3>
                                <ul className="space-y-3">
                                    {MODULES_MAP.core.map(m => <li key={m} className="text-sm text-gray-700 flex items-center font-medium"><CheckCircleIcon className="h-4 w-4 text-green-500 mr-2"/>{m}</li>)}
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <h3 className="font-bold text-blue-900 mb-4 flex items-center text-lg"><ClipboardDocumentCheckIcon className="h-6 w-6 mr-2 text-blue-600"/> Operational Modules</h3>
                                <ul className="space-y-3">
                                    {MODULES_MAP.ops.map(m => <li key={m} className="text-sm text-gray-700 flex items-center font-medium"><CheckCircleIcon className="h-4 w-4 text-green-500 mr-2"/>{m}</li>)}
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <h3 className="font-bold text-blue-900 mb-4 flex items-center text-lg"><GiftIcon className="h-6 w-6 mr-2 text-blue-600"/> Customer Modules</h3>
                                <ul className="space-y-3">
                                    {MODULES_MAP.customer.map(m => <li key={m} className="text-sm text-gray-700 flex items-center font-medium"><CheckCircleIcon className="h-4 w-4 text-green-500 mr-2"/>{m}</li>)}
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <h3 className="font-bold text-blue-900 mb-4 flex items-center text-lg"><DevicePhoneMobileIcon className="h-6 w-6 mr-2 text-blue-600"/> Integration Modules</h3>
                                <ul className="space-y-3">
                                    {MODULES_MAP.integration.map(m => <li key={m} className="text-sm text-gray-700 flex items-center font-medium"><CheckCircleIcon className="h-4 w-4 text-green-500 mr-2"/>{m}</li>)}
                                </ul>
                            </div>
                        </div>
                        <div className="text-center">
                            <button onClick={nextStep} className="px-8 py-3 rounded-lg font-bold text-lg bg-blue-600 text-white hover:bg-blue-700 shadow-lg">
                                See Value & ROI
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 5: MARKET VALUE */}
                {step === 5 && (
                    <div className="animate-fade-in-up">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projected Business Impact</h2>
                            <p className="text-gray-500">Why leading brands switch to RiEtail.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                            {MARKET_VALUE.map((stat, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center transform hover:-translate-y-2 transition-transform duration-300">
                                    <div className="text-4xl font-extrabold text-blue-600 mb-2">{stat.value}</div>
                                    <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-10 rounded-2xl text-center mb-12 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Performance</h3>
                            <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
                                "Real-time inventory reduces dead stock, centralized dashboards provide better visibility, and multi-tier approval workflows significantly reduce credit risk across your entire supply chain."
                            </p>
                        </div>
                        <div className="text-center">
                            <button onClick={nextStep} className="px-8 py-3 rounded-lg font-bold text-lg bg-blue-600 text-white hover:bg-blue-700 shadow-lg">
                                View Pricing Plans
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 6: PRICING - UPDATED */}
                {step === 6 && (
                    <div className="animate-fade-in-up">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
                            <p className="text-gray-500">Comprehensive pricing for websites, apps, and combos.</p>
                        </div>

                        {/* Category Tabs */}
                        <div className="flex flex-wrap justify-center gap-3 mb-10">
                            {PRICING_CATEGORIES.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setPricingCategory(cat.id as any)}
                                    className={`flex items-center px-5 py-2.5 rounded-full text-sm font-bold transition-all ${pricingCategory === cat.id ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 ring-offset-1' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                >
                                    <cat.icon className="h-4 w-4 mr-2" />
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Pricing Cards */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {PRICING_DATA[pricingCategory].map((plan: any, idx: number) => (
                                <DetailedPricingCard 
                                    key={idx}
                                    plan={plan}
                                    isSelected={selectedPlan === plan.title}
                                    onSelect={() => setSelectedPlan(plan.title)}
                                />
                            ))}
                        </div>

                        <div className="text-center">
                            <button 
                                onClick={nextStep} 
                                disabled={!selectedPlan}
                                className={`px-10 py-4 rounded-lg font-bold text-lg transition-all ${selectedPlan ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl transform hover:scale-105' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                            >
                                Proceed with {selectedPlan || 'Selection'}
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 7: ONBOARDING */}
                {step === 7 && (
                    <div className="animate-fade-in-up">
                        <div className="text-center mb-16">
                            <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
                                <TrophyIcon className="h-12 w-12 text-green-600" />
                            </div>
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">You're All Set!</h2>
                            <p className="text-xl text-gray-600">Here is your RiEtail Onboarding Roadmap.</p>
                        </div>
                        
                        <div className="max-w-2xl mx-auto relative mb-16 pl-8 md:pl-0">
                            {/* Vertical Line */}
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2"></div>
                            
                            <div className="space-y-12">
                                <div className="relative flex items-center md:justify-center">
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white -translate-x-1/2 z-10"></div>
                                    <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                                        <h4 className="text-lg font-bold text-gray-900">1. Goal Defined</h4>
                                        <p className="text-gray-500 text-sm">You've identified your key objectives.</p>
                                    </div>
                                </div>
                                <div className="relative flex items-center md:justify-center">
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white -translate-x-1/2 z-10"></div>
                                    <div className="ml-16 md:ml-0 md:w-1/2 md:pl-12 md:flex-row-reverse">
                                        <div className="md:text-left">
                                            <h4 className="text-lg font-bold text-gray-900">2. Plan Selected</h4>
                                            <p className="text-gray-500 text-sm">{selectedPlan || 'Custom Plan'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex items-center md:justify-center">
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white -translate-x-1/2 z-10"></div>
                                    <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                                        <h4 className="text-lg font-bold text-gray-900">3. Import Catalog & Pricing</h4>
                                        <p className="text-gray-500 text-sm">Next step: Our team will help you migrate your data.</p>
                                    </div>
                                </div>
                                <div className="relative flex items-center md:justify-center">
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gray-300 rounded-full border-4 border-white -translate-x-1/2 z-10"></div>
                                    <div className="ml-16 md:ml-0 md:w-1/2 md:pl-12">
                                        <div className="md:text-left">
                                            <h4 className="text-lg font-bold text-gray-900">4. Go Live</h4>
                                            <p className="text-gray-500 text-sm">Launch your RiEtail ecosystem to your network.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-bold text-lg bg-blue-600 text-white hover:bg-blue-700 shadow-xl transition-transform hover:scale-105">
                                Finalize Setup with Sales <ArrowRightIcon className="ml-2 h-5 w-5" />
                            </Link>
                            <p className="mt-4 text-sm text-gray-400">Our team will reach out within 24 hours.</p>
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
};

export default RietailBuilderPage;