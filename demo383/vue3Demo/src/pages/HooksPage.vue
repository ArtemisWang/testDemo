<template>
  <div>
    <button @click="showWh">显示页面宽高</button>
    <h1>页面的宽：{{ pageObj.width }}</h1>
    <h1>页面的高：{{ pageObj.height }}</h1>
  </div>
</template>
<script setup>
import { ref } from "vue";
import useShowHw from "../hooks/useShowHw.js";
let { pageObj, showWh } = useShowHw();
</script>