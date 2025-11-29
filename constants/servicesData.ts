
import { CameraIcon, MarketingIcon, ShoppingCartIcon, AutomationIcon, AiIcon } from "./icons";

export interface ServicePageData {
    id: string;
    category: string;
    title: string;
    heroPitch: string;
    includes: { title: string; desc: string }[];
    benefits: string[];
    deliverables: { item: string; desc: string; format: string; timeline: string }[];
    industries: string[];
    pricing: { name: string; price: string; features: string[] }[];
    caseStudy: { title: string; stat1: string; stat2: string; stat3: string };
}

export const SERVICE_DATA: Record<string, ServicePageData> = {
    // --- STUDIO SERVICES ---
    'catalogue': {
        id: 'catalogue',
        category: 'Studio Services',
        title: 'Catalogue Studio',
        heroPitch: 'High-Quality Catalogue Visuals That Sell.',
        includes: [
            { title: 'Catalogue Photography', desc: 'Flatlay, ghost mannequin, and model shoots.' },
            { title: 'Lifestyle Shoots', desc: 'Context-based visuals for higher conversion.' },
            { title: 'Retouching', desc: 'Clean edits, color correction, texture enhancement.' },
            { title: 'Listing Creatives', desc: 'Marketplace-ready infographics and banners.' },
            { title: 'Model Styling', desc: 'Professional onboarding and styling plans.' }
        ],
        benefits: ['Higher CTR & Purchase Intent', 'Professional Brand Perception', 'Faster Listing Turnaround', 'Marketplace Compliance'],
        deliverables: [
            { item: 'Catalogue Photos', desc: 'Front/Back/Detail views', format: 'JPG/PNG', timeline: '48 hrs' },
            { item: 'Lifestyle Frames', desc: 'Context-based usage shots', format: 'JPG', timeline: '2-3 days' },
            { item: 'Retouched Set', desc: 'Color correction + edits', format: 'JPG', timeline: '24 hrs' },
        ],
        industries: ['D2C Brands', 'Fashion', 'FMCG', 'Jewelry', 'Home Décor'],
        pricing: [
            { name: 'Lite', price: '50 SKUs/mo', features: ['Basic Retouching', 'White Background', 'Web Resolution'] },
            { name: 'Pro', price: '150 SKUs/mo', features: ['Advanced Retouching', 'Lifestyle Shots', 'High Res'] },
            { name: 'Elite', price: 'Unlimited', features: ['Priority Turnaround', 'Dedicated Stylist', 'Raw Files'] },
        ],
        caseStudy: { title: 'Fashion Brand Launch', stat1: '300% CTR Increase', stat2: '48hr Turnaround', stat3: 'Zero Rejections' }
    },
    'creative-studio': {
        id: 'creative-studio',
        category: 'Studio Services',
        title: 'Creative Studio',
        heroPitch: 'Ad Creatives That Stop the Scroll.',
        includes: [
            { title: 'Social Creatives', desc: 'Static and motion assets for Instagram/FB.' },
            { title: 'Video Ads', desc: 'High-production commercials and shorts.' },
            { title: 'Motion Graphics', desc: 'Animated explainers and brand assets.' },
            { title: 'Hook Scripting', desc: 'Psychology-backed ad scripts.' }
        ],
        benefits: ['Boosts ROAS', 'Increases Engagement', 'Brand Recall Improvement', 'Faster Creative Testing'],
        deliverables: [
            { item: 'Static Packs', desc: '10 Variations', format: 'PSD/JPG', timeline: '3 days' },
            { item: 'Video Ads', desc: '3 Hooks + 2 Bodies', format: 'MP4', timeline: '5 days' },
        ],
        industries: ['E-com', 'D2C', 'Agencies', 'Influencers'],
        pricing: [
            { name: 'Monthly Pack', price: '$2000/mo', features: ['20 Static Ads', '4 Videos', 'Unlimited Revisions'] },
            { name: 'Performance', price: '$4000/mo', features: ['50 Static Ads', '10 Videos', 'A/B Testing'] }
        ],
        caseStudy: { title: 'Beauty Brand Scale', stat1: '4x ROAS', stat2: '-50% CPA', stat3: '2M+ Views' }
    },
    'brand-studio': {
        id: 'brand-studio',
        category: 'Studio Services',
        title: 'Brand Studio',
        heroPitch: 'Build a Brand That People Feel.',
        includes: [
            { title: 'Identity Development', desc: 'Logo, typography, and color systems.' },
            { title: 'Packaging Design', desc: 'Unboxing experiences that wow.' },
            { title: 'Brand Guidelines', desc: 'Comprehensive rulebooks for consistency.' }
        ],
        benefits: ['Differentiation', 'Memorable Identity', 'Stronger Trust'],
        deliverables: [
            { item: 'Brand Book', desc: 'PDF Guidelines', format: 'PDF', timeline: '2 weeks' },
            { item: 'Logo Pack', desc: 'Vector/Raster formats', format: 'AI/PNG', timeline: '1 week' },
        ],
        industries: ['Startups', 'Rebranding Corps', 'Luxury Goods'],
        pricing: [
            { name: 'Retainer', price: 'Custom', features: ['Ongoing Design Support', 'Brand Stewardship', 'Asset Management'] }
        ],
        caseStudy: { title: 'Tech Rebrand', stat1: 'New Identity', stat2: 'Global Rollout', stat3: 'Award Winning' }
    },

    // --- MARKETING SERVICES ---
    'lead-marketing': {
        id: 'lead-marketing',
        category: 'Marketing Services',
        title: 'Lead Marketing',
        heroPitch: 'High-Quality Leads, Predictable Pipeline.',
        includes: [
            { title: 'Form Funnels', desc: 'Optimized capture pages.' },
            { title: 'WhatsApp Automation', desc: 'Instant lead engagement.' },
            { title: 'CRM Nurturing', desc: 'Automated follow-up sequences.' }
        ],
        benefits: ['Lower CPL', 'Higher Quality Leads', 'Automated Follow-up'],
        deliverables: [
            { item: 'Funnel Setup', desc: 'Landing page + Form', format: 'Live Link', timeline: '1 week' },
            { item: 'Nurture Flow', desc: '5-Email Sequence', format: 'Workflow', timeline: '3 days' }
        ],
        industries: ['B2B', 'Real Estate', 'Education', 'SaaS'],
        pricing: [
            { name: 'Growth', price: '$1500/mo', features: ['Funnel Optimization', 'Ad Management', 'CRM Sync'] }
        ],
        caseStudy: { title: 'EdTech Growth', stat1: '500+ Leads/mo', stat2: '-40% CPL', stat3: '20% Conv. Rate' }
    },
    'hyper-marketing': {
        id: 'hyper-marketing',
        category: 'Marketing Services',
        title: 'Hyper Marketing',
        heroPitch: 'Precision Targeting at Scale.',
        includes: [
            { title: 'Geo-Fencing', desc: 'Location-based ad targeting.' },
            { title: 'Persona Mapping', desc: 'Deep audience segmentation.' },
            { title: 'Micro-Influencers', desc: 'Niche community activation.' }
        ],
        benefits: ['Extreme Relevance', 'Community Trust', 'High Engagement'],
        deliverables: [
            { item: 'Audience Map', desc: 'Detailed Persona Doc', format: 'PDF', timeline: '5 days' },
            { item: 'Campaign Launch', desc: 'Hyper-local Ads', format: 'Live', timeline: '1 week' }
        ],
        industries: ['Local Retail', 'Events', 'Hospitality'],
        pricing: [
            { name: 'Campaign', price: 'Custom', features: ['Geo-Targeting', 'Creative Adaptation', 'Reporting'] }
        ],
        caseStudy: { title: 'Retail Chain', stat1: '+30% Footfall', stat2: 'Local Buzz', stat3: 'High ROI' }
    },
    'media-marketing': {
        id: 'media-marketing',
        category: 'Marketing Services',
        title: 'Media Marketing',
        heroPitch: 'Performance Media Buying That Scales.',
        includes: [
            { title: 'Meta & Google Ads', desc: 'Full-funnel campaign management.' },
            { title: 'P-Max Setup', desc: 'Performance Max optimization.' },
            { title: 'Advanced Tracking', desc: 'Server-side pixel setup.' }
        ],
        benefits: ['Scalable Revenue', 'Data Accuracy', 'Cross-Channel Reach'],
        deliverables: [
            { item: 'Ad Account Setup', desc: 'Pixel + Catalog', format: 'Access', timeline: '3 days' },
            { item: 'Weekly Reports', desc: 'Performance Analysis', format: 'Dashboard', timeline: 'Weekly' }
        ],
        industries: ['E-commerce', 'D2C', 'Apps'],
        pricing: [
            { name: 'Scale', price: '% of Ad Spend', features: ['Ded. Media Buyer', 'Creative Feedback', '24/7 Monitoring'] }
        ],
        caseStudy: { title: 'D2C Fashion', stat1: '5x ROAS', stat2: '$1M+ Revenue', stat3: 'Global Reach' }
    },
    'retention-marketing': {
        id: 'retention-marketing',
        category: 'Marketing Services',
        title: 'Retention Marketing',
        heroPitch: 'Turn One-Time Buyers Into Lifelong Fans.',
        includes: [
            { title: 'Email Flows', desc: 'Welcome, Abandoned Cart, Winback.' },
            { title: 'Loyalty Programs', desc: 'Points and rewards strategy.' },
            { title: 'SMS Campaigns', desc: 'High-impact text offers.' }
        ],
        benefits: ['Higher LTV', 'Lower Churn', 'Owned Audience Growth'],
        deliverables: [
            { item: 'Flow Setup', desc: 'Klaviyo/Mailchimp', format: 'Live', timeline: '1 week' },
            { item: 'Campaign Calendar', desc: 'Monthly Plan', format: 'Sheet', timeline: 'Monthly' }
        ],
        industries: ['E-commerce', 'Subscription Box', 'SaaS'],
        pricing: [
            { name: 'Retainer', price: '$2000/mo', features: ['4 Campaigns/mo', 'Flow Optimization', 'List Cleaning'] }
        ],
        caseStudy: { title: 'Beauty Sub', stat1: '+45% LTV', stat2: '30% Repurchase', stat3: 'Low Churn' }
    },

    // --- COMMERCE SERVICES ---
    'd2c': {
        id: 'd2c',
        category: 'Commerce Services',
        title: 'D2C Commerce',
        heroPitch: 'Direct-to-Consumer Growth Engines.',
        includes: [
            { title: 'Shopify Build', desc: 'Premium storefront design.' },
            { title: 'Conversion Optimization', desc: 'CRO audits and testing.' },
            { title: 'Tech Stack', desc: 'Review integration, upsells, subscriptions.' }
        ],
        benefits: ['Brand Ownership', 'Higher Margins', 'Customer Data'],
        deliverables: [
            { item: 'Store Launch', desc: 'Full Shopify Setup', format: 'Live Site', timeline: '4-6 weeks' }
        ],
        industries: ['Fashion', 'Beauty', 'Electronics'],
        pricing: [{ name: 'Launch', price: '$5000+', features: ['Design', 'Dev', 'Apps'] }],
        caseStudy: { title: 'Sneaker Brand', stat1: '0-100k Sales', stat2: '3% Conv Rate', stat3: 'Fast Load' }
    },
    'b2b': {
        id: 'b2b',
        category: 'Commerce Services',
        title: 'B2B Commerce',
        heroPitch: 'Wholesale Digital Transformation.',
        includes: [
            { title: 'Wholesale Portal', desc: 'Gated login and bulk ordering.' },
            { title: 'Price Tiers', desc: 'Custom pricing per customer group.' },
            { title: 'ERP Sync', desc: 'Inventory and order integration.' }
        ],
        benefits: ['Automated Sales', 'Reduced Admin', 'Scalable Operations'],
        deliverables: [
            { item: 'B2B Portal', desc: 'Rietail/Shopify Plus', format: 'Live System', timeline: '8 weeks' }
        ],
        industries: ['Manufacturing', 'Distributors', 'FMCG'],
        pricing: [{ name: 'Enterprise', price: 'Custom', features: ['Complex Logic', 'ERP Sync', 'Training'] }],
        caseStudy: { title: 'Hardware Dist.', stat1: '50% Less Admin', stat2: '2x Order Vol', stat3: 'Happy Retailers' }
    },
    'mps': {
        id: 'mps',
        category: 'Commerce Services',
        title: 'MPS (Marketplace Services)',
        heroPitch: 'Dominate Amazon, Flipkart & More.',
        includes: [
            { title: 'Listing Optimization', desc: 'SEO titles and A+ content.' },
            { title: 'Ads Management', desc: 'Amazon PPC and marketplace ads.' },
            { title: 'Account Health', desc: 'Monitoring and compliance.' }
        ],
        benefits: ['Massive Reach', 'High Volume', 'Brand Protection'],
        deliverables: [
            { item: 'A+ Content', desc: 'Enhanced Brand Content', format: 'Live', timeline: '1 week' }
        ],
        industries: ['Retail', 'CPG'],
        pricing: [{ name: 'Management', price: 'Retainer', features: ['PPC', 'SEO', 'Support'] }],
        caseStudy: { title: 'Home Goods', stat1: 'Best Seller', stat2: '4.5 Star Avg', stat3: '+200% Sales' }
    },
    'qms': {
        id: 'qms',
        category: 'Commerce Services',
        title: 'QMS (Quick Commerce)',
        heroPitch: 'Win the Instant Delivery Game.',
        includes: [
            { title: 'Dark Store Tech', desc: 'Inventory and dispatch systems.' },
            { title: 'Aggregator Mgmt', desc: 'Swiggy/Zomato/Blinkit optimization.' },
            { title: 'Menu Engineering', desc: 'Optimizing offerings for speed.' }
        ],
        benefits: ['Hyper-Local Sales', 'Instant Gratification', 'High Frequency'],
        deliverables: [{ item: 'Optimization', desc: 'Platform Setup', format: 'Live', timeline: '2 weeks' }],
        industries: ['Food', 'Grocery', 'Essentials'],
        pricing: [{ name: 'Growth', price: 'Custom', features: ['Menu Opt', 'Ads', 'Ops'] }],
        caseStudy: { title: 'Snack Brand', stat1: 'Top Rated', stat2: '10min Delivery', stat3: 'High Vol' }
    },
    'retail-marketing': {
        id: 'retail-marketing',
        category: 'Commerce Services',
        title: 'Retail Marketing',
        heroPitch: 'Bridging Online and Offline Worlds.',
        includes: [
            { title: 'Omnichannel Strategy', desc: 'Unified customer experience.' },
            { title: 'POS Integration', desc: 'Sync online and offline sales.' },
            { title: 'Local SEO', desc: 'Drive foot traffic to stores.' }
        ],
        benefits: ['Holistic View', 'Increased LTV', 'Better Inventory'],
        deliverables: [{ item: 'Strategy Doc', desc: 'Omnichannel Roadmap', format: 'PDF', timeline: '2 weeks' }],
        industries: ['Fashion Retail', 'Showrooms'],
        pricing: [{ name: 'Consulting', price: 'Custom', features: ['Tech Selection', 'Marketing Map', 'Training'] }],
        caseStudy: { title: 'Apparel Chain', stat1: 'Unified View', stat2: '+Footfall', stat3: 'Seamless UX' }
    },

    // --- TO-AUTOMATION ---
    'crm-automation': {
        id: 'crm-automation',
        category: 'To-Automation',
        title: 'CRM Automation',
        heroPitch: 'Your Customer Data, Autopilot Mode.',
        includes: [
            { title: 'Pipeline Automation', desc: 'Auto-move deals based on actions.' },
            { title: 'Data Enrichment', desc: 'Auto-fill missing lead info.' },
            { title: 'Communication Sync', desc: 'Log emails and calls automatically.' }
        ],
        benefits: ['No Data Entry', 'Faster Sales Cycle', 'Better Insights'],
        deliverables: [{ item: 'CRM Setup', desc: 'HubSpot/Salesforce', format: 'System', timeline: '4 weeks' }],
        industries: ['B2B', 'Service Biz'],
        pricing: [{ name: 'Implementation', price: '$3000+', features: ['Setup', 'Migration', 'Training'] }],
        caseStudy: { title: 'Consulting Firm', stat1: '20hr/wk Saved', stat2: 'Clean Data', stat3: 'Fast Response' }
    },
    'hrm-automation': {
        id: 'hrm-automation',
        category: 'To-Automation',
        title: 'HRM Automation',
        heroPitch: 'Streamline the Employee Lifecycle.',
        includes: [
            { title: 'Onboarding Flows', desc: 'Digital contracts and training.' },
            { title: 'Leave & Attendance', desc: 'Automated tracking and approval.' },
            { title: 'Payroll Sync', desc: 'Error-free salary processing.' }
        ],
        benefits: ['Employee Satisfaction', 'Compliance', 'Time Savings'],
        deliverables: [{ item: 'HR System', desc: 'HCM Suite Setup', format: 'System', timeline: '6 weeks' }],
        industries: ['Corporate', 'Startups'],
        pricing: [{ name: 'Setup', price: 'Custom', features: ['Workflow Design', 'Integration', 'Support'] }],
        caseStudy: { title: 'Tech Startup', stat1: 'Fast Hiring', stat2: 'Zero Errors', stat3: 'Happy Team' }
    },
    'mps-automation': {
        id: 'mps-automation',
        category: 'To-Automation',
        title: 'MPS Automation',
        heroPitch: 'Automate Your Marketplace Ops.',
        includes: [
            { title: 'Inventory Sync', desc: 'Real-time stock across channels.' },
            { title: 'Order Routing', desc: 'Auto-send orders to warehouses.' },
            { title: 'Price Adjusters', desc: 'Dynamic repricing based on competition.' }
        ],
        benefits: ['No Overselling', 'Best Prices', 'Efficient Logistics'],
        deliverables: [{ item: 'Connector', desc: 'Multi-channel Sync', format: 'API/Tool', timeline: '3 weeks' }],
        industries: ['Retail', 'Resellers'],
        pricing: [{ name: 'Integration', price: 'Custom', features: ['API Setup', 'Testing', 'Maintenance'] }],
        caseStudy: { title: 'Multi-Seller', stat1: '100% Uptime', stat2: 'Live Sync', stat3: 'Scale Ready' }
    },
    'qms-automation': {
        id: 'qms-automation',
        category: 'To-Automation',
        title: 'QMS Automation',
        heroPitch: 'Quality & Quick Commerce Auto-Pilots.',
        includes: [
            { title: 'Order Dispatch', desc: 'Auto-assign riders.' },
            { title: 'Quality Checks', desc: 'Digital checklists and approvals.' },
            { title: 'Feedback Loops', desc: 'Auto-collect customer sentiment.' }
        ],
        benefits: ['Speed', 'Consistency', 'Customer Trust'],
        deliverables: [{ item: 'Workflow', desc: 'Custom Logic', format: 'System', timeline: '4 weeks' }],
        industries: ['Food', 'Pharma'],
        pricing: [{ name: 'Build', price: 'Custom', features: ['Logic Map', 'Dev', 'Deploy'] }],
        caseStudy: { title: 'Cloud Kitchen', stat1: '<2min Dispatch', stat2: '5 Star Rating', stat3: 'Efficient' }
    },

    // --- AI SERVICES ---
    'ai-content': {
        id: 'ai-content',
        category: 'AI Services',
        title: 'AI Content & Creative',
        heroPitch: 'Generative AI for Infinite Scale.',
        includes: [
            { title: 'Bulk Copywriting', desc: 'Product descriptions and blogs.' },
            { title: 'AI Image Gen', desc: 'Custom visuals without shoots.' },
            { title: 'Video Synthesis', desc: 'AI avatars and voiceovers.' }
        ],
        benefits: ['Infinite Content', 'Low Cost', 'Rapid Testing'],
        deliverables: [{ item: 'Content Engine', desc: 'Workflow Setup', format: 'Tool', timeline: '1 week' }],
        industries: ['Media', 'E-com'],
        pricing: [{ name: 'Subscription', price: '$1000/mo', features: ['Unlimited Gen', 'Editing', 'Strategy'] }],
        caseStudy: { title: 'Blog Network', stat1: '100 Posts/mo', stat2: 'Top SEO', stat3: 'Low Cost' }
    },
    'ai-agents': {
        id: 'ai-agents',
        category: 'AI Services',
        title: 'AI Agents & Assistants',
        heroPitch: 'Your Digital Workforce, 24/7.',
        includes: [
            { title: 'Customer Support', desc: 'Intelligent chatbots.' },
            { title: 'Sales Agents', desc: 'Lead qualifying bots.' },
            { title: 'Internal Ops', desc: 'Data retrieval assistants.' }
        ],
        benefits: ['24/7 Availability', 'Instant Response', 'Cost Reduction'],
        deliverables: [{ item: 'Custom Agent', desc: 'Trained Bot', format: 'Software', timeline: '4 weeks' }],
        industries: ['Service', 'SaaS'],
        pricing: [{ name: 'Development', price: 'Custom', features: ['Training', 'Integration', 'Hosting'] }],
        caseStudy: { title: 'SaaS Support', stat1: '90% Auto-Resolve', stat2: 'Instant Reply', stat3: 'High CSAT' }
    },
    'ai-automation': {
        id: 'ai-automation',
        category: 'AI Services',
        title: 'AI Automation Systems',
        heroPitch: 'Cognitive Workflows for Business.',
        includes: [
            { title: 'Doc Processing', desc: 'OCR and data extraction.' },
            { title: 'Predictive Analytics', desc: 'Forecast sales and churn.' },
            { title: 'Decision Engines', desc: 'Auto-approve workflows.' }
        ],
        benefits: ['Smarter Ops', 'Data Driven', 'Future Proof'],
        deliverables: [{ item: 'System', desc: 'AI Pipeline', format: 'Code', timeline: '8 weeks' }],
        industries: ['Finance', 'Logistics'],
        pricing: [{ name: 'Enterprise', price: 'Custom', features: ['Architecture', 'ML Ops', 'Security'] }],
        caseStudy: { title: 'Fintech', stat1: 'Auto-Risk Check', stat2: 'Fast Approval', stat3: 'Secure' }
    },
    'ai-consulting': {
        id: 'ai-consulting',
        category: 'AI Services',
        title: 'AI Integration & Consulting',
        heroPitch: 'Navigate the AI Revolution.',
        includes: [
            { title: 'Strategy Roadmap', desc: 'Where to apply AI first.' },
            { title: 'Tool Selection', desc: 'Picking the right tech stack.' },
            { title: 'Team Training', desc: 'Upskilling your workforce.' }
        ],
        benefits: ['Competitive Edge', 'Risk Mitigation', 'Clear ROI'],
        deliverables: [{ item: 'Roadmap', desc: 'Strategy Deck', format: 'PDF', timeline: '2 weeks' }],
        industries: ['All'],
        pricing: [{ name: 'Consulting', price: 'Retainer', features: ['Advisory', 'Workshops', 'Oversight'] }],
        caseStudy: { title: 'Enterprise Corp', stat1: 'AI Adoption', stat2: 'Efficiency', stat3: 'Innovation' }
    },
};
