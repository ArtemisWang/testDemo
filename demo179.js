/*
 * @Author: yating.wang
 * @Date: 2021-10-12 14:00:59
 * @LastEditTime: 2021-10-12 14:19:51
 * @LastEditors: yating.wang
 * @Description: bind的实现
 */
Function.prototype.myBind = function (that, ...args) {
  // 与call和apply的区别在于，bind不执行仅绑定，而call和apply需要执行
  that.fn = this
  return function(){
    return that.fn(...args,...arguments)
  }
}

function fx(...k) {
  console.log(this.i, this.j, ...k)
  return this.i + this.j + k[0]
}

console.log(fx.myBind({
  i: 1,
  j: 2
}, 5, 4, 3)(7, 6, 5))