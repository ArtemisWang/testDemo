/*
 * @Author: artemis
 * @Date: 2021-11-15 08:31:05
 * @LastEditTime: 2021-11-15 09:28:05
 * @LastEditors: artemis
 * @Description: 三数之和
 */
// 1. 排序可以减少三元组重复， 每次遇到一个三元组满足条件就将窗口整体右移一步， 以p指向目前窗口的第一个值， 左指针指向p + 1， 右指针指向最后一个值
// 2. 当移动窗口时， 当目前三数和等于0， 加入结果集， 左右指针移动； 大于0， 右指针左移； 小于0， 左指针右移
// 3. 在指针移动时， 需要考虑将其移动至第一个不与之前的值一样的值的位置
function threeSum(nums) {
  if (nums.length < 3) return [];
  nums = nums.sort((a, b) => (a - b));
  let left = 1, right = nums.length - 1;
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] != null && nums[i] === nums[i - 1]) continue;
    left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (nums[left + 1] === nums[left]) {
          left++;
        }
        while (nums[right - 1] === nums[right]) {
          right--;
        }
        left++;
        right--;
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        while (nums[right - 1] === nums[right]) {
          right--;
        }
        right--;
      } else {
        while (nums[left + 1] === nums[left]) {
          left++;
        }
        left++;
      }
    }
  }
  return res;
}

console.log(threeSum([0, 0, 0, 0]));