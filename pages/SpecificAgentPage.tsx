
import React, { useState } from 'react';
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
    DocumentCheckIcon,
    ChevronDownIcon
} from '../constants/icons';
import Breadcrumbs from '../components/Breadcrumbs';

type AgentData = {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ElementType;
    features: { title: string; desc: string }[];
    benefits: string[];
    cta: string;
    faqs?: { question: string; answer: React.ReactNode }[];
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
        cta: 'Start Creating',
        faqs: [
            {
                question: "1️⃣ What exactly does the Creative Agent do?",
                answer: "It handles content creation at scale — brand visuals, scripts, captions, catalog formatting, product descriptions, ad creatives, reels ideas, all on autopilot."
            },
            {
                question: "2️⃣ Can it match our brand voice and style?",
                answer: "Yup. Once branding is set, the Creative Agent learns your tone, fonts, colors, and storytelling style so everything feels on-brand always."
            },
            {
                question: "3️⃣ What type of content can it generate?",
                answer: <>
                    <p className="mb-2">Everything a brand needs to sell:</p>
                    <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li>Ad copies & posters</li>
                        <li>Social posts & reels scripts</li>
                        <li>Website and product content</li>
                        <li>Brand books & design direction</li>
                        <li>Catalogs & marketplace listing creatives</li>
                    </ul>
                    <p>Basically… a full creative team in one agent 🎯</p>
                </>
            },
            {
                question: "4️⃣ Does it support image and video generation?",
                answer: <>
                    <p>Yes — it can generate visuals, build shotlists, and prep AI video prompts.</p>
                    <p>You focus on business, not Photoshop 🤌</p>
                </>
            },
            {
                question: "5️⃣ How fast can it deliver content?",
                answer: <>
                    <p>Instant for digital assets.</p>
                    <p>Longer workflows like catalogs can take minutes, not days.</p>
                </>
            },
            {
                question: "6️⃣ Can it work with human designers too?",
                answer: "100%. It handles the heavy creative lifting, your designers polish the final vibe = best of both worlds."
            },
            {
                question: "7️⃣ Does it support multiple brands?",
                answer: "Yes — multi-brand + multi-language + region-specific versions. One agent → endless brand management 💅"
            },
            {
                question: "8️⃣ How does feedback work?",
                answer: "Train it by rating outputs, adding brand rules, or uploading references. More feedback = smarter agent every week."
            },
            {
                question: "9️⃣ Will this replace my creative agency?",
                answer: "No — it upgrades your team. It removes boring repetitive tasks, so creatives focus on big ideas and quality execution 🔥"
            },
            {
                question: "🔟 What about rights & ownership?",
                answer: "Everything generated is 100% yours — no strings attached."
            }
        ]
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
        cta: 'Build My Brand Book',
        faqs: [
            {
                question: "1️⃣ What does the Brand Book Agent do?",
                answer: "It creates, updates, and manages your complete brand identity system — including guidelines, visual rules, tone of voice, and usage standards — automatically."
            },
            {
                question: "2️⃣ What does a brand book include?",
                answer: <>
                    <p className="mb-2">Everything that makes your brand look consistent and expensive:</p>
                    <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li>Logo rules & safe space</li>
                        <li>Color palette + usage ratios</li>
                        <li>Typography & hierarchy</li>
                        <li>Iconography & UI elements</li>
                        <li>Brand tone, messaging, taglines</li>
                        <li>Do’s & Don’ts for designers</li>
                    </ul>
                    <p>A real brand bible 🤌🔥</p>
                </>
            },
            {
                question: "3️⃣ Can it build a brand book from scratch?",
                answer: <>
                    <p>Yes — Provide a few references + brand details →</p>
                    <p>The Agent generates a professional brand identity system in minutes.</p>
                </>
            },
            {
                question: "4️⃣ Can it update brand guidelines if we evolve?",
                answer: <>
                    <p className="mb-2">Automatic versioning 💫</p>
                    <p className="mb-2">You say what’s changing → Brand Book Agent updates:</p>
                    <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li>Global assets</li>
                        <li>Templates</li>
                        <li>Visual rules</li>
                    </ul>
                    <p>No outdated PDFs ever again.</p>
                </>
            },
            {
                question: "5️⃣ Does it integrate with design tools?",
                answer: <>
                    <p className="mb-2">Yes — Exports brand assets for:</p>
                    <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li>Figma</li>
                        <li>Adobe tools</li>
                        <li>Canva templates</li>
                        <li>Web + Social usage</li>
                    </ul>
                    <p>Creatives stay synced across platforms.</p>
                </>
            },
            {
                question: "6️⃣ Can we manage multiple sub-brands?",
                answer: <>
                    <p>Yep — master brand + sub-brand rule management:</p>
                    <p>Perfect for retail chains, franchises, product lines.</p>
                </>
            },
            {
                question: "7️⃣ Does it support regional languages?",
                answer: <>
                    <p>100%.</p>
                    <p>Brand messaging + type guidelines can align with any language your market speaks 🌍</p>
                </>
            },
            {
                question: "8️⃣ Who owns the brand assets created?",
                answer: "You do. Full IP ownership of all guidelines and assets generated."
            }
        ]
    },
    'ads': {
        title: 'Ads Agent',
        subtitle: 'Meta + Google ad creatives? Done.',
        description: 'Delivers ad-ready content for every channel.',
        icon: MegaphoneIcon,
        features: [
            { title: 'Ad Copywriting', desc: 'USP, CTA, and hooks tailored for conversion.' },
            { title: 'Design Language', desc: 'Campaign-specific visual consistency.' },
            { title: 'A/B Testing', desc: 'Generates variations for market testing.' },
            { title: 'Format Adaptation', desc: 'Resizes and adapts creatives for all placements.' }
        ],
        benefits: ['Faster campaign launches.', 'Higher click-through rates.', 'Consistent ad performance.'],
        cta: 'Generate Ads'
    },
    'ai-catalog': {
        title: 'AI Catalog Agent',
        subtitle: 'Create, clean & format product catalogs',
        description: 'Creates and automates product catalog content.',
        icon: ShoppingCartIcon,
        features: [
            { title: 'Description Generation', desc: 'Writes compelling product descriptions.' },
            { title: 'Image Processing', desc: 'Enhances and formats product images.' },
            { title: 'Data Formatting', desc: 'Ensures data meets platform-specific requirements.' },
            { title: 'Bulk Operations', desc: 'Handles thousands of SKUs in minutes.' }
        ],
        benefits: ['Launch new collections instantly.', 'Improve SEO with rich content.', 'Reduce manual data entry.'],
        cta: 'Optimize Catalog'
    },
    'catalog-listing': {
        title: 'Catalog Listing Agent',
        subtitle: 'Listing sheets for all marketplaces',
        description: 'Prepares accurate product listings for distribution.',
        icon: LinkIcon,
        features: [
            { title: 'Multi-channel Support', desc: 'Listings for Shopify, Amazon, Flipkart, etc.' },
            { title: 'Data Mapping', desc: 'Maps attributes to marketplace taxonomies.' },
            { title: 'Compliance Check', desc: 'Ensures listings meet platform guidelines.' },
            { title: 'Inventory Sync', desc: 'Prepares inventory data for synchronization.' }
        ],
        benefits: ['Expand reach to new marketplaces.', 'Avoid listing errors and rejections.', 'Centralize listing management.'],
        cta: 'Create Listings'
    },
    'meta': {
        title: 'Meta Ads Agent',
        subtitle: 'Campaign mapping. Results first.',
        description: 'Creates smart campaign structures tailored to business goals.',
        icon: ChartBarIcon,
        features: [
            { title: 'Funnel Mapping', desc: 'Complete Meta ads funnel strategy.' },
            { title: 'Audience Targeting', desc: 'Breakdown of audiences and conversion paths.' },
            { title: 'Remarketing', desc: 'Always-on remarketing strategy setup.' },
            { title: 'Budget Optimization', desc: 'Recommendations for budget allocation.' }
        ],
        benefits: ['Maximize ROAS.', 'Scale winning campaigns.', 'Automate campaign structure.'],
        cta: 'Launch Meta Ads'
    },
    'google': {
        title: 'Google Ads Agent',
        subtitle: 'Search + Demand Gen + PMax mastery',
        description: 'End-to-end management of Google Ads ecosystem.',
        icon: GlobeAltIcon,
        features: [
            { title: 'Campaign Types', desc: 'Search, Demand Gen & Performance Max setup.' },
            { title: 'Keyword Strategy', desc: 'Keyword intent mapping and selection.' },
            { title: 'Conversion Planning', desc: 'Retail-ready conversion tracking setup.' },
            { title: 'Ad Extensions', desc: 'Optimized ad extensions for higher CTR.' }
        ],
        benefits: ['Capture high-intent traffic.', 'Improve Quality Score.', 'Drive efficient conversions.'],
        cta: 'Optimize Google Ads'
    },
    'proposal': {
        title: 'Proposal Agent',
        subtitle: 'Investor-ready, client-approved proposals',
        description: 'Creates high-impact proposals that convert clients or buyers.',
        icon: DocumentCheckIcon,
        features: [
            { title: 'Problem/Solution', desc: 'Clear breakdown of client pain points and your solution.' },
            { title: 'ROI Justification', desc: 'Data-backed numbers and ROI projections.' },
            { title: 'Positioning', desc: 'Offer positioning tailored for decision-makers.' },
            { title: 'Visual Formatting', desc: 'Professional layout and design.' }
        ],
        benefits: ['Win more deals.', 'Save hours on proposal writing.', 'Impress stakeholders.'],
        cta: 'Draft Proposal'
    }
};

