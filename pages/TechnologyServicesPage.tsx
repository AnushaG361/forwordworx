
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WebsiteIcon, ShopifyIcon, MobileIcon, AutomationIcon, ChevronDownIcon } from '../constants/icons';
import Breadcrumbs from '../components/Breadcrumbs';

const TechSolutionCard: React.FC<{ icon: React.ElementType, title: string, description: string, link: string }> = ({ icon: Icon, title, description, link }) => (
    <div className="bg-white p-8 rounded-xl border border-gray-200 flex flex-col shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <Icon className="h-8 w-8 text-blue-500 mb-4" />
        <h3 className="text-xl font-bold flex-grow text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 flex-grow">{description}</p>
        <div className="mt-6">
            <Link to={link} className="font-semibold text-blue-500 hover:text-blue-600">
                View More
            </Link>
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

const TechnologyServicesPage: React.FC = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Technology' }]} />
            </div>

            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                            Build Your Digital Ecosystem
                        </h1>
                        <p className="mt-6 text-lg text-gray-600">
                            Websites, apps, and automation systems for modern businesses.
                        </p>
                        <div className="mt-8">
                            <Link to="/services" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                                View Our Services
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full max-w-md h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl p-1">
                           <div className="bg-white w-full h-full rounded-[14px]">
                                <img src="https://picsum.photos/seed/techabstract/500/350" alt="Abstract tech" className="w-full h-full object-cover rounded-[14px] opacity-90"/>
                           </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Technology Solutions */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-900">Core Technology Solutions</h2>
                    </div>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {techSolutions.map(solution => (
                            <TechSolutionCard key={solution.title} {...solution} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Technology Platforms — FAQs</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem 
                            question="1️⃣ What technology services do you provide?" 
                            answer={
                                <>
                                    <p className="mb-2">We build full-stack commerce systems including:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Shopify websites</li>
                                        <li>Mobile apps (iOS + Android)</li>
                                        <li>B2B portals & dealer apps</li>
                                        <li>Subscription + recurring commerce</li>
                                        <li>System automations & integrations (ERP / CRM / HCM)</li>
                                    </ul>
                                </>
                            }
                        />
                        <FAQItem 
                            question="2️⃣ Do you only work on Shopify?" 
                            answer={
                                <>
                                    <p className="mb-2">Shopify is our home turf 💪 But we also support:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Custom Web Tech (Next.js, React, Laravel)</li>
                                        <li>Marketplace integrations</li>
                                        <li>POS & ERP sync</li>
                                    </ul>
                                </>
                            }
                        />
                        <FAQItem 
                            question="3️⃣ How long does development take?" 
                            answer={
                                <>
                                    <p className="mb-2">Depends on the project:</p>
                                    <ul className="list-disc pl-5 space-y-1 mb-2">
                                        <li>Shopify Website → 3–5 weeks</li>
                                        <li>Mobile App Builder → 7–10 days</li>
                                        <li>B2B App / Portal → 4–8 weeks</li>
                                    </ul>
                                    <p>We move fast without breaking sh*t 😎</p>
                                </>
                            }
                        />
                        <FAQItem 
                            question="4️⃣ Can I migrate my existing website to your platform?" 
                            answer={
                                <>
                                    <p className="mb-2">100%. We handle migration for:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Products + SKU data</li>
                                        <li>Customer accounts</li>
                                        <li>Orders + analytics setup</li>
                                        <li>Redirects for SEO safety</li>
                                    </ul>
                                </>
                            }
                        />
                        <FAQItem 
                            question="5️⃣ Do you provide UI/UX design too?" 
                            answer="Yes — we design conversion-optimized, mobile-first interfaces that look elite and sell harder."
                        />
                        <FAQItem 
                            question="6️⃣ Will I need developers to manage the platform?" 
                            answer="Nope. We give you no-code admin controls so you can update banners, products, sections anytime."
                        />
                        <FAQItem 
                            question="7️⃣ Can you integrate with ERP, CRM & store systems?" 
                            answer={
                                <>
                                    <p className="mb-2">Absolutely — we specialize in:</p>
                                    <ul className="list-disc pl-5 space-y-1 mb-2">
                                        <li>✔ Tally</li>
                                        <li>✔ Zoho</li>
                                        <li>✔ Custom ERP</li>
                                        <li>✔ HCM & HRMS workflows</li>
                                        <li>✔ SCM + logistics automations</li>
                                    </ul>
                                    <p>Your entire backend syncs up 🔗</p>
                                </>
                            }
                        />
                        <FAQItem 
                            question="8️⃣ Is hosting & security included?" 
                            answer={
                                <>
                                    <p className="mb-2">Yes — you get:</p>
                                    <ul className="list-disc pl-5 space-y-1 mb-2">
                                        <li>99.9% uptime</li>
                                        <li>PCI-compliant payment flow</li>
                                        <li>Regular security audits</li>
                                        <li>Encrypted data handling</li>
                                    </ul>
                                    <p>Enterprise-grade protection 🛡️</p>
                                </>
                            }
                        />
                        <FAQItem 
                            question="9️⃣ Do you support multi-store & franchise models?" 
                            answer={
                                <>
                                    <p className="mb-2">Yessirrr 🚀</p>
                                    <ul className="list-disc pl-5 space-y-1 mb-2">
                                        <li>Multiple locations</li>
                                        <li>Separate store pricing</li>
                                        <li>Centralized inventory</li>
                                        <li>Unified admin dashboard</li>
                                    </ul>
                                    <p>Perfect for scaling retail.</p>
                                </>
                            }
                        />
                        <FAQItem 
                            question="🔟 Do you provide maintenance & support after launch?" 
                            answer="Absolutely. We don’t ghost after delivery — Ongoing updates, bug fixes, feature upgrades & growth support included in plans."
                        />
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="py-20 text-center bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-gray-900">Ready to elevate your technology?</h2>
                    <p className="mt-4 text-xl text-gray-600">Let's build your next project together.</p>
                    <div className="mt-8">
                        <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                            Start a Technology Project
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

const techSolutions = [
    { icon: WebsiteIcon, title: 'Static Website', description: 'Professional, blazing fast sites for your business and lead generating needs.', link: '/contact' },
    { icon: ShopifyIcon, title: 'Shopify Website', description: 'Professional e-commerce stores for direct-to-consumer (D2C) brands.', link: '/contact' },
    { icon: MobileIcon, title: 'Shopify Mobile App', description: 'Engaging native mobile apps fully integrated with your Shopify store.', link: '/contact' },
    { icon: WebsiteIcon, title: 'B2B Website + App', description: 'Custom solutions for complex, multi-step business sales and operations.', link: '/contact' },
    { icon: WebsiteIcon, title: 'PD Website + App', description: 'Integrated platforms for professional development and educational content.', link: '/contact' },
    { icon: AutomationIcon, title: 'Subscription Automations', description: 'Automated systems for managing recurring revenue and subscription models.', link: '/contact' },
];

export default TechnologyServicesPage;
