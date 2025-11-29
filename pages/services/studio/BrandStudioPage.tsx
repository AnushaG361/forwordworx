
import React from 'react';
import { Link } from 'react-router-dom';
import { BrandIcon, CheckCircleIcon, ArrowRightIcon } from '../../../constants/icons';
import Breadcrumbs from '../../../components/Breadcrumbs';

const FeatureItem: React.FC<{ title: string }> = ({ title }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-5 w-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
        <span className="text-gray-700 font-medium">{title}</span>
    </li>
);

const BenefitCard: React.FC<{ title: string }> = ({ title }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center font-bold text-gray-800">
        {title}
    </div>
);

const BrandStudioPage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[
                    { label: 'Home', path: '/' }, 
                    { label: 'Services', path: '/services' }, 
                    { label: 'Studio', path: '/services/studio' },
                    { label: 'Brand Studio' }
                ]} />
            </div>

            <section className="py-24 bg-pink-50 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm mb-8">
                        <BrandIcon className="h-10 w-10 text-pink-600" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Build a Brand <br/><span className="text-pink-600">That People Feel.</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Strategic identity development that creates connection, trust, and loyalty.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included</h2>
                        <ul className="space-y-4">
                            <FeatureItem title="Brand identity development" />
                            <FeatureItem title="Logo & color systems" />
                            <FeatureItem title="Brand guidelines" />
                            <FeatureItem title="Packaging design" />
                            <FeatureItem title="Website UI/UX" />
                            <FeatureItem title="Rebranding services" />
                            <FeatureItem title="Brand storytelling frameworks" />
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why It Matters</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <BenefitCard title="Differentiation in a crowded market" />
                            <BenefitCard title="Memorable visual identity" />
                            <BenefitCard title="Stronger conversions + trust" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50 text-center">
                 <div className="max-w-4xl mx-auto px-4">
                     <h2 className="text-3xl font-bold mb-8 text-gray-900">Deliverables</h2>
                     <div className="flex flex-wrap justify-center gap-4">
                         <span className="px-6 py-3 bg-white text-gray-800 rounded-full border border-gray-200 shadow-sm">Brand Book</span>
                         <span className="px-6 py-3 bg-white text-gray-800 rounded-full border border-gray-200 shadow-sm">Logo Pack</span>
                         <span className="px-6 py-3 bg-white text-gray-800 rounded-full border border-gray-200 shadow-sm">UI Kit</span>
                         <span className="px-6 py-3 bg-white text-gray-800 rounded-full border border-gray-200 shadow-sm">Packaging Files</span>
                         <span className="px-6 py-3 bg-white text-gray-800 rounded-full border border-gray-200 shadow-sm">Storytelling Doc</span>
                     </div>
                 </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-10">Subscription Options</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                         <div className="p-8 border border-gray-200 rounded-2xl hover:border-pink-300 hover:shadow-lg transition-all">
                             <h3 className="text-2xl font-bold mb-4">Monthly Brand Retainer</h3>
                             <p className="text-gray-500 mb-6">Ongoing design support for evolving brands.</p>
                             <Link to="/contact" className="block w-full py-3 bg-gray-100 text-gray-800 font-bold rounded-lg hover:bg-gray-200">Contact Sales</Link>
                         </div>
                         <div className="p-8 border border-gray-200 rounded-2xl hover:border-pink-300 hover:shadow-lg transition-all">
                             <h3 className="text-2xl font-bold mb-4">Quarterly Retainer</h3>
                             <p className="text-gray-500 mb-6">Long-term strategic partnership.</p>
                             <Link to="/contact" className="block w-full py-3 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700">Contact Sales</Link>
                         </div>
                    </div>
                </div>
            </section>

             <section className="py-24 bg-white text-center border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="bg-pink-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-pink-700 shadow-lg">
                            Start Brand Transformation
                        </Link>
                        <Link to="/services#pricing" className="bg-white text-gray-900 border border-gray-200 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-50">
                            View Plans
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BrandStudioPage;
