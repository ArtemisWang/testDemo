/*
 * @Author: artemis
 * @Date: 2021-12-05 15:11:33
 * @LastEditTime: 2021-12-05 15:11:34
 * @LastEditors: artemis
 * @Description: 闭包
 */
var num = 1;
var o = {
  num: 2,
  add: function () {
    this.num = 3;
    console.log('add', this);
    (function () {
      console.log('closure', this);
      console.log(this.num);
      this.num = 4;
    })();
    console.log(this.num);
  },
  sub: function () {
    console.log(this.num);
  }
};
o.add();
console.log(o.num);
console.log(num);
var sub = o.sub;
sub();