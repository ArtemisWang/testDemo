/*
 * @Author: artemis
 * @Date: 2021-10-14 13:40:08
 * @LastEditTime: 2021-10-18 09:05:09
 * @LastEditors: artemis
 * @Description: 添加元素
 */
function prepend(arr, item) {
  let res = [item];
  arr.forEach(i => {
    res.push(i);
  });
  return res;
}