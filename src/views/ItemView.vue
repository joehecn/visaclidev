<template>
  <div class="item-view"
       v-if="item">
    <vs-head skin="white"></vs-head>
    <div class="head-back"></div>
    <vs-rowwarp>
      <div class="el-breadcrumb">
        <span class="el-breadcrumb__item" @click="breadcrumbClick(1)">
          <span class="el-breadcrumb__item__inner">首页</span>
          <span class="el-breadcrumb__separator">/</span>
        </span>
        <span class="el-breadcrumb__item" @click="breadcrumbClick(2)">
          <span class="el-breadcrumb__item__inner">签证</span>
          <span class="el-breadcrumb__separator">/</span>
        </span>
        <span class="el-breadcrumb__item">
          <span class="el-breadcrumb__item__inner">【贴纸签】爱尔兰 探亲访友签证 多次</span>
          <span class="el-breadcrumb__separator">/</span>
        </span>
      </div>
      <!--<el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>签证</el-breadcrumb-item>
        <el-breadcrumb-item>{{item.title}}</el-breadcrumb-item>
      </el-breadcrumb>-->

      <vs-detail :item="item"></vs-detail>
    </vs-rowwarp>

    <vs-rowwarp class="itemno">
      <vs-itemno v-for="item in items"
              :key="item.id"
              :item="item">
      </vs-itemno>
    </vs-rowwarp>

    <vs-rowwarp class="tabdetail">
      <el-collapse v-model="activeName"
                   accordion>
        <el-collapse-item title="办理流程"
                          name="1">
          <div class="part-content order-step PB_clear">
            <div class="step">
              <img class="step-img"
                   src="/public/step-1.png"
                   alt="签证">
              <span class="step-title">1.下单</span>
              <i class="el-icon-arrow-right"></i>
            </div>
            <div class="step">
              <img class="step-img"
                   src="/public/step-2.png"
                   alt="签证">
              <span class="step-title">2.收资料</span>
              <i class="el-icon-arrow-right"></i>
            </div>
            <div class="step">
              <img class="step-img"
                   src="/public/step-3.png"
                   alt="签证">
              <span class="step-title">3.送签使馆</span>
              <i class="el-icon-arrow-right"></i>
            </div>
            <div class="step">
              <img class="step-img"
                   src="/public/step-4.png"
                   alt="签证">
              <span class="step-title">4.使馆出签</span>
              <i class="el-icon-arrow-right"></i>
            </div>
            <div class="step">
              <img class="step-img"
                   src="http://visachina.cn/resources/img/orderStep/step-5.png"
                   alt="签证">
              <span class="step-title">5.收签确认</span>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="所需资料"
                          name="2">
          <template>
            <el-tabs v-model="activeName2"
                     type="card"
                     @tab-click="handleClick">
              <el-tab-pane label="在职"
                           name="first">
                <vs-item-table></vs-item-table>
              </el-tab-pane>
              <el-tab-pane label="自由职业"
                           name="second">
                <vs-item-table></vs-item-table>
              </el-tab-pane>
              <el-tab-pane label="在校学生"
                           name="third">
                <vs-item-table></vs-item-table>
              </el-tab-pane>
              <el-tab-pane label="退休"
                           name="fourth">
                <vs-item-table></vs-item-table>
              </el-tab-pane>
              <el-tab-pane label="学龄前儿童"
                           name="five">
                <vs-item-table></vs-item-table>
              </el-tab-pane>
              <el-tab-pane label="家庭主妇"
                           name="six">
                <vs-item-table></vs-item-table>
              </el-tab-pane>
            </el-tabs>
          </template>
        </el-collapse-item>
        <el-collapse-item title="温馨提示"
                          name="3">
          <div>1、签证属于特殊商品，我司会按使领馆的要求为客人准备最合适的送签材料，确保您的材料有最高出签可能，但所申请的签证是否成功，取决于使领馆对资料的审核，若发生拒签，请申请人自然接受结果，并放弃追究本公司任何责任的权利。</div>
          <div>2、在办理签证期间，我司可能会根据您的材料情况要求增补其他材料、担保金或予以劝退；领馆也可能会针对您的实际情况，要求增补其他材料，或延长签证受理时间（此情况由领馆决定，我司无法干预），或要求申请人面试，或电话调查申请人，领馆也可能因内部原因导致延迟出签。</div>
          <div>3、申请人需保证提供材料的真实性，有效性，如因隐瞒曾有不良记录，或从事非法活动，被相关部门查处或有滞留倾向拒签，我司不承担责任。请申请人特别注意诚实信用的原则。</div>
          <div>4、中国签证网上公布的办理周期、停留时间、签证有效期等均系基于以往经验的预估时限，并非中国签证网的确定承诺，准确时限以使领馆实际审批结果为准。获得签证前切勿先行支付机票、酒店费用，以免因签证问题产生费用损失，否则损失将由您自行承担；如您提供了机票、酒店预订单申请签证，请勿在获得签证前取消或修改预订，否则可能对签证结果产生影响 。</div>
          <div>5、依据使馆要求，签证申请人在送签或归国后，如被使领馆要求参加面试或面试销签，签证申请人必须配合使领馆完成面试工作。如因个人原因未按时参加面试或面试销签，一切后果由签证申请人自行承担。</div>
          <div>6、如果您的护照在办理过程中丢失，每本赔付1000元。（由于快递公司原因造成的丢失除外，最终以快递公司的回复为准）</div>
        </el-collapse-item>
        <el-collapse-item title="退款说明"
                          name="4">
          <div>1.资料如已入馆办理，不退还任何款项。</div>
          <div>2.资料未入馆办理，将收取服务费用 。具体金额以供应商商议结果为准。</div>
        </el-collapse-item>
      </el-collapse>
    </vs-rowwarp>
    <vs-spinner :show="loading"></vs-spinner>
  </div>
