
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, GlobeAltIcon, TruckIcon, ArrowRightIcon } from '../../constants/icons';
import Breadcrumbs from '../../components/Breadcrumbs';

const CommerceServicesPage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Commerce' }]} />
            </div>
            <section className="py-24 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">Commerce Marketing</h1>
                    <p className="text-xl text-gray-500 mb-10">Specialized growth strategies for D2C, B2B, and Retail.</p>
                    <Link to="/contact" className="bg-pink-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-pink-700">Boost Sales</Link>
                </div>
            </section>
            <section className="py-20 bg-pink-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <ShoppingCartIcon className="h-10 w-10 text-pink-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">D2C Growth</h3>
                            <p className="text-gray-600">Direct-to-consumer scaling strategies focused on CAC and LTV.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <GlobeAltIcon className="h-10 w-10 text-pink-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">B2B & Retail</h3>
                            <p className="text-gray-600">Wholesale and physical retail strategies for bulk movement.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <TruckIcon className="h-10 w-10 text-pink-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">QMS & MPS</h3>
                            <p className="text-gray-600">Quick commerce and marketplace optimization solutions.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default CommerceServicesPage;
