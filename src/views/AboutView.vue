<template>
  <div class="about-view">
    <vs-head skin="white"></vs-head>
    <div class="head-back"></div>
    <vs-rowwarp>
      关于我们 建设中。。。
    </vs-rowwarp>
  </div>
</template>

<script>
'use strict'

import {
  VsHead,
  VsRowwarp
} from '../components'

export default {
  name: 'about',

  components: {
    VsHead,
    VsRowwarp
  }
}
</script>

<style lang="stylus" scoped>
.about-view
  min-height 800px
  background #f5f5f5
.head-back
  padding-top 72px
</style>
