/*
 * @Author: artemis
 * @Date: 2022-01-25 12:58:35
 * @LastEditTime: 2022-01-25 13:01:50
 * @LastEditors: artemis
 * @Description: 
 */
import SnowButton from '../packages/snow-button/index.vue'; // 引入封装好的组件
import SnowInput from '../packages/snow-input/index.vue';

const coms = [SnowButton, SnowInput]; // 将来如果有其他组件，都可以写到这个数组里

// 批量注册组件
const install = function (Vue) {
  coms.forEach(com => {
    Vue.component(com.name, com);
  });
};

export default install; // 这个方法以后再使用的时候可以被use调用