
import React from 'react';
import { Link } from 'react-router-dom';
import { AiIcon } from '../constants/icons';
import Breadcrumbs from '../components/Breadcrumbs';

const AIServicesPage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-800 min-h-screen flex flex-col">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 w-full">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'AI Services' }]} />
            </div>

            <section className="relative flex-grow flex items-center justify-center py-32 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
                {/* Background accents */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-2xl mb-8 shadow-lg shadow-indigo-600/20">
                        <AiIcon className="h-8 w-8" />
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                        Enterprise <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">AI Solutions</span>
                    </h1>
                    
                    <div className="inline-block bg-gray-900 text-white text-sm font-bold uppercase tracking-widest py-2 px-6 rounded-full mb-8">
                        Coming Soon
                    </div>

                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We are developing a suite of advanced AI services including custom LLM integration, predictive analytics, and automated decision-making systems to propel your business into the future.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold py-4 px-10 rounded-xl text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/30 transform hover:-translate-y-1">
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

export default AIServicesPage;
