/*
 * @Author: yating.wang
 * @Date: 2022-01-24 15:36:11
 * @LastEditTime: 2022-01-24 15:49:45
 * @LastEditors: yating.wang
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let instance = null

function render(props = {}) {
  const {
    container
  } = props
  instance = new Vue({
    router,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}

//- new Vue({
//-   router,
//-   render: h => h(App)
//- }).$mount('#app')