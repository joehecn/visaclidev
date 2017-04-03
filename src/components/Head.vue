<template>
  <el-row type="flex"
          class="menu-bg"
          :class="skin ? 'menu-bg-white' : 'menu-bg-dark'"
          justify="center"
          :gutter="0">
    <el-col :xs="24"
            :sm="24"
            :md="18"
            :lg="18">
      <div class="BD_logo">
        <router-link to="/">
          <img src="/public/logo-48.png"
               alt="签证网">
          <span>签证网</span>
        </router-link>
        <div class="BD_menu">
          <router-link to="/"
                       exact>首页</router-link>
          <!--<router-link to="/list">签证</router-link>-->
          <a :class="$route.name === 'list' ? 'router-link-active' : ''"
             @click="toListClick">签证</a>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
'use strict'

import {
  Row,
  Col
} from 'element-ui'

import { getWhere } from '../filters'

export default {
  name: 'headwrap',
  props: ['skin'],
  data () {
    return {}
  },
  computed: {},
  methods: {
    toListClick() {
      // console.log('toListClick')
      const pre = this.$store.state.pre
      const where = getWhere(pre)
      // console.log(where)
      this.$router.push(`/list/${pre.page}/${pre.order}/${pre.ad}${where}`)
    }
  },
  components: {
    elRow: Row,
    elCol: Col
  }
}
</script>

<style lang="stylus" scoped>
.menu-bg
  width 100%
  position fixed
  z-index 1000
  background rgba(0,0,0,.35)
.menu-bg-white
  background #fff
  border-bottom 1px solid #f5f5f5
  .BD_logo
    span
      color #333
  .BD_menu
    a
      color #333
    .router-link-active
      color #fff
      border 1px solid #ed6c61
      background #ed6c61
.menu-bg-dark
  background rgba(0,0,0,.35)
  .BD_logo
    span
      color #fff
  .BD_menu
    a
      color #fff
    .router-link-active
      border 1px solid #fff
.BD_logo
  height 70px
  width 160px
  position relative
  display inline-block
  img
    position absolute
    width 36px
    top 50%
    margin -18px 0 0 12px
  span
    font-size 32px
    position absolute
    top 50%
    margin -18px 0 0 60px
.BD_menu
  position absolute
  width 240px
  top 50%
  margin -16px 0 0 200px
  a
    cursor pointer
    display inline-block
    text-decoration none
    width 60px
    height 32px
    margin 0 10px
    line-height 32px
    font-size 16px
    text-align center
    border-radius: 50px
</style>
