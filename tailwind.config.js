/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'ubuntu': '"Ubuntu"'
    },
    extend: {
      colors: {
        'primary': '#993333',
        'secondary': '#cccc99'
      },
    },
  },
  plugins: [],
}

