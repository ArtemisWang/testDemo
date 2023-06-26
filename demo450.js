/*
 * @Author: yating.wang
 * @Date: 2023-02-06 13:47:55
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-06 14:32:25
 * @Description: 
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) return [];
  const m = matrix.length;
  const n = matrix[0].length;
  let i = 0;
  let j = 0;
  const memo = new Array(m).fill(0).map(x => new Array(n).fill(1));
  const res = [];
  res.push(matrix[i][j]);
  memo[i][j] = 0;
  while (res.length < m * n) {
    while (j + 1 < n && memo[i][j + 1]) {
      j++;
      res.push(matrix[i][j]);
      memo[i][j] = 0;
    }
    while (i + 1 < m && memo[i + 1][j]) {
      i++;
      res.push(matrix[i][j]);
      memo[i][j] = 0;
    }
    while (j - 1 >= 0 && memo[i][j - 1]) {
      j--;
      res.push(matrix[i][j]);
      memo[i][j] = 0;
    }
    while (i - 1 >= 0 && memo[i - 1][j]) {
      i--;
      res.push(matrix[i][j]);
      memo[i][j] = 0;
    }
  }
  return res;
};

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));