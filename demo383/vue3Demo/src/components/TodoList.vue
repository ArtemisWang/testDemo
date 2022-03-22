<!--
 * @Author: yating.wang
 * @Date: 2022-03-13 12:35:44
 * @LastEditTime: 2022-03-14 21:41:31
 * @LastEditors: yating.wang
 * @Description: 
-->

<template>
  <div>
    <Warning v-model:show="showModal" message="请输入待办项后再添加！" />
    <input v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.done" />
        <span>{{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选：<input type="checkbox" v-model="allDone" />
      <div>已选：{{ all - active }} / {{ all }}</div>
    </div>
  </div>
</template>

<script setup>
// 在 <script setup> 标签内定义的变量和函数，都可以在模板中直接使用
import { ref, computed, watchEffect } from "vue";
import Warning from "./Warning.vue";
let { title, todos, addTodo, clear, active, all, allDone, showModal } =
  useTodos();
function useTodos() {
  let title = ref("");
  let todos = useStorage("todos", []);
  let showModal = ref(false);
  function addTodo() {
    if (!title.value) {
      showModal.value = true;
      return;
    }
    todos.value.push({
      title: title.value,
      done: false,
    });
    title.value = "";
  }
  function clear() {
    todos.value = todos.value.filter((v) => !v.done);
  }
  let active = computed(() => {
    return todos.value.filter((v) => !v.done).length;
  });
  let all = computed(() => todos.value.length);
  let allDone = computed({
    get: function () {
      return active.value === 0;
    },
    set: function (value) {
      todos.value.forEach((todo) => {
        todo.done = value;
      });
    },
  });
  return { title, todos, addTodo, clear, active, all, allDone, showModal };
}
function useStorage(name, initialValue = []) {
  let data = ref(JSON.parse(localStorage.getItem(name) || initialValue));
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value));
  });
  return data;
}
</script>

<style scoped>
</style>