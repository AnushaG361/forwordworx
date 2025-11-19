
import React from 'react';
import { Link } from 'react-router-dom';
import { CreativeIcon, MarketingIcon, TechIcon, CheckCircleIcon, ArrowRightIcon, AutomationIcon } from '../constants/icons';

const ServiceCard: React.FC<{
  icon: React.ElementType;
  title: string;
  items: string[];
  link: string;
  linkText: string;
}> = ({ icon: Icon, title, items, link, linkText }) => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Icon className="h-8 w-8 text-blue-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <ul className="mt-6 space-y-4 text-gray-600 flex-grow">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link to={link} className="font-semibold text-blue-500 hover:text-blue-600 flex items-center group">
          {linkText}
          <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};


const ServicesLandingPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">Our Core Service Pillars</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            We offer a comprehensive suite of services designed to meet the demands of the modern digital landscape. Discover how our expertise can benefit you.
          </p>
        </div>
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={CreativeIcon}
            title="Creative Services"
            items={['Photo/Video Shoots', 'Creative Division Direction', 'Influencer Videos', 'Branding & Identity Services']}
            link="/services/creative"
            linkText="View Creative Services"
          />
          <ServiceCard
            icon={MarketingIcon}
            title="Marketing Services"
            items={['Media Marketing & Buying', 'High-Intent Lead Marketing', 'E-commerce Marketing Strategy']}
            link="/services/marketing"
            linkText="View Marketing Services"
          />
          <ServiceCard
            icon={TechIcon}
            title="Technology Ecosystem"
            items={['Static & Shopify Websites', 'Shopify Mobile Apps', 'B2B Websites + Apps', 'Subscription Automations']}
            link="/services/technology"
            linkText="View Technology Platforms"
          />
          <ServiceCard
            icon={AutomationIcon}
            title="ToAutomation Suite"
            items={['HCM (Human Capital)', 'CRM Solutions', 'ERP Integration', 'SCM Optimization']}
            link="/enable/automation"
            linkText="View Automation Solutions"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesLandingPage;