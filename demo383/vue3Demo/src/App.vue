<!--
 * @Author: artemis
 * @Date: 2022-03-13 09:43:15
 * @LastEditTime: 2022-03-14 20:14:37
 * @LastEditors: artemis
 * @Description: 
-->
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>


<template>
  <div>
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link> |
    <router-link to="/rate">评价</router-link> |
    <router-link to="/animation">动画效果</router-link>
  </div>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
