/*
 * @Author: yating.wang
 * @Date: 2023-01-12 14:51:01
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-01-15 15:18:22
 * @Description: 
 */
// 先上下翻转，再主对角线翻转
var rotate = function (matrix) {
  const n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - i][j];
      matrix[n - 1 - i][j] = tmp;
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }
  console.log(matrix);
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));