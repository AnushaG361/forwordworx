import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceIcon, AgentsIcon, ProductsIcon, EnableSystemsIcon, ArrowRightIcon } from '../constants/icons';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              AI-Powered Business Enablement for Modern Brands
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Leveraging Agents, Products, and Automation into one integrated ecosystem.
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <Link to="/services" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                Explore Services
              </Link>
              <button className="inline-block bg-transparent text-blue-500 font-bold py-3 px-8 rounded-lg text-lg border-2 border-blue-200 hover:bg-blue-50 transition-colors">
                Talk to Us
              </button>
            </div>
          </div>
          <div>
            <img src="https://picsum.photos/seed/techglobe/600/400" alt="AI Globe" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">A Quick Overview of the Ecosystem</h2>
            <p className="mt-4 text-lg text-gray-600">Our integrated platform combines four core pillars to deliver comprehensive business solutions.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {ecosystemItems.map(item => (
              <div key={item.name} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <item.icon className="h-10 w-10 text-blue-500" />
                <h3 className="mt-5 text-xl font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Services Preview</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
                {servicePreviews.map(service => (
                    <Link to={service.link} key={service.name} className="group block">
                        <div className="overflow-hidden rounded-lg">
                             <img src={service.imageUrl} alt={service.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.name}</h3>
                        <p className="mt-1 text-gray-600">{service.description}</p>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900">About Forwardworkx</h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  We are a team of innovators, engineers, and strategists dedicated to building the next generation of business solutions. Our mission is to simplify complexity through automation, connecting disparate systems into a unified, powerful ecosystem that drives growth and efficiency.
              </p>
              <div className="mt-8">
                  <button className="text-blue-500 font-bold py-2 px-4 rounded-lg hover:underline">Read Our Story</button>
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-extrabold text-gray-900">Ready to Build Your Ecosystem?</h2>
              <p className="mt-4 text-xl text-gray-600">Let's see how our AI-powered solutions can integrate, automate, and accelerate your business.</p>
              <div className="mt-8">
                  <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                      Contact Us
                  </Link>
              </div>
          </div>
      </section>
    </div>
  );
};

const ecosystemItems = [
    { name: 'Services', description: 'Creative, marketing, and technology services.', icon: ServiceIcon },
    { name: 'Agents', description: 'Specialized AI agents for content creation, marketing, and automation.', icon: AgentsIcon },
    { name: 'Products', description: 'SaaS products for e-commerce, analytics, and business automation.', icon: ProductsIcon },
    { name: 'Enable Systems', description: 'Connects all the systems that run your business.', icon: EnableSystemsIcon },
];

const servicePreviews = [
    { name: 'Creative Services', description: 'High-volume photography and content creation to elevate your presence.', imageUrl: 'https://picsum.photos/seed/creative/500/300', link: '/services/creative' },
    { name: 'Marketing Services', description: 'Data-driven campaigns to grow your audience and drive conversions.', imageUrl: 'https://picsum.photos/seed/marketing/500/300', link: '/services/marketing' },
    { name: 'Technology Ecosystem', description: 'Websites, applications, integrations, and platform management.', imageUrl: 'https://picsum.photos/seed/tech/500/300', link: '/services/technology' },
];

export default HomePage;