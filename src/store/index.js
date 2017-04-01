import Vue from 'vue'
import Vuex from 'vuex'
import { fetchItems, fetchListData, getData } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    limit: 10,
    count: 0,
    list: []
  },

  actions: {
    FETCH_LIST_DATA: ({ commit, state }) => {
      console.log('FETCH_LIST_DATA')

      let params = state.route.params
      let page = Math.abs(Number(params.page)) || 1
      let order = params.order || '0' // '0' ? '_id' : 'price'
      let ad = params.ad || '0'       // '0' ? 'DESC' : 'ASC'
      let limit = state.limit
      let offset = (page - 1) * limit

      return getData(`/visas/${order}/${ad}/${limit}/${offset}`).then(data => {
        commit('SET_LIST', { data })
      })
    },

    FETCH_ITEMS: ({ commit, state }) => {
      console.log('FETCH_ITEMS')

      let _id = state.route.params._id || '1'

      return getData(`/visa/${_id}`).then(data => {
        commit('SET_LIST', { data })
      })
    }
  },

  mutations: {
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
