/*
 * @Author: artemis
 * @Date: 2022-12-02 15:32:49
 * @LastEditors: artemis
 * @LastEditTime: 2022-12-02 16:37:40
 * @Description: 
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(window.__MICRO_APP_BASE_ROUTE__ ? '#' + window.__MICRO_APP_BASE_ROUTE__ : '/'),
  routes
});

export default router;
