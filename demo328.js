/*
 * @Author: artemis
 * @Date: 2021-11-28 12:06:44
 * @LastEditTime: 2021-11-28 12:18:13
 * @LastEditors: artemis
 * @Description: 最长递增子序列
 */
var lengthOfLIS = function (nums) {
  if (nums.length <= 1) return nums.length;
  const dp = [1];
  let res = 1;
  for (let i = 1; i < nums.length; i++) {
    let max = 1;
    for (let j = i - 1; j >= 0; j--) {
      nums[j] < nums[i] && (max = Math.max(max, dp[j] + 1));
    }
    dp[i] = max;
    res = Math.max(res, max);
  }
  return res;
};