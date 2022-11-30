<!--
 * @Author: artemis
 * @Date: 2022-03-13 10:14:33
 * @LastEditTime: 2022-03-13 20:52:43
 * @LastEditors: artemis
 * @Description: 
-->

<template>
  <h1>这是首页</h1>
  <TodoList />
  <Count />
  <button @click="toggle">点击切换到全屏</button>
</template>
<script setup>
import TodoList from "../components/TodoList.vue";
import Count from "../components/Count.vue";
import { useFullscreen } from "@vueuse/core";
const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>
