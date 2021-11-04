/*
 * @Author: yating.wang
 * @Date: 2021-07-22 16:12:57
 * @LastEditTime: 2021-10-12 13:57:35
 * @LastEditors: yating.wang
 * @Description: call的实现
 */

Function.prototype.myCall = function (that, ...args) {
  // that指需要指向的this
  // this指调用此方法的函数
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