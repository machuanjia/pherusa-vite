/*
 * @Author: D.Y
 * @Date: 2021-04-21 17:38:42
 * @LastEditTime: 2021-10-08 17:48:22
 * @LastEditors: Please set LastEditors
 * @FilePath: /pherusa-vite/src/permission.ts
 * @Description: 
 */

import { getUserInfo } from '@apis/users'
import routes, { asyncRouters, ROUTE_APP_KEY } from '@routes/index'
import {
  SET_PERMISSIONS,
  SET_ROLES,
  SET_ROUTERS,
  SET_USET_ID,
  SET_FLATTEN_ROUTERS,
} from '@stores/app/app.types'
import store from '@stores/store'
import { find, uniqBy } from 'lodash'
import { setPermissions, filterAsyncRoutes, filterFlattenRoutes } from 'pherusa-pro'

export const getAuthRoutes = () => {
  const asyncRoutes = filterAsyncRoutes(asyncRouters as any)
  const app = find(routes, (n) => {
    return n.meta.key === ROUTE_APP_KEY
  })
  app &&
    (app.children = uniqBy([...app.children, ...asyncRoutes], (n) => {
      return n.meta.key
    }))
  return routes
}

export const setInfo = async () => {
  return getUserInfo().then(
    ({ data }) => {
      const { roles = [], permissions = [] } = data
      store.dispatch({
        type: SET_USET_ID,
        id: data._id,
      })
      store.dispatch({
        type: SET_ROLES,
        roles,
      })
      store.dispatch({
        type: SET_PERMISSIONS,
        permissions,
      })
      setPermissions(permissions)
      const routesArray = getAuthRoutes()
      const flattenRouters = filterFlattenRoutes(routesArray as any)
      store.dispatch({
        type: SET_ROUTERS,
        routers: routesArray,
      })
      store.dispatch({
        type: SET_FLATTEN_ROUTERS,
        flattenRouters,
      })
      return true
    },
    () => {
      return false
    },
  )
}
