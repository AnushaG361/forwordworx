import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon, TwitterIcon, LinkedInIcon } from '../constants/icons';

interface FooterProps {
    darkTheme: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkTheme }) => {
    const footerClass = darkTheme ? 'bg-[#0B101B] text-gray-400' : 'bg-gray-50 text-gray-500';
    const linkClass = darkTheme ? 'hover:text-white' : 'hover:text-gray-900';

    return (
        <footer className={footerClass}>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {
                    !darkTheme && (
                        <div className="flex flex-wrap justify-between items-center border-t border-gray-200 pt-8 mt-8">
                            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                                <Link to="/" className="flex items-center space-x-2">
                                    <LogoIcon className="h-8 w-8 text-blue-600" />
                                    <span className="font-bold text-xl text-gray-900">Forwardworkx</span>
                                </Link>
                                <p className="mt-2 text-sm">Creative, marketing, and technology services.</p>
                            </div>
                            <div className="w-1/2 sm:w-1/4 lg:w-auto mb-6 lg:mb-0">
                                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><Link to="/about" className={linkClass}>About</Link></li>
                                    <li><Link to="/contact" className={linkClass}>Careers</Link></li>
                                    <li><Link to="/contact" className={linkClass}>Press</Link></li>
                                </ul>
                            </div>
                             <div className="w-1/2 sm:w-1/4 lg:w-auto mb-6 lg:mb-0">
                                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Ecosystem</h3>
                                <ul className="mt-4 space-y-4">
                                    <li><Link to="/services" className={linkClass}>Services</Link></li>
                                    <li><Link to="/agents" className={linkClass}>Agents</Link></li>
                                    <li><Link to="/products" className={linkClass}>Products</Link></li>
                                </ul>
                            </div>
                        </div>
                    )
                }
                <div className={`mt-8 border-t ${darkTheme ? 'border-gray-700' : 'border-gray-200'} pt-8 flex flex-col sm:flex-row items-center justify-between`}>
                    <p className="text-sm text-center sm:text-left">&copy; {new Date().getFullYear()} Forwardworkx. All rights reserved.</p>
                    { darkTheme && (
                        <div className="flex space-x-4 mt-4 sm:mt-0">
                            <Link to="#" className={linkClass}>Privacy Policy</Link>
                            <Link to="#" className={linkClass}>Terms of Service</Link>
                        </div>
                    )}
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <a href="#" className={linkClass}><TwitterIcon className="h-6 w-6" /></a>
                        <a href="#" className={linkClass}><LinkedInIcon className="h-6 w-6" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;