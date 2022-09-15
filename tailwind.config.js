/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {},
      backgroundImage: {
        roadmap:
          'linear-gradient(158deg, #ff8139 77%, rgba(235, 105, 168, 0.514) 100%)',
        partner:
          'linear-gradient(transparent 0%,rgba(30,30,30,0.8) 100%) rgba(30,30,30,0)',
      },
      boxShadow: {
        roadmap: '0px 0px 6px 3px #af0412',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
        scrollUpSidebar: {
          '0%': {
            clipPath: 'inset(175px 0px 0px 0px)',
          },
          '100%': {
            clipPath: 'inset(0px 0px 0px 0px)',
          },
        },
        reactButtonApper: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0px)',
          },
        },
        reactButtonAnimation: {
          '0%': {
            transform: 'scale(0)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        scrollUpSidebar: 'scrollUpSidebar 1s linear',
        reactButtonApper: 'reactButtonApper .8s linear',
        reactButtonAnimation: 'reactButtonAnimation .5s linear',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
