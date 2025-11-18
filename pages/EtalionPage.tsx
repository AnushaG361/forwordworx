
import React from 'react';
import { Link } from 'react-router-dom';
import { TemplateIcon, CreditCardIcon, ChartBarIcon, SparklesIcon, CheckCircleIcon } from '../constants/icons';

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-[#1A202C] p-6 rounded-lg text-center border border-gray-700">
        <Icon className="h-8 w-8 text-blue-400 mx-auto" />
        <h3 className="mt-4 font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-gray-400">{description}</p>
    </div>
);

const WhoIsItForCard: React.FC<{ image: string, title: string, description: string }> = ({ image, title, description }) => (
    <div className="bg-[#1A202C] rounded-lg overflow-hidden border border-gray-700">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h4 className="font-semibold text-white">{title}</h4>
            <p className="mt-2 text-gray-400">{description}</p>
        </div>
    </div>
);


const EtalionPage: React.FC = () => {
    return (
        <div className="bg-[#0B101B] text-white">
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Launch Your Online Store in Minutes with EtaliOn</h1>
                        <p className="mt-6 text-lg text-gray-300">Everything you need to start selling, beautifully designed and ready to go. EtaliOn is the simplest way to bring your business online.</p>
                        <div className="mt-8 flex space-x-4">
                            <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-base hover:bg-blue-700 transition-transform transform hover:scale-105">
                                Start Free Trial
                            </Link>
                             <Link to="/contact" className="inline-block bg-transparent border-2 border-gray-600 text-white font-bold py-3 px-6 rounded-lg text-base hover:bg-gray-800 transition-colors">
                                View Demo
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src="https://picsum.photos/seed/etalion-hero/600/400" alt="EtaliOn store preview" className="rounded-lg shadow-2xl" />
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-[#101622]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold">Simple, Powerful, All-in-One</h2>
                        <p className="mt-4 text-gray-400">EtaliOn includes everything you need out-of-the-box to run a successful online store, with no technical skills required.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard icon={TemplateIcon} title="Beautiful Templates" description="Choose from a variety of professionally designed, mobile-friendly store templates." />
                        <FeatureCard icon={CreditCardIcon} title="Integrated Payments" description="Accept credit cards and other popular payment methods securely from day one." />
                        <FeatureCard icon={ChartBarIcon} title="Simple Dashboard" description="Manage orders, products, and customers from one easy-to-use dashboard." />
                        <FeatureCard icon={SparklesIcon} title="Mobile-Optimized" description="Your store will look stunning and work perfectly on any device, right from the start." />
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold">Perfect For Every Entrepreneur</h2>
                        <p className="mt-4 text-gray-400">Whether you're selling products, services, or digital goods, EtaliOn is designed to help your business shine.</p>
                    </div>
                     <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <WhoIsItForCard image="https://picsum.photos/seed/artisans/400/300" title="Artisans & Crafters" description="Showcase your unique creations with beautiful product galleries and tell your story." />
                        <WhoIsItForCard image="https://picsum.photos/seed/boutiques/400/300" title="Fashion Boutiques" description="Create a stunning online boutique with our stylish templates and inventory management tools." />
                        <WhoIsItForCard image="https://picsum.photos/seed/restaurants/400/300" title="Restaurants & Cafes" description="Take online orders for pickup or delivery with our simple, integrated ordering system." />
                    </div>
                </div>
            </section>
            
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-600 rounded-2xl p-12 text-center">
                        <h2 className="text-4xl font-extrabold text-white">Ready to Start Selling?</h2>
                        <p className="mt-4 text-xl text-blue-100">Join thousands of successful businesses on EtaliOn. Start your free 14-day trial today, no credit card required.</p>
                        <div className="mt-8">
                            <Link to="/contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-colors">
                                Claim Your Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EtalionPage;
