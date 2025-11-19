
import React from 'react';
import { Link } from 'react-router-dom';
import { LightBulbIcon, HeartIcon, UsersIcon } from '../constants/icons';

const ValueCard: React.FC<{ icon: React.ElementType; title: string; description: string; }> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="bg-blue-100 rounded-full p-3 inline-flex">
            <Icon className="h-8 w-8 text-blue-500" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);

const TeamMemberCard: React.FC<{ name: string; title: string; imageUrl: string; }> = ({ name, title, imageUrl }) => (
    <div className="text-center">
        <img className="mx-auto h-32 w-32 rounded-full object-cover" src={imageUrl} alt={name} />
        <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-blue-500">{title}</p>
    </div>
);

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
            About Forwardworkx
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            We are a team of innovators, engineers, and strategists dedicated to building the next generation of business solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    Our mission is to simplify complexity through automation, connecting disparate systems into a unified, powerful ecosystem that drives growth and efficiency. We believe in empowering modern brands with the tools they need to thrive in a dynamic digital landscape.
                </p>
            </div>
            <div className="flex justify-center">
                <img src="https://picsum.photos/seed/mission/400/400" alt="Our Mission" className="rounded-lg shadow-xl" />
            </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600">The principles that guide our work and culture.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
                <ValueCard icon={LightBulbIcon} title="Innovation" description="We constantly seek better ways to solve problems and drive progress." />
                <ValueCard icon={HeartIcon} title="Customer Centricity" description="Our customers' success is our success. We build relationships based on trust and value." />
                <ValueCard icon={UsersIcon} title="Collaboration" description="We believe the best results come from teamwork and diverse perspectives." />
            </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">Meet the Team</h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600">The passionate individuals behind Forwardworkx.</p>
            </div>
            <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <TeamMemberCard name="Jane Doe" title="CEO & Founder" imageUrl="https://picsum.photos/seed/team1/200" />
                <TeamMemberCard name="John Smith" title="CTO" imageUrl="https://picsum.photos/seed/team2/200" />
                <TeamMemberCard name="Emily Jones" title="Head of Product" imageUrl="https://picsum.photos/seed/team3/200" />
                <TeamMemberCard name="Michael Brown" title="Lead Engineer" imageUrl="https://picsum.photos/seed/team4/200" />
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Join Our Journey</h2>
              <p className="mt-4 text-lg text-gray-600">We're always looking for talented people to join our team. Explore our open positions and help us shape the future of business enablement.</p>
              <div className="mt-8">
                  <Link to="/contact" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                      Work With Us
                  </Link>
              </div>
          </div>
      </section>
    </div>
  );
};

export default AboutUsPage;