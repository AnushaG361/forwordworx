
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InventoryIcon, ChartBarIcon, UsersIcon, MarketingIcon, CheckCircleIcon } from '../constants/icons';

const TabButton: React.FC<{ active: boolean, onClick: () => void, children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button onClick={onClick} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${active ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
        {children}
    </button>
);

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg text-center border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
        <Icon className="h-8 w-8 text-blue-500 mx-auto" />
        <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
);


const RietailPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Key Modules');
    const tabs = ['Key Modules', 'Use Cases', 'Industry Fit'];

    return (
        <div className="bg-white text-gray-800">
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">The All-in-One Commerce Platform for Growth</h1>
                        <p className="mt-6 text-lg text-gray-600">Rietail provides a comprehensive suite of tools for inventory, sales channels, customer profiles, and marketing automation to help your business thrive.</p>
                        <div className="mt-8 flex space-x-4">
                            <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg text-base hover:bg-blue-600 transition-transform transform hover:scale-105">
                                Request a Demo
                            </Link>
                            <Link to="/contact" className="inline-block bg-transparent border-2 border-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg text-base hover:bg-gray-100 transition-colors">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src="https://picsum.photos/seed/rietail-hero/600/400" alt="Rietail dashboard" className="rounded-lg shadow-2xl" />
                    </div>
                </div>
            </section>
            
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-gray-500 text-sm font-semibold tracking-wider uppercase">TRUSTED BY INDUSTRY LEADERS</p>
                    <div className="mt-6 flex justify-center items-center space-x-8 md:space-x-12 grayscale opacity-60">
                         {/* Placeholder logos */}
                        <div className="h-8 w-24 bg-gray-300 rounded"></div>
                        <div className="h-8 w-24 bg-gray-300 rounded"></div>
                        <div className="h-8 w-24 bg-gray-300 rounded hidden sm:block"></div>
                        <div className="h-8 w-24 bg-gray-300 rounded hidden md:block"></div>
                        <div className="h-8 w-24 bg-gray-300 rounded hidden lg:block"></div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold">Everything You Need to Succeed</h2>
                        <p className="mt-4 text-gray-600">Rietail solves the complexities of modern commerce by unifying your online and offline sales channels. It gives you a single source of truth to track inventory, understand their customers, and drive growth.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard icon={InventoryIcon} title="Inventory Management" description="Sync your inventory across all your sales channels in real-time." />
                        <FeatureCard icon={ChartBarIcon} title="Analytics Dashboard" description="Get clear, actionable insights on sales, customers, and performance." />
                        <FeatureCard icon={UsersIcon} title="Customer Profiles" description="Build rich profiles of your customers and their purchase history." />
                        <FeatureCard icon={MarketingIcon} title="Marketing Automation" description="Create targeted campaigns to drive repeat business and loyalty." />
                    </div>
                </div>
            </section>
            
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">Powerful, Flexible, and Built for You</h2>
                        <p className="mt-4 text-gray-600">Discover how Rietail's robust features can be tailored to fit your unique business needs.</p>
                        <div className="mt-8 flex justify-center space-x-2">
                            {tabs.map(tab => <TabButton key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>{tab}</TabButton>)}
                        </div>
                    </div>
                    <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                             <h3 className="text-2xl font-bold">Core Product Components</h3>
                             <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /><span>Our integrated modules work together seamlessly to give you full control over your commerce operations.</span></li>
                                <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /><span><b>Point of Sale:</b> A fast, intuitive, and reliable POS system for your brick-and-mortar locations.</span></li>
                                <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /><span><b>E-commerce Engine:</b> Build and manage a beautiful, high-converting online store with ease.</span></li>
                                <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /><span><b>Reporting Suite:</b> Comprehensive, customizable reports that turn data into insights.</span></li>
                             </ul>
                        </div>
                         <div className="flex justify-center">
                             <img src="https://picsum.photos/seed/rietail-features/600/450" alt="Core product components" className="rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-500 rounded-2xl p-12 text-center">
                        <h2 className="text-4xl font-extrabold text-white">Ready to Grow Your Business?</h2>
                        <p className="mt-4 text-xl text-blue-100">See how Rietail can empower your teams and unlock new opportunities. Schedule a personalized demo with one of our commerce experts today.</p>
                        <div className="mt-8">
                            <Link to="/contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-colors">
                                Get Started Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RietailPage;
