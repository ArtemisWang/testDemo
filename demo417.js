/*
 * @Author: yating.wang
 * @Date: 2022-12-09 16:51:09
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-13 16:55:18
 * @Description: 
 */
var minSubArrayLen = function (target, nums) {
  let left = 0, right = 0;
  let res = nums.length + 1, tmp = nums[0];
  while (right < nums.length) {
    if (nums[right] === target) return 1;
    if (tmp < target) {
      right++;
      if (right < nums.length) {
        tmp += nums[right];
      }
    } else if (tmp >= target) {
      res = Math.min(res, right - left + 1);
      tmp -= nums[left];
      left++;
    }
  }
  return res === nums.length + 1 ? 0 : res;
};


console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));