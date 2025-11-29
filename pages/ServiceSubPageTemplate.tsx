
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon, ArrowRightIcon } from '../constants/icons';
import Breadcrumbs from '../components/Breadcrumbs';
import { ServicePageData } from '../constants/servicesData';

const ServiceSubPageTemplate: React.FC<{ data: ServicePageData }> = ({ data }) => {
    if (!data) return <div>Service not found</div>;

    return (
        <div className="bg-white font-sans text-gray-900">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[
                    { label: 'Home', path: '/' },
                    { label: 'Services', path: '/services' },
                    { label: data.category },
                    { label: data.title }
                ]} />
            </div>

            {/* 1. HERO SECTION */}
            <section className="relative py-24 md:py-32 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 opacity-50"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wide uppercase mb-6 backdrop-blur-sm">
                        {data.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        {data.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                        {data.heroPitch}
                    </p>
                </div>
            </section>

            {/* 2. WHAT THIS SERVICE INCLUDES */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included</h2>
                            <ul className="space-y-6">
                                {data.includes.map((inc, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                                            <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-bold text-gray-900">{inc.title}</h4>
                                            <p className="text-gray-600 mt-1">{inc.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* 3. WHY THIS MATTERS */}
                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why It Matters</h2>
                            <div className="space-y-4">
                                {data.benefits.map((benefit, idx) => (
                                    <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                                        <span className="font-bold text-gray-800 text-lg">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. DELIVERABLES */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Deliverables</h2>
                        <p className="text-gray-500 mt-2">Clear expectations, transparent results.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                                        <th className="p-4 font-bold">Deliverable</th>
                                        <th className="p-4 font-bold">Description</th>
                                        <th className="p-4 font-bold">Format</th>
                                        <th className="p-4 font-bold">Timeline</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {data.deliverables.map((del, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 font-bold text-gray-900">{del.item}</td>
                                            <td className="p-4 text-gray-600">{del.desc}</td>
                                            <td className="p-4 text-gray-500 font-mono text-xs">{del.format}</td>
                                            <td className="p-4 text-blue-600 font-bold">{del.timeline}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 5. INDUSTRIES */}
                    <div className="mt-12 text-center">
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Who is this for?</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {data.industries.map((ind, idx) => (
                                <span key={idx} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700">
                                    {ind}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. SERVICE SUBSCRIPTION PLAN */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Simple Plans</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {data.pricing.map((plan, idx) => (
                            <div key={idx} className="border border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col bg-white">
                                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                                <div className="mt-4 mb-6">
                                    <span className="text-3xl font-extrabold text-gray-900">{plan.price}</span>
                                </div>
                                <ul className="space-y-3 mb-8 flex-grow">
                                    {plan.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="block w-full py-3 bg-gray-900 text-white font-bold text-center rounded-xl hover:bg-gray-800 transition-colors">
                                    Subscribe Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CASE STUDY SNAPSHOT */}
            <section className="py-20 bg-blue-50 border-y border-blue-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2 block">Success Story</span>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-12">{data.caseStudy.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <p className="text-3xl font-extrabold text-blue-600 mb-2">{data.caseStudy.stat1}</p>
                            <p className="text-sm text-gray-500 font-medium">Traffic / Growth</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <p className="text-3xl font-extrabold text-green-600 mb-2">{data.caseStudy.stat2}</p>
                            <p className="text-sm text-gray-500 font-medium">Efficiency</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <p className="text-3xl font-extrabold text-purple-600 mb-2">{data.caseStudy.stat3}</p>
                            <p className="text-sm text-gray-500 font-medium">Result</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. CTA FINAL SECTION */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Ready to get started?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-700 transition-all shadow-lg">
                            Start Subscription
                        </Link>
                        <Link to="/contact" className="inline-flex items-center justify-center bg-white border-2 border-gray-200 text-gray-800 font-bold py-4 px-10 rounded-full text-lg hover:border-gray-400 transition-colors">
                            Book Demo
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceSubPageTemplate;
