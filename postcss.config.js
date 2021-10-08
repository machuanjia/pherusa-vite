/*
 * @Author: D.Y.M
 * @Date: 2021-09-29 14:59:42
 * @LastEditTime: 2021-10-08 16:45:57
 * @FilePath: /pherusa-vite/postcss.config.js
 * @Description: 
 */
module.exports = {
    plugins:[
        require('tailwindcss'),
        require('postcss-custom-properties'),
        require('autoprefixer')
    ]
}