
import React from 'react';
import { Link } from 'react-router-dom';
import { 
    CheckCircleIcon, 
    SparklesIcon, 
    DocumentSignatureIcon, 
    MegaphoneIcon, 
    ShoppingCartIcon, 
    LinkIcon, 
    ChartBarIcon, 
    GlobeAltIcon, 
    DocumentCheckIcon
} from '../constants/icons';

type AgentData = {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ElementType;
    features: { title: string; desc: string }[];
    benefits: string[];
    cta: string;
};

const agentDataMap: Record<string, AgentData> = {
    'creative': {
        title: 'Creative Agent',
        subtitle: 'Think → Script → Create → Deliver',
        description: 'The Creative Agent is your end-to-end production powerhouse. It takes abstract ideas and turns them into fully realized content strategies, scripts, and visual directives, ensuring your brand never runs out of things to say.',
        icon: SparklesIcon,
        features: [
            { title: 'Creative Strategy', desc: 'Analyzes market trends to propose high-engagement content angles.' },
            { title: 'Scriptwriting', desc: 'Generates scripts for Reels, TikToks, and YouTube videos tailored to your voice.' },
            { title: 'Visual Direction', desc: 'Provides AI-generated mood boards and shot lists for production teams.' },
            { title: 'Post-Production Workflow', desc: 'Organizes raw assets and automates basic editing briefs.' }
        ],
        benefits: ['Eliminate creative block forever.', 'Reduce pre-production time by 70%.', 'Maintain consistent brand messaging across channels.'],
        cta: 'Start Creating'
    },
    'brand-book': {
        title: 'Brand Book Agent',
        subtitle: 'Makes brand guidelines look elite',
        description: 'Consistency is trust. The Brand Book Agent builds, audits, and upgrades your brand identity documentation, ensuring every stakeholder and vendor knows exactly how to represent your company.',
        icon: DocumentSignatureIcon,
        features: [
            { title: 'Voice Development', desc: 'Defines your brand persona, tone, and language do’s and don’ts.' },
            { title: 'Visual Systems', desc: 'Auto-generates color palettes, typography hierarchies, and logo usage rules.' },
            { title: 'Asset Organization', desc: 'Structuring your digital asset management for easy access.' },
            { title: 'Compliance Check', desc: 'Scans new content to ensure it meets brand standards.' }
        ],
        benefits: ['Look like a Fortune 500 company from day one.', 'Onboard designers and agencies instantly.', 'Prevent brand dilution.'],
        cta: 'Build My Brand Book'
    },
    'ads': {
        title: 'Ads Agent',
        subtitle: 'Meta + Google ad creatives? Done.',
        description: 'Stop guessing what converts. The Ads Agent specializes in direct-response creativity, generating hooks, headlines, and ad visuals designed specifically to stop the scroll and drive clicks.',
        icon: MegaphoneIcon,
        features: [
            { title: 'Copywriting', desc: 'Writes USP-focused primary text, headlines, and CTAs.' },
            { title: 'Variation Testing', desc: 'Creates 10+ hook variations for every core concept.' },
            { title: 'Format Adaptation', desc: 'Resizes and restructures creatives for Stories, Feeds, and Banners.' },
            { title: 'Trend Jacking', desc: 'Identifies current viral formats and adapts them to your product.' }
        ],
        benefits: ['Lower CPC with higher relevance scores.', 'Launch campaigns faster.', 'Never suffer from ad fatigue.'],
        cta: 'Generate Ads'
    },
    'ai-catalog': {
        title: 'AI Catalog Agent',
        subtitle: 'Create, clean & format product catalogs',
        description: 'Your product catalog is your storefront. The AI Catalog Agent automates the heavy lifting of data entry, cleaning messy CSVs, and writing compelling product romance copy at scale.',
        icon: ShoppingCartIcon,
        features: [
            { title: 'Description Writing', desc: 'Turns technical specs into persuasive benefit-driven copy.' },
            { title: 'Data Cleaning', desc: 'Standardizes capitalization, units, and formatting errors automatically.' },
            { title: 'Feature Extraction', desc: 'Pull key selling points from raw supplier data.' },
            { title: 'Enrichment', desc: 'Adds missing attributes based on product image analysis.' }
        ],
        benefits: ['Launch thousands of SKUs in hours, not weeks.', 'Improve SEO with unique descriptions.', 'Reduce return rates with accurate data.'],
        cta: 'Optimize Catalog'
    },
    'catalog-listing': {
        title: 'Catalog Listing Agent',
        subtitle: 'Listing sheets for all marketplaces',
        description: 'Selling everywhere? The Catalog Listing Agent maps your master catalog to the specific requirements of Amazon, Shopify, Flipkart, and more, ensuring zero rejection errors.',
        icon: LinkIcon,
        features: [
            { title: 'Marketplace Mapping', desc: 'Auto-maps your fields to specific marketplace taxonomies.' },
            { title: 'Compliance Checks', desc: 'Flags missing mandatory fields before you try to upload.' },
            { title: 'Bulk Editing', desc: 'Apply logic-based rules to thousands of listings at once.' },
            { title: 'SKU Management', desc: 'Synchronizes naming conventions across channels.' }
        ],
        benefits: ['Expand to new marketplaces instantly.', 'Avoid listing suppression penalties.', 'Centralize your product data management.'],
        cta: 'Sync Listings'
    },
    'meta': {
        title: 'Meta Agent',
        subtitle: 'Campaign mapping. Results first.',
        description: 'Your autonomous media buyer. The Meta Agent builds sophisticated funnel structures on Facebook and Instagram, managing audiences and budget allocation to maximize ROAS.',
        icon: ChartBarIcon,
        features: [
            { title: 'Funnel Mapping', desc: 'Sets up TOF (Top of Funnel), MOF, and BOF campaign structures.' },
            { title: 'Audience Segmentation', desc: 'Creates lookalikes and interest stacks based on high-value customers.' },
            { title: 'Remarketing', desc: 'Deploys dynamic product ads to retarget cart abandoners.' },
            { title: 'Budget Optimization', desc: 'Shifts spend daily to the best performing ad sets.' }
        ],
        benefits: ['Stop wasting budget on bad audiences.', 'Scale winners automatically.', 'Full visibility into your funnel metrics.'],
        cta: 'Launch Meta Campaigns'
    },
    'google': {
        title: 'Google Agent',
        subtitle: 'Search + Demand Gen + PMax mastery',
        description: 'Capture intent when it matters most. The Google Agent manages the complexity of the Google Ads ecosystem, from keywords to shopping feeds, ensuring you dominate the SERP.',
        icon: GlobeAltIcon,
        features: [
            { title: 'Performance Max', desc: 'Optimizes asset groups for maximum coverage across Google properties.' },
            { title: 'Keyword Intent', desc: 'Maps keywords to landing pages based on user purchase intent.' },
            { title: 'Negative Keywords', desc: 'Proactively blocks wasted spend on irrelevant searches.' },
            { title: 'Shopping Feed Health', desc: 'Monitors Merchant Center for errors and warnings.' }
        ],
        benefits: ['Capture high-intent traffic.', 'Optimize shopping feeds for better visibility.', 'Unified strategy across Search and Display.'],
        cta: 'Optimize Google Ads'
    },
    'proposal': {
        title: 'Business Proposal Agent',
        subtitle: 'Investor-ready, client-approved proposals',
        description: 'Close the deal faster. The Business Proposal Agent takes your raw notes and turns them into persuasive, beautifully structured proposals and pitch decks that command attention.',
        icon: DocumentCheckIcon,
        features: [
            { title: 'Narrative Structure', desc: 'Builds a logical flow: Problem, Agitation, Solution, Proof.' },
            { title: 'ROI Calculators', desc: 'Embeds value justification models directly into the proposal.' },
            { title: 'Offer Positioning', desc: 'Frames your pricing to highlight value rather than cost.' },
            { title: 'Competitor Analysis', desc: 'Auto-generates comparison charts to show why you win.' }
        ],
        benefits: ['Increase close rates.', 'Reduce proposal writing time by 90%.', 'Look professional in every interaction.'],
        cta: 'Create Proposal'
    }
};

