/*
 * @Author: artemis
 * @Date: 2021-11-15 14:03:06
 * @LastEditTime: 2021-11-15 14:08:18
 * @LastEditors: artemis
 * @Description: 数组中出现次数超过数组长度的一半
 */
function moreThanHalf(arr) {
  const hash = new Map();
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (hash.has(arr[i])) {
      let tmp = hash.get(arr[i]);
      if (tmp + 1 > len / 2) {
        return arr[i];
      }
      hash.set(arr[i], tmp + 1);
    } else {
      hash.set(arr[i], 1);
    }
  }
  return null;
}

console.log(moreThanHalf([1, 2, 3, 2, 2, 2, 5, 4, 2]));