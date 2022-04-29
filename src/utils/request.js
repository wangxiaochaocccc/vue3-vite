/*
 * axios二次封装
 * @Author: 王超
 * @Date: 2022-04-29 18:04:07
 * @Last Modified by: 王超
 * @Last Modified time: 2022-04-29 18:52:35
 */
import axios from 'axios'
import envConfig from './../config'
import { ElMessage } from 'element-plus'
import router from '../router'

// 定义常量
const TOKEN_INVALID = 'token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'

// 创建axios实例化对象，添加全局配置
const service = axios.create({
  baseURL: envConfig.baseApi,
  timeout: 8000
})

// 请求拦截
service.interceptors.request.use((req) => {
  // todo
  const headers = req.headers
  if (!headers.Authorization) headers.Authorization = 'bear jack'
  return req
})

// 响应拦截
service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data
  if (code === 200) {
    return data
  } else if (code === 4001) {
    ElMessage.error(TOKEN_INVALID)
    setTimeout(() => {
      router.push('/login')
    }, 1500)
    return Promise.reject(TOKEN_INVALID)
  } else {
    ElMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})

// 请求和核心函数
function request(options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data //post和get所需参数不同，在这里统一一下
  }

  if (envConfig === 'prod') {
    service.defaults.baseURL = envConfig.baseApi
  } else {
    service.defaults.baseURL = envConfig.mock
      ? envConfig.mockApi
      : envConfig.baseApi
  }

  return service(options)
}

// 满足链式调用需求
let methodArr = ['get', 'post', 'delete', 'put', 'patch']

methodArr.forEach((item) => {
  request[item] = (url, data, options) => {
    return request({
      method: item,
      url,
      data,
      ...options
    })
  }
})

export default request
