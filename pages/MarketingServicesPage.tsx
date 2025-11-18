
import React from 'react';
import { Link } from 'react-router-dom';
import { MarketingIcon } from '../constants/icons';

const MarketingPillar: React.FC<{ title: string, description: string, services: { title: string, description: string }[] }> = ({ title, description, services }) => (
    <div className="mt-16">
        <div className="max-w-3xl">
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="mt-4 text-lg text-gray-400">{description}</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
                <div key={service.title} className="bg-[#151C2C]/60 p-6 rounded-xl border border-gray-700 hover:bg-[#1f2937] transition-colors duration-300">
                     <div className="flex items-center space-x-3">
                         <div className="bg-blue-600/20 p-2 rounded-full">
                            <MarketingIcon className="h-5 w-5 text-blue-400" />
                         </div>
                        <h4 className="text-xl font-semibold">{service.title}</h4>
                     </div>
                    <p className="mt-3 text-gray-400">{service.description}</p>
                </div>
            ))}
        </div>
    </div>
);

const MarketingServicesPage: React.FC = () => {
    return (
        <div className="bg-[#0B101B] text-white">
            {/* Hero Section */}
            <section className="relative py-32 md:py-48 text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/marketingbg/1200/800')" }}>
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-7xl font-extrabold">AI-Driven Marketing Services</h1>
                    <p className="mt-4 text-xl md:text-2xl text-gray-300">Grow smarter with automated marketing workflows that turn insights into revenue.</p>
                    <div className="mt-8">
                        <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </section>
            
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {marketingPillars.map(pillar => (
                        <MarketingPillar key={pillar.title} {...pillar} />
                    ))}
                </div>
            </section>

             {/* CTA Section */}
             <section className="py-20 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-white">Ready to Accelerate Your Growth?</h2>
                    <p className="mt-4 text-xl text-gray-400">Let's discuss how our AI-driven marketing strategies can be tailored to meet your unique business goals.</p>
                    <div className="mt-8">
                        <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                            Talk to a Marketing Agent
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

const marketingPillars = [
    {
        title: 'Media Marketing',
        description: 'Maximize your reach and visibility across the most effective digital platforms with our data-driven media buying strategies.',
        services: [
            { title: 'Meta Ads', description: 'Targeted campaigns to engage audiences on Facebook and Instagram.' },
            { title: 'Google Ads', description: 'Capture high-intent customers at the moment of their search.' },
            { title: 'YouTube Ads', description: 'Tell your brand’s story with compelling video creatives.' }
        ]
    },
    {
        title: 'Lead Marketing',
        description: 'Convert prospects into loyal customers by building seamless, automated journeys from first touch to final conversion.',
        services: [
            { title: 'Funnels', description: 'Design and optimize high-converting sales and marketing funnels.' },
            { title: 'Landing Pages', description: 'Create beautiful, persuasive landing pages that drive action.' },
            { title: 'CRM Flows', description: 'Implement advanced email automation with integrated CRM workflows.' }
        ]
    },
    {
        title: 'E-commerce Marketing',
        description: 'Scale your online store with powerful strategies designed to increase sales, improve return on ad spend, and boost customer lifetime value.',
        services: [
            { title: 'Performance Max', description: 'Leverage Google’s PMax to reach customers across all channels.' },
            { title: 'ROAS Dashboards', description: 'Get clear insights into your ad performance with custom dashboards.' },
            { title: 'Retention Systems', description: 'Build automated lifecycle marketing to keep customers coming back.' }
        ]
    }
];

export default MarketingServicesPage;
