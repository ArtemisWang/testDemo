/*
 * @Author: yating.wang
 * @Date: 2023-01-09 09:17:33
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-01-09 09:29:59
 * @Description: 最长公共前缀
 */
var longestCommonPrefix = function (strs) {
  let stack = strs[0];
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < stack.length; j++) {
      if (stack[j] !== strs[i][j]) {
        stack = stack.slice(0, j);
        break;
      }
    }
  }
  return stack;
};

console.log(longestCommonPrefix(['flight', 'flow', 'flower']));