const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkmode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': 'url(./assets/images/Nairobi.jpeg)',
        'error-image': 'url(./assets/blurry-gradient-haikei.svg)',
      },
      colors:
      {
        primary: '#6600cc',
        secondary: '#00ff55',
      }
    },
  },
  plugins: [
    require("tailwindcss-scrollbar")
  ],
}
