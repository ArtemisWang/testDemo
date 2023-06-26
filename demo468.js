/*
 * @Author: yating.wang
 * @Date: 2023-02-13 13:42:07
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-13 13:54:15
 * @Description: 
 */
var kthLargest = function (root, k) {
  const stack = [];
  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.right;
    } else {
      root = stack.pop();
      k--;
      if (k === 0) return root.val;
      root = root.left;
    }
  }
  return null;
};