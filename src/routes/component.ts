/*
 * @Author: D.Y.M
 * @Date: 2021-08-06 15:16:39
 * @LastEditTime: 2021-10-08 16:55:15
 * @FilePath: /pherusa-vite/src/routes/component.ts
 * @Description: 
 */
import RouteLayout from '@layouts/route-layout'
import i18n from 'i18next'
import { asyncComponent } from 'pherusa-pro'

const tableView = asyncComponent(() => import('@views/comps/table/index'))

const componentsRoute = {
  path: '/components',
  component: RouteLayout,
  meta: {
    key: 'Components',
    name: i18n.t('router.component'),
    icon: 'table',
  },
  children: [
    {
      path: '/components/list',
      component: tableView,
      meta: {
        key: 'CList',
        name: i18n.t('router.list'),
        icon: 'table'
      },
    }
  ],
}
export default componentsRoute
