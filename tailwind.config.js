/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          50:  "#f5f7fa",
          100: "#e4e8f0",
          200: "#c9d1e0",
          300: "#9faac7",
          400: "#6c7ba7",
          500: "#4b5987",
          600: "#353f6b",
          700: "#252c50",
          800: "#161b33",
          900: "#0a0d1a", // 👈 ovo je glavna tamna “space” boja
        },
      },
    },
  },
  plugins: [],
};
