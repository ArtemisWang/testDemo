/*
 * @Author: yating.wang
 * @Date: 2021-11-22 08:49:20
 * @LastEditTime: 2021-11-22 09:45:34
 * @LastEditors: yating.wang
 * @Description: 旋转数组的最小数字
 */
function minNumberInRotateArray(arr) {
  let len = arr.length;
  if (len == 0) return 0;
  let low = 0,
    high = len - 1;
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] > arr[high]) {
      low = mid + 1;
    } else if (arr[mid] == arr[high]) {
      high = high - 1;
    } else {
      high = mid;
    }
  }

  return arr[low];
}

console.log(minNumberInRotateArray([1, 3, 5]))