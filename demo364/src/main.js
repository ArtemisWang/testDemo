/*
 * @Author: artemis
 * @Date: 2021-12-29 14:00:43
 * @LastEditTime: 2022-01-10 18:52:26
 * @LastEditors: artemis
 * @Description: 
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import './plugins/element.js';
import Form from './components/Form.vue';
import VirtualList from './components/VirtualList.vue';

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.component('Form', Form);
Vue.component('VirtualList', VirtualList);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
