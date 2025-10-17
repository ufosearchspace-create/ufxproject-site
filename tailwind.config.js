/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ufx: {
          primary: '#6366f1',
          secondary: '#8b5cf6',
          dark: '#1e1b4b',
          light: '#f0f9ff'
        }
      }
    },
  },
  plugins: [],
}