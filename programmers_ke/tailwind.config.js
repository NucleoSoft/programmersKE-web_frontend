const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // animation: 
      // {
      //   slide: 'slide 10s infinite linear',
      // },

      // keyframes: 
      // {
      //   slide: 
      //   {
      //     '0%': {transform: 'translateX (100%)',},
      //     '25%': {transform: 'translateX (100%)',},
      //     '50%': { transform: 'translateY (100%)', },
      //     '75%': {transform: 'translateX(100%)',},
      //     '100%': { transform: 'translateY(100%)', },
      //   },
      // },
      animation:{
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: 
      {
        tilt: 
        {
          '0%, 50%, 100%' : 
          {
            transform: 'rotate(0deg)',
          },
          '25%' :
          {
            transform: 'rotate(1deg)',
          },
          '75%' :
          {
            transform: 'rotate(-1deg)',
          },
        },
      },
      backgroundImage: {
        'hero-image': 'url(./assets/images/Nairobi.jpeg)',
        'error-image': 'url(./assets/blurry-gradient-haikei.svg)',
        'footer-image': 'url(./assets/wave-haikei.svg)',
      },
      colors:
      {
        transparent: 'transparent',
        currentColor: 'currentColor',
        primary: '#6600cc',
        secondary: '#00ff55',
        'sky-blue': '#33ffff',
      },
      fontFamily:
      {
        'adventpro': '"Advent Pro"',
        'zrnic': 'Zrnic',
        'audiowide': 'Audiowide',
        'novaflat' : '"Nova Flat"',
      }
    },
  },
  plugins: [
    require("tailwindcss-scrollbar")
  ],
}
