
import React from 'react';
import { Link } from 'react-router-dom';
import { BrushIcon, CheckCircleIcon, ArrowRightIcon } from '../../../constants/icons';
import Breadcrumbs from '../../../components/Breadcrumbs';

const FeatureItem: React.FC<{ title: string }> = ({ title }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
        <span className="text-gray-700 font-medium">{title}</span>
    </li>
);

const BenefitCard: React.FC<{ title: string }> = ({ title }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center font-bold text-gray-800">
        {title}
    </div>
);

const SubscriptionCard: React.FC<{ title: string; description: string; recommended?: boolean }> = ({ title, description, recommended }) => (
    <div className={`p-8 rounded-2xl border flex flex-col h-full ${recommended ? 'bg-purple-600 text-white border-purple-600 shadow-xl scale-105' : 'bg-white text-gray-900 border-gray-200'}`}>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className={`text-sm mb-8 flex-grow ${recommended ? 'text-purple-100' : 'text-gray-500'}`}>{description}</p>
        <Link to="/contact" className={`block w-full py-3 rounded-lg text-center font-bold transition-colors ${recommended ? 'bg-white text-purple-600 hover:bg-purple-50' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
            Get Started
        </Link>
    </div>
);

const CreativeStudioPage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[
                    { label: 'Home', path: '/' }, 
                    { label: 'Services', path: '/services' }, 
                    { label: 'Studio', path: '/services/studio' },
                    { label: 'Creative Studio' }
                ]} />
            </div>

            <section className="py-24 bg-purple-50 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm mb-8">
                        <BrushIcon className="h-10 w-10 text-purple-600" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Ad Creatives That <br/><span className="text-purple-600">Stop the Scroll.</span>
                    </h1>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included</h2>
                        <ul className="space-y-4">
                            <FeatureItem title="Social creatives (static + motion)" />
                            <FeatureItem title="Video ads & Motion graphics" />
                            <FeatureItem title="Festive theme packs" />
                            <FeatureItem title="Product story ads" />
                            <FeatureItem title="Reels / TikTok formats" />
                            <FeatureItem title="Hook-based ad scripting" />
                            <FeatureItem title="Landing page creative sets" />
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why It Matters</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <BenefitCard title="Boosts ROAS" />
                            <BenefitCard title="Increases Engagement" />
                            <BenefitCard title="Brand Recall Improvement" />
                            <BenefitCard title="Faster Creative Testing" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-900 text-white text-center">
                 <div className="max-w-4xl mx-auto px-4">
                     <h2 className="text-3xl font-bold mb-8">Standard Deliverables</h2>
                     <div className="flex flex-wrap justify-center gap-4">
                         <span className="px-6 py-3 bg-gray-800 rounded-full border border-gray-700">Static Packs</span>
                         <span className="px-6 py-3 bg-gray-800 rounded-full border border-gray-700">Video Packs</span>
                         <span className="px-6 py-3 bg-gray-800 rounded-full border border-gray-700">Motion Packs</span>
                         <span className="px-6 py-3 bg-gray-800 rounded-full border border-gray-700">Brand Campaign Sets</span>
                     </div>
                     <p className="mt-8 text-gray-400 text-sm font-medium uppercase tracking-wide">Who It's For: Ecom, D2C, agencies, creators, influencers.</p>
                 </div>
            </section>

            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="bg-purple-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-purple-700 shadow-lg">
                            Talk to Our Creative Team
                        </Link>
                        <Link to="/services#pricing" className="bg-white text-gray-900 border border-gray-200 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-50">
                            View Plans
                        </Link>
                    </div>
                </div>
            </section>

             <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">Subscription Options</h2>
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <SubscriptionCard title="Monthly Creative Pack" description="Essential assets for consistent posting." />
                        <SubscriptionCard title="Performance Creative Pack" description="Optimized for high-scale ad campaigns." recommended />
                        <SubscriptionCard title="Unlimited Creative Pipeline" description="Endless production for rapid testing." />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreativeStudioPage;
