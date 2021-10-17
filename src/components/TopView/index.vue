<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card shadow="hover">
                    <TotalSales />
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <!-- <TotalOrders /> -->
                    <TotalOrdersVEcharts />
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <!-- <TodayUsers /> -->
                    <TodayUsersVEcharts />
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <!-- <TotalUsers /> -->
                    <TotalUsersVEcharts />
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import TotalSales from '../TotalSales'
// import TotalOrders from '../TotalOrders'
import TotalOrdersVEcharts from '../TotalOrdersVEcharts'
// import TodayUsers from '../TodayUsers'
import TodayUsersVEcharts from '../TodayUsersVEcharts'
// import TotalUsers from '../TotalUsers'
import TotalUsersVEcharts from '../TotalUsersVEcharts'

export default {
  components: {
    TotalSales,
    TotalOrdersVEcharts,
    TodayUsersVEcharts,
    TotalUsersVEcharts
  }
}
</script>

<style lang="scss" scoped>

</style>
