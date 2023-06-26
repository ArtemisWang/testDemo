/*
 * @Author: yating.wang
 * @Date: 2022-12-07 16:02:16
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-07 16:24:03
 * @Description: 
 */
var lengthOfLIS = function (nums) {
  let res = 1;
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(dp[i], res);
  }
  return res;
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));