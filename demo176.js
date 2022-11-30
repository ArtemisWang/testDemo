/*
 * @Author: artemis
 * @Date: 2021-07-22 16:20:01
 * @LastEditTime: 2021-10-12 13:57:52
 * @LastEditors: artemis
 * @Description: apply的实现
 */
Function.prototype.myApply = function (that, args) {
  // that指需要指向的this
  // this指调用此方法的函数
  that.fn = this;
  let res = that.fn(...args);
  delete that.fn;
  return res;
};

function fx(...k) {
  console.log(this.i, this.j, ...k);
  return this.i + this.j + k[0];
}

console.log(fx.myApply({
  i: 1,
  j: 2
}, [5, 5, 5]));