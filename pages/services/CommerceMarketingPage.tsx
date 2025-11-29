
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, GlobeAltIcon, TruckIcon } from '../../constants/icons';
import Breadcrumbs from '../../components/Breadcrumbs';

const CommerceMarketingPage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Commerce Marketing' }]} />
            </div>
            <section className="py-24 text-center bg-pink-50">
                <div className="max-w-4xl mx-auto px-4">
                     <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm mb-8">
                        <ShoppingCartIcon className="h-10 w-10 text-pink-600" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">Commerce Marketing</h1>
                    <p className="text-xl text-gray-500 mb-10">Growth strategies for D2C, B2B, and Retail.</p>
                    <Link to="/contact" className="bg-pink-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-pink-700 shadow-lg">Boost Sales</Link>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="grid md:grid-cols-3 gap-8">
                         <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <ShoppingCartIcon className="h-10 w-10 text-pink-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold">D2C Growth</h3>
                            <p className="text-gray-600 mt-2">Direct-to-consumer scaling strategies focused on CAC and LTV.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <GlobeAltIcon className="h-10 w-10 text-pink-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold">B2B & Retail</h3>
                            <p className="text-gray-600 mt-2">Wholesale and physical retail strategies for bulk movement.</p>
                        </div>
                         <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <TruckIcon className="h-10 w-10 text-pink-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold">QMS & MPS</h3>
                            <p className="text-gray-600 mt-2">Quick commerce and marketplace optimization solutions.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default CommerceMarketingPage;
