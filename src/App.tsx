/*
 * @Author: D.Y
 * @Date: 2021-02-04 15:27:20
 * @LastEditTime: 2021-08-06 17:14:04
 * @LastEditors: D.Y
 * @FilePath: /pherusa-vite/src/App.tsx
 * @Description:
 */

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { generateRoutes } from '@components/RenderRoute/index'
import store from '@stores/store'

class App extends Component {
  render() {
    const { routers } = store.getState().app
    return routers && generateRoutes(routers)
  }
}
export default withRouter(App)
