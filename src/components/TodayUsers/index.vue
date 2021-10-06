<template>
    <CommonCard
      title="今日交易用户数"
      value="66,686">

      <template>
        <div id="today-users-chart" :style="{ width: '100%', height:'100%'}" />
      </template>

      <template v-slot:footer>
        <span>退货率 </span>
        <span class="emphasis">5.58%</span>
      </template>
    </CommonCard>
</template>

<script>
// 今日交易用户量 卡片封装，依赖、拓展 通用卡片封装
import commonCardMixin from '../../mixins/commonCardMixins'

export default {
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = document.getElementById('today-users-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      color: ['orange'], // 设置 bar颜色
      xAxis: {
        type: 'category',
        data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00',
          '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'], // x轴的值
        show: false
      },
      yAxis: {
        show: false
      },
      series: [{
        type: 'bar',
        data: [620, 432, 222, 556, 798, 433, 256, 323, 526, 353, 896, 668, 999, 25],
        lineStyle: {
          width: 0 // 连线宽度
        },
        barWidth: '60%' // 柱状图宽度
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
