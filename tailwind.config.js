/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: "#0f172a",
          800: "#1B2A41",
          accent: "#00FFAA",
          neon: "#00A2FF"
        }
      }
    },
  },
  plugins: [],
};
