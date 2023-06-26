/*
 * @Author: yating.wang
 * @Date: 2023-02-17 08:38:10
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-17 09:59:22
 * @Description: 
 */
var findPeakElement = function (nums) {
  const n = nums.length;
  let left = 0, right = n - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
