/*
 * @Author: artemis
 * @Date: 2021-11-13 18:01:55
 * @LastEditTime: 2021-11-13 19:06:56
 * @LastEditors: artemis
 * @Description: 和为S的两个数字
 */
// 1. 设置左指针p1， 右指针p2， p1从左开始， p2从右开始
// 2. 如果两个值的和大于S， p2--
// 3. 如果两个值和小于S， p1++
// 4. 直至第一个等于S的两值返回
function findNumbersWithSum(arr, S) {
  if (arr.length <= 1) return [];
  let res = [];
  let p1 = 0, p2 = arr.length - 1;
  while (p1 < p2) {
    if (arr[p1] + arr[p2] === S) return [arr[p1], arr[p2]];
    if (arr[p1] + arr[p2] > S) {
      p2--;
    } else if (arr[p1] + arr[p2] < S) {
      p1++;
    }
  }
  return res;
}
console.log(findNumbersWithSum([2, 7, 11, 15], 9));