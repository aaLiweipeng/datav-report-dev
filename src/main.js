import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts'
import './style/index.scss'
import * as echarts from 'echarts'
import VueEcharts from 'vue-echarts'// 全量引入

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.component('v-chart', VueEcharts)// 全量引入

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
