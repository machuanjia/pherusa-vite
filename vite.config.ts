/*
 * @Author: D.Y
 * @Date: 2021-08-06 11:18:46
 * @LastEditTime: 2021-08-06 18:44:40
 * @LastEditors: D.Y
 * @FilePath: /pherusa-vite/vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import styleImport from 'vite-plugin-style-import'
import { resolve } from 'path'
import htmlPlugin from 'vite-plugin-html-config'
const config = require('./server/config').config;

const modifyVars = {
  '@laiye-primary-color': '#2249c0',
  '@laiye-link-color': '#2249c0',
  '@color-primary': '#2249c0',
  '@color-blue': '#79adf8',
  '@color-black': '#000',
  '@border-gray': '#d9dee2',
  '@color-blue-dark': '#3f5361',
  '@color-blue-normal': '#677a8e',
  '@color-blue-light': '#8e9ca8',
  '@color-light': '#f5f7f7',
  '@color-danger': '#ff3e27',
  '@color-warning': '#feb312',
  '@color-success': '#37b184',
  '@color-white': '#fff',
  '@color-gray': '#666666',
  '@color-light-gray': '#f0f2f5',
  '@color-label-gray': '#425b6d',
  '@color-normal-gray': '#687c8a',

  // 功能划分
  '@border': '@color-light',

  '@icon': '@color-blue-light',
  '@icon-white': '@color-white',
  '@icon-dark': '@color-blue-dark',
  '@icon-primary': '@color-primary',

  '@text-white': '@color-white',
  '@text-black': '@color-black',
  '@text-primary': '@color-primary',
  '@text-danger': '@color-danger',
  '@text-success': '@color-success',
  '@text-warning': '@color-warning',
  '@text-desc': '@color-blue-normal',
  '@text-empty': '@color-blue-light',
  '@text-dark': '@color-blue-dark',

  '@bg-primary': '@color-blue',
  '@bg-warning': '@color-warning',
  '@bg-main': '@color-light-gray',
  '@bg-white': '@color-white',
  '@table-shadow': '0 2px 8px 0 rgba(0, 0, 0, .1)',
  '@shadow-gray': '#b3bdc5',
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // @ts-ignore
      "@": resolve(__dirname, "src"),
      // @ts-ignore
      "@apis": resolve(__dirname, "src/apis"),
      // @ts-ignore
      "@components": resolve(__dirname, "src/components"),
      // @ts-ignore
      "@constants": resolve(__dirname, "src/constants"),
      // @ts-ignore
      "@i18n": resolve(__dirname, "src/i18n"),
      // @ts-ignore
      "@layouts": resolve(__dirname, "src/layouts"),
      // @ts-ignore
      "@stores": resolve(__dirname, "src/stores"),
      // @ts-ignore
      "@styles": resolve(__dirname, "src/styles"),
      // @ts-ignore
      "@views": resolve(__dirname, "src/views"),
      // @ts-ignore
      "@utils": resolve(__dirname, "src/utils"),
      // @ts-ignore
      "@routes": resolve(__dirname, "src/routes"),
      // @ts-ignore
      "@interfaces": resolve(__dirname, "src/interfaces"),
  },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars,
      },
    },
  },
  plugins: [
    reactRefresh(),
    styleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (module) => `antd/es/${module}/style/index`,
        },
      ],
    }),
      htmlPlugin({
        scripts: [{ content: `window.APP_CONFIGRATION=${JSON.stringify(config)};` }],
      }),
  ],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:' + 4000,
        changeOrigin: true,
      },
    },
  },
})

