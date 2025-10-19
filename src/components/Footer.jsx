import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">UFX Network</h3>
            <p className="text-sm mb-3">Decentralized UFO sightings database powered by blockchain technology.</p>
            <p className="text-sm">
              Visit: <a href="https://www.ufxproject.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">www.ufxproject.com</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/map" className="hover:text-white transition-colors">Interactive Map</Link></li>
              <li><Link to="/submit" className="hover:text-white transition-colors">Submit Sighting</Link></li>
              <li><Link to="/cameras" className="hover:text-white transition-colors">Live Cameras</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/token" className="hover:text-white transition-colors">Buy UFX Token</Link></li>
              <li><Link to="/whitepaper" className="hover:text-white transition-colors">Whitepaper</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/UFX_Project" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="UFX Project on X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://x.com/ptah_ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Founder on X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="mailto:contact@ufxproject.com" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} UFX Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;