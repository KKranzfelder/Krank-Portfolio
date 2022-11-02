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
          '0%': { transform: 'scaleX(125%) translateX(10%)', opacity: '.5'},
          '50%': { transform: 'scaleX(200%) translateX(-20%)', opacity: '1'},
          '100': { transform: 'scaleX(150%) translateX(30%)', opacity: '.25'},
        }
      },
      animation: {
        waveFast: 'wave 2s ease-in-out infinite alternate',
        wave: 'wave 3s ease-in-out infinite alternate',
        waveSlow: 'wave 4s ease-in-out infinite alternate',
        waveSlowest: 'wave 5s ease-in-out infinite alternate'
      }
    },
  },
  plugins: [],
}
