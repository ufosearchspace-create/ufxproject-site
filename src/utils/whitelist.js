/**
 * Developer & Token Holder Whitelist - PRODUCTION VERSION
 * SAMO wallet addressi i token balance su relevantni
 */

// Base (Ethereum) wallet addressi koji imaju instant access
export const WHITELISTED_WALLETS = [
  // Developer wallets (dodaj svoje Base wallet adrese ovdje)
  // Format: '0x...' (Ethereum/Base format)
  
  // DODAJ SVOJ WALLET OVDJE:
  // '0x51d2605b5843607a592df0ad497052560d0144d9',
  
  // Example (REPLACE sa svojim!):
  // '0x1234567890123456789012345678901234567890',
  
  // VIP/Early supporters
];

/**
 * Provjeri da li je wallet address u whitelistu
 */
export const isWalletWhitelisted = (walletAddress) => {
  if (!walletAddress) return false;
  // Case-insensitive provjera jer Ethereum adrese mogu biti različite case
  const lowerAddress = walletAddress.toLowerCase();
  return WHITELISTED_WALLETS.some(addr => addr.toLowerCase() === lowerAddress);
};

/**
 * Debug mode - ako je true, SVI imaju pristup (za development)
 * ⚠️ SET TO FALSE FOR PRODUCTION! ⚠️
 */
export const DEBUG_MODE = false; // 🔒 PRODUCTION MODE - Access kontrola ENABLED!

/**
 * Master access check - SAMO wallet i token balance
 * PayPal/Email login je uklonjen - SAMO $UFX token je mjerodavan!
 */
export const hasDevAccess = (walletAddress = null, tokenBalance = 0) => {
  // Ako je debug mode, svi imaju pristup
  if (DEBUG_MODE) {
    console.log('🔓 DEBUG MODE: Access granted to everyone');
    return true;
  }

  // Provjeri wallet whitelist
  if (walletAddress && isWalletWhitelisted(walletAddress)) {
    console.log('✅ Wallet whitelisted:', walletAddress);
    return true;
  }

  // Provjeri token balance (ako ima $UFX tokene, ima pristup)
  if (tokenBalance && tokenBalance > 0) {
    console.log('✅ Token holder access:', tokenBalance, 'UFX');
    return true;
  }

  console.log('❌ Access denied - not whitelisted and no tokens');
  console.log('Wallet:', walletAddress, 'Token Balance:', tokenBalance);
  return false;
};
