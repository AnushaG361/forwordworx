import React from 'react';
import { Link } from 'react-router-dom';
import { MegaphoneIcon, CircleStackIcon, UserGroupIcon, LinkIcon, ArrowUpRightIcon, ShieldCheckIcon, BanknotesIcon, ScaleIcon } from '../constants/icons';

const ModuleCard: React.FC<{ icon: React.ElementType; title: string; description: string; }> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-200">
        <div className="bg-gray-100 rounded-full p-4 inline-flex">
            <Icon className="h-8 w-8 text-gray-700" />
        </div>
        <h3 className="mt-4 font-bold text-gray-900 text-xl">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);

const BenefitCard: React.FC<{ icon: React.ElementType; title: string; description: string; }> = ({ icon: Icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
            <Icon className="h-6 w-6 text-teal-600" />
        </div>
        <div>
            <h4 className="font-semibold text-gray-900">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const EnableAutomationPage: React.FC = () => {
    return (
        <div className="bg-white text-gray-800">
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">Automate Your Workflows, Amplify Your Results</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">Streamline processes, reduce manual work, and integrate systems seamlessly with Forwardworx Automation.</p>
                    <div className="mt-8 flex justify-center space-x-4">
                        <Link to="/contact" className="bg-gray-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-900">Get Started</Link>
                        <Link to="/contact" className="bg-white text-gray-800 font-bold py-3 px-8 rounded-lg border border-gray-300 hover:bg-gray-100">Learn More</Link>
                    </div>
                </div>
            </section>
            
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">What is Automation?</h2>
                    <p className="mt-4 text-lg text-gray-600">Our Automation service is designed to streamline your business processes, reduce repetitive tasks, and connect disparate systems into a cohesive, efficient workflow. By creating and automating workflows, we help you save time, reduce errors, and focus on what truly matters: growing your business.</p>
                </div>
            </section>
            
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900">Supported Modules</h2>
                        <p className="mt-4 text-gray-600">A versatile platform designed to connect with the tools you already use and love.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ModuleCard icon={MegaphoneIcon} title="Marketing Automation" description="Automate your marketing campaigns, social media posts, and lead nurturing workflows." />
                        <ModuleCard icon={CircleStackIcon} title="Data Processing" description="Automatically clean, enrich, and transform data between your applications." />
                        <ModuleCard icon={UserGroupIcon} title="CRM Integration" description="Keep your Customer Relationship Management systems up-to-date in real-time." />
                        <ModuleCard icon={LinkIcon} title="API Connectors" description="Build custom integrations with any third-party service that has an API." />
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Automation?</h2>
                        <p className="text-gray-600">Unlock unparalleled advantages for your business, moving forward with efficiency and precision.</p>
                        <div className="space-y-6">
                            <BenefitCard icon={ArrowUpRightIcon} title="Increased Productivity" description="Free up your team from repetitive tasks to focus on strategic initiatives that drive growth." />
                            <BenefitCard icon={ShieldCheckIcon} title="Reduced Errors" description="Eliminate human error from your processes, ensuring consistency and accuracy across all operations." />
                            <BenefitCard icon={BanknotesIcon} title="Cost Savings" description="Lower operational costs by reducing the need for manual intervention and optimizing resource allocation." />
                            <BenefitCard icon={ScaleIcon} title="Enhanced Scalability" description="Automated systems can handle increased workloads, providing a cost-effective way to scale your operations." />
                        </div>
                    </div>
                     <div className="flex justify-center">
                         <img src="https://picsum.photos/seed/automation-why/600/500" alt="Automation benefits" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-gray-600 font-semibold tracking-wider uppercase">Trusted by Teams Everywhere</p>
                    <div className="mt-8 flex justify-center items-center space-x-12 grayscale opacity-70">
                        <div className="h-10 w-32 bg-gray-300 rounded"></div>
                        <div className="h-10 w-32 bg-gray-300 rounded"></div>
                        <div className="h-10 w-32 bg-gray-300 rounded hidden sm:block"></div>
                        <div className="h-10 w-32 bg-gray-300 rounded hidden md:block"></div>
                        <div className="h-10 w-32 bg-gray-300 rounded hidden lg:block"></div>
                    </div>
                </div>
            </section>
            
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-800 rounded-2xl p-12 text-center text-white">
                        <h2 className="text-4xl font-extrabold">Ready to Transform Your Business?</h2>
                        <p className="mt-4 text-xl text-gray-300">Take the next step towards greater efficiency and growth. Let's discuss how our automation solutions can be tailored to your unique needs.</p>
                        <div className="mt-8">
                            <Link to="/contact" className="inline-block bg-white text-gray-800 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200">Schedule a Consultation</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EnableAutomationPage;