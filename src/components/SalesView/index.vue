<template>
    <div>
        <v-chart
            class="chart"
            :option="data"
        />
    </div>
</template>

<script>

export default {
  data () {
    return {
      data: {
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        series: [{
          type: 'line',
          data: [100, 200, 300]
        }],
        grid: {
          top: 30,
          bottom: 30,
          left: 30,
          right: 30
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chart{
    height: 400px;
}
</style>
