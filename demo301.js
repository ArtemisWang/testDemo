/*
 * @Author: artemis
 * @Date: 2021-11-17 08:36:35
 * @LastEditTime: 2022-04-05 14:00:03
 * @LastEditors: artemis
 * @Description: 冒泡排序
 */
// 普通冒泡排序
function bubbleSort(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
    }
  }
  return arr;
}
// 优化版冒泡排序
function betterBubbleSort(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    let isSorted = true;
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        isSorted = false;
      }
    }
    if (isSorted) break;
  }
  return arr;
}

console.log(bubbleSort([9, 5, 4, 6, 3, 2, 8, 1, 7, 0]));
console.log(betterBubbleSort([9, 5, 4, 6, 3, 2, 8, 1, 7, 0]));