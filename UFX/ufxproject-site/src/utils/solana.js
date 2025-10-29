import { Connection, PublicKey } from '@solana/web3.js';

// Solana RPC endpoint (koristi Mainnet)
const SOLANA_RPC = 'https://api.mainnet-beta.solana.com';
const connection = new Connection(SOLANA_RPC, 'confirmed');

// Tvoj UFX token address
const UFX_TOKEN_MINT = 'Ch8rHHEwBBLczBwRpGqw6Yvzv4YpvPThGXcs2Z1Tpump';

// Minimum token balance za pristup (1,000,000 UFX)
export const MINIMUM_TOKEN_BALANCE = 1000000;

/**
 * Provjeri token balance za wallet address
 * @param {string} walletAddress - Solana wallet address
 * @returns {Promise<number>} - Token balance
 */
export const getTokenBalance = async (walletAddress) => {
  try {
    const publicKey = new PublicKey(walletAddress);
    const tokenMint = new PublicKey(UFX_TOKEN_MINT);

    // Get token accounts za ovaj wallet
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
      mint: tokenMint,
    });

    if (tokenAccounts.value.length === 0) {
      console.log('No token accounts found for this wallet');
      return 0;
    }

    // Uzmi prvi token account (user bi trebao imati samo jedan)
    const balance = tokenAccounts.value[0].account.data.parsed.info.tokenAmount.uiAmount;
    console.log(`✅ Token balance: ${balance} UFX`);
    return balance || 0;
  } catch (error) {
    console.error('❌ Error fetching token balance:', error);
    return 0;
  }
};

/**
 * Provjeri da li user ima pristup (100k+ tokens)
 * @param {string} walletAddress - Solana wallet address
 * @returns {Promise<boolean>}
 */
export const hasAccess = async (walletAddress) => {
  if (!walletAddress) return false;
  const balance = await getTokenBalance(walletAddress);
  return balance >= MINIMUM_TOKEN_BALANCE;
};

/**
 * Connect Phantom wallet
 * @returns {Promise<string|null>} - Wallet address ili null ako error
 */
export const connectPhantomWallet = async () => {
  try {
    // Provjeri da li Phantom postoji
    if (!window.solana || !window.solana.isPhantom) {
      alert('⚠️ Phantom wallet not detected!\n\nPlease install Phantom from phantom.app');
      window.open('https://phantom.app/', '_blank');
      return null;
    }

    // Connect wallet
    const response = await window.solana.connect();
    const walletAddress = response.publicKey.toString();
    console.log('✅ Phantom connected:', walletAddress);
    return walletAddress;
  } catch (error) {
    console.error('❌ Phantom connection error:', error);
    if (error.code === 4001) {
      alert('Connection cancelled by user');
    } else {
      alert('Failed to connect Phantom wallet');
    }
    return null;
  }
};

/**
 * Disconnect Phantom wallet
 */
export const disconnectPhantomWallet = async () => {
  try {
    if (window.solana) {
      await window.solana.disconnect();
      console.log('👋 Phantom disconnected');
    }
  } catch (error) {
    console.error('Error disconnecting:', error);
  }
};