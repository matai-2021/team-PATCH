module.exports = {
  purge: ['./public/**/*.html'], // purge option to remove any unused classes to out put the smallest file size for production
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transition: 'ease-in-out', transform: 'rotate(-3deg)' },
          '50%': { transition: 'ease-in-out', transform: 'rotate(3deg)' }
        }
      },
      animationDelay: {
        wiggle: '0.5s'
      },
      colors: { // demo purposes, otherwise just delete the whole colors object
        puce: '#cc8899',
        pokedex: '#ff2431',
        gold: '#FFD700'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
    }
  },
  variants: {
    extend: {
      dropShadow: ['hover', 'focus'],
      animation: ['hover', 'focus'],
      transitionDelay: ['hover', 'focus'],
      transitionProperty: ['hover', 'focus']
    }
  },
  plugins: []
}
