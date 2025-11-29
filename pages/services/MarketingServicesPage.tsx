
import React from 'react';
import { Link } from 'react-router-dom';
import { MarketingIcon, ChartBarIcon, GlobeAltIcon, TrendingUpIcon, ArrowRightIcon } from '../../constants/icons';
import Breadcrumbs from '../../components/Breadcrumbs';

const MarketingServiceCard: React.FC<{ title: string; items: string[]; icon: React.ElementType }> = ({ title, items, icon: Icon }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
            <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <ul className="space-y-2 flex-grow">
            {items.map((item, i) => (
                <li key={i} className="flex items-center text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                </li>
            ))}
        </ul>
        <div className="mt-8 pt-4 border-t border-gray-50">
            <Link to="/contact" className="text-blue-600 font-bold text-sm flex items-center hover:underline">
                Get Started <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
        </div>
    </div>
);

const MarketingServicesPage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Marketing' }]} />
            </div>
            <section className="py-24 text-center bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">Marketing Services</h1>
                    <p className="text-xl text-gray-500 mb-10">Performance-first strategies engineered for ROI. We merge data, creativity, and automation.</p>
                    <Link to="/contact" className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-700">Scale Your Brand</Link>
                </div>
            </section>
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                    <MarketingServiceCard 
                        title="Media Marketing"
                        items={['Meta Ads (FB + IG)', 'Google Search & Shopping', 'YouTube Campaigns', 'P-Max Setups']}
                        icon={GlobeAltIcon}
                    />
                    <MarketingServiceCard 
                        title="Lead Marketing"
                        items={['High-Converting Funnels', 'WhatsApp Automation', 'CRM Nurturing', 'Lead Scoring']}
                        icon={TrendingUpIcon}
                    />
                    <MarketingServiceCard 
                        title="E-commerce Marketing"
                        items={['Catalog Ads', 'Retention Automation', 'SKU Segmentation', 'ROAS Optimization']}
                        icon={ChartBarIcon}
                    />
                </div>
            </section>
        </div>
    );
};
export default MarketingServicesPage;
