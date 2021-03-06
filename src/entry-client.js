'use strict'

import 'es6-promise/auto'
// css reset
import 'normalize.css/normalize.css'
// 引入 Element 样式表
import 'element-ui/lib/theme-default/index.css'
import { app, store, router } from './app'

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

// wait until router has resolved all async before hooks
// and async components...
router.onReady(() => {
  // actually mount to DOM
  app.$mount('#app')
})

// service worker
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
}
