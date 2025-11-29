
import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { LogoIcon } from '../constants/icons';

interface HeaderProps {
    darkTheme: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const getNavLinkClass = (path: string) => {
        const isActive = location.pathname.startsWith(path);
        const baseClass = `px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full`;
        const themeClass = darkTheme 
            ? `hover:text-white ${isActive ? 'text-white bg-white/10' : 'text-gray-400'}`
            : `hover:text-blue-600 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-500'}`;
        return `${baseClass} ${themeClass}`;
    };

    const navLinks = [
        { name: 'Services', path: '/services' },
        { name: 'AI Agents', path: '/agents' },
        { name: 'Enable', path: '/enable' },
        { name: 'Products', path: '/products' },
        { name: 'Consultancy', path: '/consultancy' },
    ];
    
    const darkNavLinks = [
        { name: 'Services', path: '/services' },
        { name: 'AI Agents', path: '/agents' },
        { name: 'Enable', path: '/enable' },
        { name: 'Products', path: '/products' },
        { name: 'Consultancy', path: '/consultancy' },
        { name: 'About', path: '/about' },
    ];

    const currentNavLinks = location.pathname.startsWith('/enable/automation') 
        ? [
            { name: 'Enable', path: '/enable' },
            { name: 'Creative', path: '/services/creative' },
            { name: 'Marketing', path: '/services/marketing' },
            { name: 'Technology', path: '/services/technology' },
          ]
        : (darkTheme ? darkNavLinks : navLinks);

    const headerClass = darkTheme
        ? 'bg-[#0B101B] text-white'
        : 'bg-white/80 backdrop-blur-lg text-gray-800 border-b border-gray-100';
    
    // Pill shaped button as requested
    const buttonClass = 'bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-600/20';

    const contactButtonText = 'Contact Us';

    return (
        <header className={`sticky top-0 z-50 w-full ${headerClass} transition-all duration-300`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="group-hover:scale-105 transition-transform">
                                <LogoIcon className="h-8 w-auto" />
                            </div>
                            <span className={`font-bold text-xl tracking-tight uppercase ${darkTheme ? 'text-white' : 'text-gray-900'}`}>FORWARD WORKX</span>
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-center space-x-1">
                            {currentNavLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={() => getNavLinkClass(link.path)}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <Link to="/contact" className={`${buttonClass} font-semibold py-2.5 px-6 ml-6 transition-transform transform hover:scale-105`}>
                                {contactButtonText}
                            </Link>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl h-screen z-50">
                    <div className="px-6 pt-8 pb-6 space-y-4">
                         {currentNavLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={() => `${getNavLinkClass(link.path)} block text-xl font-bold py-4 text-center`}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={`${buttonClass} block text-center font-bold py-4 px-6 mt-8 text-lg`}>
                             {contactButtonText}
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
