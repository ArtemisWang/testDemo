<!--
 * @Author: artemis
 * @Date: 2022-01-25 12:34:23
 * @LastEditTime: 2022-01-25 13:55:03
 * @LastEditors: artemis
 * @Description: 
-->
<template>
  <div id="app">
    <div id="nav">
      <snow-button />
      <snow-input />
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
