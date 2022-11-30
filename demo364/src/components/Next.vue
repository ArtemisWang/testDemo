<!--
 * @Author: artemis
 * @Date: 2022-02-25 22:24:23
 * @LastEditTime: 2022-02-25 22:33:15
 * @LastEditors: artemis
 * @Description: 
-->
<template>
  <div id="app">
    <span id='name' ref='name'>{{ name }}</span>
    <button @click='change'>change name</button>
    <div id='content'></div>
  </div>
</template>
<script>
export default {
  name: 'Next',
  data() {
    return {
      name: 'SHERlocked93',
    };
  },
  methods: {
    change() {
      const $name = this.$refs.name;
      this.$nextTick(() => console.log('setter前：' + $name.innerHTML));
      this.name = ' name改喽 ';
      console.log('同步方式：' + this.$refs.name.innerHTML);
      setTimeout(() => console.log("setTimeout方式：" + this.$refs.name.innerHTML));
      this.$nextTick(() => console.log('setter后：' + $name.innerHTML));
      this.$nextTick().then(() => console.log('Promise方式：' + $name.innerHTML));
    }
  }
}
</script>
