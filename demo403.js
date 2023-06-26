/*
 * @Author: yating.wang
 * @Date: 2022-12-07 14:40:23
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-07 14:49:10
 * @Description: 
 */
var generateParenthesis = function (n) {
  if (!n) return [];
  if (n === 1) return ['()'];
  const res = [];
  const dp = generateParenthesis(n - 1);
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j <= dp[0].length; j++) {
      res.push(dp[i].slice(0, j) + '()' + dp[i].slice(j));
    }
  }
  return [...new Set(res)];
};

console.log(generateParenthesis(3));