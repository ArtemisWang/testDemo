<!--
 * @Author: artemis
 * @Date: 2022-03-14 15:12:53
 * @LastEditTime: 2022-03-14 16:57:36
 * @LastEditors: artemis
 * @Description: 
-->

<template>
  <h1>你的评分是 {{ score }}</h1>
  <Rate v-model="score" theme="orange">课程评分：</Rate>
  <!-- <Rate v-model="score2">课程评分</Rate>
  <Rate v-model="score1">
    <img width="14" src="/favicon.ico" />
  </Rate> -->
</template>

<script setup>
import { ref } from "vue";
import Rate from "../components/Rate.vue";
let score = ref(3);
</script>