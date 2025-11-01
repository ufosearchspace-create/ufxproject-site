import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@solana/web3.js',
      '@solana/wallet-adapter-base',
      '@solana/wallet-adapter-react',
      '@solana/wallet-adapter-react-ui',
      'leaflet'
    ]
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React i React DOM
          if (id.includes('node_modules/react/') || 
              id.includes('node_modules/react-dom/')) {
            return 'react-vendor';
          }
          
          // Solana paketi
          if (id.includes('@solana/') || 
              id.includes('@project-serum/')) {
            return 'solana-vendor';
          }
          
          // Wallet adapteri
          if (id.includes('wallet-adapter')) {
            return 'wallet-vendor';
          }
          
          // Leaflet i mape
          if (id.includes('leaflet')) {
            return 'map-vendor';
          }
          
          // UI biblioteke
          if (id.includes('lucide-react')) {
            return 'ui-vendor';
          }
          
          // Utility biblioteke
          if (id.includes('axios') || 
              id.includes('react-router-dom')) {
            return 'utils-vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 600,
    minify: 'esbuild',
    target: 'es2020'
  }
})
