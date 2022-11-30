/*
 * @Author: artemis
 * @Date: 2021-10-19 13:49:37
 * @LastEditTime: 2021-10-19 14:03:03
 * @LastEditors: artemis
 * @Description: 柯里化
 */
function curryIt(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}