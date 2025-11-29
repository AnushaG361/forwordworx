
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    AdjustmentsIcon, 
    SwatchIcon, 
    TagIcon, 
    LogicIcon, 
    CheckCircleIcon, 
    ChevronDownIcon,
    GiftIcon,
    TemplateIcon,
    BanknotesIcon,
    ChartBarIcon
} from '../constants/icons';

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-indigo-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

const IntegrationCard: React.FC<{ title: string }> = ({ title }) => (
    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center justify-between hover:border-indigo-200 transition-colors">
        <span className="font-semibold text-gray-900">{title}</span>
        <CheckCircleIcon className="h-5 w-5 text-green-500" />
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
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                <div className="text-gray-600 leading-relaxed text-base">{answer}</div>
            </div>
        </div>
    );
};

const UseCaseChip: React.FC<{ title: string }> = ({ title }) => (
    <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 text-gray-800 font-medium hover:border-indigo-300 hover:text-indigo-600 transition-colors cursor-default">
        {title}
    </div>
);

const RIProductOptionPage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-800">
            {/* 1. Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="mb-8">
                         <Link to="/products/riaddon" className="inline-flex items-center text-gray-500 hover:text-indigo-600 font-medium transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Addons
                        </Link>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative z-10">
                            <div className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-6">
                                RI Product Option
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                                Let Customers <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Personalize Everything.</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                                Add limitless product options, swatches, add-ons, engravings, and custom fields — without complex code.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30">
                                    Try Live Demo
                                </button>
                                <button className="bg-white border-2 border-gray-200 text-gray-700 font-bold py-4 px-8 rounded-lg text-lg hover:border-gray-900 hover:text-gray-900 transition-colors">
                                    Add to My Store
                                </button>
                            </div>
                        </div>
                        <div className="relative flex justify-center">
                             <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
                             <div className="absolute -bottom-10 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
                            {/* Visual Placeholder for "Slick Shopify PDP mockup showing custom fields + swatches + gift options" */}
                            <div className="relative w-full max-w-lg">
                                <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden aspect-[4/5] flex flex-col">
                                    {/* Header */}
                                    <div className="h-14 border-b border-gray-100 flex items-center px-6 justify-between">
                                        <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                        <div className="flex space-x-2">
                                            <div className="h-6 w-6 bg-gray-100 rounded-full"></div>
                                            <div className="h-6 w-6 bg-gray-100 rounded-full"></div>
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex space-x-4 mb-6">
                                            <div className="w-1/2 bg-gray-100 rounded-xl h-40"></div>
                                            <div className="w-1/2 space-y-3">
                                                <div className="h-6 w-3/4 bg-gray-800 rounded"></div>
                                                <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                                                <div className="h-8 w-20 bg-indigo-100 rounded text-indigo-700 font-bold flex items-center justify-center text-sm">$129.00</div>
                                            </div>
                                        </div>
                                        {/* Custom Fields Area */}
                                        <div className="space-y-4 border-t border-gray-100 pt-4">
                                            <div>
                                                <div className="text-xs font-bold text-gray-500 uppercase mb-2">Choose Material</div>
                                                <div className="flex space-x-2">
                                                    <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white shadow-sm cursor-pointer ring-2 ring-indigo-500"></div>
                                                    <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white shadow-sm cursor-pointer"></div>
                                                    <div className="w-8 h-8 rounded-full bg-black border-2 border-white shadow-sm cursor-pointer"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-gray-500 uppercase mb-2">Add Engraving (+$10)</div>
                                                <div className="h-10 border border-gray-300 rounded-lg bg-gray-50 w-full flex items-center px-3 text-sm text-gray-400">Type your name...</div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="h-5 w-5 border border-gray-300 rounded bg-indigo-600 flex items-center justify-center text-white text-xs">✓</div>
                                                <span className="text-sm font-medium">Gift Wrap (+ $5.00)</span>
                                            </div>
                                        </div>
                                        <div className="mt-auto pt-6">
                                            <button className="w-full bg-black text-white py-4 rounded-xl font-bold">Add to Cart - $144.00</button>
                                        </div>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Customers love choices.</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        Give them more — without messing up inventory. With RI Product Option you can add personalization, paid add-ons, and custom rules effortlessly.
                    </p>
                    <div className="inline-block bg-green-50 border border-green-100 px-6 py-3 rounded-full">
                        <span className="text-green-700 font-bold">More options → More conversion → More revenue 🤑</span>
                    </div>
                </div>
            </section>

            {/* 3. Features Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard 
                            icon={AdjustmentsIcon} 
                            title="Unlimited Custom Fields" 
                            description="Text fields, dropdowns, checkboxes, date pickers. Engraving, gift messages, delivery date — anything 🔥" 
                        />
                        <FeatureCard 
                            icon={SwatchIcon} 
                            title="Advanced Variant Options" 
                            description="Image swatches, Color swatches, Linked variants. Auto-disable out-of-stock options." 
                        />
                         <FeatureCard 
                            icon={BanknotesIcon} 
                            title="Dynamic Pricing" 
                            description="Extra fields = extra revenue 💸. E.g., +₹199 for personalization, +₹299 for premium packaging." 
                        />
                         <FeatureCard 
                            icon={LogicIcon} 
                            title="Conditional Logic" 
                            description="Show options only when relevant. Cleaner UX, faster checkout." 
                        />
                         <FeatureCard 
                            icon={TagIcon} 
                            title="SKU Mapping" 
                            description="Keep backend inventory accurate. Each option can map to its own SKU." 
                        />
                         <FeatureCard 
                            icon={TemplateIcon} 
                            title="Drag & Drop UI Builder" 
                            description="Customize fields easily — zero dev needed." 
                        />
                    </div>
                </div>
            </section>

             {/* 4. Industry Fit */}
             <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Industries Perfect Match</h2>
                        <p className="text-gray-600 mt-2">If it needs options — we gotchu.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <UseCaseChip title="Jewelry (engraving)" />
                        <UseCaseChip title="Apparel & Footwear" />
                        <UseCaseChip title="Gifting Brands" />
                        <UseCaseChip title="Furniture" />
                        <UseCaseChip title="Merch Printing" />
                        <UseCaseChip title="Cakes & Personalized" />
                    </div>
                </div>
            </section>

            {/* 5. Integration & Boost */}
            <section className="py-20 bg-indigo-900 text-white">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Works flawlessly with</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center bg-indigo-800 p-4 rounded-lg"><CheckCircleIcon className="text-green-400 h-5 w-5 mr-3"/> Shopify Cart</div>
                                <div className="flex items-center bg-indigo-800 p-4 rounded-lg"><CheckCircleIcon className="text-green-400 h-5 w-5 mr-3"/> Third-party themes</div>
                                <div className="flex items-center bg-indigo-800 p-4 rounded-lg"><CheckCircleIcon className="text-green-400 h-5 w-5 mr-3"/> Inventory apps</div>
                                <div className="flex items-center bg-indigo-800 p-4 rounded-lg"><CheckCircleIcon className="text-green-400 h-5 w-5 mr-3"/> Discount engine</div>
                            </div>
                            <p className="mt-6 text-indigo-200 italic">No conflicts. No head-scratching.</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Boost Conversion & AOV</h2>
                            <p className="text-indigo-200 mb-6">Upsell add-ons that customers can’t resist:</p>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between bg-white text-gray-900 p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center"><GiftIcon className="h-6 w-6 text-pink-500 mr-3"/> Gift wrapping</div>
                                    <span className="font-bold text-green-600">+$5.00</span>
                                </div>
                                <div className="flex items-center justify-between bg-white text-gray-900 p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center"><ChartBarIcon className="h-6 w-6 text-blue-500 mr-3"/> Fast shipping</div>
                                    <span className="font-bold text-green-600">+$15.00</span>
                                </div>
                                <div className="flex items-center justify-between bg-white text-gray-900 p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center"><CheckCircleIcon className="h-6 w-6 text-yellow-500 mr-3"/> Warranty add-on</div>
                                    <span className="font-bold text-green-600">+$29.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </section>

            {/* 6. Design Control & Rules */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                         <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
                             <h3 className="text-2xl font-bold text-purple-900 mb-4">Custom Design Control</h3>
                             <p className="text-purple-700 mb-6">Aesthetic and on-brand always 💅</p>
                             <ul className="space-y-3">
                                 <li className="flex items-center text-purple-800"><CheckCircleIcon className="h-5 w-5 mr-2"/> Match theme colors</li>
                                 <li className="flex items-center text-purple-800"><CheckCircleIcon className="h-5 w-5 mr-2"/> Custom input styles</li>
                                 <li className="flex items-center text-purple-800"><CheckCircleIcon className="h-5 w-5 mr-2"/> Inline or popup layout</li>
                                 <li className="flex items-center text-purple-800"><CheckCircleIcon className="h-5 w-5 mr-2"/> Mobile-first UI</li>
                             </ul>
                        </div>
                        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                             <h3 className="text-2xl font-bold text-blue-900 mb-4">Smart Rules to Reduce Errors</h3>
                             <p className="text-blue-700 mb-6">No incomplete orders.</p>
                             <ul className="space-y-3">
                                 <li className="flex items-center text-blue-800"><CheckCircleIcon className="h-5 w-5 mr-2"/> Character limit validation</li>
                                 <li className="flex items-center text-blue-800"><CheckCircleIcon className="h-5 w-5 mr-2"/> File upload types</li>
                                 <li className="flex items-center text-blue-800"><CheckCircleIcon className="h-5 w-5 mr-2"/> Required/optional setting</li>
                                 <li className="flex items-center text-blue-800"><CheckCircleIcon className="h-5 w-5 mr-2"/> Pricing preview before add to cart</li>
                             </ul>
                        </div>
                    </div>
                </div>
            </section>

             {/* 7. FAQ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">RI Product Option — FAQs</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem 
                            question="Will it mess up my variants or inventory?" 
                            answer="Nope. Options don’t create excess variants. You can map SKUs only where necessary."
                        />
                        <FAQItem 
                            question="Can I add paid customization?" 
                            answer="Yes — with dynamic pricing add-ons (fixed or % based)."
                        />
                        <FAQItem 
                            question="Does it support file uploads?" 
                            answer="Yesss — images, logos, personalized artwork — all supported safely."
                        />
                        <FAQItem 
                            question="Can I apply options only to specific products or collections?" 
                            answer="Absolutely. Assign globally, per category, or per product."
                        />
                        <FAQItem 
                            question="Does it work with my Shopify theme?" 
                            answer="100%. Compatible with all major themes + custom ones too."
                        />
                         <FAQItem 
                            question="Can customers preview the chosen options?" 
                            answer="Yes — selections appear on product page + cart + order + admin."
                        />
                         <FAQItem 
                            question="Is conditional logic supported?" 
                            answer="Yes — show/hide options based on previous selections."
                        />
                         <FAQItem 
                            question="Will it slow down my store?" 
                            answer="Nah. Optimized scripts → fast load speed ⚡"
                        />
                         <FAQItem 
                            question="Can I translate fields into multiple languages?" 
                            answer="Yep — multilingual support for global stores."
                        />
                        <FAQItem 
                            question="Do options sync to Shopify orders?" 
                            answer="All selected data lands inside order details, packing slips, and receipts so fulfillment stays smooth."
                        />
                    </div>
                </div>
            </section>

             {/* 8. Final CTA */}
             <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold">More personalization. Zero complexity.</h2>
                    <p className="mt-6 text-xl text-indigo-100">Make every product feel tailored.</p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg">
                            Install Now for Shopify
                        </button>
                        <button className="bg-transparent border border-white text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-white/10 transition-colors">
                            Try Demo
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RIProductOptionPage;
