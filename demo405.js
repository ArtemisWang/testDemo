/*
 * @Author: yating.wang
 * @Date: 2022-12-07 15:03:12
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-07 15:37:37
 * @Description: 
 */
var spiralOrder = function (matrix) {
  const res = [];
  const m = matrix.length, n = matrix[0].length;
  const memo = new Array(m).fill(0).map(x => new Array(n).fill(0));
  let [i, j] = [0, 0];
  res.push(matrix[0][0]);
  memo[0][0] = 1;
  while (res.length < m * n) {
    // right
    while (j + 1 < n && !memo[i][j + 1]) {
      memo[i][j + 1] = 1;
      res.push(matrix[i][j + 1]);
      j++;
    }
    // down
    while (i + 1 < m && !memo[i + 1][j]) {
      memo[i + 1][j] = 1;
      res.push(matrix[i + 1][j]);
      i++;
    }
    // left
    while (j - 1 >= 0 && !memo[i][j - 1]) {
      memo[i][j - 1] = 1;
      res.push(matrix[i][j - 1]);
      j--;
    }
    // up
    while (i - 1 >= 0 && !memo[i - 1][j]) {
      memo[i - 1][j] = 1;
      res.push(matrix[i - 1][j]);
      i--;
    }
  }
  return res;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]));