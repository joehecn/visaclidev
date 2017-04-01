<template>
  <div class="home-view">
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
        <router-link to="/list/1">日本</router-link>
        <el-badge is-dot class="badge-item"></el-badge>
      </div>
      <div class="hot-item">
        <router-link to="/list/1">泰国</router-link>
        <el-badge is-dot class="badge-item"></el-badge>
      </div>
      <router-link to="/list/1">美国</router-link>
      <router-link to="/list/1">法国</router-link>
      <router-link to="/list/1">加拿大</router-link>
      <router-link to="/list/1">新加坡</router-link>
    </div>

    <rowwarp>
      <el-row :gutter="4">
        <el-col :xs="24" :sm="24" :md="6" :lg="6">
          <div class="grid-content-two bg-purple">
            <!--<vs-routeimg></vs-routeimg>-->
            <router-link to="/list/1">
              <div class="imgwrap">
                <div class="routeimg"></div>
              </div>
            </router-link>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="18" :lg="18">
          <el-row :gutter="4">
            <el-col :xs="12" :sm="8" :md="8" :lg="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="8"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
        </el-col>
      </el-row>
    </rowwarp>

    <div class="more">
      <router-link to="/list/1">查看更多 ...</router-link>
    </div>

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
import Rowwarp from '../components/Rowwarp.vue'

export default {
  name: 'app',
  components: {
    elRow: Row,
    elCol: Col,
    elCarousel: Carousel,
    elCarouselItem: CarouselItem,
    elBadge: Badge,
    Rowwarp
  }
}
</script>

<style lang="stylus" scoped>
@media (max-width: 991px)
  .grid-content-two
    display none
.home-view
  min-height 800px

.imgwrap
  height 100%
  overflow hidden

  .routeimg
    height 100%
    background-image url(/public/riben.jpg)
    background-size cover
    background-position center
    transition transform 1.5s ease 10ms
    transform scale(1)
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
