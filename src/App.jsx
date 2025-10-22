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

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [loading, setLoading] = useState(false);

  // Check wallet on mount
  useEffect(() => {
    checkWalletConnection();
  }, []);

  // Update token balance when wallet changes
  useEffect(() => {
    if (walletAddress) {
      fetchTokenBalance();
    } else {
      setTokenBalance(0);
    }
  }, [walletAddress]);

  const checkWalletConnection = async () => {
    try {
      // Check for Ethereum wallet (MetaMask, Coinbase Wallet, etc.)
      if (window.ethereum && window.ethereum.selectedAddress) {
        setWalletAddress(window.ethereum.selectedAddress);
      }
    } catch (error) {
      console.error('Error checking wallet:', error);
    }
  };

  const fetchTokenBalance = async () => {
    if (!walletAddress) return;
    
    setLoading(true);
    try {
      // TODO: Implement Base network token balance check
      // For now, set to 0 until contract is deployed
      setTokenBalance(0);
      
      console.log('🔗 Wallet connected (Base network):', walletAddress);
    } catch (error) {
      console.error('Error fetching balance:', error);
      setTokenBalance(0);
    } finally {
      setLoading(false);
    }
  };

  const handleWalletConnect = async () => {
    if (walletAddress) {
      // Disconnect
      setWalletAddress(null);
      setTokenBalance(0);
      console.log('👋 Wallet disconnected');
    } else {
      // Connect to Base network via MetaMask/WalletConnect
      try {
        if (!window.ethereum) {
          alert('Please install MetaMask or another Web3 wallet!');
          return;
        }

        // Request account access
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });

        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log('✅ Wallet connected:', accounts[0]);
          
          // Optional: Switch to Base network
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0x2105' }], // Base mainnet chainId
            });
          } catch (switchError) {
            // If Base network is not added, add it
            if (switchError.code === 4902) {
              try {
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [{
                    chainId: '0x2105',
                    chainName: 'Base',
                    nativeCurrency: {
                      name: 'Ethereum',
                      symbol: 'ETH',
                      decimals: 18,
                    },
                    rpcUrls: ['https://mainnet.base.org'],
                    blockExplorerUrls: ['https://basescan.org'],
                  }],
                });
              } catch (addError) {
                console.error('Error adding Base network:', addError);
              }
            }
          }
        }
      } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Failed to connect wallet. Please try again.');
      }
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar 
          walletConnected={!!walletAddress}
          setWalletConnected={handleWalletConnect}
          walletAddress={walletAddress}
          tokenBalance={tokenBalance}
        />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/token" element={<TokenPage />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/submit" element={<SubmitSighting />} />
            <Route path="/cameras" element={<Cameras />} />
            <Route path="/profile" element={<Profile walletAddress={walletAddress} tokenBalance={tokenBalance} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
