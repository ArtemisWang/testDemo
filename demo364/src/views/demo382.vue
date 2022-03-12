<!--
 * @Author: yating.wang
 * @Date: 2022-03-08 08:03:58
 * @LastEditTime: 2022-03-08 08:38:06
 * @LastEditors: yating.wang
 * @Description: 
-->
<template>
  <div>
    <div :style="{width}" class="process"></div>
    <button @click="start">开始</button>
    <button @click="stop">暂停</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
  components: {
  },
  // 定义属性
  data() {
    return {
      finish:0,
      timer: null
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
    width(){
      return this.finish*4+'px'
    }
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    start(){
      if(this.timer){
        return
      }else{
        this.timer=setInterval(()=>{
          if(this.finish<100){
            this.finish++
          }else{
            clearInterval(this.timer)
            this.timer=null
          }
        }, 16.6)
      }
    },
    stop(){
      clearInterval(this.timer)
      this.timer=null
    },
    reset(){
      clearInterval(this.timer)
      this.timer=null
      this.finish=0
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang='scss' scoped>
  .process {
    height: 100px;
    border: solid 1px;
    background: lightblue;
    margin: 100px;
  }
  
</style>