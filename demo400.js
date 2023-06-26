/*
 * @Author: yating.wang
 * @Date: 2022-12-07 13:15:08
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-07 13:29:11
 * @Description: 
 */
var numIslands = function (grid) {
  const m = grid.length, n = grid[0].length;
  const handler = (i, j) => {
    if (i >= m || j >= n || i < 0 || j < 0) return;
    if (grid[i][j] === '1') {
      grid[i][j] = '0';
      handler(i, j + 1);
      handler(i + 1, j);
      handler(i, j - 1);
      handler(i - 1, j);
    }
  };
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        res++;
        handler(i, j);
      }
    }
  }
  return res;
};
