
import React from 'react';
import { Link } from 'react-router-dom';
import { ContentAgentIcon, MarketingAgentIcon } from '../constants/icons';

const AgentCard: React.FC<{
    icon: React.ElementType;
    title: string;
    description: string;
    tags: string[];
    link: string;
    linkText: string;
}> = ({ icon: Icon, title, description, tags, link, linkText }) => (
    <div className="bg-white rounded-2xl p-8 flex flex-col border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
                <Icon className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="mt-4 text-gray-600 flex-grow">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
            {tags.map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                </span>
            ))}
        </div>
        <div className="mt-8">
            <Link to={link} className="w-full text-center bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 inline-block">
                {linkText}
            </Link>
        </div>
    </div>
);


const AgentLandingPage: React.FC = () => {
    return (
        <div className="bg-white text-gray-800">
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
                            Your Automated Team of Experts
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-600">
                            Discover our specialized agents designed to scale your content and marketing efforts.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-gray-50">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       <AgentCard 
                            icon={ContentAgentIcon}
                            title="Content Agents"
                            description="An overview of agents that create and manage digital content."
                            tags={['Brand Agent', 'Creatives Agent', 'Catalog Listing Agent']}
                            link="/agents/content"
                            linkText="Explore Content Agents"
                       />
                       <AgentCard 
                            icon={MarketingAgentIcon}
                            title="Marketing Agents"
                            description="An overview of agents that execute and optimize marketing campaigns."
                            tags={['Meta Ads Agent', 'Google Ads Agent', 'Retention Agent', 'Lead & Sales Agent', 'SEO Agent', 'SMO Agent']}
                            link="/agents/marketing"
                            linkText="Explore Marketing Agents"
                       />
                       <AgentCard
                            icon={MarketingAgentIcon}
                            title="Media Agents"
                            description="Agents that manage influencer, PR, and both digital and offline media campaigns."
                            tags={['Influencer', 'PR', 'Digital Media', 'Offline Media', 'SEO & SMO']}
                            link="/agents/media"
                            linkText="Explore Media Agents"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AgentLandingPage;