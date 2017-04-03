import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// We are using Webpack code splitting here so that each route's associated
// component code is loaded on-demand only when the route is visited.
// It's actually not really necessary for a small project of this size but
// the goal is to demonstrate how to do it.
//
// Note that the dynamic import syntax should actually be just `import()`
// but buble/acorn doesn't support parsing that syntax until it's stage 4
// so we use the old System.import here instead.
//
// If using Babel, `import()` can be supported via
// babel-plugin-syntax-dynamic-import.

'use strict'

const ListView = () => System.import('../views/ListView.vue')
const ItemView = () => System.import('../views/ItemView.vue')
const NewOrderView = () => System.import('../views/NewOrderView.vue')
const AboutView = () => System.import('../views/AboutView.vue')
const CooperateView = () => System.import('../views/CooperateView.vue')
const ContactView = () => System.import('../views/ContactView.vue')
const HomeView = () => System.import('../views/HomeView.vue')

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { name: 'list', path: '/list/:page(\\d+)?/:order(\\d+)?/:ad(\\d+)?', component: ListView },
    { name: 'item', path: '/item/:_id(\\d+)', component: ItemView },
    { name: 'neworder', path: '/neworder', component: NewOrderView },
    { name: 'about', path: '/about', component: AboutView },
    { name: 'cooperate', path: '/cooperate', component: CooperateView },
    { name: 'contact', path: '/contact', component: ContactView },
    { name: 'home', path: '/', component: HomeView}
  ]
})

// router.beforeEach((to, from, next) => {
//   console.log('---- beforeEach from')
//   console.log(from)
//   console.log('---- beforeEach to')
//   console.log(to)
//   next()
// })

export default router
