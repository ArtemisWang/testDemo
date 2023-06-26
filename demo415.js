/*
 * @Author: yating.wang
 * @Date: 2022-12-09 15:47:56
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-09 16:21:49
 * @Description: 
 */
var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(0).map(x => (new Array(n).fill(0)));
  dp[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      i - 1 >= 0 && (dp[i][j] += dp[i - 1][j]);
      j - 1 >= 0 && (dp[i][j] += dp[i][j - 1]);
    }
  }
  return dp[m - 1][n - 1];
};