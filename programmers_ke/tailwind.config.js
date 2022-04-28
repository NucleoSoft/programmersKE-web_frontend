const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
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
