/*
 * @Author: yating.wang
 * @Date: 2023-09-15 09:11:57
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-09-15 11:28:26
 * @Description: hIndex
 */
var hIndex = function (citations) {
  const n = citations.length;
  let last = n;
  let hash = new Map();
  let res = 0;
  for (let i = 0; i < n; i++) {
    const x = hash.get(citations[i]) || 0;
    hash.set(citations[i], x + 1);
  }
  for (let i = 1; i <= n; i++) {
    last = last - (hash.get(i - 1) || 0);
    if (last >= i) {
      res = Math.min(last, i);
    }
  }
  return res;
};

console.log(hIndex([3, 0, 6, 1, 5]));
