import { useState, useEffect } from 'react';
import api from '../lib/api';

/**
 * Custom hook to check user access via backend API
 * @param {string} walletAddress - User's wallet address
 * @returns {object} - { allowed, loading, error }
 */
export function useAuthGate(walletAddress) {
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const checkAccess = async () => {
      // If no wallet address, user is not allowed
      if (!walletAddress) {
        if (isMounted) {
          setAllowed(false);
          setLoading(false);
          setError(null);
        }
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await api.post('/api/auth/check-access', {
          walletAddress
        });
        
        if (isMounted) {
          setAllowed(response.allowed === true);
          setLoading(false);
        }
      } catch (err) {
        console.error('Auth gate check failed:', err);
        if (isMounted) {
          setError(err.message || 'Failed to check access');
          setAllowed(false);
          setLoading(false);
        }
      }
    };

    checkAccess();

    return () => {
      isMounted = false;
    };
  }, [walletAddress]);

  return { allowed, loading, error };
}
