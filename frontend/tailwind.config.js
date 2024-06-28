/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oxanium", "sans-serif"],
      },
      colors: {
          custom: '#121933',
          head: '#B6FFFA'
        },
    },
  },
  plugins: [],
}