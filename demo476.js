/*
 * @Author: yating.wang
 * @Date: 2023-02-15 09:45:25
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-15 10:00:46
 * @Description: 
 */
var canJump = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(0);
  dp[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    let j = 1;
    while (j <= nums[i]) {
      if (dp[i + j]) {
        dp[i] = 1;
        break;
      }
      j++;
    }
  }
  return dp[0] === 1;
};

console.log(canJump([3, 2, 1, 0, 4]));