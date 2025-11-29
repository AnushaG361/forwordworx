
import React from 'react';
import { Link } from 'react-router-dom';
import { 
    SparklesIcon, 
    CheckCircleIcon, 
    LightBulbIcon, 
    CpuChipIcon, 
    PuzzlePieceIcon, 
    ClockIcon, 
    ArrowRightIcon, 
    ShieldCheckIcon 
} from '../constants/icons';

// Play Icon for Video Section
const PlayIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
);

const ValuePillar: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
        <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mr-4">
                <Icon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-xl text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
    </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="bg-white font-sans selection:bg-blue-100 selection:text-blue-700">
      
      {/* 1. HERO SECTION */}
      <section className="pt-24 pb-24 md:pt-36 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Copy */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm tracking-wide uppercase">
                <SparklesIcon className="h-4 w-4 mr-2" />
                <span>Digital Transformation Partner</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Your End-to-End <br className="hidden lg:block" />
              <span className="text-blue-600">Digital & Agentic AI</span> <br className="hidden lg:block" />
              Transformation Partner for Your Business
            </h1>
            <p className="text-xl text-gray-900 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              We help businesses build, automate, and scale with a powerful ecosystem of technology, creative execution, marketing, and consultancy — fully integrated to deliver real growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link to="/contact" className="inline-flex justify-center items-center bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 transform hover:-translate-y-1">
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Right: Friendly 3D Illustration Placeholder */}
          <div className="relative">
            <div className="relative bg-blue-50 rounded-[3rem] p-8 md:p-12 aspect-[4/3] flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/50 to-white/0"></div>
                <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-purple-100/50 rounded-full blur-3xl"></div>
                
                {/* Simulation of "High-quality, friendly 3D clay-style illustration" */}
                <img 
                    src="https://picsum.photos/seed/clay-tech-friendly/800/600" 
                    alt="Integrated Tech Illustration" 
                    className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-lg hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating UI Element */}
                <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-5 rounded-[1.5rem] shadow-xl z-20 border border-white animate-bounce-slow hidden sm:block">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircleIcon className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-sm">System Optimization</p>
                            <div className="w-32 h-2 bg-gray-100 rounded-full mt-2 overflow-hidden">
                                <div className="h-full bg-green-500 w-[85%] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BUILT FOR BUSINESS GROWTH (Video + Points) */}
      <section className="py-24 bg-gray-900 text-white rounded-[3rem] mx-4 overflow-hidden relative">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[100px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Video Placeholder */}
                <div className="relative w-full aspect-video bg-gray-800 rounded-[2rem] border border-gray-700 shadow-2xl overflow-hidden group cursor-pointer hover:border-gray-600 transition-all">
                    <img 
                        src="https://picsum.photos/seed/growth-video-thumb/800/450" 
                        alt="Business Growth Video Thumbnail" 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300 scale-105 group-hover:scale-100" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30 shadow-lg">
                            <PlayIcon className="w-8 h-8 text-white fill-current ml-1" />
                        </div>
                    </div>
                </div>

                {/* Right: Text Points */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight">Built for Business Growth</h2>
                    <ul className="space-y-6">
                        {[
                            { title: "Scalability", desc: "Systems designed to grow effortlessly as you expand." },
                            { title: "Automation", desc: "Reducing manual workload to focus on high-value tasks." },
                            { title: "Performance", desc: "Optimized for speed, efficiency, and measurable results." },
                            { title: "Ecosystem", desc: "Seamlessly integrated tools working together as one." },
                            { title: "Long-Term Support", desc: "Dedicated partnership to ensure sustained success." },
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start group">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center mt-1 mr-4 group-hover:bg-blue-600 transition-colors">
                                    <CheckCircleIcon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{item.title}</h4>
                                    <p className="text-gray-400 mt-1">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>
      
      {/* 3. WHY BRANDS CHOOSE US */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Why Brands Choose Us</h2>
                  <p className="mt-4 text-lg text-gray-500">The pillars of our partnership.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ValuePillar 
                    icon={ShieldCheckIcon} 
                    title="Quality" 
                    description="Uncompromising standards in every line of code, pixel, and strategy we deliver." 
                  />
                  <ValuePillar 
                    icon={LightBulbIcon} 
                    title="Experience" 
                    description="Decades of combined expertise navigating complex digital shifts and market trends." 
                  />
                  <ValuePillar 
                    icon={SparklesIcon} 
                    title="Vision" 
                    description="Future-proofing your business with forward-thinking strategies and innovation." 
                  />
                  <ValuePillar 
                    icon={PuzzlePieceIcon} 
                    title="Adaptability" 
                    description="Agile methodologies that allow your business to pivot as fast as the market does." 
                  />
                  <ValuePillar 
                    icon={CpuChipIcon} 
                    title="Technology" 
                    description="Access to a cutting-edge stack including Agentic AI, Cloud, and SaaS solutions." 
                  />
                  <ValuePillar 
                    icon={ClockIcon} 
                    title="Process" 
                    description="Streamlined, transparent workflows that ensure on-time delivery and clear communication." 
                  />
              </div>
          </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-24 bg-gray-50 text-center rounded-[3rem] mx-4 mb-4">
          <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Let’s Build Your Next Big Brand with End-to-End Creative, Marketing & Tech Services.</h2>
              <div className="flex justify-center gap-4 mt-10">
                  <Link to="/contact" className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-5 px-12 rounded-full text-xl hover:bg-blue-700 hover:shadow-2xl transition-all transform hover:scale-105 shadow-blue-500/30">
                      Contact Us
                  </Link>
              </div>
          </div>
      </section>
    </div>
  );
};

export default HomePage;
