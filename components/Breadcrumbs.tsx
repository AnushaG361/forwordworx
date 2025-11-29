
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon } from '../constants/icons';

interface BreadcrumbItem {
    label: string;
    path?: string;
}

interface BreadcrumbsProps {
    items?: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    const location = useLocation();

    // If items are not provided, try to generate them from the path
    // This is a basic generation and might need customization for complex routes
    let breadcrumbs: BreadcrumbItem[] = items || [];

    if (!items) {
        const pathnames = location.pathname.split('/').filter((x) => x);
        breadcrumbs = [
            { label: 'Home', path: '/' },
            ...pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                // Format label: capitalize and replace hyphens
                const label = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');
                return { label, path: routeTo };
            }),
        ];
    }

    return (
        <nav className="text-sm font-medium text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
                {breadcrumbs.map((item, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    return (
                        <li key={index} className="flex items-center">
                            {index > 0 && (
                                <ChevronDownIcon className="h-4 w-4 mx-2 -rotate-90 text-gray-400" />
                            )}
                            {isLast || !item.path ? (
                                <span className="text-gray-900 font-semibold">{item.label}</span>
                            ) : (
                                <Link to={item.path} className="hover:text-blue-600 transition-colors">
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
