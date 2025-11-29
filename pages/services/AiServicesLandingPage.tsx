
import React from 'react';
import { Link } from 'react-router-dom';
import { AiIcon, SparklesIcon, CpuChipIcon } from '../../constants/icons';
import Breadcrumbs from '../../components/Breadcrumbs';

const AiServicesLandingPage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'AI Services' }]} />
            </div>
            <section className="py-24 text-center bg-indigo-50">
                <div className="max-w-4xl mx-auto px-4">
                     <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm mb-8">
                        <AiIcon className="h-10 w-10 text-indigo-600" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">AI Services</h1>
                    <p className="text-xl text-gray-500 mb-10">Future-proof your business with cutting-edge AI integration.</p>
                    <Link to="/contact" className="bg-indigo-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-indigo-700 shadow-lg">Explore AI</Link>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <SparklesIcon className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold">AI Content</h3>
                            <p className="text-gray-600 mt-2">Generative text, image, and video creation at scale.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <CpuChipIcon className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold">AI Agents</h3>
                            <p className="text-gray-600 mt-2">Custom autonomous agents for customer service and ops.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <AiIcon className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold">AI Consulting</h3>
                            <p className="text-gray-600 mt-2">Strategic implementation and systems integration.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default AiServicesLandingPage;
