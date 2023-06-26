/*
 * @Author: yating.wang
 * @Date: 2023-02-20 09:31:26
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-20 10:16:18
 * @Description: 
 */
var maximalSquare = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        matrix[i][j] = 1;
        if (i > 0 && j > 0) {
          matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + 1;
        }
        res = Math.max(matrix[i][j] ** 2, res);
      } else {
        matrix[i][j] = 0;
      }
    }
  }
  return res;
};