/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0%)', opacity: '.5'},
          '25%' : {transform: 'translateX(12.5%) translateY(-5%)', opacity: '.625'},
          '50%': {transform: 'translateX(25%) translateY(10%)', opacity:'.75'},
          '100%': { transform: 'translateX(50%)', opacity: '.5'},
        }
      },
      animation: {
        waveFast: 'wave 3s linear infinite',
        wave: 'wave 4s linear infinite',
        waveSlow: 'wave 5s linear infinite',
        waveSlowest: 'wave 6s linear infinite'
      }
    },
  },
  plugins: [],
}
