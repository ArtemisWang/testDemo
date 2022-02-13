<template>
  <Form :props="props" @submit="handleSubmit"></Form>
</template>

<script>

export default {
  // 定义属性
  data() {
    return {
      props: {
        list: [
          {
            type: "INPUT",
            label: "活动名称",
            fieldName: "activityName",
            placeholder: "请输入活动名称",
            style: {
              width: "25%",
            },
          },
          {
            type: "INPUT",
            label: "审批人",
            fieldName: "approver",
            placeholder: "请输入审批人姓名",
          },
          {
            type: "SELECT",
            label: "活动区域",
            fieldName: "activityArea",
            placeholder: "请选择活动区域",
            options: {
              itemList: [
                {
                  text: "活动区域一",
                  value: "area1",
                },
                {
                  text: "活动区域二",
                  value: "area2",
                },
              ],
            },
          },
          {
            type: "RADIO",
            label: "活动范围",
            fieldName: "activityRange",
            options: {
              itemList: [
                {
                  text: "活动范围一",
                  value: "range1",
                },
                {
                  text: "活动范围二",
                  value: "range2",
                },
              ],
            },
          },
          {
            type: "CHECKBOX",
            label: "活动内容",
            fieldName: "activityContent",
            options: {
              itemList: [
                {
                  text: "王者荣耀",
                  value: "game1",
                },
                {
                  text: "英雄联盟",
                  value: "game2",
                },
                {
                  text: "狼人杀",
                  value: "game3",
                },
              ],
            },
          },
        ],
        isSubmitBtn: true,
        labelWidth: 80,
        initialValue: {
          activityName: "活动1",
          activityRange: "活动范围一",
          activityArea: "area2",
          activityContent: ["狼人杀"],
        },
        rules: {
          activityName: {
            required:true,
            message:'请输入活动名称',
            trigger: "blur",
          },
        },
      },
    }
  },
  methods: {
    handleSubmit(formObject){
      console.log(formObject)
    }
  },
}
</script>

<style lang='scss' scoped>
  
</style>