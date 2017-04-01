<template>
  <el-row type="flex" class="bg" justify="center" :gutter="0">
    <el-col :xs="24" :sm="24" :md="18" :lg="18">
      <slot></slot>
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
    data () {
      return {}
    },
    computed: {},
    methods: {},
    components: {
      elRow: Row,
      elCol: Col
    }
  }
</script>

<style lang="stylus" scoped>
.bg
  width 100%
</style>
