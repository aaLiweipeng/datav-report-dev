<template>
    <CommonCard
      title="累计订单量"
      value="2,157,420">

      <template>
        <div id="total-orders-chart" :style="{ width: '100%', height:'100%'}" />
      </template>

      <template v-slot:footer>
        <span>昨日订单量</span>
        <span class="emphasis">2,000,000</span>
      </template>
    </CommonCard>
</template>

<script>
// 累计订单量卡片封装，依赖、拓展 通用卡片封装
import commonCardMixin from '../../mixins/commonCardMixins'

export default {
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = document.getElementById('total-orders-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false // 将图左右舒展开【除去x轴 默认的左右间距】
      },
      yAxis: {
        show: false
      },
      series: [{
        type: 'line',
        data: [620, 432, 222, 556, 798, 433, 256, 323, 526, 353, 896, 696, 525, 225, 668],
        areaStyle: {
          color: 'blue' // 面积填充
        },
        lineStyle: {
          width: 0 // 连线宽度
        },
        itemStyle: {
          opacity: 0 // 设置 连线上的点的 透明度
        },
        smooth: true // 连线平滑
      }],
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      } // 优化布局展示，把图表的数据和UI 按照 合适的比例 fit到 wrapper-div的组件区域中
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
