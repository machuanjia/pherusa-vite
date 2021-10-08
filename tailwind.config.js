

// const colors = require('tailwindcss/colors')
const colors = require('./colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.tsx'
  ],
  darkMode: 'class', //false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray:colors.gray,
        blue:colors.blue,
        blueGray:colors.blueGray,
        green:colors.green,
        yellow:colors.yellow,
        orange: colors.orange,
        red: colors.red
      },
    },
    backgroundColor: {
      white: 'var(--color-bg-white)',
      main: 'var(--color-bg-main)',
      input: 'var(--color-bg-input)',
      disable: 'var(--color-bg-disable)',
    },
    textColor: {
      white: 'var(--color-text-white)',
      main: 'var(--color-text-main)',
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      placeholder: 'var(--color-text-placeholder)',
      icon: 'var(--color-icon)',
    },
    borderColor:{
      divider:'var(--color-divider)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
