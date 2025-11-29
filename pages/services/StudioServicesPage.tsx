
import React from 'react';
import { Link } from 'react-router-dom';
import { CameraIcon, BrushIcon, BrandIcon, ArrowRightIcon, CheckCircleIcon } from '../../constants/icons';
import Breadcrumbs from '../../components/Breadcrumbs';

const StudioCard: React.FC<{ 
    icon: React.ElementType; 
    title: string; 
    description: string; 
    link: string; 
    bgClass: string;
    textClass: string;
}> = ({ icon: Icon, title, description, link, bgClass, textClass }) => (
    <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${bgClass}`}>
            <Icon className={`h-8 w-8 ${textClass}`} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-8 flex-grow">{description}</p>
        <Link to={link} className={`flex items-center font-bold ${textClass} group-hover:underline`}>
            Learn More <ArrowRightIcon className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
    </div>
);

const BenefitItem: React.FC<{ title: string }> = ({ title }) => (
    <div className="flex items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="bg-green-100 p-2 rounded-full mr-4">
            <CheckCircleIcon className="h-5 w-5 text-green-600" />
        </div>
        <span className="font-semibold text-gray-800">{title}</span>
    </div>
);

const StudioServicesPage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Studio Services' }]} />
            </div>

            {/* Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 -z-10"></div>
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-gray-900">
                        Your Brand, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Shot to Perfection.</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Studio solutions for catalog, campaigns, and brand identity. High-quality production at scale.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="bg-purple-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-purple-700 shadow-lg shadow-purple-500/30 transition-all">
                            Book Shoot
                        </Link>
                        <button onClick={() => document.getElementById('studios')?.scrollIntoView({behavior: 'smooth'})} className="bg-white text-gray-900 border border-gray-200 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-50 transition-all">
                            Explore Studio Services
                        </button>
                    </div>
                </div>
            </section>

            {/* What's Inside */}
            <section id="studios" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-gray-900">What's Inside</h2>
                        <p className="mt-4 text-lg text-gray-500">Three dedicated studios to cover every visual need.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <StudioCard 
                            icon={CameraIcon}
                            title="Catalogue Studio"
                            description="High-volume product photography for D2C, marketplaces, and campaigns."
                            link="/services/studio/catalogue"
                            bgClass="bg-blue-50"
                            textClass="text-blue-600"
                        />
                        <StudioCard 
                            icon={BrushIcon}
                            title="Creative Studio"
                            description="Ad creatives, social content, and motion graphics that stop the scroll."
                            link="/services/studio/creative"
                            bgClass="bg-purple-50"
                            textClass="text-purple-600"
                        />
                        <StudioCard 
                            icon={BrandIcon}
                            title="Brand Studio"
                            description="Identity development, logo systems, and brand storytelling frameworks."
                            link="/services/studio/brand"
                            bgClass="bg-pink-50"
                            textClass="text-pink-600"
                        />
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Studio Ecosystem?</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <BenefitItem title="Faster Production" />
                        <BenefitItem title="Uniform Brand Identity" />
                        <BenefitItem title="High Conversion Creatives" />
                        <BenefitItem title="In-House Consistency" />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Ready to Elevate Your Visuals?</h2>
                    <Link to="/contact" className="inline-flex items-center justify-center bg-gray-900 text-white font-bold py-4 px-12 rounded-full text-lg hover:bg-gray-800 transition-all">
                        Explore Full Studio Ecosystem <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default StudioServicesPage;
