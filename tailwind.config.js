/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: { 'min': '576px' },
      md: { 'min': '768px' },
      lg: '992px',
      xl: '1200px',
      'max-sm': { 'max': '575px' }
    },
    extend: {},
  },
  plugins: [],
}
