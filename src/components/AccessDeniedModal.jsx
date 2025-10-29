import React from 'react';
import { Lock, AlertTriangle, ExternalLink } from 'lucide-react';

const AccessDeniedModal = ({ walletAddress, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[3000] p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full">
            <Lock className="text-red-600" size={48} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Access Restricted
        </h2>

        {/* Message */}
        <div className="space-y-4 text-center">
          <p className="text-gray-600">
            This wallet is not whitelisted for UFX Network access.
          </p>

          {walletAddress && (
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-xs text-gray-500 mb-1">Connected Wallet:</div>
              <div className="font-mono text-sm text-gray-800 break-all">
                {walletAddress}
              </div>
            </div>
          )}

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-0.5" size={20} />
              <div className="text-left">
                <div className="font-semibold text-yellow-900 text-sm mb-1">
                  Beta Access Only
                </div>
                <div className="text-yellow-800 text-sm">
                  UFX Network is currently in closed beta. Access is limited to whitelisted wallets and $UFX token holders.
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mt-6">
            <a
              href="https://app.virtuals.io/prototypes/0xD87F72f4225Add00E125fd97C391Ed59Fb75CaEC"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all w-full"
            >
              <ExternalLink size={18} />
              <span>Get $UFX Token</span>
            </a>

            <a
              href="https://x.com/UFX_Project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-all w-full"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>Follow for Updates</span>
            </a>

            {onClose && (
              <button
                onClick={onClose}
                className="w-full text-gray-600 hover:text-gray-800 font-medium py-2 transition-colors"
              >
                Disconnect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessDeniedModal;
