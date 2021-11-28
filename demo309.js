/*
 * @Author: yating.wang
 * @Date: 2021-11-19 09:21:09
 * @LastEditTime: 2021-11-19 10:00:33
 * @LastEditors: yating.wang
 * @Description: 希尔排序
 */
function shellSort(arr) {
  // 希尔排序的增量
  let d = arr.length
  while (d > 1) {
    // 使用希尔增量的方式，即每次折半
    d = parseInt(d / 2)
    for (let i = 0; i < d; i++) {
      for (let j = i + d; j < arr.length; j += d) {
        let mark = arr[j]
        let p = j
        while (p >= d && arr[p - d] > mark) {
          arr[p] = arr[p - d]
          p -= d
        }
        arr[p] = mark
      }
    }
  }
}

const arr = [9, 5, 4, 6, 3, 2, 8, 1, 7, 0]
shellSort(arr)
console.log(arr)