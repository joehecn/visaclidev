<template>
  <div class="home-view">
    <vs-head></vs-head>
    <el-carousel height="573px">
      <el-carousel-item class="carousel2">
      </el-carousel-item>
      <el-carousel-item class="carousel1">
      </el-carousel-item>
    </el-carousel>

    <div class="title">
      <i class="el-icon-star-off"></i>
      <span>签证推荐</span>
    </div>

    <div class="hot">
      <span>热门：</span>
      <div class="hot-item">
        <router-link :to="`/list/1/0/0?cty=${encodeURI('日本')}`">日本</router-link>
        <el-badge is-dot
                  class="badge-item"></el-badge>
      </div>
      <div class="hot-item">
        <router-link :to="`/list/1/0/0?cty=${encodeURI('泰国')}`">泰国</router-link>
        <el-badge is-dot
                  class="badge-item"></el-badge>
      </div>
      <router-link :to="`/list/1/0/0?cty=${encodeURI('美国')}`">美国</router-link>
      <router-link :to="`/list/1/0/0?cty=${encodeURI('法国')}`">法国</router-link>
      <router-link :to="`/list/1/0/0?cty=${encodeURI('加拿大')}`">加拿大</router-link>
      <router-link :to="`/list/1/0/0?cty=${encodeURI('新加坡')}`">新加坡</router-link>
    </div>

    <vs-rowwarp>
      <el-row :gutter="4">
        <el-col :xs="24"
                :sm="24"
                :md="6"
                :lg="6">
          <div class="grid-content-two bg-purple">
            <!--<vs-routeimg></vs-routeimg>-->
            <router-link :to="`/list/1/0/0?cty=${encodeURI('日本')}`">
              <div class="imgwrap">
                <div class="routeimg riben"></div>
              </div>
            </router-link>
          </div>
        </el-col>
        <el-col :xs="24"
                :sm="24"
                :md="18"
                :lg="18">
          <el-row :gutter="4">
            <el-col :xs="12"
                    :sm="8"
                    :md="8"
                    :lg="8"
                    v-for="item in displayedItems"
                    :key="item.id">
              <div class="grid-content bg-purple">
                <router-link :to="'/item/' + item._id">
                  <div class="product-warp">
                    <div class="imgwrap">
                      <div class="routeimg"
                           :style="{ backgroundImage: `url(http://joehe-visa.oss-cn-shenzhen.aliyuncs.com/jpg/${item.img.trim()}.jpg)` }"></div>
                    </div>
                    <div class="product-desc">
                      <span :title="item.title.trim()">{{item.title}}</span>
                    </div>
                  </div>
                </router-link>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </vs-rowwarp>

    <div class="more">
      <router-link to="/list/1">查看更多 ...</router-link>
    </div>

    <vs-spinner :show="loading"></vs-spinner>
  </div>
</template>

<script>
'use strict'

import {
  Row,
  Col,
  Carousel,
  CarouselItem,
  Badge,
} from 'element-ui'

import {
  VsHead,
  VsRowwarp,
  VsSpinner
} from '../components'

function fetchList(store) {
  return store.dispatch('FETCH_HOME_DATA')
}

let isInitialRender = true

export default {
  name: 'app',

  components: {
    elRow: Row,
    elCol: Col,
    elCarousel: Carousel,
    elCarouselItem: CarouselItem,
    elBadge: Badge,
    VsHead,
    VsRowwarp,
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

  preFetch: fetchList,

  beforeMount() {
    // console.log('beforeMount: ', this.$root._isMounted)
    if (this.$root._isMounted) {
      this.loadItems()
    }
  },

  methods: {
    loadItems() {
      this.loading = true
      this.$store.dispatch('FETCH_HOME_DATA').then(() => {
        this.displayedItems = this.$store.getters.activeItems
        this.loading = false
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@media (max-width: 991px)
  .grid-content-two
    display none
.home-view
  min-height 800px

.product-warp
  height 80%
  .product-desc
    position relative
    box-sizing border-box
    height 46px
    padding-left 10px
    line-height 46px
    span
      font-size 14px
      color #333
      display inline-block
      max-width 90%
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
.imgwrap
  height 100%
  overflow hidden

  .routeimg
    height 100%
    background-size cover
    background-position center
    transition transform 1.5s ease 10ms
    transform scale(1)
  .riben
    background-image url(/public/riben.jpg)
  :hover
    transform scale(1.05)
.carousel1
  background-image url(/public/carousel1.jpg)
  background-size cover
  background-position center
.carousel2
  background-image url(/public/carousel2.jpg)
  background-size cover
  background-position center

.title
  padding 20px 0
  text-align center
  color #666
  i
    font-size 20px
  span
    display inline-block
    font-size 20px
    margin-left 10px

.hot
  text-align center
  font-size 14px
  margin-bottom 15px
  .hot-item
    display inline-block
    position relative
    .badge-item
      right 5px
      position absolute
  a
    text-decoration none
    margin 0 15px
.bg-purple
    background #f5f5f5
.grid-content-two
  height 400px
.grid-content
  margin-bottom 4px
  height 198px
.more
  padding 16px 0
  text-align center
  a
    cursor pointer
    font-size 12px
    text-decoration none
    width 160px
    height 32px
    margin 10px
    padding 6px 20px
    line-height 32px
    text-align center
    border-radius 50px
    color #fff
    background #ed6c61
    box-shadow 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04)
</style>
