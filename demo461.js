/*
 * @Author: yating.wang
 * @Date: 2023-02-09 10:42:39
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-09 11:07:11
 * @Description: 
 */
var longestValidParentheses = function (s) {
  const map = { ')': '(', '}': '{', ']': '[' };
  const stack = [];
  const memo = new Map();
  let res = 0;
  let tmp = 0;
  for (let i = 0; i < s.length; i++) {
    let match = map[s[i]];
    let last = stack.pop();
    if (!match || match !== last) {
      last && stack.push(last);
      stack.push(s[i]);
      res = Math.max(res, tmp);
      tmp = 0;
    } else {
      tmp += 2;
      if (memo.has(i - tmp)) {
        tmp += memo.get(i - tmp);
      }
      memo.set(i, tmp);
    }
  }
  return Math.max(tmp, res);
};

console.log(longestValidParentheses('()(()'));