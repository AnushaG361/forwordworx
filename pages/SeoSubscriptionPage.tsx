
import React from 'react';
import { Link } from 'react-router-dom';
import { 
    MagnifyingGlassIcon, 
    TrendingUpIcon, 
    LinkIcon, 
    ChatBubbleIcon, 
    ReportsIcon, 
    CheckCircleIcon 
} from '../constants/icons';
import Breadcrumbs from '../components/Breadcrumbs';

const FeatureDetailCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-2 rounded-lg">
                <Icon className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="mt-3 text-gray-600">{description}</p>
    </div>
);

const PricingCard: React.FC<{ plan: string, price: string, description: string, features: string[], popular?: boolean }> = ({ plan, price, description, features, popular }) => (
    <div className={`border rounded-xl p-8 flex flex-col ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
        {popular && <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full self-start">POPULAR</span>}
        <h3 className="text-2xl font-bold mt-4 text-gray-900">{plan}</h3>
        <p className="mt-2 text-4xl font-extrabold text-gray-900">{price}<span className="text-base font-medium text-gray-500">/mo</span></p>
        <p className="mt-2 text-gray-600 h-12">{description}</p>
        <ul className="mt-8 space-y-4 text-gray-600 flex-grow">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <div className="mt-8">
            <Link to="/contact" className={`w-full text-center font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 inline-block ${popular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-700 text-white hover:bg-gray-800'}`}>
                Get Started
            </Link>
        </div>
    </div>
);

const SeoSubscriptionPage: React.FC = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'SEO & SMO Plans' }]} />
            </div>

            {/* Hero Section */}
            <section className="relative py-32 md:py-48 text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/seobg/1200/800')" }}>
                <div className="absolute inset-0 bg-gray-900/70"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white">Dominate Search & Social</h1>
                    <p className="mt-4 text-xl md:text-2xl text-gray-200">Comprehensive SEO & SMO subscription plans to boost your online visibility and drive organic growth.</p>
                    <div className="mt-8">
                        <a href="#pricing" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                            View Plans
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold">A Complete Growth Solution</h2>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                           Our SEO & SMO services are a holistic solution, covering every aspect of your online presence to ensure you're not just seen, but that you stand out.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureDetailCard icon={MagnifyingGlassIcon} title="In-Depth Keyword Research" description="We identify high-value keywords to target the right audience and drive relevant traffic." />
                        <FeatureDetailCard icon={TrendingUpIcon} title="On-Page & Technical SEO" description="Optimizing your site's structure, content, and performance for top search engine rankings." />
                        <FeatureDetailCard icon={LinkIcon} title="Quality Link Building" description="Building a strong backlink profile to enhance your domain authority and credibility." />
                        <FeatureDetailCard icon={ChatBubbleIcon} title="Social Media Management" description="Engaging content creation and community management to grow your social presence." />
                        <FeatureDetailCard icon={ReportsIcon} title="Content Strategy" description="Developing a content plan that attracts, engages, and converts your target audience." />
                        <FeatureDetailCard icon={CheckCircleIcon} title="Performance Reporting" description="Transparent, monthly reports that track your progress and our impact on your bottom line." />
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 md:py-28 bg-gray-50">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold">Flexible Plans for Every Business</h2>
                        <p className="mt-4 text-lg text-gray-600">Choose the subscription that fits your goals and budget. No hidden fees, just results.</p>
                    </div>
                    <div className="mt-16 grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                        <PricingCard 
                            plan="Starter"
                            price="$499"
                            description="For businesses getting started with SEO & SMO."
                            features={[
                                'Keyword Research (20 keywords)',
                                'On-Page SEO Audit',
                                'Technical SEO Basics',
                                '2 Social Media Platforms',
                                'Monthly Reporting',
                            ]}
                        />
                         <PricingCard 
                            plan="Growth"
                            price="$999"
                            description="Our most popular plan for businesses ready to scale."
                            features={[
                                'Keyword Research (50 keywords)',
                                'Comprehensive On-Page SEO',
                                'Advanced Technical SEO',
                                '4 Social Media Platforms',
                                'Content Strategy (2 blogs/mo)',
                                'Basic Link Building',
                                'Bi-Weekly Reporting',
                            ]}
                            popular
                        />
                         <PricingCard 
                            plan="Scale"
                            price="$1999"
                            description="For established businesses aiming for market leadership."
                            features={[
                                'Keyword Research (100+ keywords)',
                                'Full On-Page & Technical SEO',
                                'Aggressive Link Building',
                                '6+ Social Media Platforms',
                                'Content Strategy (4 blogs/mo)',
                                'Conversion Rate Optimization',
                                'Weekly Reporting & Calls',
                            ]}
                        />
                    </div>
                 </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-500 rounded-2xl p-12 text-center">
                        <h2 className="text-4xl font-extrabold text-white">Ready to Climb the Ranks?</h2>
                        <p className="mt-4 text-xl text-blue-100">Let's discuss your goals and how our SEO & SMO expertise can help you achieve them. Schedule a free strategy call today.</p>
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

export default SeoSubscriptionPage;
