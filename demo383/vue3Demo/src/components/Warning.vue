<!--
 * @Author: artemis
 * @Date: 2022-03-14 20:25:59
 * @LastEditTime: 2022-03-14 21:40:58
 * @LastEditors: artemis
 * @Description: 
-->
<template>
  <transition name="modal">
    <div class="info-wrapper info" v-if="props.show">
      {{ props.message }}
    </div>
  </transition>
</template>
<script setup>
import { defineProps, watchEffect } from "vue";
let props = defineProps({
  show: Boolean,
  message: String,
});
console.log(props.show);
let emits = defineEmits(["update:show"]);
watchEffect(() => {
  if (props.show) {
    let timer = setTimeout(() => {
      emits("update:show", false);
      clearTimeout(timer);
    }, 3000);
  }
});
</script>
<style scoped>
.info-wrapper {
  position: fixed;
  top: 20px;
  left: calc(50vw - 120px);
  width: 200px;
}
.info {
  padding: 20px;
  color: white;
  background: #d88986;
}
.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-active {
  transition: all 0.3s ease;
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-leave-active {
  transition: all 0.3s ease;
}
</style>