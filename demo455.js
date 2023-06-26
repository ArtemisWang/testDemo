/*
 * @Author: yating.wang
 * @Date: 2023-02-07 11:09:43
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-07 12:27:57
 * @Description: 
 */
var maxProfit = function (prices) {
  let res = 0;
  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > buy) {
      res += (prices[i] - buy);
    }
    buy = prices[i];
  }
  return res;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));