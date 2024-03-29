/*
 * @Author: artemis
 * @Date: 2022-01-24 15:36:11
 * @LastEditTime: 2022-06-02 14:13:53
 * @LastEditors: artemis
 * @Description: 
 */
import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
// import store from './store';

Vue.use(VueRouter);

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render(props = {}) {
  const {
    container
  } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/subapp/' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    // store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
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