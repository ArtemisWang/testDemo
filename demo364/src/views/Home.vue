<!--
 * @Author: yating.wang
 * @Date: 2021-12-29 14:00:43
 * @LastEditTime: 2022-01-10 12:15:38
 * @LastEditors: yating.wang
 * @Description: 
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-delete"></use>
    </svg>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
