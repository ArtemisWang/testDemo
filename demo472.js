/*
 * @Author: yating.wang
 * @Date: 2023-02-14 10:49:26
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-14 13:17:46
 * @Description: 
 */
var findMin = function (nums) {
  let res = nums[0];
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    res = Math.min(res, nums[mid], nums[right], nums[left]);
    if (nums[mid] > nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return res;
};

console.log(findMin([2, 3, 4, 5, 1]));