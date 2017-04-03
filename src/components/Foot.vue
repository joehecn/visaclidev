<template>
  <div class="BD_foot">
    <div class="BD_foot-nav">
      <router-link :to="{path: '/about'}">关于我们</router-link>
      <router-link :to="{path: '/cooperate'}">商务合作</router-link>
      <router-link :to="{path: '/contact'}">联系方式</router-link>
    </div>
    <div class="BD_foot-copyright"><a style="color:#ccc;" href="http://www.miibeian.gov.cn" target="_blank">粤ICP备14056064号-1</a>   Copyright © 2016-2017 joehe.cn All rights reserved</div>
  </div>
</template>

<style lang="stylus" scoped>
  a
    text-decoration none
  .BD_foot
    background #5f5f5f
    text-align center
    box-sizing border-box
    width 100%
    height 66px
    margin auto
    padding-top 12px
    line-height 22px
    font-size 12px
    color #ccc

    .BD_foot-nav a
        padding 5px
        margin-left 5px
        color #ccc
</style>
