import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Rocket, Shield, Users, TrendingUp, Camera } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to UFX Network
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            The World's First Decentralized UFO Sightings Database
          </p>
          <p className="text-lg mb-10 max-w-3xl mx-auto">
            Explore over 60,000+ verified UFO sightings, submit your own experiences, 
            and earn UFX tokens for contributing to the largest crowdsourced UFO database on the blockchain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/map"
              className="bg-white text-ufx-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              🗺️ Explore Map
            </Link>
            <Link
              to="/token"
              className="bg-ufx-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-all shadow-lg"
            >
              💰 Get UFX Token
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-ufx-primary mb-2">60,633+</div>
              <div className="text-gray-600">Total Sightings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ufx-primary mb-2">150+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ufx-primary mb-2">5,000+</div>
              <div className="text-gray-600">Contributors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ufx-primary mb-2">24/7</div>
              <div className="text-gray-600">Live Cameras</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose UFX Network?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-ufx-primary text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Map size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Interactive Map</h3>
              <p className="text-gray-600">
                Explore UFO sightings on an interactive global map with clustering, 
                filters, and detailed information for each event.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-ufx-primary text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Blockchain Security</h3>
              <p className="text-gray-600">
                All sightings are timestamped and stored on the blockchain, 
                ensuring data integrity and immutability.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-ufx-primary text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Rocket size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Earn Rewards</h3>
              <p className="text-gray-600">
                Submit verified sightings and earn UFX tokens. 
                The more you contribute, the more you earn!
              </p>
            </div>

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
              <h3 className="text-xl font-bold mb-3 text-gray-800">Live Cameras</h3>
              <p className="text-gray-600">
                Access live camera feeds from strategic locations around the world 
                to catch real-time UFO activity.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-ufx-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Data Analytics</h3>
              <p className="text-gray-600">
                Advanced analytics and visualizations help identify patterns, 
                hotspots, and trends in UFO activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the UFX Community?</h2>
          <p className="text-xl mb-8">
            Start exploring UFO sightings, submit your own experiences, and earn rewards today!
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
