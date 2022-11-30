/*
 * @Author: artemis
 * @Date: 2021-11-22 10:25:16
 * @LastEditTime: 2021-11-22 10:29:26
 * @LastEditors: artemis
 * @Description: 平方根
 */
var mySqrt = function (x) {
  let left = 0,
    right = x;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};

console.log(mySqrt(4));