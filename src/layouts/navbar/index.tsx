/*
 * @Author: D.Y
 * @Date: 2021-02-04 15:27:20
 * @LastEditTime: 2021-10-08 17:52:22
 * @LastEditors: Please set LastEditors
 * @FilePath: /pherusa-vite/src/layouts/navbar/index.tsx
 * @Description: 
 */
import React, { Component } from 'react';

import store from '@stores/store';
import i18n from 'i18next';
import { find } from 'lodash';
import { withRouter } from 'react-router-dom';

import styles from './index.module.less';

type INavbarProps = {
  location: {
    pathname: string;
  };
};
type INavbarState = Record<string, unknown>;

class NavbarComponent extends Component<INavbarProps, INavbarState> {
  render() {
    const route = find(store.getState().app.flattenRouters, { path: this.props.location.pathname });

    let title = '来也';
    let icon = null;
    if (route && route.meta) {
      title = i18n.t(route.meta.name);

      icon = <i className={route.meta.className}></i>
    }

    return (
      <div className={styles['nav-bar-wrap']}>
        <div className={styles['nav-bar-title']}>
          {icon}
          <span className="ml-3">{title}</span>
        </div>
      </div>
    );
  }
}
export default withRouter(NavbarComponent);


