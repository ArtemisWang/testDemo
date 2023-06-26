/*
 * @Author: yating.wang
 * @Date: 2023-02-16 09:12:18
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-16 09:18:44
 * @Description: 
 */
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix || !matrix.length || !matrix[0].length) return false;
  const m = matrix.length;
  const n = matrix[0].length;
  let i = m - 1, j = 0;
  while (i >= 0 && j < n) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] < target) {
      j++;
    } else {
      i--;
    }
  }
  return false;
};