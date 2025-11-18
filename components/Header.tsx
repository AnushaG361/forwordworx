
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
        const baseClass = `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`;
        const themeClass = darkTheme 
            ? `hover:text-white ${isActive ? 'text-white' : 'text-gray-400'}`
            : `hover:text-gray-900 ${isActive ? 'text-gray-900' : 'text-gray-500'}`;
        return `${baseClass} ${themeClass}`;
    };

    const navLinks = [
        { name: 'Services', path: '/services' },
        { name: 'AI Agents', path: '/agents' },
        { name: 'Enable', path: '/enable' },
        { name: 'Products', path: '/products' },
        { name: 'About Us', path: '/about' },
    ];
    
    const darkNavLinks = [
        { name: 'Services', path: '/services' },
        { name: 'AI Agents', path: '/agents' },
        { name: 'Enable', path: '/enable' },
        { name: 'Products', path: '/products' },
        { name: 'About Us', path: '/about' },
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
        : 'bg-white text-gray-800';
    
    const buttonClass = darkTheme 
        ? 'bg-blue-600 hover:bg-blue-700 text-white'
        : 'bg-blue-500 hover:bg-blue-600 text-white';

    const contactButtonText = 'Contact Us';

    return (
        <header className={`sticky top-0 z-50 w-full ${headerClass} shadow-sm`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-2">
                            <LogoIcon className={`h-8 w-8 ${darkTheme ? 'text-white' : 'text-blue-600'}`} />
                            <span className="font-bold text-xl">Forwardworx</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {currentNavLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={() => getNavLinkClass(link.path)}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <Link to="/contact" className={`${buttonClass} font-bold py-2 px-4 rounded-md transition-transform transform hover:scale-105`}>
                                {contactButtonText}
                            </Link>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                         {currentNavLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={() => `${getNavLinkClass(link.path)} block`}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        <Link to="/contact" className={`${buttonClass} block text-center font-bold py-2 px-4 rounded-md`}>
                             {contactButtonText}
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
