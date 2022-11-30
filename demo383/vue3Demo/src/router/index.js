/*
 * @Author: artemis
 * @Date: 2022-03-13 10:07:32
 * @LastEditTime: 2022-03-14 20:14:00
 * @LastEditors: artemis
 * @Description: 
 */
import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import RatePage from '../pages/RatePage.vue';
import AnimationPage from '../pages/AnimationPage.vue';

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/about',
  name: 'About',
  component: About
}, {
  path: '/rate',
  name: 'RatePage',
  component: RatePage
}, {
  path: '/animation',
  name: 'AnimationPage',
  component: AnimationPage
}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;