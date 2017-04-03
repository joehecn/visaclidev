<template>
  <div id="app">
    <!--<vs-head></vs-head>-->
    <router-view class="view"></router-view>
    <vs-foot></vs-foot>
  </div>
</template>

<script>
'use strict'

// import Head from './components/Head.vue'
import Foot from './components/Foot.vue'

export default {
  name: 'app',
  data () {
    return {
      activeIndex: 1
    }
  },
  methods: {
    handleSelect (key) {
      if (this.activeIndex !== key) {
        switch (key) {
          case 'b':
            this.$router.push('list')
            break
          default:
            this.$router.push('/')
        }
      }
    }
  },
  components: {
    // vsHead: Head,
    vsFoot: Foot
  }
}
</script>

<style lang="stylus">
.el-menu--dark
    background-color transparent
</style>
