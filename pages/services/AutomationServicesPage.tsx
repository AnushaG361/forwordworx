
import React from 'react';
import { Link } from 'react-router-dom';
import { AutomationIcon, CrmIcon, HcmIcon } from '../../constants/icons';
import Breadcrumbs from '../../components/Breadcrumbs';

const AutomationServicesPage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Automation' }]} />
            </div>
            <section className="py-24 text-center bg-green-50">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-gray-900">Automation Services</h1>
                    <p className="text-xl text-gray-600 mb-10">Eliminate manual work. Intelligent workflows connecting CRM, HR, and operations.</p>
                    <Link to="/contact" className="bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-green-700">Automate Now</Link>
                </div>
            </section>
             <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-lg">
                            <CrmIcon className="h-12 w-12 text-green-600 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold mb-4">CRM & HRM Automation</h3>
                            <p className="text-gray-600">Customer and employee lifecycle automation. Connect your sales pipelines and HR records seamlessly.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-lg">
                            <AutomationIcon className="h-12 w-12 text-green-600 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold mb-4">MPS & QMS Workflows</h3>
                            <p className="text-gray-600">Marketplace and quick commerce operational flows. Sync inventory, orders, and fulfillment automatically.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default AutomationServicesPage;
