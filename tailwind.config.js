const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./config/*.json",
    "./layout/*.liquid",
    "./assets/*.liquid",
    "./assets/*.js",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/*.json",
    "./templates/customers/*.liquid",
    "./templates/customers/*.json"
  ],
  theme: {
    theme: {
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
    },
    extend: {},
    fontFamily:{
      'quicksand':['Quicksand', 'sans-serif'],
      'livvic':['Livvic', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
