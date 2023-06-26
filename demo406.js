/*
 * @Author: yating.wang
 * @Date: 2022-12-07 15:39:59
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-07 16:01:05
 * @Description: 
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      }
    }
  }
  return dp[amount] < Infinity ? dp[amount] : -1;
};

console.log(coinChange([1, 2, 5], 11));