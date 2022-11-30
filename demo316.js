/*
 * @Author: artemis
 * @Date: 2021-11-22 19:12:47
 * @LastEditTime: 2021-11-23 11:28:49
 * @LastEditors: artemis
 * @Description: 岛屿数量
 */
// 广度优先搜索
var numIslands = function (grid) {
  let islandNum = 0;
  const queue = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        islandNum++;
        queue.push([i, j]);
        grid[i][j] = '0';
        while (queue.length) {
          let [x, y] = queue.shift();
          grid[x + 1] && grid[x + 1][y] === '1' && queue.push([x + 1, y]) && (grid[x + 1][y] = '0');
          grid[x][y + 1] === '1' && queue.push([x, y + 1]) && (grid[x][y + 1] = '0');
          grid[x - 1] && grid[x - 1][y] === '1' && queue.push([x - 1, y]) && (grid[x - 1][y] = '0');
          grid[x][y - 1] === '1' && queue.push([x, y - 1]) && (grid[x][y - 1] = '0');
        }
      }
    }
  }
  return islandNum;
};

// 深度优先搜索
var numIslands1 = function (grid) {
  const stack = [];
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        grid[i][j] = '0';
        stack.push([i, j]);
        while (stack.length) {
          let [x, y] = stack.pop();
          grid[x][y + 1] === '1' && stack.push([x, y + 1]) && (grid[x][y + 1] = '0');
          grid[x][y - 1] === '1' && stack.push([x, y - 1]) && (grid[x][y - 1] = '0');
          grid[x + 1] && grid[x + 1][y] === '1' && stack.push([x + 1, y]) && (grid[x + 1][y] = '0');
          grid[x - 1] && grid[x - 1][y] === '1' && stack.push([x - 1, y]) && (grid[x - 1][y] = '0');
        }
        res++;
      }
    }
  }
  return res;
};