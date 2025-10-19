import React from 'react';
import { Target, Users, Globe, Zap, Shield, Heart, Twitter } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About UFX Network</h1>
          <p className="text-xl opacity-90">
            Building the world's most transparent and decentralized UFO research platform
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Target className="mx-auto text-ufx-primary mb-4" size={64} />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To democratize access to UFO/UAP data through blockchain technology, 
              creating an immutable, transparent, and community-driven database that 
              advances scientific understanding of aerial phenomena.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-ufx-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Transparency</h3>
              <p className="text-gray-600">
                Every sighting is timestamped on the blockchain, ensuring data can never be 
                altered or deleted.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-ufx-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Community First</h3>
              <p className="text-gray-600">
                Token holders govern the platform, deciding on features, policies, and 
                fund allocation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-ufx-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Global Collaboration</h3>
              <p className="text-gray-600">
                Bringing together researchers, witnesses, and enthusiasts from every corner 
                of the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Our Story</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              UFX Network was born out of a passion for aerospace and a desire to bring 
              transparency to UFO research. For decades, sighting data has been scattered 
              across countless websites, government databases, and personal archives—often 
              lost, manipulated, or inaccessible to researchers.
            </p>
            <p>
              In 2024, I realized that blockchain technology could solve this problem. 
              By storing sighting data on distributed ledgers, we could create an immutable, 
              censorship-resistant record that would outlast any single organization or government.
            </p>
            <p>
              We launched in Q4 2025 with over 60,000 historical sightings and a mission: 
              to build the largest, most credible UFO database in human history. The platform 
              continues to grow, with the goal of creating a community-driven resource that 
              advances our understanding of aerial phenomena.
            </p>
            <p className="font-semibold text-ufx-primary">
              Together, we're not just documenting the unknown—we're building the future 
              of transparent, decentralized research.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-ufx-secondary text-white p-3 rounded-lg flex-shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Innovation</h3>
                <p className="text-gray-600">
                  We leverage cutting-edge technology—blockchain, AI, machine learning—to 
                  push the boundaries of what's possible in UFO research.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-ufx-secondary text-white p-3 rounded-lg flex-shrink-0">
                <Heart size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Inclusivity</h3>
                <p className="text-gray-600">
                  Everyone deserves a voice. We welcome skeptics, believers, and everyone 
                  in between to contribute and learn.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-ufx-secondary text-white p-3 rounded-lg flex-shrink-0">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Integrity</h3>
                <p className="text-gray-600">
                  We prioritize data accuracy and authenticity. Our verification systems 
                  help filter questionable reports while protecting genuine witnesses.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-ufx-secondary text-white p-3 rounded-lg flex-shrink-0">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Accessibility</h3>
                <p className="text-gray-600">
                  Our platform is free to use for everyone. We believe UFO research should 
                  be accessible to all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">The Developer</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 bg-gradient-to-r from-ufx-primary to-ufx-secondary rounded-full mb-6"></div>
              <h3 className="font-bold text-2xl mb-2 text-gray-900">Regular Joe</h3>
              <p className="text-ufx-primary font-semibold mb-4">Founder & Solo Developer</p>
              
              <div className="text-center mb-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Master's degree in Aeronautics and former military pilot with a passion 
                  for aerospace technology and transparency in UFO research. Currently building 
                  UFX Network as a solo developer, combining expertise in aviation, blockchain, 
                  and web development.
                </p>
              </div>

              <a 
                href="https://x.com/ptah_ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
              >
                <Twitter size={20} />
                Follow on X @ptah_ai
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of history. Help us build the world's most comprehensive UFO database.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-ufx-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all">
              🚀 Get Started
            </button>
            <a 
              href="https://x.com/ptah_ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-ufx-primary transition-all"
            >
              📧 Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
