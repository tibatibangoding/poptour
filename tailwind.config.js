/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0064d3',
        secondary: '#ffe135',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
