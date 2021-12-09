/*
 * @Author: yating.wang
 * @Date: 2021-11-28 17:39:47
 * @LastEditTime: 2021-11-28 17:39:47
 * @LastEditors: yating.wang
 * @Description: 零钱兑换II
 */
var change = function(amount, coins) {
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin]
    }
  }
  return dp[amount]
};