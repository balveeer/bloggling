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
    typography: ({ theme }) => ({
      dark: {
        css: {
          color: theme('colors.white'),
          '[class~="lead"]': { color: theme('colors.gray.300') },
          a: { color: theme('colors.white') },
          strong: { color: theme('colors.white') },
          'ul > li::before': { backgroundColor: theme('colors.gray.600') },
          hr: { borderColor: theme('colors.gray.200') },
          blockquote: {
            color: theme('colors.gray.200'),
            borderLeftColor: theme('colors.gray.600'),
          },
          h1: { color: theme('colors.white') },
          h2: { color: theme('colors.white') },
          h3: { color: theme('colors.white') },
          h4: { color: theme('colors.white') },
          code: { color: theme('colors.white') },
          'a code': { color: theme('colors.white') },
          pre: {
            color: theme('colors.gray.200'),
            backgroundColor: theme('colors.gray.800'),
          },
          thead: {
            color: theme('colors.white'),
            borderBottomColor: theme('colors.gray.400'),
          },
          'tbody tr': { borderBottomColor: theme('colors.gray.600') },
        },
      },
    }),
  },
},
plugins: [
  require('@tailwindcss/typography'),
],
}