const SpecificAgentPage: React.FC<{ agentKey: string }> = ({ agentKey }) => {
    const data = agentDataMap[agentKey];
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Agent Not Found</h2>
                    <p className="text-gray-600 mt-2">The requested agent profile could not be loaded.</p>
                    <Link to="/agents" className="mt-4 inline-block text-blue-600 hover:underline">Back to Agents</Link>
                </div>
            </div>
        );
    }

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="bg-white text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[
                    { label: 'Home', path: '/' }, 
                    { label: 'AI Agents', path: '/agents' }, 
                    { label: data.title }
                ]} />
            </div>

            {/* Hero */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-md mb-8">
                        <data.icon className="h-12 w-12 text-blue-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{data.title}</h1>
                    <p className="text-xl text-blue-600 font-medium mb-6">{data.subtitle}</p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">{data.description}</p>
                    <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg shadow-blue-500/30">
                        {data.cta}
                    </Link>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Capabilities</h2>
                            <div className="space-y-6">
                                {data.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                                            <CheckCircleIcon className="h-4 w-4 text-green-600" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
                                            <p className="text-gray-600 mt-1">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why use this Agent?</h3>
                            <ul className="space-y-4">
                                {data.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700 font-medium">
                                        <SparklesIcon className="h-5 w-5 text-yellow-500 mr-3" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs (if available) */}
            {data.faqs && data.faqs.length > 0 && (
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-2">
                            {data.faqs.map((faq, index) => (
                                <div key={index} className="border-b border-gray-200 last:border-0 bg-white rounded-lg px-4">
                                    <button 
                                        onClick={() => toggleFaq(index)} 
                                        className="w-full flex justify-between items-center py-5 text-left focus:outline-none"
                                    >
                                        <span className={`text-lg font-semibold transition-colors ${openFaqIndex === index ? 'text-blue-600' : 'text-gray-900'}`}>{faq.question}</span>
                                        <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${openFaqIndex === index ? 'rotate-180 text-blue-600' : ''}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-[800px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                                        <div className="text-gray-600 leading-relaxed text-base">{faq.answer}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA */}
            <section className="py-20 text-center bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-gray-900">Ready to deploy the {data.title}?</h2>
                    <p className="mt-4 text-xl text-gray-600">Start automating your workflow today.</p>
                    <div className="mt-8">
                        <Link to="/contact" className="inline-block bg-gray-900 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-800 transition-colors">
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SpecificAgentPage;
