/*
 * @Author: yating.wang
 * @Date: 2023-02-09 09:23:33
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-09 10:40:39
 * @Description: 
 */
var maxSubArray = function (nums) {
  let res = nums[0];
  let curSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curSum = nums[i] + Math.max(0, curSum);
    res = Math.max(res, curSum);
  }
  return res;
};

console.log(maxSubArray([-2, -1, -3]));