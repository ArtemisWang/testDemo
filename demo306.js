/*
 * @Author: yating.wang
 * @Date: 2021-11-18 13:13:26
 * @LastEditTime: 2021-11-18 13:23:27
 * @LastEditors: yating.wang
 * @Description: 插入排序
 */
// 将左侧序列看成一个有序序列， 每次将一个数字插入该有序序列。
// 插入时， 从有序序列最右侧开始比较， 若比较的数较大， 后移一位。

function insertSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i + 1
    const tmp = arr[j]
    while (j >= 1 && tmp < arr[j - 1]) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = tmp
  }
}

const arr = [9, 5, 4, 6, 3, 2, 8, 1, 7, 0]
insertSort(arr)
console.log(arr)