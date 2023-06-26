/*
 * @Author: yating.wang
 * @Date: 2022-12-09 14:40:23
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-09 14:48:16
 * @Description: 
 */
var fib = function (n) {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % (1E9 + 7);
  }
  return dp[n];
};
console.log(fib(81));