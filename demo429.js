/*
 * @Author: yating.wang
 * @Date: 2023-01-11 14:16:37
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-01-11 14:21:25
 * @Description: 
 */
var numWays = function (n) {
  const dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % (1E9 + 7);
  }
  return dp[n];
};