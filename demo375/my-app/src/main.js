/*
 * @Author: yating.wang
 * @Date: 2022-01-25 12:34:23
 * @LastEditTime: 2022-01-25 13:51:59
 * @LastEditors: yating.wang
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SnowUi from 'snow-ui-testtest'
import '../node_modules/snow-ui-testtest/snow-ui.css'

Vue.use(SnowUi)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
