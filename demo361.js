/*
 * @Author: yating.wang
 * @Date: 2021-12-25 12:32:36
 * @LastEditTime: 2021-12-25 12:58:34
 * @LastEditors: yating.wang
 * @Description: Object.defineProperty对数组监听
 */
const arr = [2, 3, 4, 5, 6, 7, 8, 9]

Object.keys(arr).forEach(key => {
  defineReactive(arr, key, arr[key])
})
function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      return val
    },
    set: function reactiveSetter(newVal) {
      // 注意：value一直在闭包中，此处设置完之后，再get时也是会得到最新的值
      if (newVal === val) return
      console.log('值变化啦！')
      val=newVal
    }
  })
}

arr.pop()
console.log(arr.pop(),arr)