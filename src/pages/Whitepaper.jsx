import React, { useState } from 'react';
import { FileText, Target, Rocket, Users, Shield, TrendingUp } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Whitepaper = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FileText className="text-ufx-primary" size={64} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            UFX Network Whitepaper
          </h1>
          <p className="text-xl text-gray-600">
            Version 1.0 | Last Updated: October 2025
          </p>
          <button 
            onClick={() => alert('📥 PDF download coming soon!')}
            className="mt-6 bg-ufx-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            📥 Download PDF
          </button>
        </div>

        {/* Executive Summary */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Executive Summary</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            UFX Network is the world's first decentralized, blockchain-powered platform 
            for documenting and analyzing UFO/UAP (Unidentified Aerial Phenomena) sightings. 
            Our mission is to create a transparent, immutable, and community-driven database 
            that empowers researchers, enthusiasts, and governments to collaborate on 
            understanding these unexplained phenomena.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By leveraging blockchain technology, smart contracts, and a native utility token (UFX), 
            we incentivize accurate reporting, ensure data integrity, and democratize access to 
            one of humanity's greatest mysteries.
          </p>
        </section>

        {/* Problem Statement */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">The Problem</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start space-x-3">
              <div className="text-red-500 mt-1">❌</div>
              <div>
                <strong>Fragmented Data:</strong> UFO sightings are scattered across hundreds 
                of websites, forums, and government databases with no standardization.
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-red-500 mt-1">❌</div>
              <div>
                <strong>Lack of Trust:</strong> Centralized databases can be manipulated, 
                censored, or deleted without transparency.
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-red-500 mt-1">❌</div>
              <div>
                <strong>No Incentive:</strong> Witnesses have no motivation to share detailed, 
                verified reports beyond personal interest.
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-red-500 mt-1">❌</div>
              <div>
                <strong>Poor Analytics:</strong> Existing platforms lack advanced tools for 
                pattern recognition, hotspot detection, and predictive analysis.
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-ufx-primary pl-4">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="text-ufx-primary" size={24} />
                <h3 className="font-bold text-lg">Blockchain Security</h3>
              </div>
              <p className="text-gray-700 text-sm">
                All sightings are timestamped and stored on Ethereum/Polygon, 
                ensuring immutability and transparency.
              </p>
            </div>

            <div className="border-l-4 border-ufx-primary pl-4">
              <div className="flex items-center space-x-2 mb-2">
                <Rocket className="text-ufx-primary" size={24} />
                <h3 className="font-bold text-lg">Token Incentives</h3>
              </div>
              <p className="text-gray-700 text-sm">
                UFX token rewards users for submitting verified sightings, 
                with bonuses for photos/videos.
              </p>
            </div>

            <div className="border-l-4 border-ufx-primary pl-4">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="text-ufx-primary" size={24} />
                <h3 className="font-bold text-lg">Community Governance</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Token holders vote on platform updates, feature additions, 
                and content moderation policies.
              </p>
            </div>

            <div className="border-l-4 border-ufx-primary pl-4">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="text-ufx-primary" size={24} />
                <h3 className="font-bold text-lg">AI-Powered Analytics</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Machine learning algorithms detect patterns, predict hotspots, 
                and authenticate submissions.
              </p>
            </div>
          </div>
        </section>

        {/* Tokenomics */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Tokenomics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <span className="font-semibold">Total Supply:</span>
              <span className="text-ufx-primary font-bold">1,000,000,000 UFX</span>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <span className="font-semibold">Team (Locked - 7%):</span>
              <span>70,000,000 UFX</span>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <span className="font-semibold">Public Sale (93%):</span>
              <span>930,000,000 UFX</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">All tokens available online</span>
              <span className="text-green-600 font-bold">✅ Live</span>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-blue-800">
              💡 <strong>Note:</strong> No presale, no vesting periods. Buy anytime directly on our platform 
              with crypto or fiat payment.
            </p>
          </div>
        </section>

        {/* Roadmap */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Roadmap</h2>
          <div className="space-y-6">
            {/* Q4 2025 */}
            <div className="relative pl-8 border-l-4 border-green-500">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
              <h3 className="font-bold text-lg mb-2">Q4 2025 ✅ (COMPLETED)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Platform launch with 60,000+ sightings</li>
                <li>Interactive map with clustering</li>
                <li>User submission system</li>
                <li>Token available for purchase (crypto & fiat)</li>
              </ul>
            </div>

            {/* Q1 2026 */}
            <div className="relative pl-8 border-l-4 border-blue-500">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
              <h3 className="font-bold text-lg mb-2">Q1 2026 🚧 (IN PROGRESS)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Mobile app (iOS/Android)</li>
                <li>Live camera network expansion</li>
                <li>AI image verification</li>
                <li>Community governance launch</li>
              </ul>
            </div>

            {/* Q2 2026 */}
            <div className="relative pl-8 border-l-4 border-gray-300">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-gray-300 rounded-full border-4 border-white"></div>
              <h3 className="font-bold text-lg mb-2">Q2 2026 📅 (PLANNED)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>DEX listing (Uniswap, PancakeSwap)</li>
                <li>API marketplace launch</li>
                <li>AR/VR sighting visualization</li>
                <li>Government partnerships</li>
              </ul>
            </div>

            {/* Q3-Q4 2026 */}
            <div className="relative pl-8 border-l-4 border-gray-300">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-gray-300 rounded-full border-4 border-white"></div>
              <h3 className="font-bold text-lg mb-2">Q3-Q4 2026 🔮 (FUTURE)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>CEX listings (Binance, Coinbase)</li>
                <li>NFT marketplace for verified sightings</li>
                <li>Satellite integration</li>
                <li>Global expansion to 200+ countries</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Team</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-ufx-primary to-ufx-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                RJ
              </div>
              <h3 className="font-bold text-xl mb-1 text-gray-900">Regular Joe</h3>
              <p className="text-ufx-primary font-semibold mb-2">Founder & Developer</p>
              <p className="text-sm text-gray-600 mb-3">
                Building the future of decentralized UFO research
              </p>
              <a 
                href="https://x.com/ptah_ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-ufx-primary hover:text-ufx-secondary transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>@ptah_ai</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Learn More?</h2>
          <p className="mb-6">Download the full whitepaper or contact our team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => alert('📥 PDF download coming soon!')}
              className="bg-white text-ufx-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              📥 Download Full PDF
            </button>
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-ufx-primary transition-all"
            >
              📧 Contact Team
            </button>
          </div>
        </section>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </div>
  );
};

export default Whitepaper;