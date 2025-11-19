
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, CpuChipIcon, AutomationIcon, CheckCircleIcon } from '../constants/icons';

const EnablementCard: React.FC<{
    icon: React.ElementType;
    title: string;
    features: string[];
    link: string;
    linkText: string;
}> = ({ icon: Icon, title, features, link, linkText }) => (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
                <Icon className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="mt-4 text-gray-600">Tools, workflows, and systems that power modern online commerce operations.</p>
        <ul className="mt-6 space-y-3 text-gray-600 flex-grow">
            {features.map(feature => (
                <li key={feature} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <div className="mt-8">
            <Link to={link} className="w-full text-center bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 inline-block">
                {linkText}
            </Link>
        </div>
    </div>
);

const EnableLandingPage: React.FC = () => {
    return (
        <div className="bg-white text-gray-800">
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
                            Enable Your Operations
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-600">
                            A central hub for Forwardworkx's core operational enablement services, providing tools and systems to power your business engine.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <EnablementCard
                            icon={ShoppingCartIcon}
                            title="Enable → Commerce"
                            features={['E-commerce Platforms', 'Payment Gateway Integrations', 'Inventory Management Systems', 'Customer Data Platforms']}
                            link="/enable/commerce"
                            linkText="Explore Commerce Tools"
                        />
                        <EnablementCard
                            icon={CpuChipIcon}
                            title="Enable → Agents"
                            features={['CRM Systems', 'Marketing Automation Platforms', 'Content Management Systems', 'Sales Enablement Tools']}
                            link="/enable/agents"
                            linkText="Discover Agent Systems"
                        />
                        <EnablementCard
                            icon={AutomationIcon}
                            title="Enable → Automation"
                            features={['Business Process Automation (BPA)', 'Robotic Process Automation (RPA)', 'AI-Powered Analytics', 'Automated Reporting']}
                            link="/enable/automation"
                            linkText="Learn About Automation"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EnableLandingPage;