<template>
  <div class="item-table">
    <span class="material-title">
      <i class="icon-color"></i>
      个人基本资料
    </span>
    <table class="material-table">
      <tbody>
        <tr>
          <td class="td-title">签证申请表</td>
          <td class="td-content">
            <p>1.真实完整填写（出行时间真实，填写的联系电话需保持畅通），并由本人中文签字； 2.父母以及配偶父母等所有信息需全部填写（包括已去世的）；

            </p>
          </td>
        </tr>
        <tr>
          <td class="td-title">因私护照原件</td>
          <td class="td-content">
            <p>1.护照完整无破损、无水渍； 2.有效期离出发日期应至少还有6个月； 3.至少有两页完整连续的空白页，不包含备注页； 4.护照号码是G开头的，请在尾页签名；

            </p>
          </td>
        </tr>
        <tr>
          <td class="td-title">光面照片</td>
          <td class="td-content">
            <p>1.近6个月内拍摄白底彩色照片3张，免冠正面照片； 2.规格：35mmX45mm 长方形；

            </p>
          </td>
        </tr>
        <tr>
          <td class="td-title">身份证复印件</td>
          <td class="td-content">
            <p>正反面复印件，内容必须清晰。16周岁以下如没有，可不提供。

            </p>
          </td>
        </tr>
        <tr>
          <td class="td-title">机票订单</td>
          <td class="td-content">
            <p>往返真实英文机票订单（已经付款出票）

            </p>
          </td>
        </tr>
        <tr>
          <td class="td-title">特别说明</td>
          <td class="td-content">
            <p>有延期的护照价格另议；

            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="stylus" scoped>
.item-table
  .material-title
    display block
    position relative
    margin 8px 20px
    .icon-color
      position absolute
      left -17px
      top 4px
      width 12px
      height 12px
      background #feda7d
      border-radius 4px
  .material-table
    td
      box-sizing border-box
      position relative
      vertical-align text-top
      padding 0 10px
      border-bottom 1px solid #f5f5f5
    .td-title
      width 15%
</style>
