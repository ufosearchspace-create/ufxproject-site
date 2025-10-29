/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ufx-primary': '#2563eb',
        'ufx-secondary': '#7c3aed',
      },
    },
  },
  plugins: [],
}