/*
 * @Author: artemis
 * @Date: 2021-07-22 16:23:16
 * @LastEditTime: 2021-10-12 13:58:30
 * @LastEditors: artemis
 * @Description: bind的实现
 */
Function.prototype.myBind = function (that, ...args) {
  // 与call和apply的区别在于，bind不执行仅绑定，而call和apply需要执行
  let fn = this;
  return function () {
    return fn.apply(that, [...args, ...arguments]);
  };
};

function fx(...k) {
  console.log(this.i, this.j, ...k);
  return this.i + this.j + k[0];
}

console.log(fx.myBind({
  i: 1,
  j: 2
}, 5, 4, 3)(7, 6, 5));