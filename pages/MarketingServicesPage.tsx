
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MarketingIcon, ChevronDownIcon } from '../constants/icons';
import Breadcrumbs from '../components/Breadcrumbs';

const MarketingPillar: React.FC<{ title: string, description: string, services: { title: string, description: string }[] }> = ({ title, description, services }) => (
    <div className="mt-16">
        <div className="max-w-3xl">
            <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
            <p className="mt-4 text-lg text-gray-600">{description}</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
                <div key={service.title} className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                     <div className="flex items-center space-x-3">
                         <div className="bg-blue-100 p-2 rounded-full">
                            <MarketingIcon className="h-5 w-5 text-blue-500" />
                         </div>
                        <h4 className="text-xl font-semibold text-gray-900">{service.title}</h4>
                     </div>
                    <p className="mt-3 text-gray-600">{service.description}</p>
                </div>
            ))}
        </div>
    </div>
);

const FAQItem: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
            >
                <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>{question}</span>
                <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                <div className="text-gray-600 leading-relaxed text-base">{answer}</div>
            </div>
        </div>
    );
};

const MarketingServicesPage: React.FC = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Marketing' }]} />
            </div>

            {/* Hero Section */}
            <section className="relative py-32 md:py-48 text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/marketingbg/1200/800')" }}>
                <div className="absolute inset-0 bg-gray-900/70"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white">AI-Driven Marketing Services</h1>
                    <p className="mt-4 text-xl md:text-2xl text-gray-200">Grow smarter with automated marketing workflows that turn insights into revenue.</p>
                    <div className="mt-8">
                        <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </section>
            
            <section className="py-20 md:py-28 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {marketingPillars.map(pillar => (
                        <MarketingPillar key={pillar.title} {...pillar} />
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Marketing Services — FAQs</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem 
                            question="1️⃣ What marketing services do you provide?" 
                            answer={
                                <>
                                    <p className="mb-2">Everything required to drive traffic → convert → scale:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Meta + Google Ads (Performance Marketing)</li>
                                        <li>Lead generation & sales funnels</li>
                                        <li>E-commerce scaling strategy</li>
                                        <li>CRO & landing page improvements</li>
                                        <li>Email, SMS & remarketing automation</li>
                                        <li>Analytics + reporting dashboards</li>
                                    </ul>
                                </>
                            }
                        />
                        <FAQItem 
                            question="2️⃣ Do you offer guaranteed results?" 
                            answer={
                                <>
                                    <p className="mb-2">We guarantee real metrics based on your goals:</p>
                                    <ul className="list-disc pl-5 space-y-1 mb-2">
                                        <li>Lower CAC</li>
                                        <li>Higher ROAS</li>
                                        <li>Better lead quality</li>
                                        <li>Faster repeat purchases</li>
                                    </ul>
                                    <p className="font-semibold">We don’t do “vanity numbers.” We do revenue 💸</p>
                                </>
                            }
                        />
                        <FAQItem 
                            question="3️⃣ How soon can we start campaigns?" 
                            answer="After onboarding + asset setup → 3–7 days and we’re live."
                        />
                        <FAQItem 
                            question="4️⃣ Can you handle both ads and creative?" 
                            answer={
                                <>
                                    <p className="mb-2">Absolutely. One team running:</p>
                                    <ul className="list-disc pl-5 space-y-1 mb-2">
                                        <li>✔ Ads</li>
                                        <li>✔ Videos</li>
                                        <li>✔ Copy</li>
                                        <li>✔ Retargeting</li>
                                    </ul>
                                    <p>→ Better performance + less confusion</p>
                                </>
                            }
                        />
                        <FAQItem 
                            question="5️⃣ How do you track campaign success?" 
                            answer={
                                <>
                                    <p className="mb-2">Weekly dashboards covering:</p>
                                    <ul className="list-disc pl-5 space-y-1 mb-2">
                                        <li>Spend vs revenue</li>
                                        <li>ROAS / ROI</li>
                                        <li>New vs returning customers</li>
                                        <li>High-intent search terms</li>
                                        <li>AOV & funnel performance</li>
                                    </ul>
                                    <p>Transparency gang only 📊</p>
                                </>
                            }
                        />
                        <FAQItem 
                            question="6️⃣ Do you help with GA4, tracking pixels & attribution setup?" 
                            answer={
                                <>
                                    <p className="mb-2">100%. We set up:</p>
                                    <ul className="list-disc pl-5 space-y-1 mb-2">
                                        <li>GA4 events</li>
                                        <li>Meta + Google pixels</li>
                                        <li>Server-side tagging</li>
                                        <li>CRM integrations</li>
                                    </ul>
                                    <p>So every action is measurable.</p>
                                </>
                            }
                        />
                        <FAQItem 
                            question="7️⃣ Do you provide retention marketing too?" 
                            answer={
                                <>
                                    <p className="mb-2">Yep:</p>
                                    <ul className="list-disc pl-5 space-y-1 mb-2">
                                        <li>Email flows</li>
                                        <li>SMS automation</li>
                                        <li>Offers based on purchase behavior</li>
                                        <li>Win-back campaigns</li>
                                    </ul>
                                    <p>Keep customers coming back 🔁</p>
                                </>
                            }
                        />
                        <FAQItem 
                            question="8️⃣ Do you work with small brands or only large ones?" 
                            answer="We work with D2C startups, scaling brands & enterprise teams. We customize the plan to the growth stage."
                        />
                        <FAQItem 
                            question="9️⃣ What does your pricing depend on?" 
                            answer={
                                <ul className="list-disc pl-5 space-y-1 mb-2">
                                    <li>Platforms used</li>
                                    <li>Ad budget size</li>
                                    <li># of funnels / campaigns</li>
                                    <li>Support level required</li>
                                    <li className="list-none mt-2 font-medium">Clear pricing — no sneaky fees.</li>
                                </ul>
                            }
                        />
                        <FAQItem 
                            question="🔟 Can you handle lead qualification too?" 
                            answer={
                                <>
                                    <p className="mb-2">Yes — with:</p>
                                    <ul className="list-disc pl-5 space-y-1 mb-2">
                                        <li>CRM automation</li>
                                        <li>Scoring models</li>
                                        <li>Enrichment & follow-ups</li>
                                    </ul>
                                    <p>→ sales-ready leads only</p>
                                </>
                            }
                        />
                    </div>
                </div>
            </section>

             {/* CTA Section */}
             <section className="py-20 text-center bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-gray-900">Ready to Accelerate Your Growth?</h2>
                    <p className="mt-4 text-xl text-gray-600">Let's discuss how our AI-driven marketing strategies can be tailored to meet your unique business goals.</p>
                    <div className="mt-8">
                        <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
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
