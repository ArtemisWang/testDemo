/*
 * @Author: yating.wang
 * @Date: 2021-10-19 13:36:39
 * @LastEditTime: 2021-10-19 13:40:21
 * @LastEditors: yating.wang
 * @Description: 使用apply调用函数
 */
function callIt(fn) {
  return fn.call(...arguments)
}