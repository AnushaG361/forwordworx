
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
    LinkIcon,
    ClockIcon,
    SparklesIcon,
    LightBulbIcon,
    GlobeAltIcon,
    ChartBarIcon,
    TemplateIcon,
    ArrowPathIcon
} from '../constants/icons';
import Breadcrumbs from '../components/Breadcrumbs';

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

const IntroCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
        <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-purple-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

const AnimatedHighlightCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 ease-out h-full overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 via-purple-50/0 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out">
                <Icon className="h-7 w-7 text-purple-600 group-hover:text-purple-700 transition-colors" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 relative inline-block">
                {title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-500 group-hover:w-full"></span>
            </h3>
            
            <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors">
                {description}
            </p>
        </div>
    </div>
);

const ProcessStep: React.FC<{ number: string, title: string, description: string }> = ({ number, title, description }) => (
     <div className="relative">
        <div className="absolute -left-4 top-1 h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">{number}</div>
        <div className="ml-8 text-left">
            <h4 className="font-semibold text-gray-900">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const ContentPricingCard: React.FC<{ title: string, price: string, description: string, features: string[], highlighted?: boolean }> = ({ title, price, description, features, highlighted }) => (
    <div className={`flex flex-col p-8 rounded-2xl border transition-all duration-300 ${highlighted ? 'bg-white border-blue-600 shadow-2xl scale-105 z-10' : 'bg-white border-gray-200 hover:shadow-lg'}`}>
        {highlighted && <div className="text-blue-600 text-xs font-bold uppercase tracking-wide mb-2">Most Popular</div>}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <div className="mt-4 mb-2">
            <span className="text-4xl font-extrabold text-gray-900">{price}</span>
            {price !== 'Custom' && <span className="text-gray-500 font-medium">/mo</span>}
        </div>
        <p className="text-gray-500 text-sm mb-6">{description}</p>
        <ul className="space-y-4 mb-8 flex-1">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-600">
                    <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <Link to="/contact" className={`w-full py-3 px-6 rounded-lg font-bold text-center transition-colors ${highlighted ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
            Choose Plan
        </Link>
    </div>
);

const agentDetails = {
    'Brand Agent': {
        purpose: 'Brand Agent: Strengthen Your Market Presence',
        description: "Build a consistent and memorable brand identity across all customer touchpoints. Perfect for growing businesses that want to stand out and improve brand perception.",
        tasks: [
            { icon: LightBulbIcon, title: "Brand Positioning", description: "Define audience perception and core messaging." },
            { icon: ChartBarIcon, title: "Competitor Benchmarking", description: "Understand market differentiation and strengths." },
            { icon: ChatBubbleIcon, title: "Messaging Framework", description: "Create tone, voice, and communication guidelines." },
            { icon: TrendingUpIcon, title: "Brand Performance Insights", description: "Track sentiment, awareness, and engagement." }
        ],
        image: 'https://picsum.photos/seed/brand-agent-ui/600/500',
        process: [
            { number: "1", title: "Input", description: "Connect platforms" },
            { number: "2", title: "Analysis", description: "Agent scans content" },
            { number: "3", title: "Action", description: "Flags inconsistencies" },
            { number: "4", title: "Report", description: "Sends daily/weekly updates" }
        ]
    },
    'Creatives Agent': {
        purpose: 'Creatives Agent: Unlock High-Impact Visuals',
        description: "Generate scroll-stopping visuals, video concepts, and design variations for ads, social content, and marketing campaigns.",
        tasks: [
            { icon: LightBulbIcon, title: "Creative Concepting", description: "Fresh ideas based on audience psychology." },
            { icon: TemplateIcon, title: "Multi-Format Design", description: "Optimized for stories, feeds, banners, and print." },
            { icon: TrendingUpIcon, title: "A/B Creative Testing", description: "Compare variations and boost performance." },
            { icon: DocumentCheckIcon, title: "Asset Library Management", description: "Organize and reuse winning creatives." },
        ],
        image: 'https://picsum.photos/seed/creative-agent-ui/600/500',
        process: [
            { number: "1", title: "Define Goal", description: "Provide campaign goals & assets" },
            { number: "2", title: "Generate", description: "Agent creates content variations" },
            { number: "3", title: "Review", description: "Approve or request revisions" },
            { number: "4", title: "Deploy", description: "Publish content to platforms" }
        ]
    },
    'Catalog Listing Agent': {
        purpose: 'Catalog Listing Agent: Boost Product Visibility',
        description: "Automate product catalog creation, listing optimization, and feed management across e-commerce platforms.",
        tasks: [
            { icon: DocumentCheckIcon, title: "Bulk Product Importing", description: "Sync SKUs from your store or spreadsheet." },
            { icon: MagnifyingGlassIcon, title: "SEO-Optimized Listings", description: "Titles, descriptions, and tags that rank." },
            { icon: GlobeAltIcon, title: "Multi-Channel Publishing", description: "Push to marketplaces and social shops." },
            { icon: ArrowPathIcon, title: "Inventory & Price Syncing", description: "Ensure accuracy in real time." },
        ],
        image: 'https://picsum.photos/seed/catalog-agent-ui/600/500',
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
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'AI Agents', path: '/agents' }, { label: 'Content Agents' }]} />
            </div>

            <section className="py-20 md:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Automate Your Content Lifecycle with Intelligent Agents</h1>
                        <p className="mt-6 text-lg text-gray-600">From brand consistency to catalog management, our agents handle the heavy lifting so you can focus on growth.</p>
                        <div className="mt-8">
                            <button 
                                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
                            >
                                See Plans
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src="https://picsum.photos/seed/content-agent/600/400" alt="Content Agent visual" className="rounded-lg shadow-2xl" />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Intro Section - High-End Design */}
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                            The Future of Content is Autonomous
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                            Forwardworkx Content Agents are intelligent, automated creation systems that produce, organize, and optimize content at scale — ensuring consistency, speed, and brand alignment without heavy manual effort.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        <AnimatedHighlightCard 
                            icon={ClockIcon}
                            title="Always-On Content Production"
                            description="Our agents plan, script, write, design, and prepare content continuously to keep your brand publishing without delays."
                        />
                        <AnimatedHighlightCard 
                            icon={ShieldCheckIcon}
                            title="Brand Consistency at Every Touchpoint"
                            description="Maintain uniform messaging, tone, visuals, and structure across all platforms and formats effortlessly."
                        />
                        <AnimatedHighlightCard 
                            icon={SparklesIcon}
                            title="Intelligent Content Optimization"
                            description="Leverage AI-driven insights to refine messaging, improve engagement, and align content with audience behavior and performance data."
                        />
                    </div>

                    <div className="flex justify-center space-x-2">
                        {tabs.map(tab => <TabButton key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>{tab}</TabButton>)}
                    </div>
                    
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">{activeAgent.purpose}</h3>
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                             <div className="space-y-8">
                                <p className="text-gray-600 leading-relaxed text-lg">{activeAgent.description}</p>
                                
                                <div className="grid grid-cols-1 gap-6">
                                    {activeAgent.tasks.map(task => (
                                        <FeatureCard key={task.title} icon={task.icon} title={task.title} description={task.description} />
                                    ))}
                                </div>
                                
                                <div className="pt-4">
                                     <button 
                                        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-base hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-md"
                                    >
                                        See Plans
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <img src={activeAgent.image} alt={activeTab} className="rounded-2xl shadow-xl w-full h-auto object-cover" />
                            </div>
                        </div>

                        <div className="mt-24">
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

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Simple, Scalable Pricing</h2>
                        <p className="mt-4 text-gray-600">Choose the plan that fits your content volume and team size.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        <ContentPricingCard
                            title="Starter"
                            price="$299"
                            description="For startups establishing their brand voice."
                            features={['Brand Book Agent Access', '50 Content Pieces/mo', 'Basic Template Library', 'Email Support']}
                        />
                        <ContentPricingCard
                            title="Growth"
                            price="$799"
                            description="For scaling teams needing consistent output."
                            highlighted={true}
                            features={['All 3 Agents Access', 'Unlimited Content Generation', 'Advanced SEO Tools', 'Marketplace Sync (2 Channels)', 'Priority Support']}
                        />
                        <ContentPricingCard
                            title="Enterprise"
                            price="Custom"
                            description="For large organizations with complex needs."
                            features={['Custom Model Fine-tuning', 'Unlimited Marketplace Sync', 'API Access', 'Dedicated Success Manager', 'SSO & SLA']}
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 text-center bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-gray-900">Ready to Put Your Content on Autopilot?</h2>
                    <p className="mt-4 text-xl text-gray-600">Our intelligent agents are ready to streamline your workflows, enforce brand consistency, and boost your content performance. Let's find the right solution for you.</p>
                    <div className="mt-8">
                        <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContentAgentsPage;
