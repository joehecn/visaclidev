<template>
  <el-row :gutter="0">
    <!--<div>
      {{ JSON.stringify(item)}}
    </div>-->
    <el-col :xs="6" :sm="6" :md="6" :lg="6">
      <router-link :to="'/item/' + item._id">
        <img class="product-img" :src="`http://joehe-visa.oss-cn-shenzhen.aliyuncs.com/jpg/${item.img.trim()}.jpg`" alt="签证网签证产品">
      </router-link>
    </el-col>
    <el-col :xs="18" :sm="18" :md="18" :lg="18">
      <div class="product-info">
        <div class="product-title">
          <span class="title">
            <router-link :to="'/item/' + item._id">{{item.title}}</router-link>
          </span>
        </div>
        <div class="product-attr">
            <div class="attr border">
                <span class="key">受理天数</span>
                <span class="val">{{item.getDays}}</span>
            </div>
            <div class="attr border">
                <span class="key">停留天数</span>
                <span class="val">{{item.stopDays}}</span>
            </div>
            <div class="attr border">
                <span class="key">有效期限</span>
                <span class="val">{{item.trueDays}}</span>
            </div>
            <div class="attr border">
                <span class="key">入境次数</span>
                <span class="val">{{item.deadlines}}</span>
            </div>
            <div class="attr">
                <span class="key">是否面试</span>
                <span class="val">{{item.test}}</span>
            </div>
        </div>
        <div class="other">
          <span class="sub">￥</span>
          <span class="price">{{item.price | formatPrice}}</span>
          <router-link :to="'/item/' + item._id">查看详情</router-link>
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
a
  cursor pointer
  text-decoration none

.el-row
  padding 25px
  background #fff
  border-bottom 1px solid #f5f5f5

.product-img
  width 90%

.product-info
  color #666
  .product-title
    margin-bottom 25px
    color #333
    .title
      font-size 16px
      a
        color #333
  .product-attr
    font-size 14px
    color #666
    .attr
      display inline-block
      margin-right 5px
      margin-bottom 25px
      padding-right 10px
      line-height 14px
      .key
        margin-right 5px
    .border
      border-right 1px solid #ccc

.other
  position relative
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
