/*
 * @Author: yating.wang
 * @Date: 2023-09-15 11:29:59
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-09-15 17:53:58
 * @Description:
 */
var productExpectSelf = function (nums) {
  const n = nums.length;
  const left = new Array(n).fill(1);
  const right = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    let j = n - 1 - i;
    left[i] = left[i - 1] * nums[i - 1];
    right[j] = right[j + 1] * nums[j + 1];
  }
  for (let i = 0; i < n; i++) {
    left[i] = left[i] * right[i];
  }
  return left;
};
