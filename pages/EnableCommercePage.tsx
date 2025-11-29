
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCartIcon, GlobeAltIcon, ServerStackIcon, LockClosedIcon, ChartPieIcon, CheckCircleIcon, ChevronDownIcon, CpuChipIcon, AutomationIcon } from '../constants/icons';
import Breadcrumbs from '../components/Breadcrumbs';

const FeatureCard: React.FC<{ icon: React.ElementType; title: string; description: string; }> = ({ icon: Icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
            <Icon className="h-6 w-6 text-blue-500" />
        </div>
        <div>
            <h4 className="font-semibold text-gray-900">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const AccordionItem: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-4 text-left"
            >
                <span className="font-semibold text-lg text-gray-900">{title}</span>
                <ChevronDownIcon className={`h-6 w-6 transition-transform text-gray-500 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <div className="pb-4 text-gray-600">{children}</div>}
        </div>
    );
};

const EnableCommercePage: React.FC = () => {
    const location = useLocation();
    const [activeModule, setActiveModule] = useState('eCommerce Platforms');
    const modules = ['eCommerce Platforms', 'Payment Gateways', 'Inventory Management', 'Analytics'];
    
    const navItems = [
        { name: 'Commerce', path: '/enable/commerce', icon: ShoppingCartIcon },
        { name: 'Agents', path: '/enable/agents', icon: CpuChipIcon },
        { name: 'Automation', path: '/enable/automation', icon: AutomationIcon },
    ];

    return (
        <div className="bg-white text-gray-800 flex">
            <aside className="w-64 bg-gray-50 p-6 hidden lg:block border-r border-gray-200 sticky top-20 h-screen overflow-y-auto">
                <div className="flex items-center space-x-2 mb-8">
                    <h2 className="text-xl font-bold text-gray-900">Enable</h2>
                </div>
                <nav className="space-y-2">
                    {navItems.map(item => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link 
                                key={item.name}
                                to={item.path} 
                                className={`flex items-center p-3 space-x-3 rounded-md transition-colors text-sm font-medium ${
                                    isActive 
                                    ? 'bg-blue-100 text-blue-600' 
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                            >
                                <item.icon className={`h-5 w-5 ${isActive ? 'text-blue-500' : 'text-gray-400'}`} />
                                <span>{item.name}</span>
                            </Link>
                        )
                    })}
                </nav>
            </aside>

            <div className="flex-1">
                <header className="p-6 border-b border-gray-200 flex flex-col md:flex-row justify-between items-center bg-white sticky top-20 z-30">
                    <div className="w-full md:w-auto mb-4 md:mb-0">
                        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Enable', path: '/enable' }, { label: 'Commerce' }]} />
                    </div>
                    <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end">
                        <h1 className="text-xl font-bold text-gray-900 md:hidden">Commerce</h1>
                        <Link to="/contact" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-blue-600 whitespace-nowrap">Contact Sales</Link>
                    </div>
                </header>

                <main className="p-6 md:p-10 bg-white">
                    <section className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-4xl font-extrabold text-gray-900">Unified Commerce, Seamlessly Delivered.</h2>
                            <p className="mt-4 text-gray-600">Our integrated commerce solution helps you streamline operations, boost sales, and enhance customer experiences across all channels.</p>
                            <div className="mt-6 flex space-x-4">
                                <Link to="/contact" className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600">Request a Demo</Link>
                                <Link to="/contact" className="bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-200">Talk to an Expert</Link>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img src="https://picsum.photos/seed/commerce-unified/500/350" alt="Unified Commerce" className="rounded-lg shadow-2xl" />
                        </div>
                    </section>

                    <section className="py-20">
                        <h3 className="text-2xl font-bold text-center text-gray-900">A Powerful, All-in-One Commerce Platform</h3>
                        <p className="mt-2 text-gray-600 text-center max-w-2xl mx-auto">Enable → Commerce provides a comprehensive suite of tools to manage your digital storefront, from inventory and sales to customer engagement, solving critical business challenges with a unified approach.</p>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <FeatureCard icon={GlobeAltIcon} title="Global Reach" description="Expand your business to new markets with multi-currency and multi-language support." />
                            <FeatureCard icon={ServerStackIcon} title="Scalable Infrastructure" description="Our cloud-based platform grows with you, from your first sale to millions." />
                            <FeatureCard icon={LockClosedIcon} title="Secure Transactions" description="Protect your customers and business with industry-leading security and fraud prevention." />
                            <FeatureCard icon={ChartPieIcon} title="Actionable Insights" description="Leverage powerful analytics to understand customer behavior and optimize for growth." />
                        </div>
                    </section>

                    <section className="py-16">
                        <h3 className="text-2xl font-bold text-center text-gray-900">Supported Modules</h3>
                        <div className="mt-8 flex justify-center space-x-2 border-b border-gray-200 overflow-x-auto">
                            {modules.map(mod => <button key={mod} onClick={() => setActiveModule(mod)} className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${activeModule === mod ? 'border-b-2 border-blue-500 text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>{mod}</button>)}
                        </div>
                        <div className="mt-8 flex justify-center items-center space-x-8 grayscale opacity-60 overflow-x-auto py-4">
                            <div className="h-10 w-28 bg-gray-200 rounded flex-shrink-0"></div>
                            <div className="h-10 w-28 bg-gray-200 rounded flex-shrink-0"></div>
                            <div className="h-10 w-28 bg-gray-200 rounded flex-shrink-0"></div>
                            <div className="h-10 w-28 bg-gray-200 rounded flex-shrink-0"></div>
                        </div>
                    </section>
                    
                    <section className="py-16">
                        <h3 className="text-2xl font-bold text-center text-gray-900">Key Benefits</h3>
                        <div className="mt-8 max-w-3xl mx-auto">
                            <AccordionItem title="Streamline Operations">Automate workflows, centralize inventory, and manage orders from a single dashboard. Reduce manual effort and increase operational efficiency across all your sales channels.</AccordionItem>
                            <AccordionItem title="Boost Sales">Increase conversion rates with optimized checkout experiences, personalized recommendations, and powerful marketing integrations. Turn browsers into buyers.</AccordionItem>
                            <AccordionItem title="Enhance Customer Experience">Build lasting relationships with unified customer profiles, targeted communication, and exceptional support. Delight your customers at every touchpoint.</AccordionItem>
                        </div>
                    </section>
                    
                    <section className="py-16">
                         <p className="text-center text-gray-500 text-sm font-semibold tracking-wider uppercase">Trusted by Industry Leaders</p>
                        <div className="mt-6 flex justify-center items-center space-x-8 md:space-x-12 grayscale opacity-60 overflow-x-auto">
                            <div className="h-8 w-24 bg-gray-200 rounded flex-shrink-0"></div><div className="h-8 w-24 bg-gray-200 rounded flex-shrink-0"></div><div className="h-8 w-24 bg-gray-200 rounded flex-shrink-0"></div><div className="h-8 w-24 bg-gray-200 rounded flex-shrink-0"></div><div className="h-8 w-24 bg-gray-200 rounded flex-shrink-0"></div><div className="h-8 w-24 bg-gray-200 rounded flex-shrink-0"></div>
                        </div>
                    </section>

                    <section className="py-16">
                        <div className="bg-blue-50 rounded-2xl p-12 text-center border border-blue-200">
                            <h2 className="text-3xl font-extrabold text-gray-900">Ready to Build Your Future Commerce Strategy?</h2>
                            <p className="mt-4 text-lg text-blue-800">Let's build the future of your business together. Schedule a demo today to see Enable → Commerce in action.</p>
                            <div className="mt-8">
                                <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-colors">Get Started</Link>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default EnableCommercePage;
