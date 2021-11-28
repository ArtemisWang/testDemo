/*
 * @Author: yating.wang
 * @Date: 2021-11-23 14:41:39
 * @LastEditTime: 2021-11-23 14:58:13
 * @LastEditors: yating.wang
 * @Description: 矩阵中的路径
 */
function hasPath(matrix, path, i = 0, j = 0, current = '') {
  if (!path.length) return true
  if(i<0||i>=matrix.length||j<0||j>=matrix[0].length||!matrix[i][j]) return
  let tmp = matrix[i][j]
  if (tmp === path[0]) {
    current += tmp
    matrix[i][j] = 0
    return hasPath(matrix, path.slice(1), i + 1, j, current) || hasPath(matrix, path.slice(1), i - 1, j, current) || hasPath(matrix, path.slice(1), i, j + 1, current) || hasPath(matrix, path.slice(1), i, j-1, current)
  }
  return false
}
// 起始函数
function toFindPath(matrix, path) {
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[0].length; j++){
      if(hasPath(matrix,path,i,j)) return true
    }
  }
  return false
}

console.log(toFindPath([
  ['a', 'b', 'c', 'e'],
  ['s', 'f', 'c', 's'],
  ['a', 'd', 'e', 'e']
], 'bcced'))