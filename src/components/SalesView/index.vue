<template>
    <div class="sales-view">
        <el-card shadow="hover">

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

          <template>
            <div>666</div>
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
      }
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

</style>
