/*
 * @Author: D.Y
 * @Date: 2021-04-20 10:06:53
 * @LastEditTime: 2021-10-08 17:42:53
 * @LastEditors: Please set LastEditors
 * @FilePath: /pherusa-vite/src/utils/history.ts
 * @Description:
 */

import { browserHistory } from 'pherusa-pro'

import { removeToken } from './catch'

export const history = browserHistory
export const logout = () => {
  // history.push('/login')
  removeToken()
  window.location.href = `${window.location.protocol}//${window.location.host}${import.meta.env.PUBLIC_URL}/login`
}
