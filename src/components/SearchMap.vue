<template>
  <div class="search-map">
    <div class="filter-item">
      <span class="filter-type">签证类别</span>
      <div class="option-box">
        <span v-for="item in options"
              class="option"
              :class="item === options[activeOption] ? 'cur' : ''"
              @click="clickHandler(item)">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
'use strict'

export default {
  data() {
    return {
      activeOption: 0,
      options: [
        '不限',
        '旅游签证',
        '商务签证',
        '探亲访友签证',
        '工作签证',
        '留学签证',
        '其他签证'
      ]
    }
  },

  methods: {
    clickHandler (item) {
      this.activeOption = this.options.indexOf(item)
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-map
  margin 8px 0
  padding: 20px
  background: #fff
  .filter-item
    margin: 10px 0
    .filter-type
      display inline-block
      width 65px
      padding 3px 10px
      margin-right 5px
      font-weight 800
    .option-box
      display inline-block
      .option
        cursor pointer
        display inline-block
        padding 3px 7px
        margin 2px
      :first-child
        margin-right 8px
      :hover
        background: #e5e5e5
      .cur
        cursor auto
        background: #ed6c61
        color #fff
</style>
