/*
 * @Author: yating.wang
 * @Date: 2022-12-07 13:38:48
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-07 13:43:18
 * @Description: 
 */
var search = function (nums, target) {
  let p1 = 0, p2 = nums.length - 1;
  while (p1 <= p2) {
    const mid = Math.floor((p1 + p2) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) {
      p2 = mid - 1;
    } else {
      p1 = mid + 1;
    }
  }
  return -1;
};