</template>

<script>
'use strict'

import {
  Collapse,
  CollapseItem,
  Tabs,
  TabPane
} from 'element-ui'

import {
  VsHead,
  VsRowwarp,
  VsDetail,
  VsItemno,
  VsItemTable,
  VsSpinner
} from '../components'

import { getWhere } from '../filters'

function fetchItem(store) {
  return store.dispatch('FETCH_ITEMS')
}

export default {
  name: 'item-view',
  components: {
    // elBreadcrumb: Breadcrumb,
    // elBreadcrumbItem: BreadcrumbItem,
    elCollapse: Collapse,
    elCollapseItem: CollapseItem,
    elTabs: Tabs,
    elTabPane: TabPane,
    VsHead,
    VsRowwarp,
    VsDetail,
    VsItemno,
    VsItemTable,
    VsSpinner
  },
  data() {
    return {
      loading: true,
      items: [],
      activeName: '1',
      activeName2: 'first'
    }
  },
  computed: {
    item() {
      let _id = this.$store.state.route.params._id || 1
      let _item = {}
      let _items = []
      this.$store.state.list.forEach(it => {
        if (it._id == _id) {
          _item = it
        } else {
          _items.push(it)
        }
      })
      this.items = _items
      return _item
    }
  },
  // on the server, only fetch the item itself
  preFetch: fetchItem,
  // on the client, fetch everything
  beforeMount() {
    this.loading = false
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    breadcrumbClick(index) {
      // console.log('breadcrumbClick: ', index)
      if (index === 2) {
        const pre = this.$store.state.pre
        const where = getWhere(pre)
        this.$router.push(`/list/${pre.page}/${pre.order}/${pre.ad}${where}`)
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.item-view
  min-height 800px
  background #f5f5f5
.head-back
  padding-top 72px
  // background-image url(/public/carousel1.jpg)
  // background-size cover
  // background-position top
.el-breadcrumb
  margin 15px
.itemno
  margin-bottom 8px
.tabdetail
  padding-bottom 8px
.order-step
  text-align center
  .step
    // float left
    display inline-block
    position relative
    margin-right 80px
    text-align center
    img
      display block
      width 54px
      height 62px
      margin auto
    i
      position absolute
      font-size 18px
      color #666
      top 30px
      left 90px
</style>
