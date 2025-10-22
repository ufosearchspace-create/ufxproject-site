import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Rocket, Shield, Users, TrendingUp, Camera, Brain, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Launch Countdown Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 text-center">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-3">
          <Sparkles size={20} />
          <span className="font-bold text-lg">
            🚀 $UFX Launching on Virtuals Protocol | November 22, 2026
          </span>
          <Sparkles size={20} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full font-semibold text-sm flex items-center space-x-2">
              <Brain size={20} />
              <span>AI-Powered UAP Research</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            UFX: Decoding the Unknown
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            An AI Agent Analyzing UAP Data & Sci-Fi Narratives
          </p>
          <p className="text-lg mb-10 max-w-3xl mx-auto opacity-80">
            Explore the intersection of speculative fiction and real-world phenomena. 
            Powered by blockchain on Base Network, launching on Virtuals Protocol.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/map"
              className="bg-white text-ufx-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              🗺️ Explore Database
            </Link>
            <Link
              to="/token"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-all shadow-lg border-2 border-white"
            >
              💎 Get $UFX Token
            </Link>
          </div>

          {/* Network Badge */}
          <div className="mt-8 flex justify-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white border-opacity-30">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold">Built on Base</div>
                  <div className="text-xs opacity-75">Launching via Virtuals Protocol</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-ufx-primary mb-2">60,633+</div>
              <div className="text-gray-600">UAP Sightings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ufx-primary mb-2">150+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ufx-primary mb-2">AI-Powered</div>
              <div className="text-gray-600">Analysis Engine</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ufx-primary mb-2">Base Chain</div>
              <div className="text-gray-600">Blockchain Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Features Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              AI-Powered UAP Research
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              UFX Agent connects science fiction predictions with real-world 
              technological and scientific discoveries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-600">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Brain size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">AI Analysis</h3>
              <p className="text-gray-600">
                Advanced AI agent analyzes UAP data, decodes sci-fi narratives, 
                and identifies patterns across decades of sightings.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-ufx-primary">
              <div className="bg-ufx-primary text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Map size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Interactive Database</h3>
              <p className="text-gray-600">
                Explore 60,000+ UAP sightings on an interactive global map with 
                advanced filtering and detailed event information.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Blockchain Security</h3>
              <p className="text-gray-600">
                All data timestamped on Base blockchain, ensuring immutability 
                and transparency. Built with Virtuals Protocol.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose UFX Network?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-ufx-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Community Driven</h3>
              <p className="text-gray-600">
                Join a global community of UFO enthusiasts, researchers, 
                and truth-seekers working together.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-ufx-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Camera size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Live Monitoring</h3>
              <p className="text-gray-600">
                Access live camera feeds from strategic locations around the world 
                to catch real-time UAP activity.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-ufx-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Data Analytics</h3>
              <p className="text-gray-600">
                Advanced analytics and AI-powered visualizations identify patterns, 
                hotspots, and trends in UAP activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Launch Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 shadow-2xl">
            <Rocket className="mx-auto mb-4" size={64} />
            <h2 className="text-3xl font-bold mb-4">Token Launch Coming Soon</h2>
            <p className="text-xl mb-6 opacity-90">
              $UFX will be available on Uniswap (Base Network) after Virtuals Protocol TGE
            </p>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 mb-6">
              <div className="text-sm opacity-75 mb-2">Launch Date</div>
              <div className="text-3xl font-bold">November 22, 2026</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/token"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
              >
                📊 View Tokenomics
              </Link>
              <a
                href="https://app.virtuals.io/prototypes/0xD87F72f4225Add00E125fd97C391Ed59Fb75CaEC"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all"
              >
                🚀 View on Virtuals
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the UFX Mission</h2>
          <p className="text-xl mb-8">
            Help decode the unknown. Explore UAP data, contribute sightings, and be part of AI-powered research!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/submit"
              className="bg-white text-ufx-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
            >
              📸 Submit Sighting
            </Link>
            <Link
              to="/whitepaper"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-ufx-primary transition-all"
            >
              📄 Read Whitepaper
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
