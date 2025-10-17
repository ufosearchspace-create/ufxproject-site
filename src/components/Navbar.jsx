import React from 'react';
import { Satellite, Github } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-ufx-dark text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img src="/logo/UFX_X_128.png" alt="UFX Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold">UFX Network</h1>
              <p className="text-xs text-gray-300">UFO Sighting Database</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <div className="text-sm text-gray-300">Global Sightings</div>
              <div className="text-2xl font-bold text-ufx-primary">60,633</div>
            </div>
            
            <a 
              href="https://github.com/ufosearchspace-create" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-ufx-primary transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;