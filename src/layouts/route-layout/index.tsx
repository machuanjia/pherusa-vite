/*
 * @Author: D.Y
 * @Date: 2021-02-04 18:55:58
 * @LastEditTime: 2021-10-08 17:52:55
 * @LastEditors: Please set LastEditors
 * @FilePath: /pherusa-vite/src/layouts/route-layout/index.tsx
 * @Description: 
 */
import React, { Component } from 'react';

import { generateRoutes } from '@components/RenderRoute';
import { RouteViewer } from 'pherusa-pro';

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
