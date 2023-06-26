/*
 * @Author: yating.wang
 * @Date: 2022-12-07 10:03:27
 * @LastEditors: yating.wang
 * @LastEditTime: 2022-12-07 10:56:06
 * @Description: 
 */
function longestPalindrome(s) {
  const n = s.length;
  if (n <= 1) return s;
  const dp = new Array(n).fill(0).map(x => (new Array(n).fill(0)));
  let maxLength = 1, left = 0, right = 0;
  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = true;
    if (i + 1 < n) dp[i][i + 1] = s[i] === s[i + 1];
    for (let j = i + 1; j < n; j++) {
      if (j === i + 1) {
        dp[i][i + 1] = s[i] === s[i + 1];
      } else {
        dp[i][j] = dp[i + 1][j - 1] && (s[i] === s[j]);
      }
      if (dp[i][j] && j - i + 1 > maxLength) {
        maxLength = j - i + 1;
        left = i;
        right = j;
      }
    }
  }
  return s.slice(left, right + 1);
}

const res = longestPalindrome('abbba');
console.log(res);