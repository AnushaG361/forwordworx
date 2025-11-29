
import React from 'react';
import { Link } from 'react-router-dom';
import { LightBulbIcon } from '../constants/icons';
import Breadcrumbs from '../components/Breadcrumbs';

const ConsultancyPage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-800 min-h-screen flex flex-col">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 w-full">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Consultancy' }]} />
            </div>

            <section className="relative flex-grow flex items-center justify-center py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
                {/* Background accents */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-2xl mb-8 shadow-lg shadow-blue-600/20">
                        <LightBulbIcon className="h-8 w-8" />
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                        Strategic <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Consultancy</span>
                    </h1>
                    
                    <div className="inline-block bg-gray-900 text-white text-sm font-bold uppercase tracking-widest py-2 px-6 rounded-full mb-8">
                        Coming Soon
                    </div>

                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We are building a comprehensive suite of consulting services to help you navigate digital transformation, optimize operations, and unlock new growth vectors.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-4 px-10 rounded-xl text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 transform hover:-translate-y-1">
                            Notify Me When Live
                        </Link>
                        <Link to="/" className="inline-flex items-center justify-center bg-white border-2 border-gray-200 text-gray-700 font-bold py-4 px-10 rounded-xl text-lg hover:border-gray-300 hover:bg-gray-50 transition-colors">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConsultancyPage;
