module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        osuOrange: '#D73F09'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
