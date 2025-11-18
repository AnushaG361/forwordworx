import React from 'react';
import { Link } from 'react-router-dom';
import { CameraIcon, BrushIcon, VideoIcon, BrandIcon, AiIcon, VirtualIcon } from '../constants/icons';

const CreativeServiceDetailCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-[#151C2C]/60 p-6 rounded-xl border border-gray-700 hover:bg-[#1f2937] transition-colors duration-300">
        <div className="flex items-center space-x-4">
            <div className="bg-blue-600/20 p-2 rounded-lg">
                <Icon className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="mt-3 text-gray-400">{description}</p>
    </div>
);

const GalleryItem: React.FC<{ image: string, title: string }> = ({ image, title }) => (
    <div className="relative group overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
            <h4 className="text-white text-lg font-semibold">{title}</h4>
        </div>
    </div>
);

const CreativeServicesPage: React.FC = () => {
    return (
        <div className="bg-[#0B101B] text-white">
            {/* Hero Section */}
            <section className="relative py-32 md:py-48 text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/abstractwave/1200/800')" }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-7xl font-extrabold">AI-Powered Creative Services</h1>
                    <p className="mt-4 text-xl md:text-2xl text-gray-300">Content creation at scale — fast, precise, on-brand.</p>
                    <div className="mt-8">
                        <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                            Book Creative Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Creative Process Section */}
            <section className="py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold">Leveraging AI to Augment and Accelerate Your Creative Process</h2>
                    <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                        At Forwardworx, we integrate cutting-edge artificial intelligence to revolutionize your creative workflow. From initial concept to final execution, our AI-powered services deliver unparalleled speed, precision, and brand consistency, allowing you to scale your content creation efforts effortlessly.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {creativeServices.map(service => (
                            <CreativeServiceDetailCard key={service.title} {...service} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Gallery Section */}
            <section className="pb-20 md:pb-28">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {galleryItems.map(item => (
                            <GalleryItem key={item.title} {...item} />
                        ))}
                    </div>
                 </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-600 rounded-2xl p-12 text-center">
                        <h2 className="text-4xl font-extrabold text-white">Ready to Scale Your Creative Output?</h2>
                        <p className="mt-4 text-xl text-blue-100">Let's discuss how our AI-powered services can be tailored to meet your content strategy and drive growth.</p>
                        <div className="mt-8">
                            <Link to="/contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-colors">
                                Book Creative Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const creativeServices = [
    { icon: CameraIcon, title: 'Photo/Video Shoots', description: 'AI-enhanced edits, Color grading, Lifestyle product shoot.' },
    { icon: BrushIcon, title: 'Creative Division', description: 'Branding, UI/UX, Packaging mockups, Design systems.' },
    { icon: VideoIcon, title: 'Influencer Videos', description: 'AI scripts, Auto storyboards, Short video edits.' },
    { icon: BrandIcon, title: 'Branding Services', description: 'Logo systems, Typography, Brand guidelines.' },
    { icon: AiIcon, title: 'AI Content Generation', description: 'Bulk post generation, Reels, Motion assets.' },
    { icon: VirtualIcon, title: 'Virtual Shoots', description: 'AI-generated environments and models for endless creative possibilities.' }
];

const galleryItems = [
    { image: 'https://picsum.photos/seed/gallery1/400/500', title: 'Photo/Video Shoots' },
    { image: 'https://picsum.photos/seed/gallery2/400/500', title: 'Creative Division' },
    { image: 'https://picsum.photos/seed/gallery3/400/500', title: 'Influencer Videos' },
    { image: 'https://picsum.photos/seed/gallery4/400/500', title: 'Branding Services' },
    { image: 'https://picsum.photos/seed/gallery5/400/500', title: 'AI Content Generation' },
];

export default CreativeServicesPage;