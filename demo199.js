/*
 * @Author: artemis
 * @Date: 2021-10-14 13:33:17
 * @LastEditTime: 2021-10-14 13:35:40
 * @LastEditors: artemis
 * @Description: 添加元素
 */
function append(arr, item) {
  let res = [];
  arr.map((item) => {
    res.push(item);
  });
  res.push(item);
  return res;
}