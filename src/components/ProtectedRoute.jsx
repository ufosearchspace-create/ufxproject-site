import React from 'react';
import { useAuthGate } from '../hooks/useAuthGate';
import { AlertCircle, Lock, Loader2 } from 'lucide-react';

/**
 * ProtectedRoute component that wraps protected pages
 * Shows loading state, access denied message, or renders children based on auth status
 */
const ProtectedRoute = ({ children, walletAddress, onConnectWallet }) => {
  const { allowed, loading, error } = useAuthGate(walletAddress);

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-ufx-primary mx-auto mb-4" />
          <p className="text-lg text-gray-600">Checking access permissions...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-red-800 mb-2">Access Check Failed</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Access denied state
  if (!allowed) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 max-w-md text-center">
          <Lock className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-yellow-800 mb-2">Access Restricted</h2>
          <p className="text-yellow-700 mb-4">
            {walletAddress 
              ? 'Your wallet address does not have access to this feature. Please contact support or check if you need to hold UFX tokens.'
              : 'Please connect your wallet to access this feature.'}
          </p>
          {!walletAddress && onConnectWallet && (
            <button
              onClick={onConnectWallet}
              className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    );
  }

  // Access granted - render children
  return <>{children}</>;
};

export default ProtectedRoute;
