const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'ssm': '270px',
      'mmm':'570px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
