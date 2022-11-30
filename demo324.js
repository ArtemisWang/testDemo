/*
 * @Author: artemis
 * @Date: 2021-11-24 10:38:40
 * @LastEditTime: 2021-11-24 12:48:49
 * @LastEditors: artemis
 * @Description: 最小路径和
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const queue = [
    [0, 0]
  ];
  const flag = new Array(m).fill(0).map(x => new Array(n).fill(0));
  while (queue.length) {
    let [i, j] = queue.shift();
    const left = (grid[i - 1] && grid[i - 1][j]) ?? Number.MAX_VALUE;
    const top = grid[i][j - 1] ?? Number.MAX_VALUE;
    const min = Math.min(left, top);
    grid[i][j] = grid[i][j] + (min === Number.MAX_VALUE ? 0 : min);
    i + 1 < m && !flag[i + 1][j] && queue.push([i + 1, j]) && (flag[i + 1][j] = 1);
    j + 1 < n && !flag[i][j + 1] && queue.push([i, j + 1]) && (flag[i][j + 1] = 1);
  }
  return grid[m - 1][n - 1];
};
var minPathSum1 = function (grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  let rows = grid.length, columns = grid[0].length;
  const dp = new Array(rows).fill(0).map(x => new Array(columns));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < columns; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[rows - 1][columns - 1];
};
console.log(minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]));