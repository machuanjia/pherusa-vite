/*
 * @Author: D.Y
 * @Date: 2021-02-04 15:27:20
 * @LastEditTime: 2021-10-08 17:16:33
 * @LastEditors: Please set LastEditors
 * @FilePath: /pherusa-vite/src/stores/app/app.reducers.ts
 * @Description:
 */
import routes from '@routes/index'

import * as actionTypes from './app.types'

import type { AppState, AppAction } from '@interfaces/index'

const initialState: AppState = {
  token: '',
  permissions: [],
  roles: [],
  routers: routes,
  flattenRouters: [],
  id: '',
  isMicro: false
}

const reducer = (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      }
    case actionTypes.SET_PERMISSIONS:
      return {
        ...state,
        permissions: action.permissions,
      }
    case actionTypes.SET_ROLES:
      return {
        ...state,
        roles: action.roles,
      }
    case actionTypes.SET_ROUTERS:
      return {
        ...state,
        routers: action.routers,
      }
    case actionTypes.SET_FLATTEN_ROUTERS:
      return {
        ...state,
        flattenRouters: action.flattenRouters,
      }
    case actionTypes.SET_USET_ID:
      return {
        ...state,
        id: action.id,
      }
    case actionTypes.SET_MICRO:
      return {
        ...state,
        isMicro:action.isMicro
      }  
    default:
      break
  }
  return state
}

export default reducer
