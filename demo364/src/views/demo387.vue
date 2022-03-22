<!--
 * @Author: yating.wang
 * @Date: 2022-03-16 09:30:41
 * @LastEditTime: 2022-03-16 09:59:45
 * @LastEditors: yating.wang
 * @Description: 
-->
<template>
  <VirtualList :listData="partData" @load="handleLoad">1 </VirtualList>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import VirtualList from "../components/LazyLoadVirtualList";
export default {
  components: { VirtualList },
  // 定义属性
  data() {
    return {
      listData: new Array(100).fill(0).map((_, index) => {
        return {
          id: index,
          value: "item-" + index,
        };
      }),
      pageNo: 1,
    };
  },
  methods: {
    handleLoad() {
      this.pageNo++;
    },
  },
  computed: {
    partData() {
      return this.listData.slice(0, 5 * this.pageNo);
    },
  },
};
</script>

<style lang='scss' scoped>
</style>