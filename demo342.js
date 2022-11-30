/*
 * @Author: artemis
 * @Date: 2021-12-05 19:42:33
 * @LastEditTime: 2021-12-05 20:00:49
 * @LastEditors: artemis
 * @Description: 作用域
 */
// let a = 20
// var a = 10

// var b = 20
// if (b === 20) {
//   let b = 30
//   console.log(b)
// }
// console.log(b)

// console.log(c)
// var c = 30

const d = Object.preventExtensions({
  a: 1,
  b: 2
});
d.c = 3;
delete d.a;
d.b = 4;
console.log(d);