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
          '0%, 100%': { transform: 'scaleX(125%) translateX(10%)', opacity: '.5'},
          '50%': { transform: 'scaleX(200%) translateX(-20%)', opacity: '1'}
        }
      },
      animation: {
        waveFast: 'wave 2.5s ease-in-out infinite',
        wave: 'wave 3s ease-in-out infinite',
        waveSlow: 'wave 3.5s ease-in-out infinite',
        waveSlowest: 'wave 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
