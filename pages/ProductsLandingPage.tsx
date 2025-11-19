
import React from 'react';
import { Link } from 'react-router-dom';
import { HcmIcon, CrmIcon, ErpIcon, ScmIcon, ArrowRightIcon } from '../constants/icons';

const CommerceProductCard: React.FC<{ title: string; description: string; link: string; }> = ({ title, description, link }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-4 text-gray-600 flex-grow">{description}</p>
        <div className="mt-6">
             <Link to={link} className="font-semibold text-blue-500 hover:text-blue-600">
                Explore <span className="sr-only">{title}</span>
            </Link>
        </div>
    </div>
);

const AutomationProductCard: React.FC<{ icon: React.ElementType; title: string; description: string; link: string; }> = ({ icon: Icon, title, description, link }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
        <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-lg">
                <Icon className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="mt-4 text-gray-600 flex-grow">{description}</p>
        <div className="mt-6">
            <Link to={link} className="font-semibold text-green-500 hover:text-green-600 flex items-center group">
                Learn More
                <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
    </div>
);

const ProductsLandingPage: React.FC = () => {
    return (
        <div className="bg-white text-gray-800">
            <main className="overflow-hidden">
                {/* Hero Section */}
                <section className="py-20 md:py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                                Integrated Solutions to Propel Your Business Forward
                            </h1>
                            <p className="mt-6 text-lg text-gray-600">
                                Discover our powerful suites of commerce and business automation products designed for growth and efficiency.
                            </p>
                            <div className="mt-8">
                                <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                                    Explore Our Solutions
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img src="https://picsum.photos/seed/products-hero/600/400" alt="Integrated Solutions" className="rounded-2xl shadow-2xl" />
                        </div>
                    </div>
                </section>

                {/* Commerce Products Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Commerce Products</h2>
                        </div>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <CommerceProductCard title="Rietail" description="The complete e-commerce platform." link="/products/rietail" />
                            <CommerceProductCard title="RIAddon" description="Extend your store's functionality." link="/products/riaddon" />
                            <CommerceProductCard title="EtaliOn" description="Your all-in-one online retail solution." link="/products/etalion" />
                        </div>
                    </div>
                </section>

                {/* Business Automation Products Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="max-w-3xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Business Automation Products</h2>
                            <p className="mt-4 text-gray-600">Part of the ToAutomation Suite</p>
                        </div>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <AutomationProductCard icon={HcmIcon} title="HCM" description="Streamline human capital management." link="/products/hcm" />
                            <AutomationProductCard icon={CrmIcon} title="CRM" description="Build lasting customer relationships." link="/contact" />
                            <AutomationProductCard icon={ErpIcon} title="ERP" description="Integrate core business processes." link="/contact" />
                            <AutomationProductCard icon={ScmIcon} title="SCM" description="Optimize your supply chain network." link="/contact" />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 md:py-32 bg-blue-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-extrabold text-gray-900">Ready to Transform Your Operations?</h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Let us show you how Forwardworkx's integrated product suites can streamline your processes, drive growth, and unlock your business's full potential.
                        </p>
                        <div className="mt-8">
                            <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                                Request a Demo
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProductsLandingPage;