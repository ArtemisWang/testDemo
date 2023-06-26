/*
 * @Author: yating.wang
 * @Date: 2023-02-08 13:00:43
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-08 14:08:22
 * @Description: 
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = new Array(m).fill(0).map(x => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    if (text1[i] === text2[0] || i > 0 && dp[i - 1][0] === 1) {
      dp[i][0] = 1;
    }
  }
  for (let i = 1; i < n; i++) {
    if (text1[0] === text2[i] || dp[0][i - 1] === 1) {
      dp[0][i] = 1;
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      if (text1[i] === text2[j]) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1);
      }
    }
  }
  return dp[m - 1][n - 1];
};

console.log(longestCommonSubsequence('ace', 'ace'));