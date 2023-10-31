/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bright-orange': '#e38826',
      'dark-cyan': '#006970',
      'very-dark-cyan': '#004241',
      'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
      'very-light-gray': '#f2f2f2'
    }
  },
  plugins: [],
}

