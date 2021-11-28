/*
 * @Author: yating.wang
 * @Date: 2021-11-15 09:18:44
 * @LastEditTime: 2021-11-15 09:55:01
 * @LastEditors: yating.wang
 * @Description: 四数之和
 */
// 1. 排序数组
// 2. 使用nums[i] 和nums[j] 分别指向两个数字， 再使用左指针p1和右指针p2指向两个数字
// 3. 当四个数字和为target时， 将结果添加至结果集中； p1++，p2--
// 4. 当和大于target时， p2--
// 5. 当和小于target时， p1++
// 6. 每次移动指针或者是i和j都使指针移动到一个与之前值不同的位置为止
function fourSum(nums, target) {
  if (nums.length < 4) return []
  nums = nums.sort((a, b) => a - b)
  const res = []
  let left = 0,
    right = 0
  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i - 1] != null && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break;
      }
      if (nums[i] + nums[j] + nums[nums.length - 2] + nums[nums.length - 1] < target) {
        continue;
      }
      left = j + 1;
      right = nums.length - 1
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          while (nums[left + 1] === nums[left]) {
            left++
          }
          while (nums[right - 1] === nums[right]) {
            right--
          }
          left++
          right--
        } else if (sum > target) {
          right--
        } else {
          left++
        }
      }
    }
  }
  return res
}

console.log(fourSum([2, 2, 2, 2, 2], 8))