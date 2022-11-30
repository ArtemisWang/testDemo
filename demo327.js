/*
 * @Author: artemis
 * @Date: 2021-11-28 10:25:40
 * @LastEditTime: 2021-11-28 11:13:12
 * @LastEditors: artemis
 * @Description: 乘积最大子数组
 */
var maxProduct = function (nums) {
  if (nums.length <= 1) return nums[0] || 0;
  let max = nums[0];
  let yes = nums[0],
    no = nums[0];
  for (let i = 1; i < nums.length; i++) {
    yes = Math.max(yes, 1) * nums[i];
    no = Math.abs(no) >= 1 ? no * nums[i] : nums[i];
    no > yes && ([yes, no] = [no, yes]);
    max = Math.max(max, Math.max(yes, no));
  }
  console.log(max);
  return max;
};

maxProduct([2, 3, -2, 4]);