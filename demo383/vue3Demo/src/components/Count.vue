<!--
 * @Author: artemis
 * @Date: 2022-03-13 12:35:44
 * @LastEditTime: 2022-03-29 12:11:01
 * @LastEditors: artemis
 * @Description: 
-->

<template>
  <div>
    <h1 @click="add">{{ count }}</h1>
  </div>
</template>

<script setup>
// 在 <script setup> 标签内定义的变量和函数，都可以在模板中直接使用
import { ref } from "vue";
let count = ref(1); // ref 函数包裹数字，返回的 count 变量就是响应式的数据
let color = ref("#000");
function add() {
  count.value++; // 对于 ref 返回的响应式数据，我们需要修改 .value 才能生效
  color.value = "#" + Math.floor(Math.random() * 16 * 16 * 16).toString(16);
}
</script>

<style>
h1 {
  color: v-bind(color);
}
</style>