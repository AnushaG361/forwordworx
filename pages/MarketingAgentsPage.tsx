
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon, DollarIcon, ChartBarIcon } from '../constants/icons';

const TabButton: React.FC<{ active: boolean, onClick: () => void, children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button onClick={onClick} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${active ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
        {children}
    </button>
);

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg text-center border border-gray-200 shadow-md">
        <Icon className="h-8 w-8 text-blue-500 mx-auto" />
        <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
);

const Step: React.FC<{ number: string, title: string, description: string }> = ({ number, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">{number}</div>
        <div>
            <h4 className="font-semibold text-gray-900">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const agentDetails = {
    'Meta Ads Agent': {
        purpose: 'Meta Ads Agent: Maximize Your Social ROI',
        description: "Automate your Facebook and Instagram advertising from campaign creation to conversion tracking. The perfect fit for e-commerce brands and businesses looking to scale their social presence.",
        process: [
            { number: "1", title: "Connect & Configure", description: "Link your ad accounts and set initial goals and budgets." },
            { number: "2", title: "AI-Powered Creatives", description: "The agent generates ad copy, targets audiences, and sets up campaigns." },
            { number: "3", title: "Continuous Optimization", description: "Budgets are adjusted in real-time, A/B tests, and reallocates based on performance." },
            { number: "4", title: "Insightful Reporting", description: "Receive clear, actionable reports on what's working and why." }
        ],
        image: 'https://picsum.photos/seed/meta-ads/600/450'
    },
    'Google Ads Agent': {
        purpose: 'Google Ads Agent: Capture High-Intent Customers',
        description: 'Automate your Google Ads strategy, from keyword research and campaign setup to bid management and performance tracking. Ideal for businesses looking to dominate search results and drive conversions.',
        process: [
            { number: "1", title: "Connect Account", description: "Link your Google Ads account and define campaign objectives." },
            { number: "2", title: "AI Keyword Discovery", description: "The agent identifies high-value keywords and negative keywords automatically." },
            { number: "3", title: "Dynamic Ad Creation", description: "Generates and tests multiple ad variations to find the best performers." },
            { number: "4", title: "Smart Bid Optimization", description: "Adjusts bids in real-time to maximize conversions and ROAS." }
        ],
        image: 'https://picsum.photos/seed/google-ads/600/450'
    },
    'Retention Agent': {
        purpose: 'Retention Agent: Boost Customer Lifetime Value',
        description: 'Build and automate powerful email and SMS marketing flows to nurture customer relationships, reduce churn, and encourage repeat purchases. Perfect for subscription businesses and e-commerce stores.',
        process: [
            { number: "1", title: "Integrate Data", description: "Connect your CRM or e-commerce platform to access customer data." },
            { number: "2", title: "Audience Segmentation", description: "Automatically segments customers based on behavior and purchase history." },
            { number: "3", title: "Automated Flow Building", description: "Creates welcome series, abandoned cart reminders, and win-back campaigns." },
            { number: "4", title: "Analyze & Refine", description: "Tracks key retention metrics and optimizes flows for better performance." }
        ],
        image: 'https://picsum.photos/seed/retention-agent/600/450'
    },
    'Lead & Sales Agent': {
        purpose: 'Lead & Sales Agent: Convert Prospects into Customers',
        description: 'Automate your lead nurturing and sales funnels. This agent qualifies leads, schedules appointments, and provides your sales team with the data they need to close deals faster.',
        process: [
            { number: "1", title: "Define Lead Criteria", description: "Set up your ideal customer profile and lead scoring rules." },
            { number: "2", title: "Connect Lead Sources", description: "Integrate with your web forms, CRM, and other lead generation channels." },
            { number: "3", title: "Automated Nurturing", description: "Engages leads with personalized email sequences and follow-ups." },
            { number: "4", title: "Qualify & Assign", description: "Scores leads and automatically assigns hot prospects to your sales team." }
        ],
        image: 'https://picsum.photos/seed/sales-agent/600/450'
    },
    'SEO Agent': {
        purpose: 'SEO Agent: Dominate Organic Channels',
        description: 'Improve your online visibility and drive organic traffic. This agent handles on-page SEO audits, keyword tracking, and content optimization to build your brand authority.',
        process: [
            { number: "1", title: "Connect Platforms", description: "Link your website and Google Analytics accounts." },
            { number: "2", title: "Conduct Site Audit", description: "Performs a comprehensive SEO audit to identify technical and content issues." },
            { number: "3", title: "Generate Recommendations", description: "Provides actionable recommendations for content and keywords." },
            { number: "4", title: "Track & Report", description: "Monitors keyword rankings and traffic, providing regular reports." }
        ],
        image: 'https://picsum.photos/seed/seo-smo-agent/600/450'
    },
    'SMO Agent': {
        purpose: 'SMO Agent: Amplify Your Social Presence',
        description: 'Boost your brand’s reach and engagement across social media platforms. This agent optimizes your profiles, schedules content, engages with your audience, and analyzes performance to build a thriving community.',
        process: [
            { number: "1", title: "Link Social Profiles", description: "Connect your social media accounts like Instagram, Facebook, X, and LinkedIn." },
            { number: "2", title: "Content Scheduling", description: "Automatically schedules posts for optimal engagement times based on audience activity." },
            { number: "3", title: "Community Engagement", description: "Monitors mentions and comments, and engages with your audience to foster community." },
            { number: "4", title: "Performance Analytics", description: "Tracks key social media metrics and provides reports on growth and engagement." }
        ],
        image: 'https://picsum.photos/seed/smo-agent/600/450'
    }
};

const MarketingAgentsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Meta Ads Agent');
    const tabs = ['Meta Ads Agent', 'Google Ads Agent', 'Retention Agent', 'Lead & Sales Agent', 'SEO Agent', 'SMO Agent'];

    const activeAgent = agentDetails[activeTab as keyof typeof agentDetails];

    return (
        <div className="bg-white text-gray-800">
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Automate & Optimize Your Marketing with AI-Powered Agents</h1>
                        <p className="mt-6 text-lg text-gray-600">Harness the power of AI to manage your campaigns, engage your audience, and drive growth. Our specialized agents work tirelessly to maximize your ROI.</p>
                        <div className="mt-8 flex space-x-4">
                            <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg text-base hover:bg-blue-600 transition-transform transform hover:scale-105">
                                Explore Agents
                            </Link>
                             <Link to="/contact" className="inline-block bg-transparent border-2 border-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg text-base hover:bg-gray-100 transition-colors">
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                         <img src="https://picsum.photos/seed/marketing-agent/600/400" alt="Marketing Agent visual" className="rounded-lg shadow-2xl" />
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold">The Future of Marketing is Autonomous</h2>
                        <p className="mt-4 text-gray-600">Forwardworx Marketing Agents are intelligent, automated systems designed to execute specific marketing functions with precision and efficiency, freeing up your team to focus on strategy and growth.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <FeatureCard icon={ClockIcon} title="24/7 Operation" description="Our agents are always active to monitor, optimize, and report on your campaigns." />
                        <FeatureCard icon={DollarIcon} title="Cost Efficiency" description="Reduce operational costs and marketing efforts without increasing headcount." />
                        <FeatureCard icon={ChartBarIcon} title="Data-Driven Decisions" description="Leverage real-time analytics to make faster decisions that boost performance." />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center flex-wrap gap-2">
                        {tabs.map(tab => <TabButton key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>{tab}</TabButton>)}
                    </div>
                    {activeAgent && (
                        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <h3 className="text-3xl font-bold">{activeAgent.purpose}</h3>
                                <p className="text-gray-600">{activeAgent.description}</p>
                                <div className="space-y-6">
                                    {activeAgent.process.map(step => (
                                        <Step key={step.number} {...step} />
                                    ))}
                                </div>
                                {(activeTab === 'SEO Agent' || activeTab === 'SMO Agent') && (
                                    <div className="mt-8 pt-4">
                                        <Link 
                                            to="/services/seo-smo" 
                                            className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg text-base hover:bg-blue-600 transition-transform transform hover:scale-105"
                                        >
                                            {activeTab === 'SMO Agent' ? 'SMO Plans' : 'SEO Plans'}
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-center">
                                <img src={activeAgent.image} alt={`${activeTab} visual`} className="rounded-lg shadow-2xl" />
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-500 rounded-2xl p-12 text-center">
                        <h2 className="text-4xl font-extrabold text-white">Ready to Revolutionize Your Marketing?</h2>
                        <p className="mt-4 text-xl text-blue-100">See our AI agents in action. Schedule a free, no-obligation demo with one of our specialists and discover how Forwardworx can drive growth for your business.</p>
                        <div className="mt-8">
                            <Link to="/contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-colors">
                                Book a Free Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MarketingAgentsPage;
