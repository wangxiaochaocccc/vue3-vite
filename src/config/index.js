/**
 * 环境配置封装
 */

const env = import.meta.env.MODE || 'prod'

const configEnv = {
  dev: {
    baseApi: '/',
    mockApi:
      'https://www.fastmock.site/mock/6a9f78bd5edac620206b31996fd4e394/manager'
  },
  test: {
    baseApi: '/',
    mockApi:
      'https://www.fastmock.site/mock/6a9f78bd5edac620206b31996fd4e394/manager'
  },
  prod: {
    baseApi: '/',
    mockApi: ''
  }
}

export default {
  env,
  mock: true,
  ...configEnv[env]
}
