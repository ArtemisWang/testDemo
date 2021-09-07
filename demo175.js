/*
 * @Author: yating.wang
 * @Date: 2021-07-22 16:12:57
 * @LastEditTime: 2021-07-22 16:19:29
 * @LastEditors: yating.wang
 * @Description: call的实现
 */

Function.prototype.myCall = function (that, ...args) {
  that.fn = this
  let res = that.fn(...args)
  delete that.fn
  return res
}

function fx(k) {
  console.log(this.i, this.j, k)
  return this.i + this.j + k
}

console.log(fx.myCall({
  i: 1,
  j: 2
}, 3))