'use strict'

import axios from 'axios'

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? 'http://vnode:8989'
    : 'http://vnode.c75d723e5dfd54de0b419e31bf33da8c3.cn-shenzhen.alicontainer.com'

export default axios
