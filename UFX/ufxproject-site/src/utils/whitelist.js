/**
 * Developer & Token Holder Whitelist - PRODUCTION VERSION
 * SAMO wallet addressi i token balance su relevantni
 */

// Base (Ethereum) wallet addressi koji imaju instant access
export const WHITELISTED_WALLETS = [
  '0x51D2605B5843607A592dF0ad497052560d0144d9', // ← REPLACE SA SVOJIM WALLETOM!
  
  // Primjer (obriši ovo):
  // '0x1234567890123456789012345678901234567890',
];

/**
 * Provjeri da li je wallet address u whitelistu
 */
export const isWalletWhitelisted = (walletAddress) => {
  if (!walletAddress) return false;
  const lowerAddress = walletAddress.toLowerCase();
  return WHITELISTED_WALLETS.some(addr => addr.toLowerCase() === lowerAddress);
};

/**
 * Debug mode - MORA biti false u production!
 */
export const DEBUG_MODE = false; // 🔒 PRODUCTION MODE!

/**
 * Master access check
 */
export const hasDevAccess = (walletAddress = null, tokenBalance = 0) => {
  if (DEBUG_MODE) {
    console.log('🔓 DEBUG MODE: Access granted to everyone');
    return true;
  }

  if (walletAddress && isWalletWhitelisted(walletAddress)) {
    console.log('✅ Wallet whitelisted:', walletAddress);
    return true;
  }

  if (tokenBalance && tokenBalance > 0) {
    console.log('✅ Token holder access:', tokenBalance, 'UFX');
    return true;
  }

  console.log('❌ Access denied');
  return false;
};