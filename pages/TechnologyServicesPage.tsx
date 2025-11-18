
import React from 'react';
import { Link } from 'react-router-dom';
import { WebsiteIcon, ShopifyIcon, MobileIcon, AutomationIcon } from '../constants/icons';

const TechSolutionCard: React.FC<{ icon: React.ElementType, title: string, description: string, link: string }> = ({ icon: Icon, title, description, link }) => (
    <div className="bg-[#151C2C]/60 p-8 rounded-xl border border-gray-700 flex flex-col hover:bg-[#1f2937] transition-colors duration-300">
        <Icon className="h-8 w-8 text-blue-400 mb-4" />
        <h3 className="text-xl font-bold flex-grow">{title}</h3>
        <p className="mt-2 text-gray-400 flex-grow">{description}</p>
        <div className="mt-6">
            <Link to={link} className="font-semibold text-blue-400 hover:text-blue-300">
                View More
            </Link>
        </div>
    </div>
);

const TechnologyServicesPage: React.FC = () => {
    return (
        <div className="bg-[#0B101B] text-white">
            {/* Hero Section */}
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                            Build Your Digital Ecosystem
                        </h1>
                        <p className="mt-6 text-lg text-gray-300">
                            Websites, apps, and automation systems for modern businesses.
                        </p>
                        <div className="mt-8">
                            <Link to="/services" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                                View Our Services
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full max-w-md h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl p-1">
                           <div className="bg-[#0B101B] w-full h-full rounded-[14px]">
                                <img src="https://picsum.photos/seed/techabstract/500/350" alt="Abstract tech" className="w-full h-full object-cover rounded-[14px] opacity-70"/>
                           </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Technology Solutions */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold">Core Technology Solutions</h2>
                    </div>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {techSolutions.map(solution => (
                            <TechSolutionCard key={solution.title} {...solution} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="py-20 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-white">Ready to elevate your technology?</h2>
                    <p className="mt-4 text-xl text-gray-400">Let's build your next project together.</p>
                    <div className="mt-8">
                        <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                            Start a Technology Project
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

const techSolutions = [
    { icon: WebsiteIcon, title: 'Static Website', description: 'Professional, blazing fast sites for your business and lead generating needs.', link: '#' },
    { icon: ShopifyIcon, title: 'Shopify Website', description: 'Professional e-commerce stores for direct-to-consumer (D2C) brands.', link: '#' },
    { icon: MobileIcon, title: 'Shopify Mobile App', description: 'Engaging native mobile apps fully integrated with your Shopify store.', link: '#' },
    { icon: WebsiteIcon, title: 'B2B Website + App', description: 'Custom solutions for complex, multi-step business sales and operations.', link: '#' },
    { icon: WebsiteIcon, title: 'PD Website + App', description: 'Integrated platforms for professional development and educational content.', link: '#' },
    { icon: AutomationIcon, title: 'Subscription Automations', description: 'Automated systems for managing recurring revenue and subscription models.', link: '#' },
];

export default TechnologyServicesPage;
