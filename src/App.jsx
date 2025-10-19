import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MapView from './pages/MapView';
import TokenPage from './pages/TokenPage';
import Whitepaper from './pages/Whitepaper';
import SubmitSighting from './pages/SubmitSighting';
import Cameras from './pages/Cameras';
import Profile from './pages/Profile';
import About from './pages/About';
import { connectPhantomWallet, disconnectPhantomWallet, getTokenBalance } from './utils/solana';
import { hasDevAccess } from './utils/whitelist';

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [hasAccess, setHasAccess] = useState(false);
  const [isDevAccess, setIsDevAccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check wallet on mount
  useEffect(() => {
    checkWalletConnection();
    checkEmailLogin();
  }, []);

  // Update token balance when wallet changes
  useEffect(() => {
    if (walletAddress) {
      fetchTokenBalance();
    } else if (userEmail) {
      checkEmailAccess();
    } else {
      setTokenBalance(0);
      setHasAccess(false);
      setIsDevAccess(false);
    }
  }, [walletAddress, userEmail]);

  const checkWalletConnection = async () => {
    try {
      if (window.solana && window.solana.isConnected) {
        const publicKey = window.solana.publicKey.toString();
        setWalletAddress(publicKey);
      }
    } catch (error) {
      console.error('Error checking wallet:', error);
    }
  };

  const checkEmailLogin = () => {
    const savedEmail = localStorage.getItem('ufx_user_email');
    if (savedEmail) {
      setUserEmail(savedEmail);
    }
  };

  const checkEmailAccess = () => {
    if (!userEmail) return;
    
    const devAccess = hasDevAccess(null, userEmail);
    setIsDevAccess(devAccess);
    setHasAccess(devAccess);
    
    if (devAccess) {
      console.log('✅ Email whitelisted - access granted!');
    }
  };

  const fetchTokenBalance = async () => {
    if (!walletAddress) return;
    
    // Prvo provjeri whitelist
    const devAccess = hasDevAccess(walletAddress, null);
    setIsDevAccess(devAccess);
    
    if (devAccess) {
      console.log('🔓 Developer wallet access granted!');
      setHasAccess(true);
      setTokenBalance(0);
      return;
    }
    
    // Ako nije dev, provjeri token balance
    setLoading(true);
    try {
      const balance = await getTokenBalance(walletAddress);
      setTokenBalance(balance);
      setHasAccess(balance >= 1000000);
    } catch (error) {
      console.error('Error fetching balance:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleWalletConnect = async () => {
    if (walletAddress) {
      // Disconnect
      await disconnectPhantomWallet();
      setWalletAddress(null);
      setTokenBalance(0);
      setHasAccess(false);
      setIsDevAccess(false);
    } else {
      // Connect
      const address = await connectPhantomWallet();
      if (address) {
        setWalletAddress(address);
      }
    }
  };

  const handleEmailLogin = (email, password) => {
    // Spremi email u localStorage
    localStorage.setItem('ufx_user_email', email);
    setUserEmail(email);
    console.log('📧 Email login:', email);
  };

  const handleEmailLogout = () => {
    localStorage.removeItem('ufx_user_email');
    setUserEmail(null);
    setHasAccess(false);
    setIsDevAccess(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar 
          walletConnected={!!walletAddress}
          setWalletConnected={handleWalletConnect}
          walletAddress={walletAddress}
          tokenBalance={tokenBalance}
          hasAccess={hasAccess}
          isDevAccess={isDevAccess}
          userEmail={userEmail}
          onEmailLogin={handleEmailLogin}
          onEmailLogout={handleEmailLogout}
        />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<MapView hasAccess={hasAccess} />} />
            <Route path="/token" element={<TokenPage />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/submit" element={<SubmitSighting hasAccess={hasAccess} />} />
            <Route path="/cameras" element={<Cameras hasAccess={hasAccess} />} />
            <Route path="/profile" element={<Profile walletAddress={walletAddress} tokenBalance={tokenBalance} userEmail={userEmail} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;