
import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon, TwitterIcon, LinkedInIcon } from '../constants/icons';

interface FooterProps {
    darkTheme: boolean;
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="bg-white text-gray-600 border-t border-gray-100 font-sans">
            <div className="max-w-7xl mx-auto pt-20 pb-10 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand & Newsletter */}
                    <div className="lg:col-span-2 space-y-8">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="group-hover:scale-105 transition-transform">
                                <LogoIcon className="h-8 w-auto" />
                            </div>
                            <span className="font-bold text-2xl text-gray-900 uppercase">FORWARD WORKX</span>
                        </Link>
                        <p className="text-lg leading-relaxed max-w-md text-gray-500">
                            We help brands scale with world-class creative, performance marketing, and automation-first technology.
                        </p>
                        <div className="bg-gray-50 p-1.5 rounded-xl border border-gray-200 flex max-w-sm focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="flex-1 px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none rounded-md bg-transparent"
                            />
                            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Services</h3>
                            <ul className="space-y-4">
                                <li><Link to="/services/creative" className="hover:text-blue-600 transition-colors">Creative Services</Link></li>
                                <li><Link to="/services/marketing" className="hover:text-blue-600 transition-colors">Marketing Services</Link></li>
                                <li><Link to="/services/technology" className="hover:text-blue-600 transition-colors">Technology Ecosystem</Link></li>
                                <li><Link to="/enable/automation" className="hover:text-blue-600 transition-colors">ToAutomation Suite</Link></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Products</h3>
                            <ul className="space-y-4">
                                <li><Link to="/products/rietail" className="hover:text-blue-600 transition-colors">Rietail</Link></li>
                                <li><Link to="/products/riaddon" className="hover:text-blue-600 transition-colors">RIAddon</Link></li>
                                <li><Link to="/products/etalion" className="hover:text-blue-600 transition-colors">EtaliOn</Link></li>
                                <li><Link to="/products/hcm" className="hover:text-blue-600 transition-colors">HCM Suite</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Company</h3>
                            <ul className="space-y-4">
                                <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                                <li><Link to="/agents" className="hover:text-blue-600 transition-colors">AI Agents</Link></li>
                                <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Careers</Link></li>
                                <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Forwardworkx. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors">
                            <span className="sr-only">Twitter</span>
                            <TwitterIcon className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <LinkedInIcon className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
