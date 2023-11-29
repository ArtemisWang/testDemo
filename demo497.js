/*
 * @Author: yating.wang
 * @Date: 2023-09-14 17:53:02
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-09-14 18:09:15
 * @Description: tiaoyueyouxi
 */
var canJump = function (nums) {
  const n = nums.length;
  let cur = n - 1;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] + i >= cur) {
      cur = i;
    }
  }
  return cur === 0;
};
