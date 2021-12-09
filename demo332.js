/*
 * @Author: yating.wang
 * @Date: 2021-11-28 14:44:02
 * @LastEditTime: 2021-11-28 16:33:32
 * @LastEditors: yating.wang
 * @Description: 零钱兑换
 */
var coinChange = function(coins, amount) {
  const dp = [0]
  for (let i = 1; i <= amount; i++) {
    let tmp = amount
    for (let coin of coins) {
      i>=coin&&(tmp = Math.min(tmp, dp[i - coin]))
    }
    dp[i] = tmp + 1
  }
  console.log(dp[amount])
  return dp[amount] > amount ? -1 : dp[amount]
};


coinChange([186, 419, 83, 408] ,6249)