<!--
 * @Author: yating.wang
 * @Date: 2022-03-13 10:14:42
 * @LastEditTime: 2022-03-13 20:55:33
 * @LastEditors: yating.wang
 * @Description: 
-->

<template>
  <!-- <h1>这是关于页面{{ `${x},${y}` }}</h1> -->
  <button @click="reset">重置icon</button>
</template>
<script setup>
import { onBeforeUnmount, nextTick } from "vue";
import { useMouse } from "../utils/mouse";
import useFavicon from "../utils/favicon";
// let { x, y } = useMouse();
let { favicon, reset } = useFavicon();
favicon.value = "geek.png";
onBeforeUnmount(() => {
  // reset();
  document.head.querySelectorAll('link[rel="icon"]').forEach((el) => {
    el.href = "favicon.ico";
  });
});
</script>
