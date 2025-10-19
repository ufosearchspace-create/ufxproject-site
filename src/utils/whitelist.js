/**
 * Developer & VIP Whitelist
 * Ovi wallet addressi i emaili UVIJEK imaju pristup (bypass token/payment check)
 */

// Solana wallet addressi koji imaju instant access
export const WHITELISTED_WALLETS = [
  // Developer wallets
  // 'Dodaj svoj Phantom wallet address ovdje kada ga imaš',
];

// Email addressi koji imaju instant access (za PayPal/email login)
export const WHITELISTED_EMAILS = [
  // Tvoj dev email
  '123qwert@ufoproject.com',
  'ufosearchspace@gmail.com',
  'spejic@inet.hr',
  
  // Test accounts
  'demo@ufx.network',
];

/**
 * Provjeri da li je wallet address u whitelistu
 */
export const isWalletWhitelisted = (walletAddress) => {
  if (!walletAddress) return false;
  return WHITELISTED_WALLETS.includes(walletAddress);
};

/**
 * Provjeri da li je email u whitelistu
 */
export const isEmailWhitelisted = (email) => {
  if (!email) return false;
  return WHITELISTED_EMAILS.includes(email.toLowerCase().trim());
};

/**
 * Debug mode - ako je true, SVI imaju pristup (za development)
 * Promijeni u FALSE za production!
 */
export const DEBUG_MODE = false; // false = need whitelist, true = svi imaju pristup

/**
 * Master access check - kombinuje sve provjere
 */
export const hasDevAccess = (walletAddress = null, email = null) => {
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

  // Provjeri email whitelist
  if (email && isEmailWhitelisted(email)) {
    console.log('✅ Email whitelisted:', email);
    return true;
  }

  return false;
};