const SpecificAgentPage: React.FC<{ agentKey: string }> = ({ agentKey }) => {
    const data = agentDataMap[agentKey];

    if (!data) return <div>Agent not found</div>;

    const Icon = data.icon;

    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="py-20 md:py-28 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-6">
                            <Icon className="h-4 w-4" />
                            <span>AI Agent</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            {data.title}
                        </h1>
                        <p className="mt-4 text-xl text-blue-600 font-medium">
                            {data.subtitle}
                        </p>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            {data.description}
                        </p>
                        <div className="mt-8 flex space-x-4">
                            <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                                {data.cta}
                            </Link>
                            <Link to="/agents" className="inline-block bg-white text-gray-700 border border-gray-300 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-50 transition-colors">
                                Back to Agents
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md">
                            <div className="flex items-center justify-center h-20 w-20 bg-blue-50 rounded-full mx-auto mb-6">
                                <Icon className="h-10 w-10 text-blue-600" />
                            </div>
                            <h3 className="text-center text-xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                            <ul className="space-y-4">
                                {data.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600 text-sm">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Capabilities Breakdown</h2>
                        <p className="mt-4 text-gray-600">What {data.title} can do for you.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {data.features.map((feature, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold">Deploy Your {data.title} Today</h2>
                    <p className="mt-4 text-gray-400 text-lg">
                        Stop doing the manual work. Let AI handle the heavy lifting while you focus on strategy.
                    </p>
                    <div className="mt-8">
                        <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SpecificAgentPage;
