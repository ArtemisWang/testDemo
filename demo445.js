/*
 * @Author: yating.wang
 * @Date: 2023-02-02 20:48:29
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-02 21:12:26
 * @Description: 
 */
var firstMissingPositive = function (nums) {
  let f = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      f = 1;
    }
    if (nums[i] <= 0 || nums[i] > nums.length) {
      nums[i] = 1;
    }
  }
  if (f === 0) return 1;
  for (let i = 0; i < nums.length; i++) {
    const tmp = nums[Math.abs(nums[i]) - 1];
    nums[Math.abs(nums[i]) - 1] = -Math.abs(tmp);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return nums.length + 1;
};