<template>
    <div class="bottom-view">

        <!-- 左侧卡片 -->
        <div class="view">
            <el-card shadow="hover">
                <template v-slot:header>
                    <div class="title-wrapper">关键词搜索</div>
                </template>

                <template>

                    <div class="chart-wrapper">
                        <!-- 上部两个图表 -->
                        <div class="chart-inner">
                            <div class="chart">
                                <div class="chart-title">搜索用户数</div>
                                <div class="chart-data">93,666</div>
                                <v-chart :option="searchUserOption" />
                            </div>

                            <div class="chart">
                                <div class="chart-title">搜索量</div>
                                <div class="chart-data">198,666</div>
                                <v-chart :option="searchNumberOption" />
                            </div>
                        </div>

                        <!-- 下部列表 -->
                        <div class="table-wrapper">
                            <el-table :data="tableData">
                                <!-- column 纵列，prop 指定该列数据对应要取的键值，
                                label指定该列数据的标题，width指定该列数据宽度
                                width 不指定的话，则自适应排列 -->
                                <el-table-column prop="rank" label="排名" width="180"/>
                                <el-table-column prop="keyword" label="关键词" width="180"/>
                                <el-table-column prop="count" label="总搜索量" />
                                <el-table-column prop="users" label="排名" />
                            </el-table>

                            <!-- background可以优化页面小块的背景样式
                                @current-change 指定翻页事件 -->
                            <el-pagination
                                layout="prev, pager, next"
                                :total="rankingPageTotal"
                                :page-size="rankingPageSize"
                                background
                                @current-change="onPageChange"
                            />
                        </div>
                    </div>
                </template>
            </el-card>
        </div>

        <!-- 右侧卡片 -->
        <div class="view">
            <el-card shadow="hover">

                <!-- 头部 -->
                <template v-slot:header>
                    <div class="title-wrapper">
                        <!-- 头部标题 -->
                        <div class="title">分类销售排行</div>

                        <!-- 头部radio -->
                        <div class="radio-wrapper">
                            <el-radio-group v-model="radioSelect" size="small">
                                <el-radio-button label="品类"></el-radio-button>
                                <el-radio-button label="商品"></el-radio-button>
                            </el-radio-group>
                        </div>
                    </div>
                </template>

                <template>
                    <v-chart :option="categoryOptions" />
                </template>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      searchUserOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false // 去除x轴边距
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: [100, 200, 350, 250, 55, 120, 159, 163],
          areaStyle: {
            color: 'rgba(95, 187, 255, .5)'
          },
          lineStyle: {
            color: 'rgb(95, 187, 255)'
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }],
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }
      },
      searchNumberOption: {},
      tableData: [
        { id: 1, rank: 1, keyword: '北京', count: 100, users: 90, range: '90%' },
        { id: 2, rank: 2, keyword: '南京', count: 100, users: 60, range: '60%' },
        { id: 3, rank: 3, keyword: '广州', count: 100, users: 80, range: '80%' },
        { id: 4, rank: 4, keyword: '西藏', count: 100, users: 68, range: '68%' }
      ],
      radioSelect: '品类',
      categoryOptions: {},
      rankingPageSize: 4,
      rankingPageTotal: 100
    }
  },
  methods: {
    onPageChange (page) {
      console.log('onPageChange page --- ' + page)
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-view {
    display: flex;
    margin-top: .2rem;
    .view {
        flex: 1;
        width: 50%;
        box-sizing: border-box;

        &:first-child {
            padding:  0 .1rem 0 0;
        }
        &:last-child {
            padding: 0 0 0 .1rem;
        }

        .title-wrapper {
            display: flex;
            align-items: center;
            height: .6rem;
            box-sizing: border-box;
            border-bottom: .01rem solid #eee;
            font-size: .14rem;
            font-weight: 500;
            padding: 0 0 0 .2rem;
            .radio-wrapper {
                flex: 1;
                display: flex;
                justify-content: flex-end;
                padding-right: .2rem;
            }
        }

        .chart-wrapper {
            display: flex;
            flex-direction: column;
            height: 4.52rem;
            .chart-inner {
                display: flex;
                padding: 0 .1rem;
                margin-top: .2rem;
                .chart {
                    width: 50%;
                    flex: 1;
                    padding: 0 .1rem;
                    &-title {
                        color: #999;
                        font-size: .14rem;
                    }
                    &-data {
                        font-size: .22rem;
                        color: #333;
                        font-weight: 700;// 加粗
                        letter-spacing: .02rem;// 字体间距
                    }
                    .echarts {
                        height: .5rem;
                    }
                }
            }
            .table-wrapper {
                flex: 1;
                margin-top: .2rem;
                padding: 0 .2rem .2rem;
                .el-pagination {
                    display: flex;
                    justify-content: flex-end;
                    margin-top: .15rem;
                }
            }
        }
    }
}
</style>
