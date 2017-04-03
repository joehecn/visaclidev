<template>
  <div class="search-map">
    <div class="filter-item">
      <span class="filter-type">{{title}}</span>
      <div class="option-box">
        <span v-for="item in options"
              class="option"
              :class="item === activeOption ? 'cur' : ''"
              @click="clickHandler(item)">{{item}}</span>
      </div>

      <el-button v-if="showbtn"
                 type="primary"
                 size="small"
                 @click="btnClick">选择其他国家
        <i class="el-icon--right"
           :class="showCountry ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i></el-button>
    </div>
    <div class="countrys"
         v-if="showCountry">
      <div class="cty-item"
           v-for="(value, key) in countrys">
        <div class="cont">{{key}}</div>
        <div class="cty-warp">
          <span v-for="item in value"
                @click="otherHandler(item)">{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
'use strict'

import {
  Button
} from 'element-ui'

export default {
  props: ['title', 'showbtn', 'activeOption', 'options'],

  components: {
    elButton: Button
  },
  data() {
    return {
      showCountry: false,
      countrys: {
        '亚洲': ['日本', '泰国', '新加坡', '阿富汗', '阿联酋', '阿曼', '巴基斯坦', '菲律宾', '格鲁吉亚', '哈萨克斯坦', '柬埔寨', '吉尔吉斯斯坦', '卡塔尔', '科威特', '老挝', '黎巴嫩', '马来西亚', '蒙古', '孟加拉', '缅甸', '尼泊尔', '沙特阿拉伯', '斯里兰卡', '塔吉克斯坦', '土耳其', '土库曼斯坦', '文莱', '乌兹别克', '也门', '伊朗', '印度', '印尼', '以色列', '约旦', '越南', '台湾'],
        '欧洲': ['法国', '德国', '爱尔兰', '奥地利', '阿塞拜疆', '白俄罗斯', '保加利亚', '比利时', '冰岛', '波兰', '丹麦', '俄罗斯', '芬兰', '荷兰', '捷克', '克罗地亚', '罗马尼亚', '挪威', '葡萄牙', '瑞典', '瑞士', '塞浦路斯', '乌克兰', '西班牙', '希腊', '匈牙利', '亚美尼亚', '意大利', '英国'],
        '北美洲': ['美国', '加拿大', '多米尼加共和国', '古巴', '秘鲁', '墨西哥', '特立尼达和多巴哥'],
        '南美洲': ['阿根廷', '巴西', '玻利维亚', '厄瓜多尔', '哥伦比亚', '委内瑞拉', '智利'],
        '非洲': ['阿尔及利亚', '埃及', '埃塞俄比亚', '安哥拉', '贝宁', '南苏丹', '博茨瓦纳', '布隆迪', '赤道几内亚', '刚果布', '刚果金', '加纳', '加蓬', '津巴布韦', '几内亚', '几内亚比绍', '喀麦隆', '肯尼亚', '科特迪瓦', '莱索托', '利比里亚', '利比亚', '卢旺达', '马达加斯加', '马拉维', '马里', '毛里塔尼亚', '莫桑比克', '纳米比亚', '南非', '北苏丹', '尼日尔', '尼日利亚', '塞拉利昂', '塞内加尔', '坦桑尼亚', '突尼斯', '乌干达', '赞比亚', '乍得', '中非'],
        '大洋洲': ['新西兰', '澳大利亚', '巴布亚新几内亚']
      }
    }
  },

  methods: {
    clickHandler(item) {
      this.$emit('active-change', item)
    },
    btnClick() {
      this.showCountry = !this.showCountry
    },
    otherHandler(item) {
      this.showCountry = false
      this.$emit('active-change', item)
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-map
  position relative
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
button
  position absolute
  right 20px
.countrys
  border-top 1px solid #eee
  font-size 14px
  .cty-item
    position relative
    padding 10px
    border-bottom 1px solid #eee
    .cont
      position absolute
      top 12px
      padding 3px 6px
      color #fff
      background #ed6c61
    .cty-warp
      margin-left 60px
      span
        cursor pointer
        display inline-block
        padding 3px 7px
        margin 2px
      :hover
        background: #e5e5e5
</style>
