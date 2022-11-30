/*
 * @Author: artemis
 * @Date: 2021-11-10 09:15:04
 * @LastEditTime: 2021-11-10 09:29:16
 * @LastEditors: artemis
 * @Description: 二分查找
 */
function binarySearch(value, arr, start, end) {
  if (start > end) {
    return -1;
  }
  const mid = start + parseInt((end - start) / 2);
  if (value === arr[mid]) {
    return mid;
  } else if (value < arr[mid]) {
    return binarySearch(value, arr, start, mid - 1);
  } else {
    return binarySearch(vlaue, arr, mid + 1, end);
  }
}
var arr = [0, 1, 1, 1, 1, 1, 4, 6, 7, 8];
console.log(binarySearch(1, arr, 0, arr.length - 1));