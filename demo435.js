/*
 * @Author: yating.wang
 * @Date: 2023-01-15 15:19:38
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-01-16 20:29:59
 * @Description:  
 */
var lastRemaining = function (n, m) {
  if (n === 1) return 0;
  return (lastRemaining(n - 1, m) + m) % n;
};
var lastRemaining1 = function (n, m) {
  if (n === 1) return 0;
  let f = 0;
  for (let i = 2; i <= n; i++) {
    f = (f + m) % i;
  }
  return f;
};
console.log(lastRemaining1(5, 3));