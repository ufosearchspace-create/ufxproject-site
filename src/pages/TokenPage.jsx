import React from 'react';
import { DollarSign, TrendingUp, Lock, Users, Droplet, Gift, ExternalLink, Coins } from 'lucide-react';

const TokenPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full">
              <Coins size={64} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            $UFX Token
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The native utility token of UFX Network, launching on Base via Virtuals Protocol
          </p>
          
          {/* Launch Banner */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-6 max-w-2xl mx-auto shadow-lg">
            <div className="text-sm font-semibold mb-2">🚀 TOKEN GENERATION EVENT</div>
            <div className="text-3xl font-bold mb-2">November 22, 2026</div>
            <div className="text-sm opacity-90">Available on Uniswap (Base Network) after TGE</div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <DollarSign className="mx-auto text-ufx-primary mb-2" size={40} />
            <div className="text-sm text-gray-600 mb-1">Total Supply</div>
            <div className="text-2xl font-bold text-gray-900">1,000,000,000</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-sm text-gray-600 mb-1">Blockchain</div>
            <div className="text-2xl font-bold text-blue-600">Base</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-2">🤖</div>
            <div className="text-sm text-gray-600 mb-1">Launching Via</div>
            <div className="text-2xl font-bold text-purple-600">Virtuals</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <TrendingUp className="mx-auto text-green-500 mb-2" size={40} />
            <div className="text-sm text-gray-600 mb-1">Token Type</div>
            <div className="text-2xl font-bold text-gray-900">Utility</div>
          </div>
        </div>

        {/* Tokenomics Chart */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Tokenomics</h2>
          
          {/* Visual Distribution */}
          <div className="mb-8">
            <div className="relative h-12 rounded-lg overflow-hidden flex">
              <div className="bg-cyan-500" style={{ width: '44.58%' }} title="Liquidity Pool: 44.58%"></div>
              <div className="bg-purple-500" style={{ width: '25%' }} title="Automated Capital Formation: 25%"></div>
              <div className="bg-green-500" style={{ width: '25%' }} title="Team: 25%"></div>
              <div className="bg-yellow-400" style={{ width: '3%' }} title="Virtuals Ecosystem Airdrop: 3%"></div>
              <div className="bg-orange-500" style={{ width: '2%' }} title="veVIRTUAL Airdrop: 2%"></div>
            </div>
          </div>

          {/* Distribution Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Liquidity Pool */}
            <div className="border-l-4 border-cyan-500 pl-4 py-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Droplet className="text-cyan-500" size={24} />
                  <h3 className="font-bold text-lg">Liquidity Pool</h3>
                </div>
                <span className="text-2xl font-bold text-cyan-500">44.58%</span>
              </div>
              <p className="text-sm text-gray-600">445,800,000 UFX</p>
              <p className="text-sm text-gray-500 mt-1">
                Initial liquidity for DEX trading on Uniswap (Base)
              </p>
            </div>

            {/* Automated Capital Formation */}
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="text-purple-500" size={24} />
                  <h3 className="font-bold text-lg">Capital Formation</h3>
                </div>
                <span className="text-2xl font-bold text-purple-500">25.00%</span>
              </div>
              <p className="text-sm text-gray-600">250,000,000 UFX</p>
              <p className="text-sm text-gray-500 mt-1">
                Automated capital formation via Virtuals Protocol
              </p>
            </div>

            {/* Team */}
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Lock className="text-green-500" size={24} />
                  <h3 className="font-bold text-lg">Team</h3>
                </div>
                <span className="text-2xl font-bold text-green-500">25.00%</span>
              </div>
              <p className="text-sm text-gray-600">250,000,000 UFX</p>
              <p className="text-sm text-gray-500 mt-1">
                6-month vesting: Nov 22, 2026 → Apr 21, 2027
              </p>
            </div>

            {/* Virtuals Ecosystem Airdrop */}
            <div className="border-l-4 border-yellow-400 pl-4 py-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Gift className="text-yellow-500" size={24} />
                  <h3 className="font-bold text-lg">Ecosystem Airdrop</h3>
                </div>
                <span className="text-2xl font-bold text-yellow-500">3.00%</span>
              </div>
              <p className="text-sm text-gray-600">30,000,000 UFX</p>
              <p className="text-sm text-gray-500 mt-1">
                Distributed to Virtuals ecosystem participants
              </p>
            </div>

            {/* veVIRTUAL Airdrop */}
            <div className="border-l-4 border-orange-500 pl-4 py-2 md:col-span-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Gift className="text-orange-500" size={24} />
                  <h3 className="font-bold text-lg">veVIRTUAL Airdrop</h3>
                </div>
                <span className="text-2xl font-bold text-orange-500">2.00%</span>
              </div>
              <p className="text-sm text-gray-600">20,000,000 UFX</p>
              <p className="text-sm text-gray-500 mt-1">
                Airdropped to veVIRTUAL token holders
              </p>
            </div>
          </div>

          {/* Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-blue-800">
              💡 <strong>Note:</strong> All token allocations are managed through Virtuals Protocol 
              smart contracts on Base blockchain. Team tokens are vested over 6 months to ensure 
              long-term commitment.
            </p>
          </div>
        </section>

        {/* Token Utility */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Token Utility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-ufx-primary text-white p-3 rounded-lg flex-shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Platform Access</h3>
                <p className="text-gray-600 text-sm">
                  Hold $UFX to access premium features including AI analysis tools, 
                  advanced filtering, and real-time UAP monitoring.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-ufx-primary text-white p-3 rounded-lg flex-shrink-0">
                <TrendingUp size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Governance Rights</h3>
                <p className="text-gray-600 text-sm">
                  Token holders participate in platform governance, voting on 
                  features, policies, and resource allocation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-ufx-primary text-white p-3 rounded-lg flex-shrink-0">
                <Gift size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Rewards</h3>
                <p className="text-gray-600 text-sm">
                  Earn $UFX by submitting verified UAP sightings, contributing 
                  to research, and engaging with the community.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-ufx-primary text-white p-3 rounded-lg flex-shrink-0">
                <Lock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Staking Benefits</h3>
                <p className="text-gray-600 text-sm">
                  Stake $UFX to unlock enhanced features and earn additional 
                  rewards from platform fees and growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Buy */}
        <section className="bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">How to Get $UFX</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h3 className="font-bold text-xl mb-4 flex items-center">
                <span className="bg-white text-ufx-primary w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                Wait for Token Generation Event
              </h3>
              <p className="ml-11 opacity-90">
                $UFX launches on November 22, 2026 via Virtuals Protocol. Mark your calendar!
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h3 className="font-bold text-xl mb-4 flex items-center">
                <span className="bg-white text-ufx-primary w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                Set Up Base Wallet
              </h3>
              <p className="ml-11 opacity-90">
                Ensure you have a Web3 wallet (MetaMask, Coinbase Wallet, Rainbow) 
                connected to Base network with ETH for gas fees.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h3 className="font-bold text-xl mb-4 flex items-center">
                <span className="bg-white text-ufx-primary w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                Buy on Uniswap
              </h3>
              <p className="ml-11 opacity-90">
                After TGE, trade ETH for $UFX on Uniswap (Base). Check our Twitter 
                @UFX_Project for the official contract address.
              </p>
            </div>

            <div className="bg-yellow-400 bg-opacity-20 backdrop-blur-sm rounded-lg p-4 border-2 border-yellow-300">
              <p className="text-sm">
                ⚠️ <strong>Security Warning:</strong> Always verify the official contract address 
                on our website and social media. Beware of scams and fake tokens!
              </p>
            </div>
          </div>
        </section>

        {/* External Links */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Official Links</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.virtuals.io/prototypes/0xD87F72f4225Add00E125fd97C391Ed59Fb75CaEC"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all"
            >
              <ExternalLink size={20} />
              <span>View on Virtuals Protocol</span>
            </a>
            <a
              href="https://x.com/UFX_Project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>Follow on X</span>
            </a>
            <a
              href="https://base.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              <ExternalLink size={20} />
              <span>About Base Chain</span>
            </a>
          </div>
        </section>

        {/* Contract Address (Coming Soon) */}
        <div className="mt-8 text-center">
          <div className="bg-gray-100 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Contract Address</h3>
            <p className="text-sm text-gray-600 mb-3">
              Will be published on November 22, 2026 after TGE
            </p>
            <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-4">
              <code className="text-gray-400 text-sm">Coming Soon...</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenPage;
