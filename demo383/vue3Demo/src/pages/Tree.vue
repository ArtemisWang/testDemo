<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import { Edit } from "@element-plus/icons-vue";

const data = [
  {
    label: "一级 1",
    children: [
      {
        label: "二级 1-1",
        children: [
          {
            label: "三级 1-1-1"
          }
        ]
      }
    ]
  },
  {
    label: "一级 2",
    children: [
      {
        label: "二级 2-1",
        children: [
          {
            label: "三级 2-1-1"
          }
        ]
      },
      {
        label: "二级 2-2",
        children: [
          {
            label: "三级 2-2-1"
          }
        ]
      }
    ]
  },
  {
    label: "一级 3",
    children: [
      {
        label: "二级 3-1",
        children: [
          {
            label: "三级 3-1-1"
          }
        ]
      },
      {
        label: "二级 3-2",
        children: [
          {
            label: "三级 3-2-1"
          }
        ]
      }
    ]
  }
];

const defaultProps = {
  children: "children",
  label: "label"
};
const handleNodeClick = data => {
  console.log(data);
};
</script>

<template>
  <!--  <header>-->
  <!--    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />-->

  <!--    <div class="wrapper">-->
  <!--      <HelloWorld msg="You did it!" />-->
  <!--    </div>-->
  <!--  </header>-->
  <div>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
      <span slot-scope="{ node, data }">
        <i v-if="data.children" class="el-icon-folder"></i>
        <i v-else class="el-icon-collection-tag"></i>
        <span style="margin-left: 10px">{{ node.label }}</span>
      </span>
    </el-tree>
  </div>
  <!--  <main>-->
  <!--    <TheWelcome />-->
  <!--  </main>-->
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
