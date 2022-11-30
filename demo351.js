/*
 * @Author: artemis
 * @Date: 2021-12-13 14:26:43
 * @LastEditTime: 2021-12-13 14:57:59
 * @LastEditors: artemis
 * @Description: 最小差
 */

// 排序+双指针
var smallestDifference = function (a, b) {
  a = a.sort((x, y) => x - y);
  b = b.sort((x, y) => x - y);
  let i = 0,
    j = 0;
  let res = Math.abs(a[0] - b[0]);
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      while (i < a.length && a[i] < b[j]) {
        i++;
      }
      i < a.length && (res = Math.min(a[i] - b[j], res));
      a[i - 1] && (res = Math.min(b[j] - a[i - 1], res));
    } else if (b[j] < a[i]) {
      while (j < b.length && b[j] < a[i]) {
        j++;
      }
      j < b.length && (res = Math.min(b[j] - a[i], res));
      b[j - 1] && (res = Math.min(a[i] - b[j - 1], res));
    } else if (res === 0) return 0;
  }
  return res;
};

console.log(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]));