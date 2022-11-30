/*
 * @Author: artemis
 * @Date: 2021-10-18 09:15:31
 * @LastEditTime: 2021-10-18 09:17:02
 * @LastEditors: artemis
 * @Description: 删除数组第一个元素
 */
function curtail(arr) {
  let res = [];
  arr.forEach((item, index) => {
    if (index > 0) {
      res.push(item);
    }
  });
  return res;
}