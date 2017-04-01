<template>
  <el-row class="detail" :gutter="0">
    <el-col :xs="12" :sm="12" :md="12" :lg="12">
      <div class="product-img">
        <img class="mainimg" :src="'http://joehe-visa.oss-cn-shenzhen.aliyuncs.com/jpg/' + item.img.trim() + '.jpg'" alt="签证网签证产品">
        <img class="ctyimg" :src="'http://joehe-visa.oss-cn-shenzhen.aliyuncs.com/png/' + item.img.trim() + '.png'" alt="签证网签证产品">
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="12">
      <div class="product-info">
        <div class="product-title">
          <span class="title">{{item.title}}</span>
        </div>
        <div class="attr-wrap">
          <div class="product-attr">
              <div class="attr border">
                  <span class="key">受理天数</span>
                  <span class="val">{{item.getDays}}</span>
              </div>
              <div class="attr border">
                  <span class="key">停留天数</span>
                  <span class="val">{{item.stopDays}}</span>
              </div>
              <div class="attr">
                  <span class="key">有效期限</span>
                  <span class="val">{{item.trueDays}}</span>
              </div>
          </div>
          <div class="product-attr">
              <div class="attr border">
                  <span class="key">入境次数</span>
                  <span class="val">{{item.deadlines}}</span>
              </div>
              <div class="attr border">
                  <span class="key">是否面试</span>
                  <span class="val">{{item.test}}</span>
              </div>
              <div class="attr">
                  <span class="key">签证类型</span>
                  <span class="val">{{item.category}}</span>
              </div>
          </div>
        </div>
        <div class="other">
          <span class="sub">￥</span>
          <span class="price">{{item.price | formatPrice}}</span>
          <router-link :to="{path: '/'}">立即预订</router-link>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
'use strict'
import { formatPrice } from '../filters'

import {
  Row,
  Col
} from 'element-ui'

export default {
  name: 'list-item',
  components: {
    elRow: Row,
    elCol: Col
  },
  props: ['item']
}
</script>

<style lang="stylus" scoped>
.detail
  margin-bottom 8px
a
  cursor pointer
  text-decoration none
.el-row
  padding 25px
  background #fff
  border-bottom 1px solid #f5f5f5
.product-img
  position relative
  .mainimg
    width 90%
  .ctyimg
    position absolute
    top 4px
    left 4px
.product-info
  color #666
  .product-title
    margin-bottom 25px
    color #333
    .title
      font-size 18px
      a
        color #333
  .attr-wrap
    background: #f5f5f5
    padding 10px
    .product-attr
      font-size 14px
      color #666
      .attr
        display inline-block
        margin 10px 2px 10px 2px
        line-height 14px
        .key
          margin-right 5px
        .val
          margin-right 5px
      .border
        border-right 1px solid #ccc

.other
  position relative
  margin-top 20px
  font-size 24px
  color #ed6c61
  .sub
    font-size 14px
    vertical-align middle
  a
    position absolute
    right 20px
    font-size 14px
    text-decoration none
    width 120px
    height 32px
    line-height 32px
    text-align center
    color #fff
    background #ed6c61
    box-shadow 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04)
</style>
