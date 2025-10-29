import React from 'react';
import { X, CreditCard, Coins, Check, AlertCircle } from 'lucide-react';

const AccessControlModal = ({ onClose, requiredFeature }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white px-6 py-4 flex items-center justify-between sticky top-0 z-10 rounded-t-lg">
          <div>
            <h2 className="text-2xl font-bold">🔒 Premium Access Required</h2>
            <p className="text-sm opacity-90 mt-1">
              Access to <strong>{requiredFeature}</strong> requires payment
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="text-white hover:text-gray-200 text-3xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-700 text-center mb-8 text-lg">
            Choose your access method below to unlock premium features
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* USD Subscription */}
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-400 transition-all">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3">
                  <CreditCard className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">USD Subscription</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$5/month</div>
                <p className="text-sm text-gray-600">Pay monthly for data access only. Cancel anytime.</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-2">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm text-gray-700">Access to Interactive Map</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm text-gray-700">Access to Live Cameras</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm text-gray-700">Basic sighting submissions</span>
                </div>
                <div className="flex items-start space-x-2">
                  <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm text-gray-400">No project ownership</span>
                </div>
                <div className="flex items-start space-x-2">
                  <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm text-gray-400">No token rewards</span>
                </div>
                <div className="flex items-start space-x-2">
                  <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm text-gray-400">No AI verification</span>
                </div>
              </div>

              <button
                onClick={() => window.open('/token', '_blank')}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all"
              >
                Subscribe via PayPal
              </button>
            </div>

            {/* Token Holder */}
            <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-50 relative">
              <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                RECOMMENDED
              </div>
              
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-3">
                  <Coins className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Token Holder</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">1,000,000+ UFX</div>
                <p className="text-sm text-gray-600">Hold 1M+ tokens for full access + rewards</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-2">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm text-gray-700 font-semibold">Everything in USD plan</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm text-gray-700 font-semibold">Project ownership stake</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm text-gray-700 font-semibold">Earn token rewards for submissions</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm text-gray-700 font-semibold">AI-powered verification</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm text-gray-700 font-semibold">Governance voting rights</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm text-gray-700 font-semibold">Token value appreciation potential</span>
                </div>
              </div>

              <button
                onClick={() => window.open('/token', '_blank')}
                className="w-full bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all"
              >
                Buy Tokens
              </button>

              <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded p-3 text-xs text-yellow-800">
                <AlertCircle size={14} className="inline mr-1" />
                <strong>Important:</strong> After buying 1M+ UFX tokens, maintain your balance to keep access. If balance drops below 1M, you lose access.
              </div>
            </div>
          </div>

          {/* Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
              <h4 className="font-bold text-blue-900 mb-2">💡 Token Holders:</h4>
              <p className="text-blue-800">
                After buying 1M+ UFX tokens, maintain your balance to keep access. If balance drops below 1M, you lose access.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
              <h4 className="font-bold text-green-900 mb-2">💳 USD Subscribers:</h4>
              <p className="text-green-800">
                Pay monthly for data access only. Cancel anytime. No ownership or token rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessControlModal;