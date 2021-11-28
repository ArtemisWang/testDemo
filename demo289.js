/*
 * @Author: yating.wang
 * @Date: 2021-11-15 10:53:41
 * @LastEditTime: 2021-11-15 13:48:32
 * @LastEditors: yating.wang
 * @Description: 顺时针打印矩阵
 */
// 设置四个变量， 左边界l = 0， 右边界R = len - 1， 上边界T = 1， 下边界B = len - 1
// 1. 从(0, 0) - > (0, 3)， 到达右边界； 转换方向， 向下， 右边界R--
// 2.(0, 3) - > (3, 3)， 到达下边界； 转换方向， 向左， 下边界B--
// 3.(3, 3) - > (3, 0)， 到达左边界； 转换方向， 向上， 左边界L++
// 4.(3, 0) - > (1, 0)， 到达上边界； 转换方向， 向右， 上边界T++

function printMatrix(matrix) {
  if (matrix.length === 1) {
    console.log(matrix[0][0])
    return
  }
  let l = 0, r = matrix[0].length - 1, t = 1, b = matrix.length - 1
  let i = 0, j = 0
  while (l <= r || t <= b) {
    while (j < r) {
      console.log(matrix[i][j++])
    }
    if (j === r) {
      console.log(matrix[i][j])
      i++
      r--
      if (i > b) return
    }
    while (i < b) {
      console.log(matrix[i++][j])
    }
    if (i === b) {
      console.log(matrix[i][j])
      j--
      b--
      if(j<l) return 
    }
    while (j > l) {
      console.log(matrix[i][j--])
    }
    if (j === l) {
      console.log(matrix[i][j])
      i--
      l++
      if(i<t) return
    }
    while (i > t) {
      console.log(matrix[i--][j])
    }
    if (i === t) {
      console.log(matrix[i][j])
      j++
      t++
      if(j>b) return 
    }
  }
}

printMatrix([[1,2,3],[5,6,7],[9,10,11]])