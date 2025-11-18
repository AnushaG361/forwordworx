
import React from 'react';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '../constants/icons';

const ContactInfoItem: React.FC<{ icon: React.ElementType; title: string; children: React.ReactNode; }> = ({ icon: Icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
            <Icon className="h-6 w-6 text-blue-500" />
        </div>
        <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600">{children}</p>
        </div>
    </div>
);

const ContactUsPage: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Thank you for your message. We will get back to you shortly!');
        (event.target as HTMLFormElement).reset();
    };

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Contact Us</h1>
                    <p className="mt-4 text-lg leading-6 text-gray-600">
                        We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                    </p>
                </div>
                <div className="mt-16 grid md:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <ContactInfoItem icon={MapPinIcon} title="Our Address">
                            123 Innovation Drive<br />
                            Tech City, TX 12345
                        </ContactInfoItem>
                        <ContactInfoItem icon={PhoneIcon} title="Phone Number">
                            (123) 456-7890
                        </ContactInfoItem>
                        <ContactInfoItem icon={EnvelopeIcon} title="Email Address">
                            hello@forwardworx.com
                        </ContactInfoItem>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        required
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>
                             <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        required
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                        placeholder="Question about services"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
