<template>
  <div class="list-view">
    <vs-head skin="white"></vs-head>
    <div class="head-back"></div>

    <vs-rowwarp>
      <div class="search-warp">
        <vs-search-map title="国家地区"
                    :showbtn="true"
                    :options="ctyOptions"
                    :active-option="cty"
                    @active-change="handleCtyChange"></vs-search-map>
        <vs-search-map title="签证类别"
                    :options="['不限', '旅游签证', '商务签证', '探亲访友签证', '工作签证', '留学签证', '其他签证']"
                    :active-option="cg"
                    @active-change="handleCgChange"></vs-search-map>
        <vs-search-map title="入境次数"
                    :options="['不限', '单次', '多次', '领馆定']"
                    :active-option="dl"
                    @active-change="handleDlChange"></vs-search-map>
        <vs-search-map title="签证类型"
                    :options="['不限', '贴纸签', '电子签', '另纸签']"
                    :active-option="vt"
                    @active-change="handleVtChange"></vs-search-map>
      </div>
    </vs-rowwarp>

    <vs-rowwarp>
      <vs-sort-map :active-order="order"
                :active-ad="ad"
                @change-order="handleOrderChange"
                @change-ad="handleAdChange"></vs-sort-map>
    </vs-rowwarp>

    <vs-rowwarp>
      <vs-item v-for="item in displayedItems"
            :key="item.id"
            :item="item">
      </vs-item>
      <div class="no-items"
           v-if="displayedItems.length === 0 && !loading">
        没有更多数据啦
      </div>
    </vs-rowwarp>

    <div class="pagination-wrap">
      <el-pagination layout="prev, pager, next"
                     :current-page="page"
                     :total="count"
                     @current-change="handleCurrentChange">
      </el-pagination>
    </div>

    <vs-spinner :show="loading"></vs-spinner>
  </div>
</template>

<script>
'use strict'

import {
  Pagination
} from 'element-ui'

import {
  VsHead,
  VsRowwarp,
  VsItem,
  VsSearchMap,
  VsSortMap,
  VsSpinner
} from '../components'

import { getWhere } from '../filters'

function fetchList(store) {
  // router
  const query = store.state.route.query
  const params = store.state.route.params

  const cty = query.cty || ''
  const cg = query.cg || ''
  const dl = query.dl || ''
  const vt = query.vt || ''
  const order = params.order || '0'
  const ad = params.ad || '0'
  const page = Number(params.page) || 1

  store.dispatch('FETCH_PRE', {
    cty: cty,
    cg: cg,
    dl: dl,
    vt: vt,
    order: order,
    ad: ad,
    page: page
  })

  return store.dispatch('FETCH_LIST_DATA')
}

let isInitialRender = true

export default {
  name: 'item-list',

  components: {
    elPagination: Pagination,
    VsHead,
    VsRowwarp,
    VsItem,
    VsSearchMap,
    VsSortMap,
    VsSpinner
  },

  data() {
    const data = {
      loading: false,
      displayedItems: isInitialRender ? this.$store.getters.activeItems : []
    }
    isInitialRender = false
    return data
  },

  computed: {
    ctyOptions() {
      let obj = { '不限': true, '日本': true, '泰国': true, '新加坡': true, '美国': true, '法国': true, '加拿大': true }
      let cty = this.$store.state.route.query.cty || '不限'
      obj[cty] = true
      return Object.keys(obj)
    },
    cty() {
      return this.$store.state.route.query.cty || '不限'
    },
    cg() {
      return this.$store.state.route.query.cg || '不限'
    },
    dl() {
      return this.$store.state.route.query.dl || '不限'
    },
    vt() {
      return this.$store.state.route.query.vt || '不限'
    },
    order() {
      return this.$store.state.route.params.order || '0'
    },
    ad() {
      return this.$store.state.route.params.ad || '0'
    },
    page() {
      return Number(this.$store.state.route.params.page) || 1
    },
    count() {
      console.log(this.$store.state.count)
      return this.$store.state.count || 0
    }
  },

  preFetch: fetchList,

  beforeMount() {
    // console.log('beforeMount')
    // console.log(this.$root._isMounted)
    if (this.$root._isMounted) {
      // console.info('客户端动态获取列表')
      this.loadItems()
    }
  },

  watch: {
    '$route'(to, from) {
      // console.log('watch $route from')
      // console.log(from)
      // console.log('watch $route to')
      // console.log(to)
      this.loadItems()
    }
  },

  methods: {
    loadItems() {
      this.loading = true
      this.$store.dispatch('FETCH_LIST_DATA').then(() => {
        this.displayedItems = this.$store.getters.activeItems
        this.loading = false
      })
    },
    handleCtyChange(val) {
      this.$store.dispatch('FETCH_PRE', { page: 1, cty: val === '不限' ? '' : val })
      const pre = this.$store.state.pre
      const where = getWhere(pre)
      this.$router.push(`/list/${pre.page}/${pre.order}/${pre.ad}${where}`)
    },
    handleCgChange(val) {
      // console.log(this.$store.state.pre)
      this.$store.dispatch('FETCH_PRE', { page: 1, cg: val === '不限' ? '' : val })
      const pre = this.$store.state.pre
      const where = getWhere(pre)
      // console.log(pre)
      this.$router.push(`/list/${pre.page}/${pre.order}/${pre.ad}${where}`)
    },
    handleDlChange(val) {
      this.$store.dispatch('FETCH_PRE', { page: 1, dl: val === '不限' ? '' : val })
      const pre = this.$store.state.pre
      const where = getWhere(pre)
      this.$router.push(`/list/${pre.page}/${pre.order}/${pre.ad}${where}`)
    },
    handleVtChange(val) {
      this.$store.dispatch('FETCH_PRE', { page: 1, vt: val === '不限' ? '' : val })
      const pre = this.$store.state.pre
      const where = getWhere(pre)
      this.$router.push(`/list/${pre.page}/${pre.order}/${pre.ad}${where}`)
    },
    handleOrderChange() {
      let val = this.order === '0' ? '1' : '0'
      this.$store.dispatch('FETCH_PRE', { order: val })
      const pre = this.$store.state.pre
      const where = getWhere(pre)
      this.$router.push(`/list/${pre.page}/${pre.order}/${pre.ad}${where}`)
    },
    handleAdChange() {
      // console.log(this.ad)
      let val = this.ad === '0' ? '1' : '0'
      // console.log(val)
      this.$store.dispatch('FETCH_PRE', { ad: val })
      const pre = this.$store.state.pre
      const where = getWhere(pre)
      this.$router.push(`/list/${pre.page}/${pre.order}/${pre.ad}${where}`)
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.$store.dispatch('FETCH_PRE', { page: val })
      const pre = this.$store.state.pre
      const where = getWhere(pre)
      this.$router.push(`/list/${pre.page}/${pre.order}/${pre.ad}${where}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-view
  min-height 800px
  background #f5f5f5
.head-back
  padding-top 72px
  // background-image url(/public/carousel1.jpg)
  // background-size cover
  // background-position top
.search-warp
  margin 8px 0
  padding 16px
  background #fff
.no-items
  height 80px
  background #fff
  text-align center
  padding-top 50px
  color #666
.pagination-wrap
  text-align center
  padding 20px 0
</style>
