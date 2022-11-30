/*
 * @Author: artemis
 * @Date: 2022-03-13 09:43:15
 * @LastEditTime: 2022-03-13 10:17:18
 * @LastEditors: artemis
 * @Description: 
 */
import {
  createApp
} from 'vue';
import App from './App.vue';
import router from './router/index';

createApp(App).use(router).mount('#app');