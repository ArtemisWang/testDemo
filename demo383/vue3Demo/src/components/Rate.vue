<!--
 * @Author: artemis
 * @Date: 2022-03-14 15:11:05
 * @LastEditTime: 2022-03-14 20:36:28
 * @LastEditors: artemis
 * @Description: 
-->
<template>
  <div :style="fontstyle">
    <slot></slot>
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontwidth">
        <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num" @click="onRate(num)">★</span>
      </span>
    </div>
  </div>
</template>
<script setup>
import { defineProps, computed, ref, defineEmits } from "vue";
let props = defineProps({
  modelValue: Number,
  theme: { type: String, default: "orange" },
});
let width = ref(props.modelValue);
function mouseOver(i) {
  width.value = i;
}
function mouseOut() {
  width.value = props.modelValue;
}
let emits = defineEmits(["update:modelValue"]);
function onRate(num) {
  emits("update:modelValue", num);
}
const fontwidth = computed(() => `width:${width.value}em;`);
const themeObj = {
  black: "#00",
  white: "#fff",
  red: "#f5222d",
  orange: "#fa541c",
  yellow: "#fadb14",
  green: "#73d13d",
  blue: "#40a9ff",
};
const fontstyle = computed(() => {
  return `color:${themeObj[props.theme]};`;
});
</script>
<style scoped>
.rate {
  position: relative;
  display: inline-block;
}
.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>