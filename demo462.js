/*
 * @Author: yating.wang
 * @Date: 2023-02-09 13:39:39
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-09 13:42:58
 * @Description: 
 */
var isPalindrome = function (x) {
  x += '';
  if (x.length < 2) return true;
  const n = x.length;
  for (let i = 0; i < n / 2; i++) {
    if (x[i] !== x[n - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome(121));