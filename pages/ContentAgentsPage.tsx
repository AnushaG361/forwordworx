
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    ShieldCheckIcon, 
    ChatBubbleIcon, 
    MagnifyingGlassIcon, 
    DocumentCheckIcon, 
    CheckCircleIcon,
    MegaphoneIcon,
    EnvelopeIcon,
    TrendingUpIcon,
    DocumentSignatureIcon,
    CameraIcon,
    LinkIcon
} from '../constants/icons';

const TabButton: React.FC<{ active: boolean, onClick: () => void, children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button onClick={onClick} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${active ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
        {children}
    </button>
);

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="bg-gray-100 p-3 rounded-lg flex-shrink-0">
            <Icon className="h-6 w-6 text-blue-500" />
        </div>
        <div>
            <h4 className="font-semibold text-gray-900">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const BenefitItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
        <span className="text-gray-600">{children}</span>
    </li>
);

const ProcessStep: React.FC<{ number: string, title: string, description: string }> = ({ number, title, description }) => (
     <div className="relative">
        <div className="absolute -left-4 top-1 h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">{number}</div>
        <div className="ml-8">
            <h4 className="font-semibold text-gray-900">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const agentDetails = {
    'Brand Agent': {
        purpose: 'Brand Agent',
        description: "The Brand Agent continuously monitors your digital presence to ensure brand consistency across all platforms. It acts as your automated brand guardian, enforcing guidelines, tracking mentions, and protecting your brand's integrity 24/7.",
        tasks: [
            { icon: ShieldCheckIcon, title: "Brand Guideline Enforcement", description: "Checks content for logo, color, and font usage." },
            { icon: ChatBubbleIcon, title: "Social Media Monitoring", description: "Tracks brand mentions and sentiment online." },
            { icon: MagnifyingGlassIcon, title: "Reputation Management", description: "Identifies potential PR crises and misuse." },
            { icon: DocumentCheckIcon, title: "Content Audits", description: "Regularly scans content for brand compliance." }
        ],
        whoFor: 'Marketing Managers, Brand Strategists, and Creative Directors. Teams that need to maintain a strong and consistent brand identity.',
        benefits: [
            { strong: 'Increase Consistency:', text: 'Ensure brand is always on-point.' },
            { strong: 'Save Time:', text: 'Automate manual monitoring and auditing.' },
            { strong: 'Reduce Risk:', text: 'Quickly identify and address brand misuse.' }
        ],
        process: [
            { number: "1", title: "Input", description: "Connect platforms" },
            { number: "2", title: "Analysis", description: "Agent scans content" },
            { number: "3", title: "Action", description: "Flags inconsistencies" },
            { number: "4", title: "Report", description: "Sends daily/weekly updates" }
        ]
    },
    'Creatives Agent': {
        purpose: 'Creatives Agent',
        description: "The Creatives Agent is your on-demand content engine, generating high-quality, on-brand creative assets at scale. From ad copy to social media posts and SEO articles, it accelerates your content production pipeline.",
        tasks: [
            { icon: MegaphoneIcon, title: "ADS & Marketing Content", description: "Generates compelling copy and visuals for Meta, Google Ads, and email campaigns." },
            { icon: TrendingUpIcon, title: "SEO & SMO Content", description: "Writes SEO-optimized articles and engaging social media posts to boost visibility and engagement." },
            { icon: DocumentCheckIcon, title: "Bulk Content Generation", description: "Creates large volumes of content, such as blog posts or social updates, from a single prompt." },
            { icon: EnvelopeIcon, title: "Email & Newsletter Copy", description: "Drafts persuasive copy for marketing funnels and regular newsletters." },
        ],
        whoFor: 'Content Marketers, Social Media Managers, and Digital Marketing Agencies. Teams needing to scale content creation without sacrificing quality.',
        benefits: [
            { strong: 'Scale Production:', text: 'Produce more content in less time.' },
            { strong: 'Improve Performance:', text: 'Generate content optimized for specific channels like ADS, SEO, and SMO.' },
            { strong: 'Maintain Quality:', text: 'Ensure a consistent voice and quality across all creative assets.' }
        ],
        process: [
            { number: "1", title: "Define Goal", description: "Provide campaign goals & assets" },
            { number: "2", title: "Generate", description: "Agent creates content variations" },
            { number: "3", title: "Review", description: "Approve or request revisions" },
            { number: "4", title: "Deploy", description: "Publish content to platforms" }
        ]
    },
    'Catalog Listing Agent': {
        purpose: 'Catalog Listing Agent',
        description: "The Catalog Listing Agent automates the tedious process of creating and optimizing product listings for e-commerce stores and marketplaces. It ensures your product information is accurate, persuasive, and discoverable.",
        tasks: [
            { icon: DocumentSignatureIcon, title: "Product Descriptions", description: "Writes compelling and SEO-friendly product descriptions." },
            { icon: MagnifyingGlassIcon, title: "E-commerce SEO", description: "Optimizes titles and metadata with relevant keywords for better search ranking." },
            { icon: CameraIcon, title: "Image Tagging", description: "Automatically generates descriptive alt-text and tags for product images." },
            { icon: LinkIcon, title: "Marketplace Sync", description: "Standardizes and syncs product listings across multiple platforms like Shopify and Amazon." },
        ],
        whoFor: 'E-commerce Managers, Merchandisers, and Online Retailers. Businesses managing large and frequently updated product catalogs.',
        benefits: [
            { strong: 'Accelerate Time-to-Market:', text: 'Get products listed faster.' },
            { strong: 'Boost Discoverability:', text: 'Improve search rankings with optimized content.' },
            { strong: 'Ensure Accuracy:', text: 'Maintain consistent and accurate product information everywhere.' }
        ],
        process: [
            { number: "1", title: "Import Data", description: "Connect product feed or PIM" },
            { number: "2", title: "Optimize", description: "Agent enriches listing content" },
            { number: "3", title: "Review", description: "Approve changes in bulk" },
            { number: "4", title: "Publish", description: "Sync to sales channels" }
        ]
    }
};


const ContentAgentsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Brand Agent');
    const tabs = ['Brand Agent', 'Creatives Agent', 'Catalog Listing Agent'];

    const activeAgent = agentDetails[activeTab as keyof typeof agentDetails];

    return (
        <div className="bg-white text-gray-800">
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Automate Your Content Lifecycle with Intelligent Agents</h1>
                        <p className="mt-6 text-lg text-gray-600">From brand consistency to catalog management, our agents handle the heavy lifting so you can focus on growth.</p>
                        <div className="mt-8">
                            <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                                Explore Agents
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src="https://picsum.photos/seed/content-agent/600/400" alt="Content Agent visual" className="rounded-lg shadow-2xl" />
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold">What are Content Agents?</h2>
                        <p className="mt-4 text-gray-600">A brief overview of what the Content Agents service is, its core purpose, and the problems it solves for modern businesses.</p>
                    </div>

                    <div className="mt-12 flex justify-center space-x-2">
                        {tabs.map(tab => <TabButton key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>{tab}</TabButton>)}
                    </div>
                    
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">Agent Purpose: {activeAgent.purpose}</h3>
                        <div className="grid md:grid-cols-2 gap-16 items-start">
                             <div className="space-y-6">
                                <p className="text-gray-600">{activeAgent.description}</p>
                                
                                <h4 className="text-xl font-semibold pt-4 text-gray-900">What Tasks It Handles</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {activeAgent.tasks.map(task => (
                                        <FeatureCard key={task.title} icon={task.icon} title={task.title} description={task.description} />
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-lg space-y-6 border border-gray-200">
                                <div>
                                    <h4 className="font-semibold text-gray-900">Who It's For</h4>
                                    <p className="text-gray-600 mt-2">{activeAgent.whoFor}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Key Benefits</h4>
                                    <ul className="mt-2 space-y-2">
                                        {activeAgent.benefits.map(benefit => (
                                            <BenefitItem key={benefit.strong}><b>{benefit.strong}</b> {benefit.text}</BenefitItem>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20">
                            <h3 className="text-2xl font-bold text-center text-gray-900">Process Flow</h3>
                            <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                {activeAgent.process.map(step => (
                                     <ProcessStep key={step.number} number={step.number} title={step.title} description={step.description} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 text-center bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-gray-900">Ready to Put Your Content on Autopilot?</h2>
                    <p className="mt-4 text-xl text-gray-600">Our intelligent agents are ready to streamline your workflows, enforce brand consistency, and boost your content performance. Let's find the right solution for you.</p>
                    <div className="mt-8">
                        <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                            Schedule a Free Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContentAgentsPage;
