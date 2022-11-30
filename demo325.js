/*
 * @Author: artemis
 * @Date: 2021-11-24 13:59:27
 * @LastEditTime: 2021-11-24 14:32:10
 * @LastEditors: artemis
 * @Description: 不同路径
 */
var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(0).map(item => (new Array(n).fill(1)));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (i >= 1 && j >= 1) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};

var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i >= 1 && j >= 1) {
        obstacleGrid[i][j] = obstacleGrid[i][j] ? 0 : (obstacleGrid[i][j - 1] + obstacleGrid[i - 1][j]);
      } else if (i >= 1) {
        obstacleGrid[i][0] = obstacleGrid[i][0] ? 0 : obstacleGrid[i - 1][0];
      } else if (j >= 1) {
        obstacleGrid[0][j] = obstacleGrid[0][j] ? 0 : obstacleGrid[0][j - 1];
      } else {
        if (obstacleGrid[0][0] === 1) return 0;

        obstacleGrid[0][0] = 1;
      }
    }
  }
  return obstacleGrid[m - 1][n - 1];
};
uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]);