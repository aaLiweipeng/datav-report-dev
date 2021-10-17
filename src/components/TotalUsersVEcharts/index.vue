<template>
    <CommonCard
      title="累计用户数"
      value="2,656,552">

      <template>
        <v-chart class="echarts" :option = "getOption()" />
      </template>

      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">8.68%</span>
          <div class="increase" />

          <span class="month">月同比</span>
          <span class="emphasis">35.91%</span>
          <div class="decrease" />
        </div>
      </template>
    </CommonCard>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixins'
// 累计用户数卡片封装，依赖、拓展 通用卡片封装

export default {
  mixins: [commonCardMixin],
  methods: {
    getOption () {
      return {
        xAxis: {
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [{
          type: 'bar',
          stack: '总量',
          data: [200],
          barWidth: 10,
          itemStyle: {
            color: 'red'
          }
        }, {
          type: 'bar',
          stack: '总量',
          data: [250],
          itemStyle: {
            color: 'pink'
          }
        }, {
          type: 'custom',
          stack: '总量',
          data: [200],
          renderItem: (params, api) => {
            // 计算endPoint
            // params 提供很多重要的参数， api提供各种重要的操作api
            const value = api.value(0) // 传入索引，获取data对应索引的值
            console.log('renderItem value --- ', value)
            const endPoint = api.coord([value, 0]) // 获取 值坐标对 对应的 UI坐标对
            console.log('renderItem endPoint --- ', endPoint)

            return {
              type: 'group', // 多个图标
              position: endPoint,
              children: [{
                type: 'path', // 使用svg图
                shape: {
                  d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z', // svg数据
                  x: -8, // x相对偏移量【这里是二分之一 三角形宽度】
                  y: -20, // 上移一个barWidth + 一个三角形高度【根据实际情况调整】
                  width: 16,
                  height: 16,
                  layout: 'cover'
                },
                style: {
                  fill: 'pink' // 填充svg颜色
                }
              }, {
                type: 'path', // 使用svg图
                shape: {
                  d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                  x: -8,
                  y: 2,
                  width: 16,
                  height: 16,
                  layout: 'cover'
                },
                style: {
                  fill: 'red' // 填充svg颜色
                }
              }]
            }
          }
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        } // 优化布局展示，把图表的数据和UI 按照 合适的比例 fit到 wrapper-div的组件区域中
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: .1rem;
  }
}
</style>
