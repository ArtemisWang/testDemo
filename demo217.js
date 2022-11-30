/*
 * @Author: artemis
 * @Date: 2021-10-19 09:15:13
 * @LastEditTime: 2021-10-19 09:17:38
 * @LastEditors: artemis
 * @Description: 使用闭包
 */
function makeClosures(arr, fn) {
  let res = [];
  arr.forEach(item => {
    res.push(fn.bind(fn, item));
  });
  return res;
}

console.log(makeClosures([1, 2, 3], function (x) {
  return x * x;
})[2]());