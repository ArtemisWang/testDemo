/*
 * @Author: yating.wang
 * @Date: 2022-12-13 16:57:35
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-15 16:16:37
 * @Description: 
 */
// 动态规划
var findLength = function (nums1, nums2) {
  const m = nums1.length, n = nums2.length;
  const dp = new Array(m).fill(0).map(x => (new Array(n).fill(0)));
  let res = 0;
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (nums1[i] === nums2[j]) {
        if (i + 1 < m && j + 1 < n) {
          dp[i][j] = 1 + dp[i + 1][j + 1];
        } else {
          dp[i][j] = 1;
        }
        res = Math.max(res, dp[i][j]);
      }
    }
  }
  return res;
};