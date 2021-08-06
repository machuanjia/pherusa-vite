/*
 * @Author: D.Y
 * @Date: 2021-02-04 18:55:58
 * @LastEditTime: 2021-08-06 16:05:22
 * @LastEditors: D.Y
 * @FilePath: /pherusa-vite/src/layouts/route-layout/index.tsx
 * @Description: 
 */
import React, { Component } from 'react';
import { RouteViewer } from 'pherusa-pro';
import { generateRoutes } from '@components/RenderRoute';
type IRouterProps = {
  route: any;
};

type IRouterState = Record<string, unknown>;

export default class RouteLayout extends Component<IRouterProps, IRouterState> {
  render() {
    const { route } = this.props;
    return generateRoutes(route.children)
  }
}
