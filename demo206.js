/*
 * @Author: artemis
 * @Date: 2021-10-18 10:26:25
 * @LastEditTime: 2021-10-18 10:31:23
 * @LastEditors: artemis
 * @Description: 查找重复元素
 */
function duplicates(arr) {
  let res = [], set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      res.push(arr[i]);
    } else {
      set.add(arr[i]);
    }
  }
  return [...new Set(res)];
}