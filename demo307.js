/*
 * @Author: artemis
 * @Date: 2021-11-18 13:33:32
 * @LastEditTime: 2021-11-18 13:45:30
 * @LastEditors: artemis
 * @Description: 选择排序
 */
function selectSort(arr) {
  // 每次循环选取一个最小的数字放到前面的有序序列中。
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
}
const arr = [9, 5, 4, 6, 3, 2, 8, 1, 7, 0];
selectSort(arr);
console.log(arr);