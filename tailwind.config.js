/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-black':'#1b1b1b',
        'text-blue': '#2c6bed',
        'button-blue-hover': '#1851b4',
        'background-blue': '#9DBBF8'
      },
      boxShadow: {
        'custom-shadow': '0px 4px 12px rgba(0,0,0,0.12), 0px 0px 2px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}