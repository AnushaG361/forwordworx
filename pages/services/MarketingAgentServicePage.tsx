
import React from 'react';
import { Link } from 'react-router-dom';
import { MarketingIcon, ChartBarIcon, GlobeAltIcon, TrendingUpIcon, ArrowRightIcon } from '../../constants/icons';
import Breadcrumbs from '../../components/Breadcrumbs';

const MarketingAgentServicePage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Marketing Agent' }]} />
            </div>
            <section className="py-24 text-center bg-blue-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm mb-8">
                        <MarketingIcon className="h-10 w-10 text-blue-600" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">Marketing Agent</h1>
                    <p className="text-xl text-gray-500 mb-10">Performance-first strategies to dominate your market.</p>
                    <Link to="/contact" className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-700 shadow-lg">Scale Now</Link>
                </div>
            </section>
             <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <TrendingUpIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold">Lead Marketing</h3>
                            <p className="text-gray-600 mt-2">Funnels, WhatsApp automation, and CRM nurturing.</p>
                        </div>
                         <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <GlobeAltIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold">Media Marketing</h3>
                            <p className="text-gray-600 mt-2">Meta, Google, YouTube ads and P-max setups.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <ChartBarIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold">Retention</h3>
                            <p className="text-gray-600 mt-2">Omnichannel buying and customer LTV maximization.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default MarketingAgentServicePage;
