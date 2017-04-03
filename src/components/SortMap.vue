<template>
  <div class="sort-map">
    <span class="tip">排序</span>
    <span v-for="item in options"
              class="kind"
              :class="[item.order === activeOrder ? 'cur' : '', item.order === activeOrder ? (activeAd === '0' ? 'desc' : 'asc') : '']"
              @click="clickHandler(item)">{{item.val}}</span>
  </div>
</template>

<script>
'use strict'

export default {
  props: ['activeOrder', 'activeAd'],
  data() {
    return {
      options: [{ order: '0', val: '默认' }, { order: '1', val: '价格' }]
    }
  },

  methods: {
    clickHandler (item) {
      // console.log(item.order)
      // console.log(this.activeOrder)
      if (item.order === this.activeOrder) {
        this.$emit('change-ad')
      } else {
        this.$emit('change-order')
      }
    }
  }
}

</script>

<style  lang="stylus" scoped>
.sort-map
  margin-bottom 8px
  padding 16px
  background #fff
  .tip
    display inline-block
    margin-left 10px
    margin-right 50px
    font-weight 800
  .kind
    display inline-block
    text-align center
    margin 2px
    padding 3px 5px
    cursor pointer
    width 50px
  :hover
    background: #e5e5e5
  .cur
    color #ed6c61
  .desc:after
    content "↓"
  .asc:after
    content "↑"
</style>
