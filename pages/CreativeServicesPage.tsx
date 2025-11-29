
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CameraIcon, BrushIcon, VideoIcon, BrandIcon, AiIcon, VirtualIcon, ChevronDownIcon } from '../constants/icons';
import Breadcrumbs from '../components/Breadcrumbs';

const CreativeServiceDetailCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-2 rounded-lg">
                <Icon className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="mt-3 text-gray-600">{description}</p>
    </div>
);

const GalleryItem: React.FC<{ image: string, title: string }> = ({ image, title }) => (
    <div className="relative group overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
            <h4 className="text-white text-lg font-semibold">{title}</h4>
        </div>
    </div>
);

const FAQItem: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
            >
                <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>{question}</span>
                <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                <div className="text-gray-600 leading-relaxed text-base">{answer}</div>
            </div>
        </div>
    );
};

const CreativeServicesPage: React.FC = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Creative' }]} />
            </div>

            {/* Hero Section */}
            <section className="relative py-32 md:py-48 text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/abstractwave/1200/800')" }}>
                <div className="absolute inset-0 bg-gray-900/60"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white">AI-Powered Creative Services</h1>
                    <p className="mt-4 text-xl md:text-2xl text-gray-200">Content creation at scale — fast, precise, on-brand.</p>
                    <div className="mt-8">
                        <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                            Book Creative Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Creative Process Section */}
            <section className="py-20 md:py-28 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900">Leveraging AI to Augment and Accelerate Your Creative Process</h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        At Forwardworkx, we integrate cutting-edge artificial intelligence to revolutionize your creative workflow. From initial concept to final execution, our AI-powered services deliver unparalleled speed, precision, and brand consistency, allowing you to scale your content creation efforts effortlessly.
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
            <section className="py-20 md:py-28">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {galleryItems.map(item => (
                            <GalleryItem key={item.title} {...item} />
                        ))}
                    </div>
                 </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Creative Services — FAQs</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem 
                            question="1️⃣ What types of creative work do you offer?" 
                            answer={
                                <>
                                    <p className="mb-2">We handle everything visual your brand needs:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Photoshoots (product + lifestyle)</li>
                                        <li>Brand films & ads</li>
                                        <li>Influencer video creation</li>
                                        <li>Brand Identity & guidelines</li>
                                        <li>Catalogs, lookbooks, packaging, UI/UX — the full sauce 💅</li>
                                    </ul>
                                </>
                            }
                        />
                        <FAQItem 
                            question="2️⃣ Do you take care of models, studios, and locations?" 
                            answer="Yep. You just show up with your brand — We handle models, props, crew, lighting, locations & post-production. Zero stress."
                        />
                        <FAQItem 
                            question="3️⃣ Can you plan shoot concepts too?" 
                            answer="Absolutely. We script, moodboard, shotlist, art-direct — your visuals tell a story, not just pose."
                        />
                        <FAQItem 
                            question="4️⃣ How soon can we see the final creatives?" 
                            answer="Standard timeline: 7–14 days. Rush delivery available if you’re on “launch tomorrow” mode 😅"
                        />
                        <FAQItem 
                            question="5️⃣ Do we own the rights to the content?" 
                            answer="YES. Once delivered & approved — you get full usage rights for ads, e-commerce, social, anywhere."
                        />
                        <FAQItem 
                            question="6️⃣ Can you match our brand look/style?" 
                            answer="🔥 100%. We adapt to your vibe or build a new one from scratch (brand book included if needed)."
                        />
                        <FAQItem 
                            question="7️⃣ Do you handle influencer video shoots too?" 
                            answer="Yes — from talent sourcing → scripting → editing → delivery. Macro or micro creators — whoever fits your brand."
                        />
                        <FAQItem 
                            question="8️⃣ What if we need monthly content?" 
                            answer="We have content retainer plans to keep your grid & ads always fresh."
                        />
                        <FAQItem 
                            question="9️⃣ What if we’re not in the same city?" 
                            answer="Shipping your products to our studio works just fine 📦 We also travel if needed — national & international."
                        />
                        <FAQItem 
                            question="🔟 Can you create content for Amazon/Flipkart listings?" 
                            answer="Yessir — e-commerce optimized images, infographics & A+ content are all part of the pack."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-500 rounded-2xl p-12 text-center">
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
