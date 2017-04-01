<template>
  <div class="list-view">
    <div class="head-back"></div>
    <rowwarp>
      <search-map></search-map>
    </rowwarp>
    <rowwarp>
      <item v-for="item in displayedItems" :key="item.id" :item="item">
      </item>
    </rowwarp>

    <div class="pagination-wrap">
      <el-pagination
        layout="prev, pager, next"
        :current-page="page"
        :total="count"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>

    <spinner :show="loading"></spinner>
  </div>
</template>

<script>
'use strict'

import {
  Pagination
} from 'element-ui'

import Rowwarp from '../components/Rowwarp.vue'
import Item from '../components/Item.vue'
import SearchMap from '../components/SearchMap.vue'
import Spinner from '../components/Spinner.vue'

function fetchList (store) {
  return store.dispatch('FETCH_LIST_DATA')
}

let isInitialRender = true

export default {
  name: 'item-list',

  components: {
    elPagination: Pagination,
    Rowwarp,
    Item,
    SearchMap,
    Spinner
  },

  data () {
    const data = {
      loading: false,
      displayedItems: isInitialRender ? this.$store.getters.activeItems : []
    }
    isInitialRender = false
    return data
  },

  computed: {
    params () {
      return this.$store.state.route.params
    },
    page () {
      return Number(this.$store.state.route.params.page) || 1
    },
    count () {
      return this.$store.state.count
    }
    // maxPage () {
    //   const { itemsPerPage, lists } = this.$store.state
    //   return 1
    // },
    // hasMore () {
    //   return this.page < this.maxPage
    // }
  },

  preFetch: fetchList,

  beforeMount () {
    console.log('beforeMount')
    console.log(this.$root._isMounted)
    if (this.$root._isMounted) {
      console.info('客户端动态获取列表')
      this.loadItems()
    }
  },

  watch: {
    params (to, from) {
      console.log('watch params')
      console.log(to, from)
      this.loadItems()
    }
  },

  methods: {
    loadItems () {
      this.loading = true
      this.$store.dispatch('FETCH_LIST_DATA').then(() => {
        this.displayedItems = this.$store.getters.activeItems
        this.loading = false
      })
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      // this.$router.push(`/list/${val}`)
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
  background-image url(/public/carousel1.jpg)
  background-size cover
  background-position top
.pagination-wrap
  text-align center
  padding 50px 0
</style>
