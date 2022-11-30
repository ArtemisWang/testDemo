/*
 * @Author: artemis
 * @Date: 2021-10-20 10:05:10
 * @LastEditTime: 2021-10-20 10:44:47
 * @LastEditors: artemis
 * @Description: 属性遍历
 */
function iterate(obj) {
  let res = [];
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      res.push(`${key}: ${obj[key]}`);
    }
  }
  return res;
}


var C = function () {
  this.foo = 'bar';
  this.baz = 'bim';
};
C.prototype.bop = 'bip';
console.log(iterate(new C()));