
import React from 'react';
import { Link } from 'react-router-dom';
import { CameraIcon, CheckCircleIcon, ArrowRightIcon } from '../../../constants/icons';
import Breadcrumbs from '../../../components/Breadcrumbs';

const FeatureItem: React.FC<{ title: string }> = ({ title }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
        <span className="text-gray-700 font-medium">{title}</span>
    </li>
);

const BenefitCard: React.FC<{ title: string }> = ({ title }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center font-bold text-gray-800">
        {title}
    </div>
);

const SubscriptionCard: React.FC<{ title: string; price: string; description: string; recommended?: boolean }> = ({ title, price, description, recommended }) => (
    <div className={`p-8 rounded-2xl border flex flex-col h-full ${recommended ? 'bg-blue-600 text-white border-blue-600 shadow-xl scale-105' : 'bg-white text-gray-900 border-gray-200'}`}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className={`text-sm mb-6 ${recommended ? 'text-blue-100' : 'text-gray-500'}`}>{description}</p>
        <div className="text-3xl font-extrabold mb-8">{price}</div>
        <Link to="/contact" className={`block w-full py-3 rounded-lg text-center font-bold transition-colors mt-auto ${recommended ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
            Get Started
        </Link>
    </div>
);

const CatalogueStudioPage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[
                    { label: 'Home', path: '/' }, 
                    { label: 'Services', path: '/services' }, 
                    { label: 'Studio', path: '/services/studio' },
                    { label: 'Catalogue Studio' }
                ]} />
            </div>

            <section className="py-24 bg-blue-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm mb-8">
                        <CameraIcon className="h-10 w-10 text-blue-600" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                        High-Quality Catalogue <br/><span className="text-blue-600">Visuals That Sell.</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Clean indoor/outdoor product captures for D2C, marketplaces, and campaigns.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                         <Link to="/contact" className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-700 shadow-lg">
                            Start Catalogue Subscription
                        </Link>
                        <Link to="/services#pricing" className="bg-white text-gray-900 border border-gray-200 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-50">
                            View Plans
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included</h2>
                        <ul className="space-y-4">
                            <FeatureItem title="Catalogue Photography (flatlay, ghost mannequin, model)" />
                            <FeatureItem title="Lifestyle catalogue shoots" />
                            <FeatureItem title="Ecommerce listing creatives" />
                            <FeatureItem title="Fabric-focused macro shots" />
                            <FeatureItem title="Product detailing frames" />
                            <FeatureItem title="Retouching and color correction" />
                            <FeatureItem title="Category-wise catalog automation" />
                            <FeatureItem title="Model onboarding + styling plan" />
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why It Matters</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <BenefitCard title="Higher CTR + Purchase Intent" />
                            <BenefitCard title="Professional Brand Perception" />
                            <BenefitCard title="Faster Listing Turnaround" />
                            <BenefitCard title="Marketplace Compliance Ready" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Standard Deliverables</h2>
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b border-gray-200">
                                    <th className="p-4 font-bold text-gray-700">Deliverable</th>
                                    <th className="p-4 font-bold text-gray-700">Description</th>
                                    <th className="p-4 font-bold text-gray-700">Format</th>
                                    <th className="p-4 font-bold text-gray-700">Timeline</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="p-4 font-semibold">Catalogue Photos</td>
                                    <td className="p-4 text-gray-600">Front/Back/Detail views</td>
                                    <td className="p-4 text-gray-500">JPG/PNG</td>
                                    <td className="p-4 text-gray-500">48 hrs</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Lifestyle Frames</td>
                                    <td className="p-4 text-gray-600">Context-based usage shots</td>
                                    <td className="p-4 text-gray-500">JPG</td>
                                    <td className="p-4 text-gray-500">2–3 days</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Listing Creatives</td>
                                    <td className="p-4 text-gray-600">Marketplace-ready</td>
                                    <td className="p-4 text-gray-500">1080×1350</td>
                                    <td className="p-4 text-gray-500">24 hrs</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Retouched Set</td>
                                    <td className="p-4 text-gray-600">Color correction + edits</td>
                                    <td className="p-4 text-gray-500">JPG</td>
                                    <td className="p-4 text-gray-500">24 hrs</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center mt-8 text-gray-500 text-sm font-medium uppercase tracking-wide">Who It's For: D2C brands, fashion, FMCG, jewelry, home décor, marketplaces.</p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">Subscription Plans</h2>
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <SubscriptionCard title="Lite" price="50 SKUs/mo" description="For emerging brands." />
                        <SubscriptionCard title="Pro" price="150 SKUs/mo" description="For scaling catalogs." recommended />
                        <SubscriptionCard title="Elite" price="Unlimited" description="For enterprise volume." />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CatalogueStudioPage;
