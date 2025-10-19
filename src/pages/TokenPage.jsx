import React from 'react';
import { ExternalLink, Coins, DollarSign, TrendingUp, Users, Shield, Zap, Check, X, AlertCircle } from 'lucide-react';

const TokenPage = () => {
  const tokenAddress = 'CHnHsBdw8H1c28w8G0qwh1YvVxYpyH1HxXc3221Tpemp';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress);
    alert('✅ Token address copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Coins className="text-ufx-primary" size={64} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            UFX Token
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The native utility token powering the UFX Network ecosystem. 
            Hold tokens for access, earn rewards, and participate in governance.
          </p>
        </div>

        {/* Buy Now Section */}
        <div className="bg-gradient-to-r from-ufx-primary to-ufx-secondary rounded-lg shadow-xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Buy UFX Tokens Now</h2>
          <p className="text-center mb-8 text-lg">
            Purchase UFX tokens directly on pump.fun or Uniswap
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Pump.fun */}
            <div className="bg-white rounded-lg p-6 text-gray-900">
              <div className="flex items-center justify-center mb-4">
                <div className="text-4xl">🚀</div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3">pump.fun</h3>
              <p className="text-sm text-gray-600 text-center mb-6">
                Buy on Solana's premier token launchpad
              </p>
              <a
                href="https://pump.fun/CHnHsBdw8H1c28w8G0qwh1YvVxYpyH1HxXc3221Tpemp"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                Buy on pump.fun →
              </a>
            </div>

            {/* Uniswap */}
            <div className="bg-white rounded-lg p-6 text-gray-900">
              <div className="flex items-center justify-center mb-4">
                <div className="text-4xl">🦄</div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3">Uniswap</h3>
              <p className="text-sm text-gray-600 text-center mb-6">
                Trade on Solana via Uniswap interface
              </p>
              <a
                href="https://app.uniswap.org/swap?outputCurrency=CHnHsBdw8H1c28w8G0qwh1YvVxYpyH1HxXc3221Tpemp&chain=solana"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-pink-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-pink-700 transition-all"
              >
                Buy on Uniswap →
              </a>
            </div>
          </div>

          {/* Token Address */}
          <div className="mt-8 max-w-3xl mx-auto">
            <p className="text-center text-sm mb-2 opacity-90">Token Contract Address:</p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 flex items-center justify-between">
              <code className="text-sm break-all">{tokenAddress}</code>
              <button
                onClick={copyToClipboard}
                className="ml-4 bg-white text-ufx-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all flex-shrink-0"
              >
                Copy
              </button>
            </div>
            <p className="text-center text-xs mt-2 opacity-75">
              ⚠️ Always verify the token contract address before purchasing
            </p>
          </div>
        </div>

        {/* Two Ways to Access */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Two Ways to Access UFX Network
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* USD Subscription */}
            <div className="border-2 border-gray-200 rounded-lg p-8 bg-white">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                  <DollarSign className="text-gray-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">USD Subscription</h3>
                <div className="text-5xl font-bold text-gray-900 mb-3">$5/month</div>
                <p className="text-gray-600">Pay monthly for data access only. Cancel anytime.</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Access to Interactive Map</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Access to Live Cameras</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Basic sighting submissions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-400">No project ownership</span>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-400">No token rewards</span>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-400">No AI verification</span>
                </div>
              </div>

              <div className="mb-4">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                  <input type="hidden" name="cmd" value="_xclick-subscriptions" />
                  <input type="hidden" name="business" value="spejic@inet.hr" />
                  <input type="hidden" name="item_name" value="UFX Network Monthly Subscription" />
                  <input type="hidden" name="currency_code" value="USD" />
                  <input type="hidden" name="a3" value="5.00" />
                  <input type="hidden" name="p3" value="1" />
                  <input type="hidden" name="t3" value="M" />
                  <input type="hidden" name="src" value="1" />
                  <input type="hidden" name="no_note" value="1" />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all"
                  >
                    Subscribe via PayPal
                  </button>
                </form>
              </div>
            </div>

            {/* Token Holder */}
            <div className="border-2 border-blue-500 rounded-lg p-8 bg-blue-50 relative">
              <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                RECOMMENDED
              </div>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4">
                  <Coins className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Token Holder</h3>
                <div className="text-5xl font-bold text-blue-600 mb-3">1,000,000+ UFX</div>
                <p className="text-gray-600">Hold 1M+ tokens for full access + rewards</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-semibold">Everything in USD plan</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-semibold">Project ownership stake</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-semibold">Earn token rewards for submissions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-semibold">AI-powered verification</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-semibold">Governance voting rights</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-semibold">Token value appreciation potential</span>
                </div>
              </div>

              <a
                href="https://pump.fun/CHnHsBdw8H1c28w8G0qwh1YvVxYpyH1HxXc3221Tpemp"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white text-center py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all"
              >
                Buy Tokens Now →
              </a>

              <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded p-3 text-sm text-yellow-800">
                <AlertCircle size={16} className="inline mr-2" />
                <strong>Important:</strong> After purchase, maintain balance of 1M+ tokens to keep full access. Token value increases as the project grows!
              </div>
            </div>
          </div>
        </div>

        {/* Token Utility */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Token Utility
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="flex justify-center mb-4">
                <Shield className="text-ufx-primary" size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Access Control</h3>
              <p className="text-gray-600">
                Hold 1M+ UFX tokens to unlock premium features including interactive maps, live cameras, and advanced analytics.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="text-ufx-primary" size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Earn Rewards</h3>
              <p className="text-gray-600">
                Submit verified UFO sightings and earn UFX tokens. Quality submissions earn more rewards.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="flex justify-center mb-4">
                <Users className="text-ufx-primary" size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Governance</h3>
              <p className="text-gray-600">
                Vote on platform decisions, feature priorities, and community initiatives with your tokens.
              </p>
            </div>
          </div>
        </div>

        {/* Tokenomics */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Tokenomics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Token Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Token Name:</span>
                  <span className="font-semibold text-gray-900">UFX Network</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Token Symbol:</span>
                  <span className="font-semibold text-gray-900">UFX</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Blockchain:</span>
                  <span className="font-semibold text-gray-900">Solana</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Launch Platform:</span>
                  <span className="font-semibold text-gray-900">pump.fun</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Initial Supply:</span>
                  <span className="font-semibold text-gray-900">1,000,000,000 UFX</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Distribution</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Fair Launch:</span>
                  <span className="font-semibold text-green-600">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Team Allocation:</span>
                  <span className="font-semibold text-gray-900">0%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pre-mine:</span>
                  <span className="font-semibold text-gray-900">0%</span>
                </div>
                <div className="bg-green-50 border border-green-200 rounded p-3 mt-4">
                  <p className="text-sm text-green-800">
                    ✅ <strong>Fully Fair Launch:</strong> No team tokens, no pre-sale, no insider advantage. Everyone buys at market price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">How does token holding work?</h3>
              <p className="text-gray-600">
                Purchase 1M+ tokens and keep them in your wallet for instant access. 
                If your balance drops below 1M, you lose access until you buy more.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Can I sell my tokens anytime?</h3>
              <p className="text-gray-600">
                Yes! Tokens are tradeable 24/7 on pump.fun and Uniswap. However, selling below 1M tokens will remove your platform access.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">How do I earn token rewards?</h3>
              <p className="text-gray-600">
                Submit UFO sightings with photos/videos. Earn 100+ UFX per submission, with bonuses for high-quality, verified reports.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">What's the difference vs USD subscription?</h3>
              <p className="text-gray-600">
                USD subscribers get data access only. Token holders get access + ownership + rewards + governance + token value appreciation.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-ufx-primary to-ufx-secondary rounded-lg shadow-xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Join the UFX Network?</h2>
          <p className="text-xl mb-8 opacity-90">
            Buy UFX tokens now and become part of the decentralized UFO research revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pump.fun/CHnHsBdw8H1c28w8G0qwh1YvVxYpyH1HxXc3221Tpemp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-ufx-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>Buy on pump.fun</span>
              <ExternalLink size={20} />
            </a>
            <a
              href="https://app.uniswap.org/swap?outputCurrency=CHnHsBdw8H1c28w8G0qwh1YvVxYpyH1HxXc3221Tpemp&chain=solana"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-ufx-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>Buy on Uniswap</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenPage;