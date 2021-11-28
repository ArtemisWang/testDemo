/*
 * @Author: yating.wang
 * @Date: 2021-11-23 13:45:02
 * @LastEditTime: 2021-11-23 13:50:46
 * @LastEditors: yating.wang
 * @Description: 和为sum的n个数
 */
function getAllCombin(arr, n, sum, tmp) {
  if (tmp.length === n) {
    if (tmp.reduce((t, c) => t + c, 0) === sum) {
      return tmp
    }
    return
  }
  for (let i = 0; i < arr.length; i++) {
    const current = arr.shift()
    tmp.push(current)
    const result = getAllCombin(arr, n, sum, tmp)
    if (result) return result
    tmp.pop()
    arr.push(current)
  }
}

const arr = [1, 2, 3, 4, 5, 6]
console.log(getAllCombin(arr, 3, 10, []))