/*
 * @Author: D.Y.M
 * @Date: 2021-09-29 15:01:12
 * @LastEditTime: 2021-09-30 11:33:43
 * @FilePath: /pherusa-vite/tailwind.config.js
 * @Description: 
 */
const colors = require('tailwindcss/colors')

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
        // amber: colors.amber,
        // lime: colors.lime,
        // rose: colors.rose,
        // orange: colors.orange,
        primary: 'var(--color-primary)'
      },
    },
    // backgroundColor: {
    //   primary: 'var(--color-primary)',
    // },
    // textColor: {
    //   primary: 'var(--color-primary)',
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
