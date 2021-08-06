/*
 * @Author: D.Y
 * @Date: 2021-08-06 11:18:46
 * @LastEditTime: 2021-08-06 17:46:36
 * @LastEditors: D.Y
 * @FilePath: /pherusa-vite/src/main.tsx
 * @Description: 
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import store from '@stores/store'
import { history } from '@utils/history'
import '@i18n'
import { getAntdLocal } from '@i18n/index'
import 'pherusa-pro/src/styles/index.css';
import './styles/index.less'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Helmet>
      <title>Pherusa</title>
    </Helmet>
    <ConfigProvider locale={getAntdLocal()} componentSize="middle">
      <BrowserRouter basename={import.meta.env.BASE_URL} history={history}>
        <App />
      </BrowserRouter>
    </ConfigProvider>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
)
