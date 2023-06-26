/*
 * @Author: yating.wang
 * @Date: 2023-01-11 15:48:14
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-01-11 15:58:04
 * @Description: 
 */
var minPathSum = function (grid) {
  const m = grid.length, n = grid[0].length;
  const dp = new Array(m).fill(0).map(x => new Array(n).fill(Number.MAX_SAFE_INTEGER));
  dp[0][0] = grid[0][0];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      (i - 1 >= 0) && (dp[i][j] = Math.min(dp[i][j], dp[i - 1][j]));
      (j - 1 >= 0) && (dp[i][j] = Math.min(dp[i][j], dp[i][j - 1]));
      dp[i][j] += grid[i][j];
    }
  }
  return dp[m - 1][n - 1];
};