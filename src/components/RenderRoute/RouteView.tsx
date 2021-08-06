/*
 * @Author: D.Y
 * @Date: 2021-04-22 17:15:14
 * @LastEditTime: 2021-08-06 16:28:06
 * @LastEditors: D.Y
 * @FilePath: /pherusa-vite/src/components/RenderRoute/RouteView.tsx
 * @Description:
 */
import React, { Component } from 'react'
import { generateRoutes } from './index'
import { withRouter } from 'react-router-dom'

type IRouteViewProps = {
  routers?: Record<string, unknown>[]
}
class RouteViewer extends Component<IRouteViewProps, any> {
  render() {
    const { routers } = this.props
    return <>{generateRoutes(routers as any)}</>
  }
}
export default withRouter(RouteViewer as any)
