<!--
 * @Author: yating.wang
 * @Date: 2021-12-29 14:00:43
 * @LastEditTime: 2022-03-16 09:54:56
 * @LastEditors: yating.wang
 * @Description: 
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/form">Form</router-link> |
      <router-link to="/next">Next</router-link> |
      <router-link to="/demo373">demo373-virtuallist</router-link> ｜
      <router-link to="/demo382">手写音乐播放器进度条</router-link> ｜
      <router-link to="/demo387">virtualList+lazyload</router-link>
    </div>
    <router-view />
  </div>
</template>

<script src="./iconfont.js"></script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
