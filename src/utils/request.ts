/*
 * @Author: D.Y
 * @Date: 2021-08-06 15:17:18
 * @LastEditTime: 2021-10-08 17:53:25
 * @LastEditors: Please set LastEditors
 * @FilePath: /pherusa-vite/src/utils/request.ts
 * @Description: 
 */
import { logout } from '@utils/index'
import { getToken } from '@utils/index'
import { message } from 'antd'
import { getRequest } from 'pherusa-pro'

export default getRequest({
  // @ts-ignore
  baseURL: APP_CONFIGRATION.api,
  // @ts-ignore
  requestAction: (config: any) => {
    config.headers.authorization = `Bearer ${getToken()}`
  },
  responseAction: (res) => {
    // eslint-disable-next-line no-debugger
    const { code, data } = res
    if (code !== 200) {
      if (code === 10001) {
        message.error('没有权限登录，请联系渠道经理!')
      } else if (code === 10003) {
        message.error('验证码无效!')
      } else if (code === 10004) {
        message.error('用户没有登录，请重新登录!')
        logout()
      } else if (code === 10010) {
        logout()
      }
      return Promise.reject(res)
    }
    return res
  },
})
