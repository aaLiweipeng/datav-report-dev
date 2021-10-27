// 销售趋势图
<template>
    <div class="sales-view">
        <el-card shadow="hover" :body-style="{ padding: '0 .2rem 0 0' }">

          <!-- 趋势图header部分 -->
          <template v-slot:header>

            <!-- 整个header -->
            <div class="menu-wrapper">
              <el-menu
                :default-active="activeIndex"
                mode="horizontal"
                @select="onMenuSelect"
                class="sales-view-menu"
              >
                <el-menu-item index="1">销售额</el-menu-item>
                <el-menu-item index="2">访问量</el-menu-item>
              </el-menu>

              <div class="menu-right">
                <!-- 提供一个变量 供radioGroup存储当前选中值 -->
                <el-radio-group v-model="radioSelect" size="small">
                  <el-radio-button label="今日"/>
                  <el-radio-button label="本周"/>
                  <el-radio-button label="本月"/>
                  <el-radio-button label="今年"/>
                </el-radio-group>

                <!-- unlink-panels 用于取消两侧picker的联动 -->
                <el-date-picker
                  type="daterange"
                  v-model="date"
                  range-separator="至"
                  start-placeholde="开始日期"
                  end-placeholde="结束日期"
                  size="small"
                  unlink-panels
                  :picker-options="pickerOptions"
                  class="sales-view-date-picker"
                />
              </div>
            </div>
          </template>

          <!-- 趋势图 内容部分 -->
          <template>
            <div class="sales-view-chart-wrapper">
              <!-- 趋势图内容 左侧条形图 -->
              <v-chart :option="chartOption" />

              <!-- 趋势图内容 右侧排行榜list -->
              <div class="sales-view-list">

                <!-- 标题部分 -->
                <div class="sales-view-title">排行榜</div>

                <!-- 排行榜列表内容部分 -->
                <div class="list-item-wrapper">
                  <!-- 每一个item的样式 -->
                  <div class="list-item" v-for="item in rankData" :key="item.no">
                    <!-- 序号 -->
                    <div :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">{{item.no}}</div>
                    <!-- 名称 -->
                    <div class="list-item-name">{{item.name}}</div>
                    <!-- 金额 -->
                    <div class="list-item-money">{{item.money}}</div>
                  </div>
                </div>
              </div>
            </div>
          </template>

        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      radioSelect: '今日',
      date: null,
      // 日历选择左侧栏
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const start = new Date()
            const end = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            debugger
            picker.$emit('pick', [start, end], true)
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const start = new Date()
            const end = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const start = new Date()
            const end = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      // 趋势图内容 左侧条形图
      chartOption: {
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          left: 25,
          top: 20
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: { // x轴短线
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999' // x轴长线
            }
          },
          axisLabel: { // x轴标签
            color: '#333'
          }
        },
        yAxis: {
          axisLine: {
            show: false // y轴长线
          },
          axisTick: {
            show: false // y轴短线
          },
          splitLine: {
            // 横向分割线
            lineStyle: {
              type: 'dotted',
              color: '#eee'
            }
          }
        },
        series: [{
          type: 'bar',
          barWidth: '35%',
          data: [200, 250, 300, 350, 300, 250, 200, 250, 300, 350, 300, 250]
        }],
        color: ['#3398DB'],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        }
      },
      rankData: [{
        no: 1,
        name: 'ajsodisaj',
        money: '654'
      }, {
        no: 2,
        name: 'ajsodisaj',
        money: '654'
      }, {
        no: 3,
        name: 'ajsodisaj',
        money: '654'
      }, {
        no: 4,
        name: 'ajsodisaj',
        money: '654'
      }, {
        no: 5,
        name: 'ajsodisaj',
        money: '654'
      }]
    }
  },
  methods: {
    // 选中的回调事件
    onMenuSelect (index) {
      this.activeIndex = index
      console.log('onMenuSelect --- ' + index)
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: .2rem;
  .menu-wrapper {
    position: relative;
    display: flex;
    .sales-view-menu {
      width: 100%;
      padding-left: .2rem;
      .el-menu-item {
        height: .5rem;
        line-height: .5rem;
        margin: 0 .2rem;
      }
    }
    .menu-right {
      position: absolute;
      top: 0;
      right: .2rem;
      height: .5rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .sales-view-date-picker {
        margin-left: .2rem;
      }
    }
  }
}

.sales-view-chart-wrapper {
  display: flex;
  height: 2.7rem;

  .echarts {
    flex: 0 0 70%;// 占父布局70%
    // height: 100%;
  }

  .sales-view-list {
    flex: 1; // 占父布局分给其他定义形式的子布局后，剩下的全部
    // width: 100%;
    // height: 100%;
    overflow: hidden;
    font-size: .15rem;

    .sales-view-title {
      margin-top: .2rem;
      font-size: .12rem;
      color: #666;
      font-weight: 500;
    }

    .list-item-wrapper {
      margin-top: .15rem;
      .list-item {
        display: flex;
        align-items: center;
        font-size: .12rem;
        height: .2rem;
        padding: .06rem .2rem .06rem 0;

        .list-item-no {
          display: flex;
          align-items: center;
          justify-content: center;
          width: .2rem;
          height: .2rem;
          color: #333;

          &.top-no {
            background: #000;
            border-radius: 50%;
            color: #fff;
            font-weight: 500;
          }
        }

        .list-item-name {
          margin-left: .1rem;
          color: #333;
        }

        .list-item-money {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
}
</style>
