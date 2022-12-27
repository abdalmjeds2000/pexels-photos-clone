/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'brand-main-color': '#f75526',
        'brand-main-color-secondary': '#ff815d',
        'app-gray': '#eeeeee',
        'dark-gray': '#20232A',
        'secondary-dark-gray': '#33373E',
        'light-app-gray': '#F5F5F5',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      textColor: {
        'brand-main-color': '#f75526',
        'brand-main-color-secondary': '#ff815d',
      }
    },
  },
  plugins: [],
}