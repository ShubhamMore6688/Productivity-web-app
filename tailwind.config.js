/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primaryBlue': '#0469ff',
        'brand-primaryPurple': '#7000ff',
        'Neutrals/neutrals-6': '#c0bfc4',
        'Neutrals/neutrals-7': '#fffff',
        'washed-blue-300': '#9ab0ff',
        'washed-blue-400': '#86a1ff',
        'washed-blue-500': '#6889ff',
        'washed-blue-600': '#5f7de8',
        'washed-blue-700': '#4a61b5',
        'washed-blue-800': '#394b8c',
        'washed-blue-900': '#2c3a6b',
        'washed-purple-400': '#c5c1ff',
        'washed-purple-500': '#b6b2ff',
        'washed-purple-600': '#a6a2e8',
        'washed-purple-700': '#817eb5',
        'washed-purple-800': '#64628c',
        'washed-purple-900': '#4c4b6b',
        'primary-purple-900': '#2f006b',
        'background-clr': '#150d40',
        'brand-dark': '#030014',

      },
    },
  },
  plugins: [],
}