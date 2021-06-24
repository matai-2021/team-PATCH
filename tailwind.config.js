module.exports = {
  purge: ['./public/**/*.html'], // purge option to remove any unused classes to out put the smallest file size for production
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { // demo purposes, otherwise just delete the whole colors object
        puce: '#cc8899'
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
  variants: {},
  plugins: []
}
