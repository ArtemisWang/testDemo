/*
 * @Author: yating.wang
 * @Date: 2021-10-19 15:28:46
 * @LastEditTime: 2021-10-19 15:29:47
 * @LastEditors: yating.wang
 * @Description: 模块
 */
function createModule(str1, str2) {
  return {
    greeting: str1,
    name: str2,
    sayIt: function () {
      return this.greeting + ', ' + this.name
    }
  }
}

let tmp = createModule('hi', 'ok')
console.log(tmp.sayIt())