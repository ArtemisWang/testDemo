/*
 * @Author: yating.wang
 * @Date: 2023-02-15 09:23:35
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-15 09:43:53
 * @Description: 
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0]) return 0;
  const m = obstacleGrid.length, n = obstacleGrid[0].length;
  const memo = new Array(m).fill(0).map(_ => new Array(n).fill(0));
  memo[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!obstacleGrid[i][j]) {
        if (i >= 1) {
          memo[i][j] += memo[i - 1][j];
        }
        if (j >= 1) {
          memo[i][j] += memo[i][j - 1];
        }
      }
    }
  }
  return memo[m - 1][n - 1];
};