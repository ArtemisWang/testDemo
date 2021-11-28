/*
 * @Author: yating.wang
 * @Date: 2021-11-23 21:13:06
 * @LastEditTime: 2021-11-24 09:12:30
 * @LastEditors: yating.wang
 * @Description: N皇后问题
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  if (!n) return [[]]
  const arr = new Array(n).fill('').map((_, i) => {
    let str = new Array(n).fill('.')
    str[i] = 'Q'
    return str.join('')
  })
  const res = []
  addQueenAnswer(res, arr)
  return res
};

function addQueenAnswer(res, arr, tmp = [], current = '') {
  if (current) {
    const x = tmp.length
    const y = current.indexOf('Q')
    let n = Math.max(x, y)
    while (n) {
      if (tmp[x-n]&&(tmp[x - n][y - n] === 'Q' || tmp[x - n][y + n] === 'Q')) {
        return 
      }
      n--
    }
    tmp.push(current)
    if (arr.length===0) {
      res.push(tmp)
    }
  }
  for (let i = 0; i < arr.length; i++){
    current = arr.shift()
    addQueenAnswer(res, arr, tmp.slice(), current)
    arr.push(current)
  }
}

solveNQueens(4)