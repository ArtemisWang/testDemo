/*
 * @Author: yating.wang
 * @Date: 2021-12-29 14:00:43
 * @LastEditTime: 2022 - 03 - 08 08: 04: 44
 * @LastEditors: yating.wang
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../components/Form.vue'
import Next from '../components/Next.vue'
import demo from '../views/demo373.vue'
import demo1 from '../views/demo382.vue'

Vue.use(VueRouter)

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
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/demo373',
    name: 'demo373',
    component: demo
  },
  {
    path: '/next',
    name: 'Next',
    component: Next
  }, {
    path: '/demo382',
    name: 'demo382',
    component: demo1
  },
]

const router = new VueRouter({
  routes
})

export default router
