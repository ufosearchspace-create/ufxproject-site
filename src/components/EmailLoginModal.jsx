import React, { useState } from 'react';
import { Mail, Lock, X, LogIn } from 'lucide-react';

const EmailLoginModal = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Jednostavna validacija (bez passworda za sada)
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    // Simuliraj login delay
    setTimeout(() => {
      onLogin(email, password);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white px-6 py-4 flex items-center justify-between rounded-t-lg">
          <div className="flex items-center space-x-3">
            <LogIn size={24} />
            <h2 className="text-xl font-bold">Login to UFX Network</h2>
          </div>
          <button 
            onClick={onClose} 
            className="text-white hover:text-gray-200 text-2xl"
            type="button"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Mail size={18} className="mr-2" />
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Lock size={18} className="mr-2" />
              Password (Optional for now)
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ufx-primary focus:border-transparent"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
            💡 <strong>For demo:</strong> Use <code className="bg-blue-100 px-2 py-1 rounded">123qwert@ufoproject.com</code> to get instant access!
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-ufx-primary to-ufx-secondary text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Logging in...</span>
              </>
            ) : (
              <>
                <LogIn size={20} />
                <span>Login</span>
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            Don't have access? <a href="/token" className="text-ufx-primary hover:underline">Buy tokens</a> or <a href="/token" className="text-ufx-primary hover:underline">subscribe</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default EmailLoginModal;