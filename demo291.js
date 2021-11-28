/*
 * @Author: yating.wang
 * @Date: 2021-11-15 14:29:46
 * @LastEditTime: 2021-11-15 14:34:54
 * @LastEditors: yating.wang
 * @Description: 连续子数组的最大和
 */
// 1. 如果sum小于0， 则直接sum = arr[i]， 更新maxSum
// 2. 如果sum >= 0， sum += arr[i]， 更新maxSum
var maxSubArray = function(nums) {
  if(nums.length<=1) return nums[0]
  let sum = nums[0]
  let maxSum = sum
  for (let i = 1; i < nums.length; i++){
    if (sum < 0) {
      sum = nums[i]
    } else {
      sum+=nums[i]
    }
    maxSum = Math.max(maxSum,sum)
  }
  return maxSum
};
console.log(maxSubArray([6, -3, -2, 7, -15, 1, 2, 2]))