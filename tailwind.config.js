import plugin from 'tailwindcss/plugin'
import scrollbar from 'tailwindcss-scrollbar'
import textshadow from 'tailwindcss-textshadow'
import gradients from 'tailwindcss-gradients'

export default {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
    backgroundImage: {
      'gradient-1': "url('./assets/images/404.png')",
      'tutorial_image': "url('./assets/images/Tutorial.png')",
      'learn_image' : "url('./assets/images/Tech.png')",
      'community_image' : "url('./assets/images/Community.png')",
    },
    textShadow:
      {
        default:'0px 2px 8px var(--tw-shadow-color)',
        sm: '0px 0px 2px var(--tw-shadow-color)',
        md: '0px 0px 8px var(--tw-shadow-color)',
        lg: '0px 0px 16px var(--tw-shadow-color)',
      },
    gradients: {
      'radial': {
          type: 'radial',
          colors: ['white', 'transparent'],
        },
      },
    colors:
      {
        transparent: 'transparent',
        currentColor: 'currentColor',
        primary: '#6600cc',
        secondary: '#00ff55',
        'sky-blue': '#33ffff',
        'dark-theme': '#1e293b',
        'light-theme': '#7d99a2'
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
    scrollbar,
    textshadow,
    gradients,

    plugin(function ({matchUtilities, theme})
    {
      matchUtilities(
        {
          'text-shadow' : (value) => ({
            textShadow : value,
          }),
        },
        { values: theme('textShadow')}
      )
    }),
  ],
}
