var maxAreaOfIsland = function (grid) {
  const m = grid.length, n = grid[0].length;
  let res = 0;
  const memo = new Array(m).fill(0).map(x => (new Array(n).fill(0)));
  const countArea = (i, j) => {
    if (i >= m || i < 0 || j >= n || j < 0 || memo[i][j]) return 0;
    memo[i][j] = 1;
    return grid[i][j] ? grid[i][j] + countArea(i + 1, j) + countArea(i, j + 1) + countArea(i - 1, j) + countArea(i, j - 1) : 0;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (memo[i][j]) continue;
      const area = countArea(i, j);
      res = Math.max(res, area);
    }
  }
  return res;
};