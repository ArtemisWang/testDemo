/*
 * @Author: yating.wang
 * @Date: 2022-12-09 14:26:03
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-09 14:39:29
 * @Description: 
 */
var trap = function (height) {
  const n = height.length;
  const left = new Array(n).fill(0), right = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      left[i] = height[i];
    } else {
      left[i] = Math.max(height[i], left[i - 1]);
    }
  }
  for (let j = n - 1; j >= 0; j--) {
    if (j === n - 1) {
      right[j] = height[j];
    } else {
      right[j] = Math.max(height[j], right[j + 1]);
    }
  }
  let area = 0;
  height.forEach((h, i) => {
    area += (Math.min(left[i], right[i]) - h);
  });
  return area;
};