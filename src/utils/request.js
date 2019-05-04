import axios from 'axios'
import { getToken, removeToken } from '@/utils/auth'
const service = axios.create({
  timeout: 15000,
  withCredentials: false
})
// 发送请求拦截器
service.interceptors.request.use(
  config => {
    var localToken = getToken()
    if (localToken) {
      // 携带token
      config.headers.TOKEN = localToken
    }
    // 微信添加timestamp
    // config.url = dealUrl(config)
    // config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// function dealUrl (config) {
//   let url = config.url
//   let res = url
//   if (url.indexOf('timestamp') < 0 && config.method === 'get') {
//     let timestamp = new Date().getTime()
//     if (url.indexOf('?') >= 0) {
//       res = res + '&timestamp=' + timestamp
//     } else {
//       res = res + '?timestamp=' + timestamp
//     }
//   }
//   return res
// }

// respone拦截器
service.interceptors.response.use(
  response => {
    const rescode = response.data.code
    if (rescode === '0') {
      return response
      // 通过返回码判断清除token
    } else if (rescode === '-4') {
      this.$message('token失效 重新登陆')
      removeToken()
      // 路由会回跳登录页面
      // router.push({path: '/login'})
    } else {
      console.log(response.data.msg)
      return response
    }
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
// 封装请求方法
const get = (url, params = {}) => {
  debugger
  return new Promise((resolve, reject) => {
    service.get(url, {
      params: params
    })
      .then(response => {
        console.info(url)
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    service.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

const drop = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    service.delete(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

const patch = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    service.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

const put = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    service.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
// 导出
export const apis = { get, post, drop, patch, put }

export default service
