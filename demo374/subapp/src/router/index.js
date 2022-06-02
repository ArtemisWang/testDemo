/*
 * @Author: yating.wang
 * @Date: 2022-01-24 15:36:11
 * @LastEditTime: 2022-06-01 14:08:46
 * @LastEditors: yating.wang
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import About1 from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about1',
  //   name: 'About1',
  //   component: About1
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: 'subapp',
  routes
})

export default router
