/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {},
  daisyui: {
    themes: [],
  },
  plugins: [require('daisyui')],
}

