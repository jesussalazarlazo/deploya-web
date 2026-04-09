/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        deployaBlue: '#0F172A',
        deployaGreen: '#06B6D4',
        deployaLight: '#F9FAFB',
      },
    },
  },
  plugins: [],
};