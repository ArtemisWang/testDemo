/*
 * @Author: yating.wang
 * @Date: 2021-11-24 15:22:07
 * @LastEditTime: 2021-11-24 18:38:39
 * @LastEditors: yating.wang
 * @Description: 买卖股票的最佳时机III
 */
var maxProfit1 = function(prices) {
  let profit = 0
  const handleProfit = (left,right) => {
    let min = prices[left],
      pro = 0
    for (let i = left; i <= right; i++) {
      min = Math.min(min, prices[i])
      pro = Math.max(pro, prices[i] - min)
    }
    return pro
  }
  const n=prices.length-1
  for (let i = 0; i <= n; i++){
    profit = Math.max(handleProfit(0,i)+handleProfit(i+1,n),profit)
  }
  return profit
};
var maxProfit = function(prices) {
  const n = prices.length
  let buy1 = prices[0], sell1 = 0
  let buy2 = prices[0], sell2 = 0
  for (let i = 1; i < n; i++){
    buy1 = Math.min(buy1, prices[i])
    sell1 = Math.max(sell1, prices[i] - buy1)
    buy2 = Math.min(buy2, prices[i]-sell1)
    sell2=Math.max(sell2,prices[i]-buy2)
  }
  return sell2
};
maxProfit([6, 1, 3, 2, 4, 7])