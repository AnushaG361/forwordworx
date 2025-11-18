
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RocketLaunchIcon, BanknotesIcon, BadgeCheckIcon, ClockIcon, ShopifyIcon, BuildingLibraryIcon, HeartIcon, ChevronDownIcon } from '../constants/icons';

const AccordionItem: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-700">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-4 text-left"
            >
                <span className="font-semibold text-lg">{title}</span>
                <ChevronDownIcon className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <div className="pb-4 pt-2 text-gray-400">{children}</div>}
        </div>
    );
};

const BenefitCard: React.FC<{ icon: React.ElementType; title: string; description: string; }> = ({ icon: Icon, title, description }) => (
    <div className="bg-[#1A202C] p-6 rounded-lg text-center border border-gray-700">
        <Icon className="h-8 w-8 text-blue-400 mx-auto" />
        <h3 className="mt-4 font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-gray-400">{description}</p>
    </div>
);

const UseCaseCard: React.FC<{ icon: React.ElementType; title: string; description: string; }> = ({ icon: Icon, title, description }) => (
    <div className="bg-[#1A202C] p-6 rounded-lg border border-gray-700">
        <Icon className="h-8 w-8 text-green-400 mb-4" />
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="mt-1 text-gray-400">{description}</p>
    </div>
);

const EnableAgentsPage: React.FC = () => {
    return (
        <div className="bg-[#0B101B] text-white">
            <section className="py-20 md:py-32">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm mb-8 text-gray-400">
                        <Link to="/" className="hover:text-white">Home</Link> / 
                        <Link to="/enable" className="hover:text-white"> Enable</Link> / 
                        <span className="text-gray-500"> Agents</span>
                    </nav>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Enable: Agents</h1>
                            <p className="mt-6 text-lg text-gray-300">Automate, Analyze, and Accelerate Your Workflows with Intelligent AI Agents.</p>
                            <div className="mt-8 flex space-x-4">
                                <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-base hover:bg-blue-700">Request a Demo</Link>
                                <Link to="/contact" className="inline-block bg-gray-700 text-white font-bold py-3 px-6 rounded-lg text-base hover:bg-gray-600">Learn More</Link>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img src="https://picsum.photos/seed/enable-agents-hero/600/400" alt="Enable Agents visual" className="rounded-lg shadow-2xl" />
                        </div>
                    </div>
                 </div>
            </section>
            
            <section className="py-20 bg-[#101622]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold">What is Enable: Agents?</h2>
                        <p className="mt-4 text-gray-400">An overview of the 'Agents' product, explaining its core purpose and the problem it solves for businesses. It empowers teams by automating complex tasks, analyzing vast datasets, and accelerating workflows through autonomous agents, allowing your organization to focus on strategic initiatives.</p>
                    </div>

                    <div className="mt-12 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-center mb-6">Supported Modules</h3>
                        <AccordionItem title="Data Processing Agent">Executes and optimizes data cleaning, transformation, and analysis workflows, ensuring data integrity and preparing datasets for machine learning models.</AccordionItem>
                        <AccordionItem title="Customer Support Agent">Provides 24/7 automated customer assistance through chatbots and voice assistants, resolving common issues and escalating complex cases to human agents.</AccordionItem>
                        <AccordionItem title="Marketing Automation Agent">Executes and optimizes marketing campaigns, from email marketing and social media scheduling to ad performance analysis, driving better engagement and ROI.</AccordionItem>
                    </div>
                </div>
            </section>
            
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <h3 className="text-2xl font-bold text-center">Key Benefits</h3>
                     <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                         <BenefitCard icon={RocketLaunchIcon} title="Increased Efficiency" description="Automate repetitive tasks and streamline workflows to boost productivity across your organization." />
                         <BenefitCard icon={BanknotesIcon} title="Reduced Costs" description="Lower operational expenses by minimizing manual labor and optimizing resource allocation." />
                         <BenefitCard icon={BadgeCheckIcon} title="Enhanced Accuracy" description="Eliminate human error in data processing and task execution for more reliable outcomes." />
                         <BenefitCard icon={ClockIcon} title="24/7 Scalability" description="Operate around the clock and scale your capabilities on-demand as your business workload increases." />
                     </div>
                </div>
            </section>
            
            <section className="py-20 bg-[#101622]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <h3 className="text-2xl font-bold text-center">Where It's Used</h3>
                     <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                         <UseCaseCard icon={ShopifyIcon} title="E-commerce" description="Automate inventory management, personalize customer recommendations, and streamline order processing." />
                         <UseCaseCard icon={BuildingLibraryIcon} title="Finance" description="Enhance fraud detection, automate compliance checks, and manage algorithmic trading strategies." />
                         <UseCaseCard icon={HeartIcon} title="Healthcare" description="Streamline patient scheduling, automate medical billing, and analyze patient data for better outcomes." />
                     </div>
                </div>
            </section>
            
            <section className="py-20 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-white">See Agents in Action</h2>
                    <p className="mt-4 text-xl text-gray-400">Discover how our intelligent agents can transform your business operations. Schedule a free consultation with our experts today.</p>
                    <div className="mt-8">
                        <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700">Book a Consultation</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EnableAgentsPage;
