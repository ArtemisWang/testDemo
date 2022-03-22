<!--
 * @Author: yating.wang
 * @Date: 2022-03-14 20:13:32
 * @LastEditTime: 2022-03-14 20:41:50
 * @LastEditors: yating.wang
 * @Description: 
-->

<template>
  <button @click="toggle">click</button>
  <transition name="fade">
    <h1 v-if="showTitle">你好 Vue 3</h1>
  </transition>
</template>

<script setup>
import { ref } from "vue";
let showTitle = ref(true);
function toggle() {
  showTitle.value = !showTitle.value;
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>