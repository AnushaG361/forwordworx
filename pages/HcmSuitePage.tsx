
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CloudIcon, ScalableIcon, IntegrationsIcon, InterfaceIcon, OnboardingIcon, ReviewsIcon, ReportsIcon, CheckCircleIcon } from '../constants/icons';

const TabButton: React.FC<{ active: boolean, onClick: () => void, children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button onClick={onClick} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${active ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
        {children}
    </button>
);

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="text-center p-6">
        <Icon className="h-10 w-10 text-blue-500 mx-auto" />
        <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
);

const UseCaseCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
        <Icon className="h-8 w-8 text-green-500" />
        <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600">{description}</p>
    </div>
);

const HcmSuitePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Payroll');
    const tabs = ['Payroll', 'HR Management', 'Recruitment'];

    return (
        <div className="bg-white text-gray-800">
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm mb-8 text-gray-500">
                        <Link to="/" className="hover:text-gray-900">Home</Link> / 
                        <Link to="/products" className="hover:text-gray-900"> Products</Link> / 
                        <span className="text-gray-400"> HCM Suite</span>
                    </nav>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Streamline and Automate Your Human Capital Management</h1>
                            <p className="mt-6 text-lg text-gray-600">The HCM Suite from Forwardworx integrates everything from payroll to performance reviews, freeing you to focus on your most valuable asset: your people.</p>
                            <div className="mt-8">
                                <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                                    Request a Demo
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img src="https://picsum.photos/seed/hcm-hero/600/400" alt="HCM Suite visual" className="rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="font-semibold text-blue-600">CORE FEATURES</p>
                        <h2 className="text-3xl font-bold mt-2 text-gray-900">Everything You Need To Manage Your Workforce</h2>
                        <p className="mt-4 text-gray-600">Our platform provides a comprehensive set of tools to streamline your HR processes, enhance employee engagement, and drive business growth.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard icon={CloudIcon} title="Secure Cloud Platform" description="Access your critical HR data anytime, anywhere with our secure, cloud-based infrastructure." />
                        <FeatureCard icon={ScalableIcon} title="Scalable Architecture" description="Our platform grows with your business, from early-stage startup to enterprise." />
                        <FeatureCard icon={IntegrationsIcon} title="Seamless Integrations" description="Connect with your favorite tools and systems for a unified workflow." />
                        <FeatureCard icon={InterfaceIcon} title="Intuitive Interface" description="A user-friendly design that requires minimal training for your team." />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">Key Modules</h2>
                        <div className="mt-8 flex justify-center space-x-2">
                            {tabs.map(tab => <TabButton key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>{tab}</TabButton>)}
                        </div>
                    </div>
                    <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">Automated Payroll & Compensation</h3>
                            <p className="text-gray-600">Say goodbye to manual payroll with our fully automated system. Ensure accuracy, compliance, and timeliness in every pay run. Manage salaries, bonuses, and benefits from a single, centralized dashboard.</p>
                             <ul className="space-y-2 pt-2 text-gray-600">
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" /> Automated tax calculations and filings.</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" /> Direct deposit and flexible payment options.</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" /> Comprehensive reporting and analytics.</li>
                             </ul>
                        </div>
                        <div className="flex justify-center">
                             <img src="https://picsum.photos/seed/hcm-payroll/600/450" alt="Payroll module" className="rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold">Powerful Use Cases for Every Business</h2>
                        <p className="mt-4 text-gray-600">Discover how our HCM suite can optimize your HR functions, saving you time and improving employee satisfaction.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <UseCaseCard icon={OnboardingIcon} title="Automate Employee Onboarding" description="Create a seamless and welcoming experience for new hires with automated workflows for paperwork, training, and introductions." />
                        <UseCaseCard icon={ReviewsIcon} title="Simplify Performance Reviews" description="Streamline performance management with customizable review cycles, 360-degree feedback, and goal tracking." />
                        <UseCaseCard icon={ReportsIcon} title="Generate Insightful Reports" description="Make data-driven decisions with powerful, easy-to-understand reports on headcount, compensation, and other key HR metrics." />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-500 rounded-2xl p-12 text-center">
                        <h2 className="text-4xl font-extrabold text-white">Ready to Transform Your HR?</h2>
                        <p className="mt-4 text-xl text-blue-100">See first-hand how the Forwardworx HCM Suite can streamline your operations and empower your team. Schedule a personalized demo with one of our product experts today.</p>
                        <div className="mt-8">
                            <Link to="/contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-colors">
                                See It in Action
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HcmSuitePage;
