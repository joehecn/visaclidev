'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import { getData } from './api'
import { getWhere } from '../filters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pre: {
      page: 1,
      order: '0', // _id price
      ad: '0',    // 'DESC' 'ASC'
      cty: '',    // 日本
      vt: '',     // 贴纸签
      cg: '',     // 旅游签证
      dl: ''      // 单次
    },
    limit: 10,
    count: 0,
    list: []
  },

  actions: {
    FETCH_PRE: ({ commit }, obj) => {
      commit('SET_PRE', obj)
    },
    FETCH_HOME_DATA: ({ commit }) => {
      // let cachedIds = getIdsFromSev()
      // console.log(cachedIds)
      let ids = '1598,1535,1324,1618,1394,1510'
      return getData(`/ids?ids=${ids}`).then(data => {
        commit('SET_LIST', { data })
      })
    },
    FETCH_LIST_DATA: ({ commit, state }) => {
      // console.log('FETCH_LIST_DATA')
      let params = state.route.params
      let page = Math.abs(Number(params.page)) || 1
      let order = params.order || '0' // '0' ? '_id' : 'price'
      let ad = params.ad || '0'       // '0' ? 'DESC' : 'ASC'
      let limit = state.limit
      let offset = (page - 1) * limit

      let where = getWhere(state.route.query)

      return getData(`/visas/${order}/${ad}/${limit}/${offset}${where}`).then(data => {
        commit('SET_LIST', { data })
      })
    },

    FETCH_ITEMS: ({ commit, state }) => {
      // console.log('FETCH_ITEMS')
      let _id = state.route.params._id || '1'

      return getData(`/visa/${_id}`).then(data => {
        commit('SET_LIST', { data })
      })
    }
  },

  mutations: {
    SET_PRE: (state, obj) => {
      Object.keys(obj).forEach(key => {
        state.pre[key] = obj[key]
      })
    },
    SET_LIST: (state, { data }) => {
      if (data.success && data.success === 1) {
        state.count = data.count
        state.list = data.list
      } else {
        state.count = 0
        state.list = []
      }
    }
  },

  getters: {
    activeItems (state) {
      return state.list
    }
  }
})

export default store
