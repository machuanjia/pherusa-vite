/*
 * @Author: D.Y
 * @Date: 2021-08-06 11:18:46
 * @LastEditTime: 2021-10-08 19:01:25
 * @LastEditors: Please set LastEditors
 * @FilePath: /pherusa-vite/vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import styleImport from 'vite-plugin-style-import'
import { resolve } from 'path'
import htmlPlugin from 'vite-plugin-html-config'
const config = require('./server/config').config;

// @primary-color: #1890ff; // 全局主色
// @link-color: #1890ff; // 链接色
// @success-color: #52c41a; // 成功色
// @warning-color: #faad14; // 警告色
// @error-color: #f5222d; // 错误色
// @font-size-base: 14px; // 主字号
// @heading-color: rgba(0, 0, 0, 0.85); // 标题色
// @text-color: rgba(0, 0, 0, 0.65); // 主文本色
// @text-color-secondary: rgba(0, 0, 0, 0.45); // 次文本色
// @disabled-color: rgba(0, 0, 0, 0.25); // 失效色
// @border-radius-base: 2px; // 组件/浮层圆角
// @border-color-base: #d9d9d9; // 边框色
// @box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
//   0 9px 28px 8px rgba(0, 0, 0, 0.05); // 浮层阴影

const modifyVars = {
  // '@laiye-primary-color': '#2249c0',
  // '@laiye-link-color': '#2249c0',
  // antd
  '@primary-color':'#2249c0',
  '@link-color':'#2249c0',
  '@success-color':'#37b184',
  '@warning-color':'#ffb413',
  '@error-color':'#ff3e27',
  '@heading-color':'#000',
  '@text-color':'#425b6d',
  '@text-color-secondary':'#687c8a',
  '@disabled-color':'#ccc',
  '@border-radius-base':'4px',
  '@border-color-base':'#eceef0'
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

