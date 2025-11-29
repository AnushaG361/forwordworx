
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    CloudIcon, 
    ScalableIcon, 
    IntegrationsIcon, 
    InterfaceIcon, 
    OnboardingIcon, 
    ReviewsIcon, 
    ReportsIcon, 
    CheckCircleIcon,
    UsersIcon,
    BanknotesIcon
} from '../constants/icons';
import Breadcrumbs from '../components/Breadcrumbs';

const TabButton: React.FC<{ active: boolean, onClick: () => void, children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button onClick={onClick} className={`px-6 py-3 text-sm font-bold rounded-full transition-all ${active ? 'bg-green-600 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>
        {children}
    </button>
);

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="text-left p-6 rounded-xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300">
        <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const HcmSuitePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Payroll');
    const tabs = ['Payroll', 'HR Management', 'Recruitment'];

    return (
        <div className="bg-white text-gray-800 font-sans">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Products', path: '/products' }, { label: 'HCM Suite' }]} />
            </div>

            {/* Hero Section */}
            <section className="py-24 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-green-600 font-bold tracking-wider uppercase text-sm mb-4 block">ToAutomation HCM</span>
                            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                                People Operations, <br />
                                <span className="text-green-600">Simplified.</span>
                            </h1>
                            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                                The all-in-one platform to manage your workforce. From hiring to retiring, automate your HR processes and focus on culture.
                            </p>
                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link to="/contact" className="inline-block bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-green-700 transition-transform transform hover:scale-105 shadow-lg shadow-green-500/30">
                                    Request Demo
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-50 rounded-full z-0"></div>
                            <img src="https://picsum.photos/seed/hcm-dashboard-ui/600/450" alt="HCM Suite Dashboard" className="relative z-10 rounded-xl shadow-2xl border border-gray-100" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">The Modern HR Stack</h2>
                        <p className="mt-4 text-gray-600">Built for the future of work.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard icon={CloudIcon} title="Cloud Native" description="Secure, compliant, and accessible from anywhere." />
                        <FeatureCard icon={ScalableIcon} title="Infinite Scale" description="Supports teams from 10 to 10,000 employees." />
                        <FeatureCard icon={IntegrationsIcon} title="API First" description="Deep integrations with Slack, Zoom, and LinkedIn." />
                        <FeatureCard icon={InterfaceIcon} title="Employee Self-Service" description="Empower your team to manage their own data." />
                    </div>
                </div>
            </section>

            {/* Interactive Module Viewer */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center mb-12 bg-gray-100 p-1.5 rounded-full inline-flex mx-auto w-fit">
                        {tabs.map(tab => <TabButton key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>{tab}</TabButton>)}
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8 md:p-16 text-white grid md:grid-cols-2 gap-12 items-center shadow-2xl">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold">
                                {activeTab === 'Payroll' && 'Global Payroll Automation'}
                                {activeTab === 'HR Management' && 'Centralized People Data'}
                                {activeTab === 'Recruitment' && 'Modern Applicant Tracking'}
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {activeTab === 'Payroll' && 'Run payroll in minutes, not days. Handle taxes, benefits, and compliance across 50+ countries automatically.'}
                                {activeTab === 'HR Management' && 'A single source of truth for employee records, documents, and history. Secure, organized, and compliant.'}
                                {activeTab === 'Recruitment' && 'Streamline hiring with custom pipelines, automated scheduling, and collaborative scorecards.'}
                            </p>
                             <ul className="space-y-3 pt-4">
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" /> 
                                    {activeTab === 'Payroll' && 'Automated Tax Filing'}
                                    {activeTab === 'HR Management' && 'Digital Document Signing'}
                                    {activeTab === 'Recruitment' && 'One-click Job Posting'}
                                </li>
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" /> 
                                    {activeTab === 'Payroll' && 'Multi-currency Support'}
                                    {activeTab === 'HR Management' && 'Org Chart Visualization'}
                                    {activeTab === 'Recruitment' && 'Candidate Evaluation Tools'}
                                </li>
                                <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" /> 
                                    {activeTab === 'Payroll' && 'Direct Deposit'}
                                    {activeTab === 'HR Management' && 'Time Off Management'}
                                    {activeTab === 'Recruitment' && 'Offer Letter Automation'}
                                </li>
                             </ul>
                        </div>
                        <div className="flex justify-center">
                             <img 
                                src={`https://picsum.photos/seed/hcm-${activeTab.toLowerCase()}/500/400`} 
                                alt={activeTab} 
                                className="rounded-xl shadow-lg border border-gray-700" 
                             />
                        </div>
                    </div>
                </div>
            </section>

             {/* Use Cases */}
             <section className="py-24 bg-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <OnboardingIcon className="h-10 w-10 text-green-600 mb-6" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Onboarding</h4>
                            <p className="text-gray-600">Create amazing first days with automated welcome flows and equipment provisioning.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <ReviewsIcon className="h-10 w-10 text-green-600 mb-6" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Performance</h4>
                            <p className="text-gray-600">Run 360° reviews and track goals to help your team grow.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <ReportsIcon className="h-10 w-10 text-green-600 mb-6" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">People Analytics</h4>
                            <p className="text-gray-600">Make data-driven decisions about retention, compensation, and diversity.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-gray-900">Build a Better Workplace</h2>
                    <p className="mt-6 text-xl text-gray-600">Join thousands of companies using ToAutomation HCM to manage their most valuable asset.</p>
                    <div className="mt-10">
                        <Link to="/contact" className="inline-block bg-green-600 text-white font-bold py-4 px-12 rounded-lg text-lg hover:bg-green-700 transition-colors">
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HcmSuitePage;
