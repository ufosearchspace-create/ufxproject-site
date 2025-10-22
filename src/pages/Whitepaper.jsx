import React, { useState } from 'react';
import { FileText, Target, Rocket, Users, Shield, TrendingUp, Brain, BookOpen } from 'lucide-react';
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
            Version 2.0 | Last Updated: October 2025
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
            UFX Network is an AI-powered platform for analyzing Unidentified Aerial Phenomena (UAP) 
            and decoding science fiction narratives. Our mission is to connect the dots between 
            speculative fiction predictions and real-world technological and scientific discoveries, 
            creating the world's most comprehensive blockchain-verified UAP database.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Built on Base blockchain and launching via Virtuals Protocol, UFX leverages advanced 
            AI agents, smart contracts, and the native $UFX utility token to incentivize research, 
            ensure data integrity, and democratize access to one of humanity's greatest mysteries.
          </p>
        </section>

        {/* Problem Statement */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">The Problem</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start space-x-3">
              <div className="text-red-500 mt-1">❌</div>
              <div>
                <strong>Fragmented Data:</strong> UAP sightings are scattered across hundreds 
                of websites, forums, and government databases with no standardization or 
                cross-referencing with sci-fi literature.
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
                <strong>Missing Connections:</strong> Science fiction has predicted countless 
                technologies and phenomena, but no system exists to systematically identify 
                these connections with real-world events.
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-red-500 mt-1">❌</div>
              <div>
                <strong>Limited Analytics:</strong> Existing platforms lack AI-powered tools 
                for pattern recognition, narrative analysis, and predictive modeling.
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-purple-600 pl-4">
              <div className="flex items-center space-x-2 mb-2">
                <Brain className="text-purple-600" size={24} />
                <h3 className="font-bold text-lg">AI-Powered Analysis</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Advanced AI agents analyze UAP data, decode sci-fi narratives, 
                and identify correlations between fiction and reality.
              </p>
            </div>

            <div className="border-l-4 border-ufx-primary pl-4">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="text-ufx-primary" size={24} />
                <h3 className="font-bold text-lg">Blockchain Security</h3>
              </div>
              <p className="text-gray-700 text-sm">
                All sightings timestamped on Base blockchain via Virtuals Protocol, 
                ensuring immutability and transparency.
              </p>
            </div>

            <div className="border-l-4 border-ufx-primary pl-4">
              <div className="flex items-center space-x-2 mb-2">
                <Rocket className="text-ufx-primary" size={24} />
                <h3 className="font-bold text-lg">Token Incentives</h3>
              </div>
              <p className="text-gray-700 text-sm">
                $UFX token rewards users for submitting verified sightings and 
                contributing to research efforts.
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

            <div className="border-l-4 border-purple-600 pl-4">
              <div className="flex items-center space-x-2 mb-2">
                <BookOpen className="text-purple-600" size={24} />
                <h3 className="font-bold text-lg">Sci-Fi Integration</h3>
              </div>
              <p className="text-gray-700 text-sm">
                AI analyzes decades of science fiction literature to identify 
                predictions that align with UAP phenomena.
              </p>
            </div>

            <div className="border-l-4 border-ufx-primary pl-4">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="text-ufx-primary" size={24} />
                <h3 className="font-bold text-lg">Predictive Analytics</h3>
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
          
          {/* Visual Distribution */}
          <div className="mb-6">
            <div className="relative h-12 rounded-lg overflow-hidden flex">
              <div className="bg-cyan-500" style={{ width: '44.58%' }} title="Liquidity Pool"></div>
              <div className="bg-purple-500" style={{ width: '25%' }} title="Capital Formation"></div>
              <div className="bg-green-500" style={{ width: '25%' }} title="Team"></div>
              <div className="bg-yellow-400" style={{ width: '3%' }} title="Ecosystem Airdrop"></div>
              <div className="bg-orange-500" style={{ width: '2%' }} title="veVIRTUAL Airdrop"></div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <span className="font-semibold">Total Supply:</span>
              <span className="text-ufx-primary font-bold">1,000,000,000 UFX</span>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <span className="font-semibold">Liquidity Pool:</span>
              <span>445,800,000 UFX (44.58%)</span>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <span className="font-semibold">Automated Capital Formation:</span>
              <span>250,000,000 UFX (25%)</span>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <span className="font-semibold">Team (6-month vesting):</span>
              <span>250,000,000 UFX (25%)</span>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <span className="font-semibold">Virtuals Ecosystem Airdrop:</span>
              <span>30,000,000 UFX (3%)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">veVIRTUAL Airdrop:</span>
              <span>20,000,000 UFX (2%)</span>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-blue-800">
              💡 <strong>Launch Details:</strong> $UFX launches on November 22, 2026 via Virtuals 
              Protocol on Base blockchain. Team tokens vest over 6 months to ensure long-term commitment.
            </p>
          </div>
        </section>

        {/* AI Agent Features */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">AI Agent Capabilities</h2>
          <div className="space-y-4">
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
              <h3 className="font-bold text-lg mb-2 flex items-center">
                <Brain className="mr-2 text-purple-600" size={20} />
                UAP Data Analysis
              </h3>
              <p className="text-gray-700 text-sm">
                Processes 60,000+ UAP sightings, identifying patterns, temporal clusters, 
                geographical hotspots, and correlations with historical events.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
              <h3 className="font-bold text-lg mb-2 flex items-center">
                <BookOpen className="mr-2 text-purple-600" size={20} />
                Sci-Fi Narrative Decoding
              </h3>
              <p className="text-gray-700 text-sm">
                Analyzes decades of science fiction literature (Clarke, Asimov, Heinlein, Liu Cixin) 
                to map predictions against documented UAP sightings and technological breakthroughs.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
              <h3 className="font-bold text-lg mb-2 flex items-center">
                <Target className="mr-2 text-purple-600" size={20} />
                Predictive Modeling
              </h3>
              <p className="text-gray-700 text-sm">
                Uses machine learning to predict future UAP activity hotspots and identify 
                emerging patterns that might indicate new phenomena.
              </p>
            </div>
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
                <li>AI agent prototype development</li>
              </ul>
            </div>

            {/* Q4 2026 */}
            <div className="relative pl-8 border-l-4 border-blue-500">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
              <h3 className="font-bold text-lg mb-2">Q4 2026 🚧 (IN PROGRESS)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Token Generation Event (Nov 22, 2026)</li>
                <li>Uniswap listing on Base</li>
                <li>AI agent full deployment</li>
                <li>Sci-fi narrative database integration</li>
              </ul>
            </div>

            {/* Q1 2027 */}
            <div className="relative pl-8 border-l-4 border-gray-300">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-gray-300 rounded-full border-4 border-white"></div>
              <h3 className="font-bold text-lg mb-2">Q1 2027 📅 (PLANNED)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Mobile app (iOS/Android)</li>
                <li>Live camera network expansion</li>
                <li>Advanced AI pattern recognition</li>
                <li>Community governance launch</li>
              </ul>
            </div>

            {/* Q2-Q4 2027 */}
            <div className="relative pl-8 border-l-4 border-gray-300">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-gray-300 rounded-full border-4 border-white"></div>
              <h3 className="font-bold text-lg mb-2">Q2-Q4 2027 🔮 (FUTURE)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Additional DEX & CEX listings</li>
                <li>API marketplace launch</li>
                <li>AR/VR sighting visualization</li>
                <li>Research partnerships with institutions</li>
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
                Master's degree in Aeronautics, former military pilot, and AI/blockchain developer. 
                Building the future of decentralized UAP research with passion for science fiction 
                and aerial phenomena.
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

        {/* Technology Stack */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Blockchain</h3>
              <p className="text-sm text-gray-600">Base (Ethereum L2), Virtuals Protocol</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">AI/ML</h3>
              <p className="text-sm text-gray-600">Custom AI agents, NLP, Pattern recognition</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Frontend</h3>
              <p className="text-sm text-gray-600">React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Backend</h3>
              <p className="text-sm text-gray-600">Node.js, PostgreSQL, Redis</p>
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
