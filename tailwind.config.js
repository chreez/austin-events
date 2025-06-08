/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        sunset: '#ff6b35',
        turquoise: '#09c1b3',
        cactus: '#4aae4f',
        hotpink: '#ff3971',
        earth: '#a78b71',
        limestone: '#f2f0e8'
      },
      fontFamily: {
        display: ['"Bungee"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif']
      }
    }
  },
  plugins: [daisyui]
};
