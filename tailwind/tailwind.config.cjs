/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#0f172a',
      gray: '#6b7280',
      'gray-light': '#f3f4f6',
      'gray-ultra-light': '#e5e7eb',
      'gray-medium': '#9ca3af',
      'gray-dark': '#374151',
      main: '#FAF8ED',
      orangeCustom: '#F66F4D',
      fontDark: '#2D3134',
      fontLight: '#5B5F62'
    },
    fontFamily: {
      main: ['Inter', 'sans-serif'],
      sen: ['Sen', 'sans-serif'],
      poppins: ['Sen', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        bgImg: 'url("../src/img/Intersect.png")'
      }
    }
  },
  plugins: []
}
