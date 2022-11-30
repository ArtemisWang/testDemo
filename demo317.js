/*
 * @Author: artemis
 * @Date: 2021-11-23 08:14:15
 * @LastEditTime: 2021-11-23 08:30:58
 * @LastEditors: artemis
 * @Description: 路径总和
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  const stack = [[root, 0]];
  while (stack.length) {
    let [root, sum] = stack.pop();
    root.right && stack.push([root.right, sum + root.val]);
    root.left && stack.push([root.left, sum + root.val]);
    if (!root.right && !root.left && root.val + sum === targetSum) {
      return true;
    }
  }
  return false;
};