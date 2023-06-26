/*
 * @Author: yating.wang
 * @Date: 2023-02-13 12:39:35
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-13 13:18:50
 * @Description: 
 */
var findDialogonalOrder = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  let i = 0, j = 0;
  const res = [mat[0][0]];
  let flg = 1;
  while (res.length < m * n) {
    if (flg && i - 1 < 0 && j + 1 < n) {
      j++;
      flg = 0;
    } else if (flg && j + 1 >= n && i + 1 < m) {
      i++;
      flg = 0;
    } else if (!flg && j - 1 < 0 && i + 1 < m) {
      i++;
      flg = 1;
    } else if (!flg && i + 1 >= m && j + 1 < n) {
      j++;
      flg = 1;
    }
    res.push(mat[i][j]);
    if (!flg) {
      while (i + 1 < m && j - 1 >= 0) {
        i++;
        j--;
        res.push(mat[i][j]);
      }
    } else {
      while (i - 1 >= 0 && j + 1 < n) {
        i--;
        j++;
        res.push(mat[i][j]);
      }
    }
  }
  return res;
};

console.log(findDialogonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));