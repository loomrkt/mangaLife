/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF9F1C',
      },
    },
  },
  plugins: [require('preline/plugin'),],
}
