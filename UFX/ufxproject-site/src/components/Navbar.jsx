import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wallet, Menu, X, Coins } from 'lucide-react';

const Navbar = ({ 
  walletConnected, 
  setWalletConnected, 
  walletAddress, 
  tokenBalance
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  // Simple navigation links - NO LOCKS!
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/map', label: 'Map' },
    { path: '/ai-chat', label: '🤖 AI Chat', highlight: true },
    { path: '/token', label: 'Token' },
    { path: '/whitepaper', label: 'Whitepaper' },
    { path: '/submit', label: 'Submit Sighting' },
    { path: '/cameras', label: 'Cameras' },
    { path: '/about', label: 'About' },
  ];

  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
  };

  const formatBalance = (balance) => {
    if (balance >= 1000000) return `${(balance / 1000000).toFixed(2)}M`;
    if (balance >= 1000) return `${(balance / 1000).toFixed(1)}K`;
    return balance.toFixed(0);
  };

  return (
    <nav className="bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <img 
              src="/logo.png" 
              alt="UFX Network" 
              className="h-12 w-12 drop-shadow-lg" 
            />
            <div>
              <h1 className="text-xl font-bold tracking-wide drop-shadow">UFX Network</h1>
              <p className="text-xs font-bold tracking-widest uppercase hidden sm:block" 
                 style={{ 
                   textShadow: '0 2px 4px rgba(0,0,0,0.4)',
                   letterSpacing: '0.1em'
                 }}>
                AI-Powered UAP Research
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - NO LOCKS! */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  link.highlight
                    ? 'bg-purple-500 bg-opacity-90 hover:bg-opacity-100 animate-pulse'
                    : location.pathname === link.path
                    ? 'bg-white bg-opacity-20'
                    : 'hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side buttons - WALLET ONLY, NO EMAIL LOGIN! */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Wallet Info (only if connected) */}
            {walletConnected && tokenBalance > 0 && (
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm">
                <div className="flex items-center space-x-2">
                  <Coins size={16} />
                  <div>
                    <div className="font-bold">{formatBalance(tokenBalance)} UFX</div>
                    <div className="text-xs opacity-75">Base Network</div>
                  </div>
                </div>
              </div>
            )}

            {/* Wallet Connect Button */}
            <button
              onClick={setWalletConnected}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                walletConnected
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-white bg-opacity-20 hover:bg-opacity-30'
              }`}
            >
              <Wallet size={18} />
              <span className="text-sm">
                {walletConnected ? formatAddress(walletAddress) : 'Connect Wallet'}
              </span>
            </button>

            {/* X/Twitter Link */}
            <a
              href="https://x.com/UFX_Project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white bg-opacity-20 px-3 py-2 rounded-lg hover:bg-opacity-30 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="text-sm">Follow</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white hover:bg-opacity-10"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu - NO LOCKS! */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {/* Wallet Info Mobile (only if connected) */}
            {walletConnected && tokenBalance > 0 && (
              <div className="bg-white bg-opacity-20 px-4 py-3 rounded-lg text-sm mb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold">{formatBalance(tokenBalance)} UFX</div>
                    <div className="text-xs opacity-75">Base Network</div>
                  </div>
                  <Coins size={20} />
                </div>
              </div>
            )}

            {/* Navigation Links - NO LOCKS! */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  link.highlight
                    ? 'bg-purple-500 bg-opacity-90 hover:bg-opacity-100'
                    : location.pathname === link.path
                    ? 'bg-white bg-opacity-20'
                    : 'hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Wallet Connect Button Mobile */}
            <button
              onClick={() => {
                setWalletConnected();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-all"
            >
              <Wallet size={18} />
              <span className="text-sm">
                {walletConnected ? formatAddress(walletAddress) : 'Connect Wallet'}
              </span>
            </button>

            {/* X/Twitter Link Mobile */}
            <a
              href="https://x.com/UFX_Project"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="text-sm">Follow on X</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
