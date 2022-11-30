/*
 * @Author: artemis
 * @Date: 2021-11-19 16:30:06
 * @LastEditTime: 2021-11-20 12:19:33
 * @LastEditors: artemis
 * @Description: 二维数组查找
 */
// 可以直接利用左下角数字开始查找：
//   大于： 上移 
//   小于： 右移
var findNumberIn2DArray = function (matrix, target) {
  let i = matrix.length - 1;
  let j = 0;
  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] === target) return true;
    if (matrix[i][j] > target) {
      i--;
    } else {
      j++;
    }
  }
  return false;
};
var findNumberIn2DArray2 = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0] ? matrix[0].length : 0;
  for (let i = 0; i < m; i++) {
    let left = 0,
      right = n - 1;
    while (left <= right) {
      let mid = Math.floor((right - left) / 2) + left;
      if (matrix[i][mid] < target) {
        left = mid + 1;
      } else if (matrix[i][mid] > target) {
        right = mid - 1;
      } else if (matrix[i][mid] === target) {
        return true;
      }
    }
  }
  return false;
};

console.log(findNumberIn2DArray([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 11));