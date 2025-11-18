
import React from 'react';
import { Link } from 'react-router-dom';
import { PuzzlePieceIcon, MarketingIcon, ShopifyIcon, RocketLaunchIcon, CodeBracketIcon } from '../constants/icons';

const CategoryCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg text-center border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <Icon className="h-10 w-10 text-blue-500 mx-auto" />
        <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
);

const Step: React.FC<{ number: string, title: string, description: string }> = ({ number, title, description }) => (
    <div className="flex flex-col items-center text-center">
        <div className="flex-shrink-0 h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">{number}</div>
        <h4 className="mt-4 font-semibold text-gray-900">{title}</h4>
        <p className="mt-1 text-gray-600">{description}</p>
    </div>
);

const RiaddonPage: React.FC = () => {
    return (
        <div className="bg-white text-gray-800">
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Supercharge Your Store with RIAddon</h1>
                        <p className="mt-6 text-lg text-gray-600">Discover powerful extensions, integrations, and apps in the RIAddon Marketplace. Customize your Rietail store to meet your unique business needs and unlock new capabilities.</p>
                        <div className="mt-8 flex space-x-4">
                            <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg text-base hover:bg-blue-600 transition-transform transform hover:scale-105">
                                Explore Add-ons
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src="https://picsum.photos/seed/riaddon-hero/600/400" alt="RIAddon marketplace" className="rounded-lg shadow-2xl" />
                    </div>
                </div>
            </section>
            
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold">Find the Perfect App for Your Business</h2>
                        <p className="mt-4 text-gray-600">From marketing and SEO to shipping and fulfillment, our marketplace is filled with high-quality apps to help you grow your business and streamline your operations.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <CategoryCard icon={MarketingIcon} title="Marketing & SEO" description="Drive traffic, improve search rankings, and convert more customers." />
                        <CategoryCard icon={ShopifyIcon} title="Store Design" description="Customize your storefront with powerful themes and design tools." />
                        <CategoryCard icon={RocketLaunchIcon} title="Shipping & Fulfillment" description="Streamline your logistics with advanced shipping and delivery options." />
                        <CategoryCard icon={PuzzlePieceIcon} title="Merchandising" description="Enhance product discovery with advanced sorting and filtering." />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold">How It Works</h2>
                     <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                        <Step number="1" title="Browse & Discover" description="Explore our curated marketplace to find the perfect add-on for your store's needs." />
                        <Step number="2" title="One-Click Install" description="Easily install any add-on with a single click, directly from your Rietail dashboard." />
                        <Step number="3" title="Configure & Grow" description="Set up your new add-on in minutes and start leveraging its powerful features to grow your business." />
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-800 rounded-2xl p-12 grid md:grid-cols-2 gap-12 items-center border border-gray-200">
                        <div className="flex justify-center">
                            <CodeBracketIcon className="h-32 w-32 text-blue-500" />
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-extrabold text-white">Become a RIAddon Developer</h2>
                            <p className="mt-4 text-lg text-gray-300">Have a great idea for an app? Join our developer community and build powerful solutions for thousands of Rietail merchants worldwide.</p>
                            <div className="mt-8">
                                <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RiaddonPage;
