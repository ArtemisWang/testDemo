/*
 * @Author: artemis
 * @Date: 2021-12-05 20:10:53
 * @LastEditTime: 2021-12-07 16:15:43
 * @LastEditors: artemis
 * @Description: Generator-斐波那契
 */
function* fib(max) {
  var a = 0,
    b = 1,
    n = 0;
  while (n < max) {
    yield a;
    [a, b] = [b, a + b];
    n++;
  }
  return;
}
// 调用
for (var x of fib(10)) {
  console.log(x); // 依次输出0, 1, 1, 2, 3, ...
}
const f = fib(5);
console.log(f.next(), f.next(), f.next(), f.next(), f.next(), f.next());
var counter = 3;


