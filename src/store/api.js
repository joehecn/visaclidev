// this is aliased in webpack config based on server/client build
import api from 'axios'

api.defaults.baseURL = 'http://vnode.c75d723e5dfd54de0b419e31bf33da8c3.cn-shenzhen.alicontainer.com'

export function getData (uri) {
  return new Promise((resolve, reject) => {
    api.get(`/api/noauth${uri}`).then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  })
}
