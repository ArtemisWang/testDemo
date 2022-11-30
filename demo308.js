/*
 * @Author: artemis
 * @Date: 2021-11-18 14:02:56
 * @LastEditTime: 2021-11-18 15:45:00
 * @LastEditors: artemis
 * @Description: 归并排序
 */
function mergeSort(arr, startIndex, endIndex) {
  if (startIndex >= endIndex) return;
  const mid = Math.floor((startIndex + endIndex) / 2);
  mergeSort(arr, startIndex, mid);
  mergeSort(arr, mid + 1, endIndex);
  merge(arr, startIndex, endIndex, mid);
}
function merge(arr, start, end, mid) {
  const tmp = [];
  let index = 0;
  let p1 = start, p2 = mid + 1;
  while (p1 <= mid && p2 <= end) {
    tmp[index++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }
  while (p1 <= mid) {
    tmp[index++] = arr[p1++];
  }
  while (p2 <= end) {
    tmp[index++] = arr[p2++];
  }
  index = 0;
  while (start <= end) {
    arr[start++] = tmp[index++];
  }
}

const arr = [9, 5, 4, 6, 3, 2, 8, 1, 7, 0];
mergeSort(arr, 0, 9);
console.log(arr);