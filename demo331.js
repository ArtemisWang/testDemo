/*
 * @Author: yating.wang
 * @Date: 2021-11-28 13:58:50
 * @LastEditTime: 2021-11-28 14:19:29
 * @LastEditors: yating.wang
 * @Description: 买卖股票的最佳时机含手续费
 */
// 当我们卖出一支股票时，我们就立即获得了以相同价格并且免除手续费买入一支股票的权利
var maxProfit = function(prices, fee) {
  let profit = 0
  let cost = prices[0] + fee
  for (let i = 1; i < prices.length; i++){
    if (prices[i] < cost - fee) {
      cost = prices[i] + fee
    } else if (prices[i] > cost) {
      profit += (prices[i] - cost)
      cost = prices[i]
    }
  }
  console.log(profit)
  return profit
};

maxProfit([1, 4, 3, 8, 4, 9] ,2)