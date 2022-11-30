/*
 * @Author: artemis
 * @Date: 2021-10-18 10:33:12
 * @LastEditTime: 2021-10-18 10:34:48
 * @LastEditors: artemis
 * @Description: 求二次方
 */
function square(arr) {
  let res = [];
  arr.forEach(item => {
    res.push(item * item);
  });
  return res;
}