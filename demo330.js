/*
 * @Author: artemis
 * @Date: 2021-11-28 13:34:02
 * @LastEditTime: 2021-11-28 13:40:45
 * @LastEditors: artemis
 * @Description: 买卖股票的最佳时机II
 */
var maxProfit = function (prices) {
  let res = 0;
  let cost = prices[0];
  for (let i = 1; i < prices.length; i++) {
    cost < prices[i] && (res += (prices[i] - cost));
    cost = prices[i];
  }
  return res;
};

maxProfit([7, 1, 5, 3, 6, 4]);