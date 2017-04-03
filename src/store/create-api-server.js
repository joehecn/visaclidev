'use strict'

import axios from 'axios'

axios.defaults.baseURL = 'http://vnode.c75d723e5dfd54de0b419e31bf33da8c3.cn-shenzhen.alicontainer.com'

let api

if (process.__API__) {
  api = process.__API__
} else {
  api = process.__API__ = {
    axios: axios
  }
  api.onServer = true
  // api.cachedIds = []

  // let ids = '941,1074,1106,2624,1129,904'
  // axios.get(`/api/noauth/ids?ids=${ids}`).then(function (response) {
  //   let data = response.data
  //   if (data.success === 1) {
  //     api.cachedIds = data.list
  //   }
  // }).catch(function (error) {
  //   console.log(error)
  // })
}

export default api
