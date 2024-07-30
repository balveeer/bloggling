/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  darkMode: "class",
  theme: {
    extend: {
    screens: {
      'xs': '240px',
      },
    },
  },
}