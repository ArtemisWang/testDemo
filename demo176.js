/*
 * @Author: yating.wang
 * @Date: 2021-07-22 16:20:01
 * @LastEditTime: 2021-07-27 13:42:59
 * @LastEditors: yating.wang
 * @Description: apply的实现
 */
Function.prototype.myApply = function (that, args) {
  that.fn = this
  let res = that.fn(...args)
  delete that.fn
  return res
}

function fx(...k) {
  console.log(this.i, this.j, ...k)
  return this.i + this.j + k[0]
}

console.log(fx.myApply({
  i: 1,
  j: 2
}, [5, 5, 5]))