/*
 * @Author: yating.wang
 * @Date: 2021-12-10 19:45:10
 * @LastEditTime: 2021-12-13 08:18:46
 * @LastEditors: yating.wang
 * @Description: 汉诺塔问题
 */
var hanota = function(A, B, C) {
  const move = function(n, A, B, C) {
    if (n === 1) {
      C.push(A.pop())
      return
    }
    move(n - 1, A, C, B)
    C.push(A.pop())
    move(n-1, B, A, C)
  }
  const n = A.length
  move(n, A, B, C)
};