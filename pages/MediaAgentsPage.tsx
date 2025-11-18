import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UsersIcon, UserCheckIcon, DocumentSignatureIcon, CalendarIcon, TrendingUpIcon, CreditCardIcon, ShopifyIcon, MobileIcon, BadgeCheckIcon, HeartIcon, UsersPlusIcon } from '../constants/icons';

const TabButton: React.FC<{ active: boolean, onClick: () => void, children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button onClick={onClick} className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${active ? 'border-blue-500 text-blue-400 border' : 'border-gray-700 text-gray-400 hover:border-gray-500'}`}>
        {children}
    </button>
);

const TaskCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-[#1A202C] p-4 rounded-lg border border-gray-700">
        <Icon className="h-6 w-6 text-blue-400" />
        <h4 className="mt-3 font-semibold text-white">{title}</h4>
        <p className="mt-1 text-sm text-gray-400">{description}</p>
    </div>
);

const MediaAgentsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Influencer');
    const tabs = ['Influencer', 'PR', 'Digital Media', 'Offline Media', 'SEO & SMO'];

    return (
        <div className="bg-[#0B101B] text-white">
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Intelligent Media Agents: Your Automated Marketing Powerhouse</h1>
                        <p className="mt-6 text-lg text-gray-300">Forwardworx's Media Agents automate and optimize your media presence across both digital and offline channels, delivering unparalleled results at scale.</p>
                        <div className="mt-8 flex space-x-4">
                            <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-base hover:bg-blue-700 transition-transform transform hover:scale-105">
                                Explore Our Agents
                            </Link>
                             <Link to="/contact" className="inline-block bg-transparent border-2 border-gray-600 text-white font-bold py-3 px-6 rounded-lg text-base hover:bg-gray-800 transition-colors">
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src="https://picsum.photos/seed/media-agent/600/400" alt="Media Agent visual" className="rounded-lg shadow-2xl" />
                    </div>
                </div>
            </section>
            
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="flex justify-center flex-wrap gap-2">
                        {tabs.map(tab => <TabButton key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>{tab}</TabButton>)}
                    </div>
                    
                    <div className="mt-16 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-center">Agent Purpose: {activeTab}</h3>
                        <p className="mt-4 text-center text-gray-400">The {activeTab} Agent is engineered to identify, vet, and manage authentic influencer partnerships. Using advanced data analysis, our agent connects your brand with the most impactful voices in your industry to drive genuine engagement and conversions.</p>
                        
                        <div className="mt-12">
                            <h4 className="text-xl font-semibold text-center">What Tasks It Handles</h4>
                            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
                                <TaskCard icon={UsersIcon} title="Audience Analysis" description="Deep dives into follower demographics to ensure perfect alignment." />
                                <TaskCard icon={UserCheckIcon} title="Influencer Vetting" description="Analyzes engagement, authenticity scores, and past campaign performance." />
                                <TaskCard icon={DocumentSignatureIcon} title="Contract Negotiation" description="Automates outreach and negotiation based on predefined budget and KPI parameters." />
                                <TaskCard icon={CalendarIcon} title="Campaign Management" description="Tracks content creation, posting schedules, and adherence to guidelines." />
                                <TaskCard icon={TrendingUpIcon} title="Performance Tracking" description="Monitors engagement and reach in real-time with comprehensive dashboards." />
                                <TaskCard icon={CreditCardIcon} title="Payment Automation" description="Handles secure and timely payments to influencers upon campaign completion." />
                            </div>
                        </div>

                        <div className="mt-12 grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold text-center mb-6">Who It's For</h4>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4 p-4 bg-[#1A202C] rounded-lg">
                                        <ShopifyIcon className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <h5 className="font-semibold text-white">E-commerce Brands</h5>
                                            <p className="text-sm text-gray-400">Drive authentic product reviews, unboxings, and sales.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4 p-4 bg-[#1A202C] rounded-lg">
                                        <MobileIcon className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <h5 className="font-semibold text-white">Mobile App Startups</h5>
                                            <p className="text-sm text-gray-400">Generate buzz, user acquisition, and installs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-center mb-6">Key Benefits</h4>
                                <div className="space-y-6">
                                     <div className="flex items-start space-x-4">
                                        <BadgeCheckIcon className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <h5 className="font-semibold text-white">Authentic Endorsements</h5>
                                            <p className="text-sm text-gray-400">Connect with influencers that align with your brand values.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <HeartIcon className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <h5 className="font-semibold text-white">Higher Engagement</h5>
                                            <p className="text-sm text-gray-400">Achieve better engagement with highly targeted audiences.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <UsersPlusIcon className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <h5 className="font-semibold text-white">Scalable Outreach</h5>
                                            <p className="text-sm text-gray-400">Run hundreds of campaigns simultaneously without the manual overhead.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-20 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-white">Ready to amplify your media strategy?</h2>
                    <p className="mt-4 text-xl text-gray-400">Schedule a free consultation to see how Forwardworx can revolutionize your reach.</p>
                    <div className="mt-8">
                        <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                            Get Started with Media Agents
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MediaAgentsPage;